import * as React from 'react'
const useScrollToElements = () => {
  const ref = React.useRef(null)
  const executeScroll = () => {
    window.scrollTo(0, ref.current.offsetTop)
  }
  const htmlElementAttributes = { ref }

  return [executeScroll, htmlElementAttributes]
}
export default useScrollToElements
