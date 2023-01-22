import { DEV } from '~/constants'

export const pageTitle = (...args) => [`Whitley Wedding${ DEV ? ' (dev)' : '' }`, ...args].join(' : ')
