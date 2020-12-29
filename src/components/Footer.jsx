import React from 'react';

import './styles/Footer.css'

class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
                <p className="footer__author">Designed and built by Luis Xavier Pérez</p>
                <p className="footer__copyright">&copy; 2020 All rights reserved</p>
            </div>
        );
    }
}

export default Footer;