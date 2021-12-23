import MyComponent from '../../../../../slices/ecommerce/ProductListWithCta';

export default {
  title: 'slices/ecommerce/ProductListWithCta'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"product_list_with_cta","items":[{"productLink":{"link_type":"Web","url":"https://prismic.io"}},{"productLink":{"link_type":"Web","url":"https://prismic.io"}},{"productLink":{"link_type":"Web","url":"http://twitter.com"}},{"productLink":{"link_type":"Web","url":"https://slicemachine.dev"}},{"productLink":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{"title":[{"type":"heading1","text":"Benchmark dynamic blockchains","spans":[]}],"description":[{"type":"paragraph","text":"Occaecat enim non ex minim enim deserunt. Veniam pariatur cillum ad ullamco cillum. Tempor duis cupidatat nostrud Lorem in incididunt anim minim aliqua duis consequat culpa elit labore.","spans":[]}]},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _CustomProducts = () => <MyComponent slice={{"variation":"customProducts","name":"Custom Products","slice_type":"product_list_with_cta","items":[{"productLink":{"link_type":"Web","url":"http://google.com"}},{"productLink":{"link_type":"Web","url":"http://google.com"}},{"productLink":{"link_type":"Web","url":"https://prismic.io"}},{"productLink":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"title":[{"type":"heading1","text":"Incentivize 24/365 mindshare","spans":[]}],"description":[{"type":"paragraph","text":"Cupidatat non irure ex dolore est commodo sunt sunt fugiat ex esse ut minim consequat. Voluptate eiusmod commodo ex quis. Culpa ullamco occaecat laborum reprehenderit consectetur eiusmod ad amet.","spans":[]}]},"id":"_CustomProducts"}} />
_CustomProducts.storyName = 'Custom Products'
