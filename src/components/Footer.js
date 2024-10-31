import React from "react";
import FacebookLogo from '../Images/footer__fb.png';
import GithubLogo from '../Images/footer__github.png';

function Footer ({handleHomeClick}) {

  

    return (
        <>
            <footer className="footer">
                <p className="footer__watermark">&copy; 2024 NewsExplorer Ari Campos, Powered by News API</p>

            <div className="footer__container">
                <p className="footer__home" onClick={handleHomeClick}>Inicio</p>
                <p className="footer__practicum">Practicum</p>
                <img className="footer__github"  src={GithubLogo}/>
                <img className="footer__facebook" src={FacebookLogo}/>
            </div>

            <div className="footer__container-mobile">
                <div className="footer__home-container-mobile">
                  <p className="footer__home-mobile" onClick={handleHomeClick}>Inicio</p>
                  <div className="footer__logos-container-mobile">
                    <img className="footer__github-mobile"  src={GithubLogo}/>
                    <img className="footer__facebook-mobile" src={FacebookLogo}/>
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