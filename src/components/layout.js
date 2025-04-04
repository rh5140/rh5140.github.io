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
        <title>{pageTitle} | Ray Hsiao </title>
        <header className={siteTitle}> Ray Hsiao // Game Designer & Engineer </header>
        <nav className={navLinkContainer}>
            <ul className={navLinks}>
                <li className={navLinkItem}>                    
                        <Link to="/info" className={navLinkText}>
                        <button className={linkButton}>About me</button>
                        </Link>                    
                </li>
                <li className={navLinkItem}>                    
                        <Link to="/" className={navLinkText}>
                        <button className={linkButton}>Portfolio</button>
                        </Link>                    
                </li>
                <li className={navLinkItem}>
                    <Link to="/misc" className={navLinkText}>
                        <button className={linkButton}>Miscellaneous</button>
                    </Link>
                </li>
                {/* <li className={navLinkItem}>                   
                    <Link to="/art" className={navLinkText}>
                        <button className={linkButton}>Art</button>
                    </Link>                    
                </li> */}
                <li className={navLinkItem}>                   
                    <a href="https://drive.google.com/file/d/1AywhoKJyE7Q80fgQprCYgbIw7CPfCLoU/view?usp=sharing"><button className={linkButton}>Resume</button></a>              
                </li>
            </ul>
        </nav>
        <main>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
        </main>
        <footer>
            <p></p>
            rayhsiaodev(at)gmail.com | <a href="https://github.com/rh5140/">GitHub</a> | <a href="https://linkedin.com/in/rayhsiao">LinkedIn</a>
        </footer>
    </div>
  )
}
export default Layout