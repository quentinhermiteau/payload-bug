import { createServerFeature } from '@payloadcms/richtext-lexical'

import { SizeFeatureProps } from '../../types'

export const TextSizeFeature = createServerFeature<
  SizeFeatureProps,
  SizeFeatureProps,
  SizeFeatureProps
>({
  feature({ props }) {
    return {
      ClientFeature: '@/lexical/features/textSize/feature.client#TextSizeFeatureClient',
      clientFeatureProps: {
        sizes: props?.sizes,
      },
    }
  },
  key: 'textSize',
})
