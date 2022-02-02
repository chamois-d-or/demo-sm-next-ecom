import MyComponent from '../../../../../slices/ecommerce/ProductListWithCta';

export default {
  title: 'slices/ecommerce/ProductListWithCta'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"product_list_with_cta","items":[{"productLink":{"link_type":"Web","url":"http://twitter.com"}},{"productLink":{"link_type":"Web","url":"https://prismic.io"}},{"productLink":{"link_type":"Web","url":"http://twitter.com"}},{"productLink":{"link_type":"Web","url":"https://prismic.io"}},{"productLink":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"title":[{"type":"heading1","text":"Enhance best-of-breed functionalities","spans":[]}],"description":[{"type":"paragraph","text":"Culpa id anim nostrud id anim et dolor magna veniam sunt.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _CustomProducts = () => <MyComponent slice={{"variation":"customProducts","name":"Custom Products","slice_type":"product_list_with_cta","items":[{"productLink":{"link_type":"Web","url":"http://twitter.com"}},{"productLink":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{"title":[{"type":"heading1","text":"Disintermediate holistic bandwidth","spans":[]}],"description":[{"type":"paragraph","text":"Dolore sunt et laborum duis. Enim sunt consectetur culpa consectetur aliquip laborum est ullamco Lorem non exercitation anim nulla elit minim. Adipisicing tempor sint ipsum eu in non labore reprehenderit exercitation nisi incididunt Lorem occaecat nostrud fugiat.","spans":[]}]},"id":"_CustomProducts"}} />
_CustomProducts.storyName = 'Custom Products'
