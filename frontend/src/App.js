import React, { Component } from 'react'
import Layout from './components'
import './components/App.css'
import Footer from './components/Basic/Footer'
import { Switch, Route, Redirect } from 'react-router-dom'
import ContactUs from './components/CompanyPages/ContactUs'
import MainPages from './components/index'
import LogoPage from './components/CompanyPages/Services/logos'
import BrandPage from './components/CompanyPages/Services/branding'
import VideoPage from './components/CompanyPages/Services/videos'
import Website from './components/CompanyPages/Services/websites'
import {CSSTransition,TransitionGroup} from 'react-transition-group'

class App extends Component {

  constructor() {
    super()

    this.state = {
      cook: true
    }
  }

  componentDidMount() {
    window.scrollTo(0,0)
  }

  confirmCookies = () => {
    this.setState({cook: false})
  }

  render () {
    return (
      <div className="App">
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={1000} classNames="fade">
              <Switch>
                <Redirect exact from="/" to="/dside"/>
                <Route path="/dside" component={MainPages} />
                <Route path="/services/logo" component={LogoPage} />
                <Route path="/services/brand" component={BrandPage} />
                <Route path="/services/videos" component={VideoPage} />
                <Route path="/services/website" component={Website} />
                <Route path="/services/contactus" component={ContactUs} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
        {this.state.cook ?
          <div className="cookies-container">

            <div className="privacy__warning">
              <p className="cook__description">
                Мы используем куки-файлы, чтобы улучшить ваше восприятие нашего
                сайта.
                Вы можете увидеть, какие куки-файлы сохранены на вашем
                устройстве с помощью настроек куки.
                Просматривая наш сайт, вы соглашаетесь с использованием нами
                куки-файлов.
              </p>

              <div className="cook__button">
                <p onClick={this.confirmCookies}>Я согласен</p>
              </div>

            </div>
          </div> : null
        }
      </div>
    )
  }
}

export default App
