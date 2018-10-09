import React, { Component, Fragment } from "react";
import Layout from './components'
import './components/App.css'
import Footer from './components/Basic/Footer'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ContactUs from './components/CompanyPages/ContactUs'
import MainPages from './components/index'
import LogoPage from './components/CompanyPages/Services/logos'
import BrandPage from './components/CompanyPages/Services/branding'
import VideoPage from './components/CompanyPages/Services/videos'
import Website from './components/CompanyPages/Services/websites'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import Cookies from 'js-cookie'
import Header from './components/Basic/Header/index';
import loadable from 'loadable-components';
import 'regenerator-runtime/runtime';
import LanguagePoppup from "./HOC/ChangeLanguage/ChangePup";
import NotFound from "./components/Basic/NotFound";
import Blog from './components/DynamicContent/Blog'
import BlogItem from './components/DynamicContent/BlogItem'
import PortfolioItem from './components/DynamicContent/PortfolioItem'
import Portfolio from './components/DynamicContent/Portfolio'
import AboutUs from './components/DynamicContent/About'
import Main from "./components/DynamicContent/Main";
import Advertising from "./components/CompanyPages/Services/advertising";
import Automation from "./components/CompanyPages/Services/automation";
import { reactTranslateChangeLanguage, TranslateProvider } from "translate-components";
import translations from './translations.json'



class App extends Component {

    constructor() {
        super()

        this.state = {
            cook: true,
            langPoppup: false,
            orientation: false
        }

    }

    componentWillMount() {
        const getIdentityDomen = this.props.domen
        if(!getIdentityDomen || getIdentityDomen == '') {
            this.setState({langPoppup: false})
        }
    }

    componentDidMount() {
      window.scrollTo(0,0)
      function isLandscape() {
        return (window.orientation === 90 || window.orientation === -90);
      }

      if(isLandscape() == true) {
        this.setState({
          orientation: true
        })
      }

      const self = this;
        if (Cookies.get('accept-cookie') == undefined) {
            this.setState({cook: true})
        } else {
            this.setState({cook: false})
        }
      window.addEventListener("orientationchange", function() {
        self.checkOrient()
      }, false);
    }

    checkOrient = () => {
      if (window.matchMedia("(orientation: portrait)").matches) {
        this.setState({
          orientation: true
        })
      }
      if (window.matchMedia("(orientation: landscape)").matches) {
        this.setState({orientation: false})
      }
    }

    confirmCookies = () => {
        this.setState({cook: false})
        Cookies.set('accept-cookie', true, { expires: 365 });
    }

