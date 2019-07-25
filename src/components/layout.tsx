import React from 'react'
import { ThemeProvider } from 'styled-components'
import ScrollToTop from 'react-scroll-up'
import ResetCss from './resetCSS'
import { theme } from '../theme'
import Particles from 'react-particles-js'
import particleConfig from './particle-config'
import Navbar from './NavBar'

interface LayoutProps {
  children: React.ReactNode
  location?: Location
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  if (typeof window !== 'undefined') {
    // tslint:disable-next-line: no-var-requires
    require('smooth-scroll')('a[href*="#"]')
  }
  return (
    <ThemeProvider theme={theme}>
      <>
        <ResetCss />
        <Particles className="particles" params={particleConfig} />

        <Navbar />
        {children}

        <ScrollToTop
          showUnder={300}
          duration={700}
          easing="easeInOutCubic"
          style={{ bottom: 30, right: 20 }}
        >
          {/* <ScrollUpButton /> */}
        </ScrollToTop>
      </>
    </ThemeProvider>
  )
}

export default Layout
