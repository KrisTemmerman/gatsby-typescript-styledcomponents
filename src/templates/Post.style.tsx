import styled from 'styled-components'
import { themeGet } from 'styled-system'

const PostWrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-items: center;
  flex-direction: column;
  align-items: center;
`
interface PostProps {
  src?: string
}
export const PostFeaturedImage = styled.figure<PostProps>`
  margin: 0;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: -1;
  &:after {
    content: '';
    position: absolute; /* stretch a fixed position to the whole screen */
    top: 0;
    height: 100vh; /* fix for mobile browser address bar appearing disappearing */
    left: 0;
    right: 0;
    z-index: -1; /* needed to keep in the background */
    background: ${props => (props.src ? `url(${props.src})` : 'auto')} no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`

export const PostContent = styled.article`
  margin-top: 100vh;
  width: 60vw;
  padding-bottom:1rem;
  p {
    line-height: 2rem;
    margin-bottom: 1rem;
  }
  h1,
  h2,
  h3 {
    margin-bottom: 0.5rem;
  }
  @media (max-width: 989px) {
    width: 100vw;
    padding-left: 3rem;
    padding-right: 2rem;
  }
  ul {
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    li {
      display: list-item;
      text-align: -webkit-match-parent;
    }
  }
`
export const PostHeaderBackground = styled.div`
  word-wrap: break-word;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  padding-left: 10rem;
  background: rgba(1, 1, 1, 0.5);
  display: flex;
  align-items: flex-end;
  padding-bottom: 3rem;
  @media (max-width: 989px) {
    padding-left: 2rem;
  }
`
export const PostHeader = styled.header``
export const PostTitle = styled.h1`
  margin: 0;
`

export const Meta = styled.ul`
  display: inline-flex;
  font-style: italic;
  font-weight: 700;
  color: #f3f3f3;
  list-style: none;
  margin-bottom: 1rem;
`
export const MetaTag = styled.li`
  & + li:before {
    content: '•';
    margin: 0 0.5rem;
  }
`
export default PostWrapper