    render () {
        // const itemLang = localStorage.setItem('lang', this.props.domen)
        function findWord(word, str) {
            return str.split(' ').some(function(w){return w === word})
        }
      reactTranslateChangeLanguage.bind(this, localStorage.getItem('lang'))()
        return (
            <TranslateProvider translations={translations} defaultLanguage={'en'}>
              <Fragment>
                {
                  this.state.orientation  ? <Fragment>
                    <div className="stop_rotation">
                      <div className="stop_rotation_contant_wrapper">
                        <div className="stop_rotation_content_img_wrapper">
                          <img className="stop_rotation_content_img" src={'http://www.masons.pl/wizex/mobile/images/clock.svg'} />
                        </div>
                        <p className="stop_rotation_content_p">Proszę<br/>obrócić<br/>urządzenie</p>
                      </div>
                    </div>
                  </Fragment> : null
                }
              </Fragment>
                <div className="App">
                    <Route exact path="/" render={(props) => (<Redirect to={`/en`}    />)} />
                    <Route  path={'/:language'} render={(props) => {

                        return(
                            <TransitionGroup>

                                {props.location.pathname.match(/services\//gi) ?  <Header domenErty={props.match.params.language} style={'none'}/>  : <Header  domenErty={props.match.params.language} style={'block'}/> }

                                <CSSTransition key={props.location.key} timeout={1000} classNames="fade">

                                    <Switch>

                                        <Route exact path={`/${'en'}`}  render={(props) => {
                                            return <Main {...props}/>
                                        }}  />
                                        <Route exact path={`/${'pl'}`}  render={(props) => {
                                            return <Main {...props}/>
                                        }}  />
                                        <Route exact path={`/${'cz'}`}  render={(props) => {
                                            return <Main {...props}/>
                                        }}  />
                                        <Route exact path={`/${'ru'}`}  render={(props) => {
                                            return <Main {...props}/>
                                        }}  />


                                        <Route exact path={`/${'en'}/services/logo`}  component={LogoPage}/>
                                        <Route exact path={`/${'pl'}/services/logo`}  component={LogoPage}/>
                                        <Route exact path={`/${'ru'}/services/logo`}  component={LogoPage}/>
                                        <Route exact path={`/${'cz'}/services/logo`}  component={LogoPage}/>

                                        <Route exact path={`/${'en'}/services/videos`} component={VideoPage}/>
                                        <Route exact path={`/${'pl'}/services/videos`} component={VideoPage}/>
                                        <Route exact path={`/${'ru'}/services/videos`} component={VideoPage}/>
                                        <Route exact path={`/${'cz'}/services/videos`} component={VideoPage}/>


                                        <Route exact path={`/${'en'}/services/website`} component={Website}/>
                                        <Route exact path={`/${'pl'}/services/website`} component={Website}/>
                                        <Route exact path={`/${'ru'}/services/website`} component={Website}/>
                                        <Route exact path={`/${'cz'}/services/website`} component={Website}/>

                                        <Route exact path={`/${'en'}/services/brand`}  component={BrandPage}/>
                                        <Route exact path={`/${'ru'}/services/brand`}  component={BrandPage}/>
                                        <Route exact path={`/${'cz'}/services/brand`}  component={BrandPage}/>
                                        <Route exact path={`/${'pl'}/services/brand`}  component={BrandPage}/>


                                        <Route exact path={`/${'en'}/services/advertising`}  component={Advertising}/>
                                        <Route exact path={`/${'pl'}/services/advertising`}  component={Advertising}/>
                                        <Route exact path={`/${'ru'}/services/advertising`}  component={Advertising}/>
                                        <Route exact path={`/${'cz'}/services/advertising`}  component={Advertising}/>

                                        <Route exact path={`/${'en'}/services/automation`}  component={Automation}/>
                                        <Route exact path={`/${'pl'}/services/automation`}  component={Automation}/>
                                        <Route exact path={`/${'ru'}/services/automation`}  component={Automation}/>
                                        <Route exact path={`/${'cz'}/services/automation`}  component={Automation}/>

                                        <Route exact path={`/${'en'}/services/brand`}  component={BrandPage}/>
                                        <Route exact path={`/${'pl'}/services/brand`}  component={BrandPage}/>
                                        <Route exact path={`/${'ru'}/services/brand`}  component={BrandPage}/>
                                        <Route exact path={`/${'cz'}/services/brand`}  component={BrandPage}/>

                                        <Route exact path={`/${'en'}/aboutus`}  component={AboutUs} />
                                        <Route exact path={`/${'pl'}/aboutus`}  component={AboutUs} />
                                        <Route exact path={`/${'ru'}/aboutus`}  component={AboutUs} />
                                        <Route exact path={`/${'cz'}/aboutus`}  component={AboutUs} />

                                        <Route exact path={`/${'en'}/blog`}  component={Blog} />
                                        <Route exact path={`/${'pl'}/blog`}  component={Blog} />
                                        <Route exact path={`/${'ru'}/blog`}  component={Blog} />
                                        <Route exact path={`/${'cz'}/blog`}  component={Blog} />

                                        <Route exact path={`/${'en'}/blog/:blogitem`} component={BlogItem} />
                                        <Route exact path={`/${'pl'}/blog/:blogitem`} component={BlogItem} />
                                        <Route exact path={`/${'ru'}/blog/:blogitem`} component={BlogItem} />
                                        <Route exact path={`/${'cz'}/blog/:blogitem`} component={BlogItem} />

                                        <Route exact path={`/${'en'}/portfolio`} component={Portfolio} />
                                        <Route exact path={`/${'pl'}/portfolio`} component={Portfolio} />
                                        <Route exact path={`/${'ru'}/portfolio`} component={Portfolio} />
                                        <Route exact path={`/${'cz'}/portfolio`} component={Portfolio} />

                                        <Route exact  path={`/${'en'}/portfolio/:portfolioitem`}  component={PortfolioItem} />
                                        <Route exact  path={`/${'pl'}/portfolio/:portfolioitem`}  component={PortfolioItem} />
                                        <Route exact  path={`/${'ru'}/portfolio/:portfolioitem`}  component={PortfolioItem} />
                                        <Route exact  path={`/${'cz'}/portfolio/:portfolioitem`}  component={PortfolioItem} />

                                        <Route  exact path={`/${'en'}/contactus`} component={ContactUs}/>
                                        <Route  exact path={`/${'pl'}/contactus`} component={ContactUs}/>
                                        <Route  exact path={`/${'ru'}/contactus`} component={ContactUs}/>
                                        <Route  exact path={`/${'cz'}/contactus`} component={ContactUs}/>

                                    </Switch>


                                </CSSTransition>

                                {findWord('/contactus', props.location.pathname.substr(3)) ?   <Footer style={'none'}/>   : <Footer style={'block'}/> }
                            </TransitionGroup>)


                    }} />



                    {this.state.cook ?
                        <div className="cookies-container">

                            <div className="privacy__warning">
                                <p className="cook__description">
                                    Did you know? This website uses cookies to ensure you get the best experience on our website. <span className="shining-underline">Learn more<span></span></span>
                                </p>

                                <div className="cook__button">
                                    <p onClick={this.confirmCookies}>Agree</p>
                                </div>

                            </div>
                        </div> : null
                    }




                    {this.state.langPoppup ? <LanguagePoppup/> : null}
                </div>
            </TranslateProvider>
        )
    }
}

export default App
