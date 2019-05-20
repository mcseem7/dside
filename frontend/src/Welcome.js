import React from 'react';
import { withRouter } from "react-router-dom";

export default withRouter(class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }


    componentDidMount() {
        const detectBrowserLanguage = require('detect-browser-language')
        this.setState({ userLanguage: detectBrowserLanguage() })
        this.setState({ lang: detectBrowserLanguage() })
        const userLanguage = detectBrowserLanguage()
        if (userLanguage !== null) { 
            var minLang = userLanguage.substr(0,2);
        }
        if (minLang !== 'en' && minLang !== 'ru' && minLang !== 'pl'){ 
            this.props.history.push(`/en`);
            localStorage.setItem('lang', `en`)
        }else{
            this.props.history.push(`/${minLang}`);
            localStorage.setItem('lang', `${minLang}`);
        }
     }

    render() {
        return (
            <React.Fragment>
     <h1>Hello World</h1>
            </React.Fragment>
        );
    }
})
