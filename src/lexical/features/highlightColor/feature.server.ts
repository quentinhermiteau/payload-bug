import { createServerFeature } from '@payloadcms/richtext-lexical'

import { ColorFeatureProps } from '../../types'

export const HighlightColorFeature = createServerFeature<
  ColorFeatureProps,
  ColorFeatureProps,
  ColorFeatureProps
>({
  feature({ props }) {
    return {
      ClientFeature: '@/lexical/features/highlightColor/feature.client#HighlightColorFeatureClient',
      clientFeatureProps: {
        colors: props?.colors,
      },
    }
  },
  key: 'highlightColor',
})
