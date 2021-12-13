import MyComponent from '../../../../../slices/ecommerce/ProductListWithCta';

export default {
  title: 'slices/ecommerce/ProductListWithCta'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"product_list_with_cta","items":[{"productLink":{"link_type":"Web","url":"https://prismic.io"}},{"productLink":{"link_type":"Web","url":"https://prismic.io"}},{"productLink":{"link_type":"Web","url":"http://google.com"}}],"primary":{"title":[{"type":"heading1","text":"Maximize granular schemas","spans":[]}],"description":[{"type":"paragraph","text":"Esse do nisi est dolor Lorem.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _CustomProducts = () => <MyComponent slice={{"variation":"customProducts","name":"Custom Products","slice_type":"product_list_with_cta","items":[{"productLink":{"link_type":"Web","url":"http://twitter.com"}},{"productLink":{"link_type":"Web","url":"https://slicemachine.dev"}},{"productLink":{"link_type":"Web","url":"https://slicemachine.dev"}},{"productLink":{"link_type":"Web","url":"https://prismic.io"}},{"productLink":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"title":[{"type":"heading1","text":"Orchestrate 24/365 convergence","spans":[]}],"description":[{"type":"paragraph","text":"Dolore anim in et.","spans":[]}]},"id":"_CustomProducts"}} />
_CustomProducts.storyName = 'Custom Products'
