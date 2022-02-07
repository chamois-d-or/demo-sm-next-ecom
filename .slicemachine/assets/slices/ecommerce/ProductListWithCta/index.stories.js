import MyComponent from '../../../../../slices/ecommerce/ProductListWithCta';

export default {
  title: 'slices/ecommerce/ProductListWithCta'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"product_list_with_cta","items":[{"productLink":{"link_type":"Web","url":"https://prismic.io"}},{"productLink":{"link_type":"Web","url":"https://prismic.io"}},{"productLink":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"title":[{"type":"heading1","text":"Exploit integrated infomediaries","spans":[]}],"description":[{"type":"paragraph","text":"Et aliquip ad nisi esse nostrud quis incididunt laborum ullamco. Nostrud et proident exercitation occaecat nulla in ullamco et in sunt veniam laboris nostrud.","spans":[]}],"link":{"link_type":"Web","url":"https://slicemachine.dev"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _CustomProducts = () => <MyComponent slice={{"variation":"customProducts","name":"Custom Products","slice_type":"product_list_with_cta","items":[{"productLink":{"link_type":"Web","url":"https://prismic.io"}},{"productLink":{"link_type":"Web","url":"https://slicemachine.dev"}},{"productLink":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{"title":[{"type":"heading1","text":"Maximize clicks-and-mortar deliverables","spans":[]}],"description":[{"type":"paragraph","text":"Amet incididunt incididunt irure commodo id ullamco pariatur consequat ut magna.","spans":[]}]},"id":"_CustomProducts"}} />
_CustomProducts.storyName = 'Custom Products'
