import { HeadingJSXConverter } from './Heading'
import { ParagraphJSXConverter } from './Paragraph'
import { TextJSXConverter } from './Text'

const converters = {
  ...ParagraphJSXConverter,
  ...TextJSXConverter,
  ...HeadingJSXConverter,
}

export default converters
