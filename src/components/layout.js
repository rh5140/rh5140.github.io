import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
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
        <header className={siteTitle}> Ray Hsiao // RH5140 </header>
        <nav className={navLinkContainer}>
            <ul className={navLinks}>
                <li className={navLinkItem}>                    
                        <Link to="/" className={navLinkText}>
                        <button className={linkButton}>About</button>
                        </Link>                    
                </li>
                <li className={navLinkItem}>                    
                        <Link to="/gamedev" className={navLinkText}>
                        <button className={linkButton}>Gamedev</button>
                        </Link>                    
                </li>
                <li className={navLinkItem}>
                    <Link to="/projects" className={navLinkText}>
                        <button className={linkButton}>Other projects</button>
                    </Link>
                </li>
                <li className={navLinkItem}>                   
                    <Link to="/art" className={navLinkText}>
                        <button className={linkButton}>Art</button>
                    </Link>                    
                </li>
            </ul>
        </nav>
        <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}
export default Layout