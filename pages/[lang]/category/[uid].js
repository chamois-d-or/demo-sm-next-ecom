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

//import shopify data
import getAllProducts from "../../../lib/shopify";
import ProductListingLayout from "../../../components/ProductListingLayout";

const CategoryPage = (props) => {
  const router = useRouter()
  if (router.isFallback) {
    return <Loader />
  }
  if(!props.id){
    return <Custom404 />
  }
  useUpdateToolbarDocs(productPageToolbarDocs(props.uid, props.previewData.ref, props.lang), [props])
  useUpdatePreviewRef(props.previewData.ref, props.id)
  return (
    <Layout menu={props.menu} footer={props.footer} categories={props.categories}  lang={props.lang} altLangs={props.alternate_languages}>
      <ProductListingLayout productList={props.productList}>
        <SliceZone {...props} resolver={resolver} />
      </ProductListingLayout>
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
  const document = await Client().getByUID('category-page', context.params.uid, {lang: context.params.lang, ref: previewRef})
  if (!document) {
    return {
      notFound: true,
    }
  }
  //const categoryId = await document.data.category.id
  let productList = null;
  if (document.data.category){
    productList = await getAllProducts(document.data.category.id) || null;
    //console.log(productList)
  }
    return {
      props:{
        ...document,
        previewData: context.previewData || {},
        preview: context.preview || {},
        slices: document.data.slices,
        productList: productList
      }, // will be passed to the page component as props
    }
}

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  type: 'category-page',
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
  const page = await getDocumentByUID('category-page', uid, { ref , fetch: 'page.slices', lang }) || null //, fetch: 'page.uid' 

  return { page }
})

const getDocumentByUID = asyncHandler(async (type, uid, options = {}) => (
  Client().getByUID(type, uid, options)
))

export default CategoryPage;
