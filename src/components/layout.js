import { Link } from 'gatsby'
import * as React from 'react'
import {
    container,
    heading,
    linkButton,
    navLinkContainer,
    navLinkItem,
    navLinkText,
    navLinks,
    siteTitle
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {    
  return (
    <div className={container}>
        {/* Get rid of hardcoding later :) */}
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
            © 2025 by Ray Hsiao
        </footer>
    </div>
  )
}
export default Layout