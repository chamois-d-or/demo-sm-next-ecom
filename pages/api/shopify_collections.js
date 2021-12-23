export default async (req, res) => {
    
    try {
        const data = await getAllCollections()
        //console.log(data)
        //const data = await response

        const responseResetPrismic = await fetch(
            "https://if-api.prismic.io/if/write/demo-sm-next-ecom--categories/reset",
            {
            method: "post",
            headers: {
                "Authorization":
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwcmlzbWljLmlvIiwiaWF0IjoxNjM5NjYzODI4OTI0LCJjYXRhbG9nSWQiOiJkZW1vLXNtLW5leHQtZWNvbS0tY2F0ZWdvcmllcyJ9.2U1w5jRcqsPQgM0tyQ2zxxVl_eOwElmAAKrlM0tEwrI",
                "Content-Type": "application/json"
            }
            }
        );

        const responsePrismic = await fetch(
            "https://if-api.prismic.io/if/write/demo-sm-next-ecom--categories",
            {
            method: "post",
            headers: {
                "Authorization":
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwcmlzbWljLmlvIiwiaWF0IjoxNjM5NjYzODI4OTI0LCJjYXRhbG9nSWQiOiJkZW1vLXNtLW5leHQtZWNvbS0tY2F0ZWdvcmllcyJ9.2U1w5jRcqsPQgM0tyQ2zxxVl_eOwElmAAKrlM0tEwrI",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(functionmapCategories((data)))
            }
        );

        //console.log(JSON.stringify(functionmapCategories((data))))
        //console.log(responsePrismic)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'max-age=180000');
        res.end(JSON.stringify(functionmapCategories((data))));
    }
    
    catch (error) {
        console.log(error)
        res.json(error);
        res.status(405).end();
    }
};

function functionmapCategories(categories){
    return categories.map((category)=>{
        return{
            id:category.node.handle,
            title:category.node.title || "",
            description:category.node.description || "",
            image_url:category.node.image.originalSrc,
            last_update:Date.now(),
            blob:{
                id:category.node.handle,
            },
        }
    })
}

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

    return data
  } catch (error) {
    throw new Error(error)
  }
}

async function getAllCollections() {
  const query = `
  {
	collections(first:20) {
		edges{
      node{
        handle
        title
        description
        image {
          originalSrc
        }
      }
    }
	}
}
`

  const response = await ShopifyData(query)
  
  const allProducts = response.data.collections.edges ? response.data.collections.edges : []

  return allProducts
}