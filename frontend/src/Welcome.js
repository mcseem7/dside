import React from 'react';
import PropTypes from 'prop-types';
import LanguagePoppup from "./HOC/ChangeLanguage/ChangePup";
import logoRed from './dsideLogo.svg'

const propTypes = {};

const defaultProps = {};

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            langPoppup: true
        };
    }


    hidePoppup = () => {
        this.setState({langPoppup: !this.state.langPoppup})
    }

    render() {
        return (
            <React.Fragment>
    <div id="loading">
        <div class="loader">
          <div class="loader__row">
            <div class="loader__arrow up inner inner-6"></div>
            <div class="loader__arrow down inner inner-5"></div>
            <div class="loader__arrow up inner inner-4"></div>
          </div>
        </div>
        <span><img src={logoRed} class="brand-logo" alt="DSIDE logo" /></span>
      </div> 
        {this.state.langPoppup ? <LanguagePoppup handleChange={this.hidePoppup} /> : null}
            </React.Fragment>
        );
    }
}

 Welcome.propTypes = propTypes;
 Welcome.defaultProps = defaultProps;