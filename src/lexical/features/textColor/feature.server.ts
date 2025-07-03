import { createServerFeature } from '@payloadcms/richtext-lexical'

import { ColorFeatureProps } from '../../types'

export const TextColorFeature = createServerFeature<
  ColorFeatureProps,
  ColorFeatureProps,
  ColorFeatureProps
>({
  feature({ props }) {
    return {
      ClientFeature: '@/lexical/features/textColor/feature.client#TextColorFeatureClient',
      clientFeatureProps: {
        colors: props?.colors,
      },
    }
  },
  key: 'textColor',
})
