import MyComponent from '../../../../../slices/ecommerce/ProductListWithCta';

export default {
  title: 'slices/ecommerce/ProductListWithCta'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"product_list_with_cta","items":[{"productLink":{"link_type":"Web","url":"http://twitter.com"}},{"productLink":{"link_type":"Web","url":"http://google.com"}},{"productLink":{"link_type":"Web","url":"https://slicemachine.dev"}},{"productLink":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"title":[{"type":"heading1","text":"E-enable wireless niches","spans":[]}],"description":[{"type":"paragraph","text":"Aliquip velit do voluptate incididunt occaecat adipisicing excepteur nostrud deserunt culpa cillum culpa eiusmod qui adipisicing. Sunt reprehenderit in nostrud esse est tempor dolor magna velit ipsum sunt. Elit duis commodo tempor et aliquip est aute sunt exercitation dolor irure veniam.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _CustomProducts = () => <MyComponent slice={{"variation":"customProducts","name":"Custom Products","slice_type":"product_list_with_cta","items":[{"productLink":{"link_type":"Web","url":"https://slicemachine.dev"}},{"productLink":{"link_type":"Web","url":"http://google.com"}},{"productLink":{"link_type":"Web","url":"https://prismic.io"}},{"productLink":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"title":[{"type":"heading1","text":"Orchestrate end-to-end functionalities","spans":[]}],"description":[{"type":"paragraph","text":"Anim et anim ut est. Esse non dolor eu culpa dolor voluptate duis qui ex consectetur voluptate.","spans":[]}]},"id":"_CustomProducts"}} />
_CustomProducts.storyName = 'Custom Products'
