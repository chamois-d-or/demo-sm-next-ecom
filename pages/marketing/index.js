import { Client } from "../../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";

import resolver from "../../sm-resolver.js";
import Layout from "../../components/Layout";
import useUpdatePreviewRef from '../../tools/useUpdatePreviewRef' //import from where you store this file

import { useEffect } from 'react'
import LayoutMarketing from "../../components/LayoutMarketing";

const Page = (props) => {
  useUpdatePreviewRef(props.previewData.ref, props.id)
  useUpdateToolbarDocs(homepageToolbarDocs(props.uid, props.previewData.ref), [props])
  return (
    <LayoutMarketing menuMarketing={props.menuMarketing} footerMarketing={props.footerMarketing} categories={props.categories}>
      <SliceZone {...props} resolver={resolver} />
    </LayoutMarketing>
  );
};

//This query gets related articles for blog_section_three_column_cards slices
const mySuperGraphQuery = `{
  marketing-homepage{
   slices{
    ...onblog_section_three_column_cards{
     variation{
      ...ondefault-slice{
       items{
        article{
         ...onblog-page{
          title
          preTitle
          description
         }
        }
       }
      }
     }
    }
   }
  }
 }
 `

// Fetch content from prismic
export async function getStaticProps(context) {
  const previewRef = context.preview ? context.previewData.ref : null;
  const document = await getDocumentByUID('marketing-homepage', { ref: previewRef })
  const linkedDocument = await getDocumentByUID('marketing-homepage', {ref: previewRef, 'graphQuery': mySuperGraphQuery})
    if (!document) {
      return {
        notFound: true,
      }
    }
    if (linkedDocument) {
      const linkedArticles = []
      linkedDocument.data.slices.map((slice,sliceIndex) => {
        linkedArticles.unshift([])
        slice.items.map((link,linkIndex) => {
          if(link.article.data === undefined){
            linkedArticles[sliceIndex][linkIndex]=null;
          }
          else{
            linkedArticles[sliceIndex][linkIndex]=link.article.data
          }
        })
      })
      let articlesListIndex = 0;
      document.data.slices.map((slice) =>{
        if(slice.slice_type==='blog_section_three_column_cards'){
          slice.items.map((item,index) => {
            if(linkedArticles[articlesListIndex][index]){
              slice.items[index].title=linkedArticles[articlesListIndex][index].title[0].text
              slice.items[index].category=linkedArticles[articlesListIndex][index].preTitle[0].text
              slice.items[index].description=linkedArticles[articlesListIndex][index].description[0].text
            }
          })
          articlesListIndex ++
        }
      })
    }
    return {
      props:{
        ...document,
        previewData: context.previewData || {},
        preview: context.preview || {},
        slices: document.data.slices
      }, // will be passed to the page component as props
    }
}

// export const getStaticProps = useGetStaticProps({
//   client: Client(),
//   type: 'marketing-homepage', 
//   queryType: 'single',
// });

const useUpdateToolbarDocs = (docQuery, deps) => {
  useEffect(() => {
    docQuery()
  }, deps)
}

const homepageToolbarDocs = (uid, ref = null) => (async () => {
  const pageDocsPromise = getHomepageDocs(ref)
  //const layoutPromise = getLayout(ref, { fetch: 'layout.prismic_display_name' })
  //const prismicDocs = await Promise.all([pageDocsPromise, layoutPromise])
  const prismicDocs = await Promise.all([pageDocsPromise])
  const [{page}] = prismicDocs

  return {
    page
  }
})

const asyncHandler = (cb) => (
  async (...args) => {
    try {
      return await cb(...args)
    } catch (error) {
      console.log(error)
      return null
    }
  }
)

const getHomepageDocs = asyncHandler(async (ref = null) => {
  const page = await getDocumentByUID('marketing-homepage', { ref }) || null // , fetch: 'homepage.slices' 
  
  return { page }
})

const getDocumentByUID = asyncHandler(async (type, options = {}) => (
  Client().getSingle(type, options)
))

export default Page;
