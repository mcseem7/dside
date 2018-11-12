import React, { Component, Fragment, createElement } from "react";
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
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Cookies from 'js-cookie'
import Header from './components/Basic/Header/index';
import loadable from 'loadable-components';
import 'regenerator-runtime/runtime';

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
import clock from './clock.svg'
import routes from './routes'
import Welcome from './Welcome'
import Helmet from 'react-helmet-async'
import $ from 'jquery'


class App extends Component {

    constructor() {
        super()

        this.state = {
            cook: true,
           
            orientation: false,
            preload: false
        }
    }


    componentWillMount() {
        const getIdentityDomen = this.props.domen
        if (!getIdentityDomen || getIdentityDomen == '') {
            this.setState({ langPoppup: false })
        }
       
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        reactTranslateChangeLanguage.bind(this, localStorage.getItem('lang'))()
        const spinner = $('#loading');
        if (spinner && !$(spinner).addClass('final_render loaded')) {
          $(spinner).addclass('final_render loaded')
        }
        window.addEventListener("onload", () => {
            this.checkOrient()
        }, false);
        if (Cookies.get('accept-cookie') == undefined) {
            this.setState({ cook: true })
        } else {
            this.setState({ cook: false })
        }
        window.addEventListener("orientationchange", () => {
            this.checkOrient()
        }, false);
    }

    checkOrient = () => {
       
            if (window.matchMedia("(orientation: portrait)").matches) {
                this.setState({
                    orientation: true
                })
            }
            else if (window.matchMedia("(orientation: landscape)").matches) {
                this.setState({ orientation: false })
            }
        
    }

   

    
    confirmCookies = () => {
        this.setState({ cook: false })
        Cookies.set('accept-cookie', true, { expires: 365 });
    }

   

   render()  {
        function findWord(word, str) {
            return str.split(' ').some(function (w) { return w === word })
        }
        const { routes, initialData } = this.props
       console.log(this.state)
        return (
            <TranslateProvider translations={translations} defaultLanguage={'en'}>
                <Fragment>
                    {
                        this.state.orientation ? <Fragment>
                            <div className="stop_rotation">
                                <div className="stop_rotation_contant_wrapper">
                                    <div className="stop_rotation_content_img_wrapper">
                                        <img className="stop_rotation_content_img" viewBox="0 0 250 250" src={clock} />
                                    </div>
                                    <p className="stop_rotation_content_p">Proszę<br />obrócić<br />urządzenie</p>
                                </div>
                            </div>
                        </Fragment> : null
                    }
                </Fragment>
                
                { <div className="App">
             <Route exact path="/" component={Welcome} />
             {/* <Route exact path="/" render={(props) => (<Redirect to={`/en`} />)} /> */}
             <Route path={'/:language'} render={(props) => {

                 return (
                     <TransitionGroup>

                         {props.location.pathname.match(/services\//gi)  ? <Header domenErty={props.match.params.language} style={'none'} /> : <Header domenErty={props.match.params.language} style={'block'} />}

                         <CSSTransition key={props.location.key} timeout={1000} classNames="fade">
                        
                             <Switch>
                                    {Array.prototype.map.call(routes, ((route, index) => {
                                     return (
                                         <Route
                                             key={index}
                                             path={route.path}
                                             exact={route.exact}
                                             render={props =>
                                                 createElement(route.component, {
                                                     ...props,
                                                     routes: route.routes,
                                                     initialData: initialData || null
                                                 })
                                             }
                                         />
                                     );
                                 }))}
                             </Switch>


                         </CSSTransition>

                         {findWord('/contactus', props.location.pathname.substr(3)) || findWord('services', props.location.pathname.substr(4,8))  ? <Footer style={'none'} /> : <Footer style={'block'} />}
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
           
         </div> }
             
            </TranslateProvider>
        )
    }
}

export default App
