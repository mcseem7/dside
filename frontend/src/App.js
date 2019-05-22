import React, { Component, Fragment, createElement } from "react";
import './components/App.css'
import { Link, Switch, Route} from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Cookies from 'js-cookie'
import Header from './components/Basic/Header/index';
import 'regenerator-runtime/runtime';
import Translate from "translate-components";
import { reactTranslateChangeLanguage, TranslateProvider } from "translate-components";
import translations from './translations.json'
import clock from './clock.svg'
import Welcome from './Welcome'
import $ from 'jquery'


class App extends Component {

    constructor() {
        super()

        this.state = {
            cook: true,
            mounted: false,
            orientation: false,
            preload: false
        }

    }

    componentWillMount() {
        const getIdentityDomen = this.props.domen
        if (!getIdentityDomen || getIdentityDomen === '') {
            this.setState({ langPoppup: false })
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.setState({mounted: true})
        this.setState({lang: localStorage.getItem('lang')})
        const spinner = $('#loading');
        if (spinner && !$(spinner).addClass('final_render loaded')) {
          $(spinner).addclass('final_render loaded')
        }
        window.addEventListener("onload", () => {
            this.checkOrient()
        }, false);
        if (Cookies.get('accept-cookie') === undefined) {
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
        const { routes, initialData } = this.props;
        console.log('App Lang', this.state.lang);
        console.log('App Props', this.props);
        return (
            <TranslateProvider translations={translations} debugMode={true} defaultLanguage={'en'}>
                <Fragment>
                    {
                        this.state.orientation ? <Fragment>
                            <div className="stop_rotation">
                                <div className="stop_rotation_contant_wrapper">
                                    <div className="stop_rotation_content_img_wrapper">
                                        <img className="stop_rotation_content_img" viewBox="0 0 250 250" src={clock} alt="" />
                                    </div>
                                    <h3 className="stop_rotation_content_h3"></h3>
                                    <p className="stop_rotation_content_p">Proszę<br />obrócić<br />urządzenie</p>
                                </div>
                            </div>
                        </Fragment> : null
                    }
                </Fragment>
                
                { <div className="App">
             <Route exact path='/' component={Welcome} />
             <Route path={'/:language'} render={(props) => {
                 const matchUrl = ['aboutus', 'contactus', 'process', 'portfolio', 'cookies-policy'].indexOf(props.location.pathname.substr(4));
                 function getHeader() {
                 if (matchUrl === -1 ) {
                    return (<Header domenErty={props.match.params.language} style={'block'} name="dark" />)
                 } else {
                     return (
                        <Header domenErty={props.match.params.language} style={'none'} name="light" />
                     )
                 }
                }
                 return (
                     <TransitionGroup>

                         {getHeader()}
                        
                         <CSSTransition  key={props.location.key} timeout={1000} classNames="fade">
                        
                             <Switch>
                                 
                            { Array.prototype.map.call(routes, ((route, index) => {
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
                     </TransitionGroup>)
             }} />



             {this.state.cook ?
                 <div className="cookies-container">

                     <div className="privacy__warning">
                         <p className="cook__description">
                            <Translate>Did you know? This website uses cookies to ensure you get the best experience on our website.</Translate> <Link to={`/${this.state.lang}/cookies-policy`}><Translate>Learn more</Translate></Link>
                         </p>

                         <div className="cook__button">
                             <p onClick={this.confirmCookies}><Translate>Agree</Translate></p>
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
