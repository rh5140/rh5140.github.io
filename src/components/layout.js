import { Link } from 'gatsby'
import * as React from 'react'
import {
    container,
    footerLeft,
    footerRight,
    heading,
    linkButton,
    navLinkContainer,
    navLinkItem,
    navLinkText,
    siteTitle,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {    
  return (
    <div className={container}>
        <title>Ray Hsiao | {pageTitle} </title>
        <header>
            <div className={siteTitle}><h1>Ray Hsiao</h1></div>
            <nav className={navLinkContainer}>
                <div className={navLinkItem}>
                    <Link to="/info" className={navLinkText}>
                        <button className={linkButton}>About</button>
                    </Link>
                </div>
                <div className={navLinkItem}>
                    <Link to="/" className={navLinkText}>
                        <button className={linkButton}>Games</button>
                    </Link>     
                </div>
                <div className={navLinkItem}>
                    <Link to="/misc" className={navLinkText}>
                            <button className={linkButton}>Other</button>
                    </Link>  
                </div>
            </nav>
        </header>

        <main>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
        </main>
        <footer>
            <p></p>
            <div className={footerLeft}><br></br><a href="https://www.linkedin.com/in/rayhsiao">LinkedIn</a> | <a href="https://github.com/rh5140">GitHub</a></div>
            <div className={footerRight}><br></br>© 2025 by Ray Hsiao</div>
        </footer>
    </div>
  )
}
export default Layout