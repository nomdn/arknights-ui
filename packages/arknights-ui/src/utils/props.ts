import type { PropType, CSSProperties } from 'vue'

export const makeSizeProps = {
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
    validator: (v: string) => ['sm', 'md', 'lg'].includes(v),
  },
}

export const makeVariantProps = {
  variant: {
    type: String as PropType<'default' | 'primary' | 'danger' | 'success' | 'warning'>,
    default: 'default',
  },
}

export type SizeType = 'sm' | 'md' | 'lg'
export type VariantType = 'default' | 'primary' | 'danger' | 'success' | 'warning'

export const sizeClassMap: Record<SizeType, string> = {
  sm: 'ak-size-sm',
  md: 'ak-size-md',
  lg: 'ak-size-lg',
}

export const variantClassMap: Record<VariantType, string> = {
  default: 'ak-variant-default',
  primary: 'ak-variant-primary',
  danger: 'ak-variant-danger',
  success: 'ak-variant-success',
  warning: 'ak-variant-warning',
}

export const bem = (block: string, element?: string, modifier?: string): string => {
  let cls = `ak-${block}`
  if (element) cls += `__${element}`
  if (modifier) cls += `--${modifier}`
  return cls
}
