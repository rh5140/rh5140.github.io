import * as React from 'react'
import { Link } from 'gatsby'
import {
            container,
            siteTitle,
            heading,
            navLinkContainer,
            navLinks,
            navLinkItem,
            navLinkText,
            linkButton
                            } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {    
  return (
    <div className={container}>
        {/* Get rid of hardcoding later :) */}
        <title>{pageTitle} | Ray Hsiao </title>
        <header className={siteTitle}> Ray Hsiao // Game Developer </header>
        <nav className={navLinkContainer}>
            <ul className={navLinks}>
                <li className={navLinkItem}>                    
                        <Link to="/info" className={navLinkText}>
                        <button className={linkButton}>Info</button>
                        </Link>                    
                </li>
                <li className={navLinkItem}>                    
                        <Link to="/" className={navLinkText}>
                        <button className={linkButton}>Portfolio</button>
                        </Link>                    
                </li>
                {/* <li className={navLinkItem}>
                    <Link to="/projects" className={navLinkText}>
                        <button className={linkButton}>Other projects</button>
                    </Link>
                </li>
                <li className={navLinkItem}>                   
                    <Link to="/art" className={navLinkText}>
                        <button className={linkButton}>Art</button>
                    </Link>                    
                </li> */}
                <li className={navLinkItem}>                   
                    <a href="https://rh5140.github.io/markdown-cv/"><button className={linkButton}>Resume</button></a>              
                </li>
            </ul>
        </nav>
        <main>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
        </main>
        <footer>
            <p></p>
            rjchsiao at g.ucla.edu | <a href="https://github.com/rh5140/">GitHub</a> | <a href="https://linkedin.com/in/rayhsiao">LinkedIn</a>
        </footer>
    </div>
  )
}
export default Layout