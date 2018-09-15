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






class App extends Component {

    constructor() {
        super()

        this.state = {
            cook: true,
            langPoppup: false
        }
    }

    componentWillMount() {
        const getIdentityDomen = window.location.hostname.split('.')[1]
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
        const itemLang = localStorage.setItem('lang', this.props.domen)
        return (
            <div className="App">

                <Route render={(props) => {
                    console.log(props)
                    return(
                        <TransitionGroup>
                            {props.location.pathname.match(/services\//gi) ?  <Header style={'none'}/>  : <Header style={'block'}/> }
                            <CSSTransition key={props.location.key} timeout={300} classNames="fade">
                                <Switch>
                                    <Route path={`/`}     render={(props) => { return <MainPages {...props} /> } } />
                                    <Route path={`/${this.props.domen}`}     render={(props) => { return <MainPages {...props} /> } } />
                                    <Route exact path="/services/logos" component={LogoPage}/>
                                    <Route exact path="/services/brand" component={BrandPage}/>

                                    <Route exact path="/services/videos" component={VideoPage}/>
                                    <Route exact path="/services/website" component={Website}/>
                                    <Route exact path="/contactus" component={ContactUs}/>

                                    <Route path="/notfound" component={NotFound}/>
                                </Switch>
                            </CSSTransition>
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

