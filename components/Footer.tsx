import React from 'react';
import './footerstyle.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <ul>
                            <li><a href="#">Open Autonomous Systems LLC</a></li>
                            <li><a href="#">Chelmsford, MA</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">our services</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a href="https://github.com/Open-Autonomous-Systems" target="_blank"><i className="fab fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
