import MyComponent from '../../../../../slices/ecommerce/HeroBanner';

export default {
  title: 'slices/ecommerce/HeroBanner'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"hero_banner","items":[],"primary":{"title":"repurpose virtual mindshare","description":"target cutting-edge partnerships","image":{"dimensions":{"width":1024,"height":325},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=1024&h=325&fit=crop","mobile":{"dimensions":{"width":600,"height":410},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=600&h=410&fit=crop"}},"cta":"streamline bricks-and-clicks markets","CTALink":{"link_type":"Web","url":"http://twitter.com"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _WithoutCta = () => <MyComponent slice={{"variation":"withoutCta","name":"Without CTA","slice_type":"hero_banner","items":[],"primary":{"title":"generate value-added technologies","description":"facilitate integrated e-commerce","image":{"dimensions":{"width":1024,"height":325},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=1024&h=325&fit=crop","mobile":{"dimensions":{"width":600,"height":410},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=600&h=410&fit=crop"}}},"id":"_WithoutCta"}} />
_WithoutCta.storyName = 'Without CTA'
