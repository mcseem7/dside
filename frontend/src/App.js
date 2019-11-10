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
import TweenLite, { TweenMax, TimelineLite } from 'gsap'
import $ from 'jquery'


class App extends Component {

    constructor() {
        super();
        this.state = {
            cook: true,
            mounted: false,
            orientation: false,
            loaderExists: true,
            appLoaded: true
        }
        this.loaderWrap = '.loader';
        this.loaderTween = null;
        this.appTween = null;
        this.cottonWrap = '#cotton';
        this.appWrap = '.App';
        this.toggleLoaderHandler = this.toggleLoaderHandler.bind(this);
    }

    componentWillMount() {
        const getIdentityDomen = this.props.domen;
        if (!getIdentityDomen || getIdentityDomen === '') {
            this.setState({ langPoppup: false })
        }
    }

    componentDidMount() {
        this.loaderTween = TweenLite.to(this.loaderWrap, 1, {
			y: "-100%", ease: 'Expo.easeInOut', delay: 2.8,
			onComplete: () => {
				this.setState({ loaderExists: false });
                document.body.classList.add('loaded');
			}
		});
        TweenLite.from(this.cottonWrap, 1, {
			y: "100%", ease: 'Back.easeInOut', delay: 0.4,
		});

        TweenMax.staggerFrom('.animlogo-preloader-path', 1, {
			y:"200%", grid:'auto', opacity:.3, delay: 0.7, each: 0.1, from: 1, ease: 'Back.easeInOut',
		}, 0.2);
        TweenLite.from('.dot', 1, {
			scale: '3', opacity: 0, transformOrigin:"50% 50%", ease: 'Back.easeInOut', delay: 2.2,
		});
        TweenLite.from('.loading-text', 1, {
			y: '-200', opacity: 0, transformOrigin:"50% 50%", ease: 'Back.easeInOut',
		});
        setTimeout(function() {
        this.appTween = TweenLite.from(this.appWrap, 1, {
			y: "50%", ease: 'Expo.easeInOut',
        });
            window.scrollTo(0, 0);
         }.bind(this), 2800);
        this.setState({mounted: true});
        this.setState({lang: localStorage.getItem('lang')});
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

    toggleLoaderHandler() {
      this.loaderTween.reversed(!this.loaderTween.reversed());
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
        console.log('updateapp', this);
        const { routes, initialData } = this.props;
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
                {this.state.loaderExists && (<div className="loader" id="loader"><span className="loading-text">That's your chance.</span>
<svg id="preloaderlogo" version="1.1" x="0px" y="0px"
	 viewBox="-347 578.5 722.3 260.8" style={{ 'enable-background':'new -347 578.5 722.3 260.8'}}>
<title>dsideLogo</title>
<rect x="-347" y="578.5" class="cotton-bg-logo" id="cotton" width="722.3" height="260.8"/>
<g>
    <path class="animlogo-preloader-path" d="M-129,685.1C-129,685.1-129,685.1-129,685.1c-6.3-15-18.2-26.9-33.2-33.2c0,0,0,0,0,0c-2.8-1.2-5.8-2.2-8.8-3
		c-1-0.3-2-0.5-3-0.7c-2-0.4-4.1-0.7-6.1-0.9c-2.1-0.2-4.1-0.3-6.2-0.3H-238v0v124.6v0h51.6c1,0,2.1,0,3.1-0.1
		c7.2-0.4,14.4-1.9,21.1-4.8c0,0,0,0,0,0c15-6.3,26.9-18.2,33.2-33.2c2.8-6.8,4.4-13.9,4.8-21.1c0.1-1,0.1-2.1,0.1-3.1
		s0-2.1-0.1-3.1C-124.6,699-126.2,691.9-129,685.1z"/>
    <path class="animlogo-preloader-path" d="M-40.1,708.9c-2.5-1.7-5.1-3.3-7.9-4.6c-2.7-1.3-5.1-2.5-7.3-3.4c-1.9-0.8-3.9-1.5-5.8-2.1
		c-1.7-0.5-2.8-0.8-3.4-1.1l-2.1-0.5c-2.1-0.6-4.4-1.2-6.9-2c-2.5-0.7-4.8-1.6-7.1-2.8c-2.4-1.2-4.6-2.8-6.4-4.8
		c-2.1-2.2-3.3-5.1-3.2-8.1c0-5.2,2.6-9.4,7.8-12.6c2-1,4-1.8,6.2-2.3c2.3-0.6,4.7-0.9,7.1-0.9c5.4,0,10.7,1.2,15.6,3.5
		c1.5,0.8,3,1.7,4.4,2.8c1.8,1.3,3.5,2.7,5,4.3c0.1,0.1,0.2,0.1,0.2,0.2l15-15.2c0,0-0.1-0.1-0.1-0.1l0,0c-0.1-0.1-0.2-0.1-0.2-0.2
		c-0.7-0.6-1.6-1.4-2.6-2.1c-0.2-0.1-0.3-0.3-0.5-0.4c-1.4-1.1-2.9-2.2-4.5-3.1c-4.4-2.4-9-4.4-13.8-6c-5.8-2-12.9-3-21.4-3
		c-4.8,0-9.5,0.7-14.1,2c-4.7,1.3-9.1,3.5-13,6.5c-4,3.1-7.3,7.1-9.5,11.7c-2.4,4.8-3.6,10.6-3.6,17.6c0,8.5,3.6,16,10.7,22.3
		c1.6,1.5,3.5,2.9,5.5,4.3c4.4,2.9,9,5.3,13.9,7.2c4.7,1.8,8.2,3,10.7,3.7c0.3,0.2,0.7,0.3,1.1,0.4c0.4,0.2,0.8,0.4,1.2,0.4
		c0.5,0.1,1.1,0.3,1.6,0.5c1.9,0.6,4,1.2,6.4,2c2.3,0.7,4.6,1.6,6.7,2.8c2.4,1.1,4.6,2.6,6.4,4.6c1.1,1.3,2,2.7,2.6,4.3
		c0.4,1.1,0.5,2.3,0.5,3.5c0.1,4.7-2.2,9.1-6,11.7c-2,1.4-4.2,2.4-6.6,3.1c-2.7,0.8-5.6,1.2-8.4,1.2c-2.2,0-4.3-0.2-6.4-0.5
		c-2.8-0.4-5.6-1.2-8.3-2.3c-4.8-1.8-9.3-4.6-13.1-8.1l-14.7,14.7c0.1,0,0.1,0.1,0.2,0.1l-0.1,0.1c5.8,4.5,12.1,8.1,19,10.7
		c8.3,3.3,17.2,4.8,26.2,4.7c5.7,0.1,11.3-0.8,16.6-2.7c4.7-1.6,9-4.2,12.7-7.5c3.5-3.3,6.3-7.4,8-11.9c2-5,2.9-10.3,2.8-15.7
		C-23,725.4-28.7,716.5-40.1,708.9z"/>
    <path class="animlogo-preloader-path" d="M-10.3,647.3 -10.3,771 -10.3,771.1 10.9,771.1 10.9,771 11,771 10.9,647.3 Z	"/>
     <path class="animlogo-preloader-path" d="M132.7,675.4c-6.7-10.3-16.3-18.5-27.8-23.3c0,0,0,0,0,0c-2.8-1.2-5.8-2.2-8.8-3c-1-0.3-2-0.5-3-0.7
		c-2-0.4-4.1-0.7-6.1-0.9s-4.1-0.3-6.2-0.3H29.4v0V771v0.1h51.3c8.3,0,16.5-1.6,24.1-4.9c14.9-6.3,26.7-18.1,33-33
		c3.3-7.8,4.9-16,4.9-24.2c0-8.2-1.6-16.4-4.9-24.1C136.4,681.6,134.6,678.4,132.7,675.4z M80.7,668.4c5.3,0,10.6,1,15.6,3.1
		c6.5,2.6,12.1,6.9,16.4,12.3c1.9,2.5,3.6,5.3,5,8.2c0.2,0.5,0.4,1,0.6,1.5c2,5,3.1,10.3,3.1,15.6c0,5.3-1,10.6-3.1,15.6
		c-4.1,10-12,18-22,22c-5,2.1-10.3,3.1-15.6,3.1H50.6v-81.3H80.7z"/>
    <path class="animlogo-preloader-path" d="M156.1,647.1 156,647.1 156,771 156.1,771 239.4,771 239.5,771 239.5,749.8 239.4,749.8 177.3,749.8
		177.3,719.7 222.1,719.7 230.3,698.5 177.3,698.5 177.3,668.4 239.5,668.4 239.5,647.1 239.4,647.1 Z	"/>
	<path class="dot" d="M278.6,750 257,750 257,771.6 278.7,771.6 Z"/>
</g>
</svg>
                </div>)}
                { <div className={ this.state.appLoaded === true ? "App loading" : "App loaded" } >
             <Route exact path='/' component={Welcome} />
             <Route path={'/:language'} render={(props) => {
                 const matchUrl = ['aboutus', 'contactus', 'process', 'pricing', 'pricing2', 'portfolio', 'cookies-policy', ''].indexOf(props.location.pathname.substr(4));
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
<div>
                         {getHeader()}


                             <Switch>

                            { Array.prototype.map.call(routes, ((route, index) => {
                return (

                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        render={props => (
            <Content
                {...props}
                component={route.component}
                initialData={initialData || null}
            />
        )}

                    />
                );
            }))}

                             </Switch>
                             </div>)
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

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const Component = this.props.component;

        return (
            this.props.component &&
            (
                <CSSTransition timeout={1000} classNames="fade">
                    <Component />
                </CSSTransition>
            )
        )
    }
};

export default App
