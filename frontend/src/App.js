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
import Helmet from "react-helmet";

class App extends Component {

  constructor() {
    super()

    this.state = {
        cook: true
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

    return (
      <div className="App">
          <Helmet
              htmlAttributes={{lang: "en"}}
              title="Dside Branding Agency"
              titleTemplate="dside.pl - %s"
              defaultTitle="Dside Branding Agency"
              titleAttributes={{itemprop: "name", lang: "en"}}
              meta={[
                  {name: "charset-8", content: "Dside Branding Agency"},
                  {name: "description", content: "Dside Branding Agency"},
                  {name: "viewport", content: "width=device-width"},
                  {property: "og:type", content: "article"}
              ]}
              link={[
                  {rel: "canonical", href: "http://mydside.com"},
                  {rel: "apple-touch-icon", href: "http://mydside.com/img/apple-touch-icon-57x57.png"},
                  {rel: "apple-touch-icon", sizes: "72x72", href: "http://mydside.com/img/apple-touch-icon-72x72.png"}
              ]}

              script={[
                  {src: "http://include.com/pathtojs.js", type: "text/javascript"},
                  {type: "application/ld+json", innerHTML: `{ "@context": "http://schema.org" }`}
              ]}
              noscript={[
                  {innerHTML: `<link rel="stylesheet" type="text/css" href="foo.css" />`}
              ]}
              style={[
                  {type: "text/css", cssText: "p {font-size: 12px;}"}
              ]}

          />

        <Route render={(props) => {


          return(

              <TransitionGroup>
                {props.location.pathname.match(/services\//gi) ?  <Header style={'none'}/>  : <Header style={'block'}/> }
            <CSSTransition key={props.location.key} timeout={300} classNames="fade">
              <Switch>
                <Route exact path="/services/logo" component={LogoPage}/>
                <Route exact path="/services/brand" component={BrandPage}/>
                <Route exact path="/services/videos" component={VideoPage}/>
                <Route exact path="/services/website" component={Website}/>
                <Route exact path="/contactus" component={ContactUs}/>
                <Route path="/" component={MainPages}/>
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

              <div className="cook__button golden">
                <p onClick={this.confirmCookies}>Agree</p>
              </div>

            </div>
          </div> : null
        }
      </div>
    )
  }
}

export default App
