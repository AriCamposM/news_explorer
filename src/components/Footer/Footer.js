import React from "react";
import GithubLogo from '../../Images/footer__github.png';
import LinkedinLogo from '../../Images/linkedin.png';

import './footer.css';

function Footer ({handleHomeClick}) {

  

    return (
        <>
            <footer className="footer">
                <p className="footer__watermark">&copy; 2024 NewsExplorer Ari Campos, Powered by News API</p>

            <div className="footer__container">
                <p className="footer__home" onClick={handleHomeClick}>Inicio</p>
                <p className="footer__practicum">Practicum</p>
                <a href="https://github.com/AriCamposM/news_explorer-full" target="_blank" rel="noopener noreferrer">
                    <img className="footer__github" alt="Github Logo" src={GithubLogo}/>
                </a>
                <a href="https://www.linkedin.com/in/ari-campos/" target="_blank" rel="noopener noreferrer">
                    <img className="footer__facebook" alt="Linkedin Logo" src={LinkedinLogo}/>
                </a>
            </div>

            <div className="footer__container-mobile">
                <div className="footer__home-container-mobile">
                  <p className="footer__home-mobile" onClick={handleHomeClick}>Inicio</p>
                  <div className="footer__logos-container-mobile">
                    <a href="https://github.com/AriCamposM/news_explorer-full" target="_blank" rel="noopener noreferrer">
                        <img className="footer__github-mobile" alt="Github Logo" src={GithubLogo}/>
                    </a>
                    <a className="footer_link" href="https://www.linkedin.com/in/ari-campos/" target="_blank" rel="noopener noreferrer">
                        <img className="footer__facebook-mobile" alt="Linkedin Logo" src={LinkedinLogo}/>
                    </a>
                  </div>
                </div>
                <p className="footer__practicum-mobile">Practicum</p>
                <p className="footer__watermark-mobile">&copy; 2024 NewsExplorer Ari Campos, Powered by News API</p>
            </div>

            </footer>
        </>
    )
}

export default Footer;