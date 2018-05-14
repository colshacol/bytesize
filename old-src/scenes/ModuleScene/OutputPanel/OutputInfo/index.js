import { ObjectRootLabel } from 'react-inspector'
import { ObjectLabel } from 'react-inspector'

const defaultNodeRenderer = ({
  depth,
  name,
  data,
  isNonenumerable,
  expanded
}) =>
  depth === 0 ? (
    <ObjectRootLabel name={name} data={data} />
  ) : (
    <ObjectLabel name={name} data={data} isNonenumerable={isNonenumerable} />
  )

export const OutputError = (props) => {
  return <ObjectRootLabel name={name} data={data} />
}
