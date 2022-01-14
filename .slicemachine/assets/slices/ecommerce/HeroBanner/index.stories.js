import MyComponent from '../../../../../slices/ecommerce/HeroBanner';

export default {
  title: 'slices/ecommerce/HeroBanner'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"hero_banner","items":[],"primary":{"title":"generate interactive web services","description":"syndicate proactive interfaces","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=900&h=500&fit=crop","mobile":{"dimensions":{"width":500,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=500&h=500&fit=crop"}},"cta":"enhance 24/7 web services","CTALink":{"link_type":"Web","url":"https://prismic.io"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _WithoutCta = () => <MyComponent slice={{"variation":"withoutCta","name":"Without CTA","slice_type":"hero_banner","items":[],"primary":{"title":"generate proactive methodologies","description":"drive proactive infomediaries","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=900&h=500&fit=crop","mobile":{"dimensions":{"width":500,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=500&h=500&fit=crop"}}},"id":"_WithoutCta"}} />
_WithoutCta.storyName = 'Without CTA'
