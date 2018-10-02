import React, {Component} from 'react'
import './index.css'
import auto from './auto.svg'
import logoRed from './dsideLogo.svg'
import shahmat from './shahmat.svg'
import horse from './horse.svg'
import memory from './memoru.svg'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import web from './web.svg'
import Max from './peopleCompany/Max.png'
import Vova from './peopleCompany/Volodymyr.png'
import Ruslan from './peopleCompany/lorem1.png'
import Pavel from './peopleCompany/lorem2.png'
import Valentyn from './peopleCompany/lorem3.png'
import Maksym from './peopleCompany/lorem4.png'
import Oleksii from './peopleCompany/lorem5.png'
import arrow from './arrowMeet.png'
import Translate from 'translate-components'
import { reactTranslateChangeLanguage } from 'translate-components'

export default class AbotUs extends Component {
  constructor() {
    super()

    this.state = {
      dataTeam: [
        {
          active: false,
          checkName: 'Max',
          img: Max,
          information: {
            name: 'Maksym Vydyborets',
            position: 'Head Designer at Dside',
            description: 'short bio testimonialsshort bio testimonialsshort bio testimonialsshort bio testimonialsshort bio testimonialsshort bio testimonials',
            behance: '#',
            instagram: '#'
          }
        },
        {
          active: false,
          checkName: 'Vova',
          img: Vova,
          information: {
            name: 'Volodymyr Piskun',
            position: 'Senior Backend Developer at Dside',
            description: 'short bio testimonialsshort bio testimonialsshort bio testimonialsshort bio testimonialsshort bio testimonialsshort bio testimonials',
            behance: '#',
            instagram: '#'
          }
        },
        {
          active: false,
          checkName: 'Ruslan',
          img: Ruslan,
          information: {
            name: 'Ruslan Khlopieckiy',
            position: 'Designer at Dside',
            description: 'short bio testimonialsshort bio testimonialsshort bio testimonialsshort bio testimonialsshort bio testimonialsshort bio testimonials',
            behance: '#',
            instagram: '#'
          }
        },
        {
          active: false,
          checkName: 'Pavel',
          img: Pavel,
          information: {
            name: 'Pavel Litvinau',
            position: 'Designer at Dside',
            description: 'short bio testimonialsshort bio testimonialsshort bio testimonialsshort bio testimonialsshort bio testimonialsshort bio testimonials',
            behance: '#',
            instagram: '#'
          }
        },
        {
          active: false,
          checkName: 'Valentyn',
          img: Valentyn,
          information: {
            name: 'Valentyn Podiias',
            position: 'Designer at Dside',
            description: 'short bio testimonialsshort bio testimonialsshort bio testimonialsshort bio testimonialsshort bio testimonialsshort bio testimonials',
            behance: '#',
            instagram: '#'
          }
        },
        {
          active: false,
          checkName: 'Maksym',
          img: Maksym,
          information: {
            name: 'Maksym Parfeniuk',
            position: 'Designer at Dside',
            description: 'short bio testimonialsshort bio testimonialsshort bio testimonialsshort bio testimonialsshort bio testimonialsshort bio testimonials',
            behance: '#',
            instagram: '#'
          }
        },
        {
          active: false,
          checkName: 'Oleksii',
          img: Oleksii,
          information: {
            name: 'Oleksii Taran',
            position: 'Designer at Dside',
            description: 'short bio testimonialsshort bio testimonialsshort bio testimonialsshort bio testimonialsshort bio testimonialsshort bio testimonials',
            behance: '#',
            instagram: '#'
          }
        }
     ],
      activeTeam: true,
      result: {}
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  showInformation = (teamMan) => {
    this.setState({activeTeam: false})
    this.state.dataTeam.map((item) => {
      if(teamMan == item.checkName) {
      this.setState({result: item})
      }
    })
  }

  hideMeetDeveloper = () => {
    this.setState({activeTeam: true})
  }

  componentDidUpdate() {
    reactTranslateChangeLanguage.bind(this, localStorage.getItem('lang'))()
  }

  render() {
    return(
        <div>
          <div className="aboutus__container">

            <div className="aboutus__wrapper">

            <div className="aboutus__title-advantage">
              <h1>advantage</h1>
            </div>


              <div className="about__us-content">

               <div className="dside__shahmat-img">
                 <img src={shahmat} alt=""/>
               </div>

                <div className="dside__what-about">

                <div className="dside__red-logo">
                  <img src={logoRed} alt=""/>
                </div>

                <div className="dside__what-content">
                  <div className="title__what">
                      <h4><Translate>What dside?</Translate></h4>
                  </div>

                  <div className="about__company-dside">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                      laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab il</p>
                  </div>
                </div>
                </div>

                <div className="dside__about-content">


                  <div className="dside__whyus-content">

                    <div className="title__whyus">
                      <h5>why us?</h5>
                    </div>

                    <div className="about__dside-process">

                      <ul className="dside__business_process">

                        <li>
                          <div className="logo__process logo__business__automated">
                            <img src={auto} alt=""/>
                          </div>
                          <div className="title__business-process">
                            <div className="number__bus-process">
                              01
                            </div>
                            <div className="business__title">
                              <p>Automated business</p>
                            </div>
                          </div>
                          <div className="description__business-process">
                            <p>Do so that your business is
                              working while you are solving
                              more important issues</p>
                          </div>
                        </li>

                        <li>
                          <div className="logo__process logo__business__automated">
                            <img src={horse} alt=""/>
                          </div>
                          <div className="title__business-process">
                            <div className="number__bus-process">
                              02
                            </div>
                            <div className="business__title">
                              <p>Brand yourself</p>
                            </div>
                          </div>
                          <div className="description__business-process">
                            <p>Branded companies sell their
                              products much more expensive,
                              what's stopping you?</p>
                          </div>
                        </li>

                        <li>
                          <div className="logo__process logo__business__automated">
                            <img src={memory} alt=""/>
                          </div>
                          <div className="title__business-process">
                            <div className="number__bus-process">
                              03
                            </div>
                            <div className="business__title">
                              <p>Memorable logos</p>
                            </div>
                          </div>
                          <div className="description__business-process">
                            <p>Make your client remember
                              your company</p>
                          </div>
                        </li>

                        <li>
                          <div className="logo__process logo__business__automated">
                            <img src={web} alt=""/>
                          </div>
                          <div className="title__business-process">
                            <div className="number__bus-process">
                              04
                            </div>
                            <div className="business__title">
                              <p>Expirienced websites</p>
                            </div>
                          </div>
                          <div className="description__business-process">
                            <p>Which perform specific
                              business tasks</p>
                          </div>
                        </li>
                        
                      </ul>

                    </div>

                  </div>


                </div>

              </div>
              <div className="dside__meet_team">

                <div className="meet__team-title">
                  <h4>meet our team</h4>
                </div>


                  <div className="meet__team__dside">



<div  className={`fade__team ${this.state.activeTeam ? 'fadeNo' : ''}`} >
                    <div className="dside__team-man"
                         onClick={() => this.showInformation('Max')}>

                      <img src={Max} alt=""/>

                    </div>


                    <div className="dside__team-man"
                         onClick={() => this.showInformation('Vova')}>

                      <img src={Vova} alt=""/>

                    </div>

                    <div className="dside__team-man">

                      <img src={Ruslan} alt=""   onClick={() => this.showInformation('Ruslan')}/>

                    </div>

                    <div className="dside__team-man">

                      <img src={Pavel} alt=""  onClick={() => this.showInformation('Pavel')}/>

                    </div>
                    <div className="dside__team-man">

                      <img src={Valentyn} alt="" onClick={() => this.showInformation('Valentyn')} />

                    </div>
                    <div className="dside__team-man">

                      <img src={Maksym} onClick={() => this.showInformation('Maksym')}  alt=""/>

                    </div>
                    <div className="dside__team-man">

                      <img src={Oleksii} onClick={() => this.showInformation('Oleksii')} alt=""/>

                    </div>
</div>

                    {this.state.activeTeam ? null :


                          <div className="dside__meet-developer">

                            <div className="left__data-dev">

                              <div className="photo__image-developer">
                                <img src={this.state.result.img} alt="" className={this.state.result.checkName} />
                              </div>

                            </div>

                            <div className="right__data-dev">

                              <div className="post_developer">

                                <div className="button__back-team" onClick={this.hideMeetDeveloper}>
                                  <img src={arrow} alt=""/>
                                </div>

                                <div className="developer__naming">
                                <div className="name-developer">
                                  <h4>{this.state.result.information.name}</h4>
                                </div>
                              
                                <div className="position-developer">
                                  <p>{this.state.result.information.position}</p>
                                </div>
                                </div>
                              </div>

                              <div className="about__developer">

                                <p>{this.state.result.information.description}</p>

                              </div>

                              <div className="contact__links-developer">

                                <a href='#' className="social__icon-behance">

                                </a>
                                <a href='#' className="social__icon-instagram">

                                </a>

                              </div>
                              
                            </div>

                          </div>

                      }



                  </div>



              </div>



            </div>
          </div>
        </div>
    )
  }
}