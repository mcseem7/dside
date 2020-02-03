import React, { Component } from 'react'
import CaseService from '../serviceComponents/CaseService/index'
import './index.css'
import Translate from "translate-components";
import  Arrow  from '../../../Basic/Footer/arrow.svg';
import LogoRed from '../../../DynamicContent/About/dsideLogo.svg';
import Advantages from "../../../Basic/TrustBlocks/Advantages";
import withDsideApi from "../../../../HOC/Fetch";
import Footer from '../../../Basic/Footer'
import { reactTranslateChangeLanguage } from "translate-components";
import { NavLink, withRouter } from "react-router-dom";
import Helmet from 'react-helmet-async'

class Design extends Component {
  constructor(props) {
    super(props)

  }
componentWillMount() {
  this.setState({lang: localStorage.getItem('lang')})
  };
  render(){

    return (

        <div>
        <Helmet>
  <title>Dside design</title>
</Helmet>
          <div className="row">
            <div className="s-intro-txts">
                 <div className="heading-s-intro"> <h2 className="s-intro-txt">Designed by</h2><img className="logo-s-intro" src={LogoRed} width={110}/></div>
                 <h4 className="s-intro-txt ">Do not be a copy. Be the standard for others.</h4>
            </div>
          </div>
          <div className="design-content">
                <div className="lines-intro-design"></div>
             <div className="row">
               <div className="d-c-main">
                   <div className="d-c-head">
                  <div className="heading-design"><h2>Design</h2> <span>from $ 199</span></div>
                  <div className="calclink"><NavLink
                      to={`/${this.state.lang}/pricing`}
                      className="link adv-btn a1">
                      <Translate>Prices</Translate><img src={Arrow} width={16} alt=""/>  </NavLink></div></div>
                  <p>The main tool that shows your customer who is who in the market. A good design will leave no chance to competitors, because your company will look more professional than analogues with a mediocre design.</p>
               </div>
             </div>
            </div>
        <CaseService {...this.props} name='design' />
        <Advantages />
        <Footer/> </div>
    )
  }
}
export default withDsideApi(Design, '/portfolio/getPortfolioItems/Design/')