import React, { Component,Fragment } from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'
import { reactTranslateChangeLanguage } from "translate-components";

 class PortolioPost extends Component {
    constructor(props) {
        super(props)


        this.state = {
            itemId: [],
            lang: ''
        }
    }

    componentDidMount() {
      reactTranslateChangeLanguage.bind(this, localStorage.getItem('lang'))()
      this.setState({lang: localStorage.getItem('lang')})
    }



    render() {
    return (
<Fragment> {
  this.props.dataDside.map((item, key) => {
     var agrePullo = '' + key + '00';
          return(
    <div className="grid" >
      <figure className="effect-marley">
                <div>
                 <Link  to={`/${this.state.lang}/portfolio/${item.CURL}`}>
         <ScrollAnimation delay={agrePullo} animateIn="slideInUp" ><img src={`${process.env.REACT_APP_DOMAIN}/${item.thumbnail}`}
             alt={item.name}/></ScrollAnimation>
        <figcaption style={{'--tooltip-color':item.hovercolor}}>
          <h2>{item.name}</h2>
          {
            <span>{item.category.name}</span>
        }

        </figcaption>
            </Link>
            </div>

<noindex><a href={item.projectlink} className="montelink" rel="nofollow" target="_blank">{item.projectlink}</a></noindex>
      </figure>

    </div>
            )
  })
}
</Fragment>
    )
  }

}

export default  PortolioPost
