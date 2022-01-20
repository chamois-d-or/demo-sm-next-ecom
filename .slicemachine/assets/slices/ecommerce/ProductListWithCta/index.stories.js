import MyComponent from '../../../../../slices/ecommerce/ProductListWithCta';

export default {
  title: 'slices/ecommerce/ProductListWithCta'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"product_list_with_cta","items":[{"productLink":{"link_type":"Web","url":"https://prismic.io"}},{"productLink":{"link_type":"Web","url":"https://slicemachine.dev"}},{"productLink":{"link_type":"Web","url":"https://slicemachine.dev"}},{"productLink":{"link_type":"Web","url":"https://prismic.io"}},{"productLink":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"title":[{"type":"heading1","text":"Scale plug-and-play functionalities","spans":[]}],"description":[{"type":"paragraph","text":"Quis reprehenderit et adipisicing proident tempor aliqua ut nisi exercitation incididunt reprehenderit. Dolore exercitation exercitation occaecat consectetur sunt voluptate.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _CustomProducts = () => <MyComponent slice={{"variation":"customProducts","name":"Custom Products","slice_type":"product_list_with_cta","items":[{"productLink":{"link_type":"Web","url":"http://twitter.com"}},{"productLink":{"link_type":"Web","url":"http://google.com"}},{"productLink":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"title":[{"type":"heading1","text":"Mesh real-time functionalities","spans":[]}],"description":[{"type":"paragraph","text":"Tempor tempor commodo commodo nisi et.","spans":[]}]},"id":"_CustomProducts"}} />
_CustomProducts.storyName = 'Custom Products'
