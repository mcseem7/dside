import React, { Component, Fragment } from 'react'
import HeaderPost from '../Header__Post/index'
import About from './About__block/index'
import Slider from './Slider/index'
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
      <Fragment>
       
      <div> 
      
       <Helmet>
        <title>
          Dside Home
        </title>
      </Helmet>
      
      <div className="complex__content">
        <Slider  {...this.props} />
         <About/>
        <HeaderPost lang={this.state.langVars} />
      </div>
      <Footer/>
      </div>
      </Fragment>
    )
  }
}

export const LangContextConsumer = LangContext.Consumer