import React from 'react';
import { NavLink, Link, withRouter } from "react-router-dom";
import EN from "./uk.svg";
import PL from "./poland.svg";
import RU from "./russia.svg";
var LangEN = EN;

var LangRU = RU;
var LangPL = PL;

 class LanguagePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         lang: ''
        };
    }
    componentDidMount() {
      console.log('Component Mounted')
  }
    alreadyUpdate = (data) => {
      localStorage.setItem('lang', `${data}`)
      if (`${data}` != this.state.lang){
      const {location} = this.props
      this.props.history.push(`/${data + location.pathname.substr(3)}`)
      this.setState({lang: localStorage.getItem('lang')})
          console.log('Setting Lang', `${data}`)
      }else{console.log('Lang is active already!!', `${data}`)}
  }
    render() {
        const {history, location} = this.props;
        if (this.state.lang = 'en'){
            var controllerLang = LangEN;
        } else if (this.state.lang = 'ru'){
            var controllerLang = LangRU;
        } else {
             var controllerLang = LangPL;
        } {/*className={langClass('/en', `${location.pathname.substr(2)}`)} >*/}
         {/*const langClass = (route) => { return ('/' + this.state.lang + location.pathname.substr(3)) === (route + location.pathname.substr(3)) ? "active" : "inactive" }*/}
        console.log('Finaly!!', this.state.lang);
        return (
            <React.Fragment>
                 <div className='langcode'>
                  <ul>
                  <li onClick={() => {
                      this.alreadyUpdate('en')
                    }}   >

                         <img src={controllerLang}/>
                      <ul>
                           <li  onClick={() => {
                      this.alreadyUpdate('ru')
                    }} >
                          <img src={RU} />
                   </li>
                           <li onClick={() => {
                      this.alreadyUpdate('pl')
                    }}  >
                           <img src={PL}/>

                   </li></ul>
                   </li>
                 </ul>
              </div>

            </React.Fragment>
        );
    }
}

export default withRouter(LanguagePicker)