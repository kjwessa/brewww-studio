import { BeforeChangeHook } from 'payload/dist/collections/config/types'

export const setMetaImageFallback: BeforeChangeHook = ({ data, operation }) => {
  if (operation === 'create' || operation === 'update') {
    if (!data.meta?.image && data.image) {
      data.meta = {
        ...data.meta,
        image: data.image,
      }
    }
  }
  return data
} 