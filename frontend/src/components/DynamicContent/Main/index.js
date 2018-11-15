import React, { Component } from 'react'
import HeaderPost from '../Header__Post/index'
import About from './About__block/index'
import Works from './Works__Company/index'
import Services from './Services/index'
import {Route} from 'react-router-dom'
import Helmet from 'react-helmet-async'
import Footer from '../../Basic/Footer';


const LangContext = React.createContext({
    value: '10'
})




export default class Main extends Component {
  constructor (props) {
    super(props)

    this.state = {
        langVars: []
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
 
     this.setState({langVars: this.props})
  }


  render () {
    return (
      <div> 
    
       <Helmet>
        <title>
          Dside Home
        </title>
      </Helmet>
      
      <div className="complex__content">
        <HeaderPost lang={this.state.langVars} />
        <Works  {...this.props} />
        <Services {...this.props} />
      </div>
      <Footer/>
      </div>
    )
  }
}

export const LangContextConsumer = LangContext.Consumer