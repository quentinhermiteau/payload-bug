import { $isTableSelection } from '@lexical/table'
import {
  $getSelection,
  $isRangeSelection,
  BaseSelection,
} from '@payloadcms/richtext-lexical/lexical'

const getSelection = (selection: BaseSelection | null = null) => {
  selection ??= $getSelection()

  if ($isRangeSelection(selection) || $isTableSelection(selection)) {
    return selection
  }

  return null
}

export default getSelection
