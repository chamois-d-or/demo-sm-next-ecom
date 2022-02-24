import MyComponent from '../../../../../slices/ecommerce/HeroBanner';

export default {
  title: 'slices/ecommerce/HeroBanner'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"hero_banner","items":[],"primary":{"title":"extend integrated portals","description":"harness open-source supply-chains","image":{"dimensions":{"width":1024,"height":325},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=1024&h=325&fit=crop","mobile":{"dimensions":{"width":600,"height":410},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=600&h=410&fit=crop"}},"cta":"recontextualize best-of-breed functionalities","CTALink":{"link_type":"Web","url":"http://twitter.com"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _WithoutCta = () => <MyComponent slice={{"variation":"withoutCta","name":"Without CTA","slice_type":"hero_banner","items":[],"primary":{"title":"streamline one-to-one channels","description":"reinvent plug-and-play networks","image":{"dimensions":{"width":1024,"height":325},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=1024&h=325&fit=crop","mobile":{"dimensions":{"width":600,"height":410},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=600&h=410&fit=crop"}}},"id":"_WithoutCta"}} />
_WithoutCta.storyName = 'Without CTA'
