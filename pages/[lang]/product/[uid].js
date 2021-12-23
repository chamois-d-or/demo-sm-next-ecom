import { Client } from "../../../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";

import resolver from "../../../sm-resolver.js";
import Layout from "../../../components/Layout";
import useUpdatePreviewRef from '../../../tools/useUpdatePreviewRef' //import from where you store this file

import Custom404 from "../../404";
import { useEffect } from 'react'

import { useRouter } from 'next/router'
import Loader from './../../../components/Loader/Loader.js'
import {getProductData} from "../../../lib/shopify";

const ProductPage = (props) => {
  const router = useRouter()
  if (router.isFallback) {
    return <Loader />
  }
  if(!props.id){
    return <Custom404 />
  }
  // if(!props.uid){
    useUpdateToolbarDocs(productPageToolbarDocs(props.uid, props.previewData.ref, props.lang), [props])
    useUpdatePreviewRef(props.previewData.ref, props.id)
  // }
  return (
    <Layout menu={props.menu} footer={props.footer} categories={props.categories}  lang={props.lang} altLangs={props.alternate_languages}>
      <SliceZone {...props} resolver={resolver} />
    </Layout>
  );
};

// Fetch content from prismic
// export const getStaticProps = useGetStaticProps({
//   client: Client(),
//   queryType: 'repeat',
//   type: 'product-page',
//   apiParams({ params }) {
//     return {
//       uid: params.uid,
//       lang: params.lang
//     }
//   }
// });

export async function getStaticProps(context) {
  const previewRef = context.preview ? context.previewData.ref : null;
  const document = await Client().getByUID('product-page', context.params.uid, {lang: context.params.lang, ref: previewRef}) // || {id: "fallback", data:{}}
  
  if (!document) {
  //if (!document.data.slices) {
    // const productData = await getProductData(context.params.uid) || null;
    // console.log(productData)
    // if(!productData){
      return {
        notFound: true,
      }
    //}
    //querying data from Shopify, in order to have a default template for Shopify info on top of which we add Prismic data
    // const fallBackSlice = {
    //   slice_type: 'product_overview_with_image_grid',
    //   slice_label: null,
    //   version: 'sktwi1xtmkfgx8626',
    //   variation: 'default-slice',
    //   primary: {
    //     product: {
    //       id: productData.id,
    //       name: productData.title,
    //       category: 'Cameras',
    //       subcategory: 'Compact',
    //       color: productData.variants.edges[0].node.selectedOptions[0].value,
    //       price: productData.priceRange.minVariantPrice.amount,
    //       href: '#',
    //       imageSrc: productData.images.edges[0].node.originalSrc,
    //       imageAlt: productData.title
    //     },
    //     description: [ {type: 'paragraph',text:productData.description,spans:[]} ],
    //     highlights: [ {type: 'paragraph',text:"",spans:[]} ],
    //     details: [ {type: 'paragraph',text:"",spans:[]} ]
    //   },
    //   items: [ {} ]
    // };
    // document.data.slices=[fallBackSlice]
    // document.lang=context.params.lang
    // document.alternate_languages=[]
  }
  //console.log(document)
  return {
    props:{
      ...document,
      previewData: context.previewData || {},
      preview: context.preview || {},
      slices: document.data.slices
    }, // will be passed to the page component as props
  }
}

//this needs to be modified to rely on shopify and not on Prismic
export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  type: 'product-page',
  getStaticPathsParams: {
    fallback: true
  },
  formatPath: (prismicDocument) => {
    return {
      params: {
        uid: prismicDocument.uid,
        lang: prismicDocument.lang
      }
    }
  }
});

const useUpdateToolbarDocs = (docQuery, deps) => {
  useEffect(() => {
    docQuery()
  }, deps)
}

const productPageToolbarDocs = (uid, ref = null, lang = null) => (async () => {
  const pageDocsPromise = getProductPageDocs(uid, ref, lang)
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

const getProductPageDocs = asyncHandler(async (uid, ref = null, lang = null) => {
  const page = await getDocumentByUID('product-page', uid, { ref , fetch: 'page.slices', lang }) || null //, fetch: 'page.uid' 

  return { page }
})

const getDocumentByUID = asyncHandler(async (type, uid, options = {}) => (
  Client().getByUID(type, uid, options)
))

export default ProductPage;
