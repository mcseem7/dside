import React, { Component } from 'react'
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


class App extends Component {

    constructor() {
        super()

        this.state = {
            cook: true,
            langPoppup: false
        }
    }

    componentWillMount() {
        const getIdentityDomen = this.props.domen
        if(!getIdentityDomen || getIdentityDomen == '') {
            this.setState({langPoppup: false})
        }
    }

    componentDidMount() {
        if (Cookies.get('accept-cookie') == undefined) {
            this.setState({cook: true})
        } else {
            this.setState({cook: false})
        }
        window.scrollTo(0,0)
    }

    confirmCookies = () => {
        this.setState({cook: false})
        Cookies.set('accept-cookie', true, { expires: 365 });
    }

    render () {
        // const itemLang = localStorage.setItem('lang', this.props.domen)

        return (
            <div className="App">
                <Route exact path="/" render={(props) => (<Redirect to={`/${this.props.domen}`}    />)} />
                <Route  path={'/:language'} render={(props) => {
                    console.log(props)
                    return(
                        <TransitionGroup>
                            {props.location.pathname.match(/services\//gi) ?  <Header style={'none'}/>  : <Header style={'block'}/> }

                            <CSSTransition key={props.location.key} timeout={300} classNames="fade">

                                <Switch>
                                    <Route exact path={`/${props.match.params.language}`}    component={Main} />
                                    <Route exact path={`/${props.match.params.language}/contactus`} component={ContactUs}/>
                                    <Route exact path={`/${props.match.params.language}/services/logo`}  component={LogoPage}/>
                                    <Route exact path={`/${props.match.params.language}/services/videos`} component={VideoPage}/>
                                    <Route exact path={`/${props.match.params.language}/services/website`} component={Website}/>
                                    <Route exact path={`/${props.match.params.language}/services/brand`}  component={BrandPage}/>
                                    <Route exact path={`/${props.match.params.language}/services/advertising`}  component={Advertising}/>
                                    <Route exact path={`/${props.match.params.language}/services/automation`}  component={Automation}/>
                                    <Route exact path={`/${props.match.params.language}/services/brand`}  component={BrandPage}/>
                                    <Route exact path={`/${props.match.params.language}/aboutus`}  component={AboutUs} />
                                    <Route exact path={`/${props.match.params.language}/blog`}  component={Blog} />
                                    <Route exact path={`/${props.match.params.language}/blog/:blogitem`} component={BlogItem} />
                                    <Route exact path={`/${props.match.params.language}/portfolio`} component={Portfolio} />
                                    <Route exact  path={`/${props.match.params.language}/portfolio/:portfolioitem`}  component={PortfolioItem} />
                                </Switch>


                            </CSSTransition>
                            {props.location.pathname.match(/services\//gi) ?  null  : <Footer/> }
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
        )
    }
}

export default App

