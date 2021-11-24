import MyComponent from '../../../../../slices/ecommerce/ProductListWithCta';

export default {
  title: 'slices/ecommerce/ProductListWithCta'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"product_list_with_cta","items":[{"productLink":{"link_type":"Web","url":"http://google.com"}},{"productLink":{"link_type":"Web","url":"https://slicemachine.dev"}},{"productLink":{"link_type":"Web","url":"https://prismic.io"}},{"productLink":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{"title":[{"type":"heading1","text":"E-enable integrated ROI","spans":[]}],"description":[{"type":"paragraph","text":"Veniam eu veniam sit ipsum ea. Sit ullamco laborum deserunt fugiat minim sint anim esse. Eiusmod aute incididunt sint culpa magna nostrud esse eu.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _CustomProducts = () => <MyComponent slice={{"variation":"customProducts","name":"Custom Products","slice_type":"product_list_with_cta","items":[{"productLink":{"link_type":"Web","url":"https://slicemachine.dev"}},{"productLink":{"link_type":"Web","url":"https://prismic.io"}},{"productLink":{"link_type":"Web","url":"https://prismic.io"}},{"productLink":{"link_type":"Web","url":"http://google.com"}},{"productLink":{"link_type":"Web","url":"http://twitter.com"}},{"productLink":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{"title":[{"type":"heading1","text":"Architect sticky e-commerce","spans":[]}],"description":[{"type":"paragraph","text":"Fugiat mollit Lorem elit. Eu elit amet enim magna enim elit irure enim sint nisi veniam eu mollit. Aute do sint incididunt aliquip pariatur fugiat et.","spans":[]}]},"id":"_CustomProducts"}} />
_CustomProducts.storyName = 'Custom Products'
