import MyComponent from '../../../../../slices/ecommerce/ProductListWithCta';

export default {
  title: 'slices/ecommerce/ProductListWithCta'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"product_list_with_cta","items":[{"productLink":{"link_type":"Web","url":"https://prismic.io"}},{"productLink":{"link_type":"Web","url":"https://prismic.io"}},{"productLink":{"link_type":"Web","url":"https://prismic.io"}},{"productLink":{"link_type":"Web","url":"http://twitter.com"}},{"productLink":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{"title":[{"type":"heading1","text":"Deliver viral interfaces","spans":[]}],"description":[{"type":"paragraph","text":"Aute laboris labore sit incididunt deserunt est mollit nostrud ut eiusmod cupidatat duis labore labore Lorem. Magna dolore irure dolore officia. Commodo commodo excepteur proident excepteur dolore est commodo ex anim sit dolore ullamco aliqua.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _CustomProducts = () => <MyComponent slice={{"variation":"customProducts","name":"Custom Products","slice_type":"product_list_with_cta","items":[{"productLink":{"link_type":"Web","url":"http://twitter.com"}},{"productLink":{"link_type":"Web","url":"https://prismic.io"}},{"productLink":{"link_type":"Web","url":"https://slicemachine.dev"}},{"productLink":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{"title":[{"type":"heading1","text":"Mesh B2C eyeballs","spans":[]}],"description":[{"type":"paragraph","text":"Ullamco mollit sint sit Lorem veniam sunt ullamco tempor id amet aliqua.","spans":[]}]},"id":"_CustomProducts"}} />
_CustomProducts.storyName = 'Custom Products'
