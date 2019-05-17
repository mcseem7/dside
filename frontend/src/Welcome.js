import React from 'react';
import { Link, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { reactTranslateChangeLanguage } from "translate-components";
import LanguagePoppup from "./HOC/ChangeLanguage/ChangePup";

const propTypes = {};

const defaultProps = {};

export default withRouter(class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }


    componentDidMount() {
        const detectBrowserLanguage = require('detect-browser-language')
        this.setState({ userLanguage: detectBrowserLanguage() })
        const userLanguage = detectBrowserLanguage()
        if (userLanguage != null) { 
            var minLang = userLanguage.substr(0,2);
        }
        if (minLang != 'en' && minLang != 'ru' && minLang != 'pl'){ 
            var finalLang = 'en'; 
        }else{
            var finalLang = minLang;
        }
        localStorage.setItem('lang', `${finalLang}`)
        this.props.history.push(`/${finalLang}`);
     }

    render() {
        return (
            <React.Fragment>
     <h1>Hello World</h1>
            </React.Fragment>
        );
    }
})
