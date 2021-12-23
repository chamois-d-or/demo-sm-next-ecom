const domain = process.env.SHOPIFY_DOMAIN
const storefrontAccessToken = process.env.STOREFRONT_ACCESS_TOKEN
const fetch = require('node-fetch')

async function ShopifyData(query) {
  const URL = `https://${domain}/api/2021-10/graphql.json`

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query })
  }

  try {
    const data = await fetch(URL, options).then(response => {
      return response.json()
    })

    //console.log(data.data.products.edges[0].node)
    //console.log(data.data.products.edges[0].node.images.edges[0].node)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export default async function getAllProducts(categoryId) {
  const query = `
  {
    collectionByHandle(handle: "`+categoryId+`") {
      products(first: 10) {
        edges {
          node {
            id
            description
            title
            handle
            priceRange{
              minVariantPrice{
                amount
              }
            }
            images(first: 5) {
              edges {
                node {
                  originalSrc
                }
              }
            }
          }
        }
      }
    }
  }
`

  const response = await ShopifyData(query)
  //console.log(response)

  const allProducts = response.data.collectionByHandle.products.edges ? response.data.collectionByHandle.products.edges : []

  return allProducts
}

export async function getProductData(productHandle) {
  const query = `
  {
    product(handle: "`+productHandle+`") {
      id
      description
      title
      priceRange{
        minVariantPrice{
          amount
        }
      }
      images(first: 5) {
        edges {
          node {
            originalSrc
          }
        }
      }
      variants(first: 1) {
        edges{
          node{
            id
            selectedOptions{
              name
              value
            }
          }
        }
      }
    }
  }
`

  const response = await ShopifyData(query)
  //console.log(response)

  const productData = response.data.product ? response.data.product : []

  return productData
}