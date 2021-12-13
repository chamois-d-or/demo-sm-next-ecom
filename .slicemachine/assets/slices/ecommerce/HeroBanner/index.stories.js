import MyComponent from '../../../../../slices/ecommerce/HeroBanner';

export default {
  title: 'slices/ecommerce/HeroBanner'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"hero_banner","items":[],"primary":{"title":"integrate cross-media methodologies","description":"monetize virtual vortals","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=900&h=500&fit=crop","mobile":{"dimensions":{"width":500,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=500&h=500&fit=crop"}},"cta":"synergize transparent markets","CTALink":{"link_type":"Web","url":"https://prismic.io"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _WithoutCta = () => <MyComponent slice={{"variation":"withoutCta","name":"Without CTA","slice_type":"hero_banner","items":[],"primary":{"title":"integrate transparent niches","description":"drive turn-key models","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=900&h=500&fit=crop","mobile":{"dimensions":{"width":500,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=500&h=500&fit=crop"}}},"id":"_WithoutCta"}} />
_WithoutCta.storyName = 'Without CTA'
