import React, { Component, Fragment } from 'react'
import './index.css'
import auto from './timer.svg'
import logoRed from './dsideLogo.svg'
import shahmat from './queen.png'
import horse from './horse.svg'
import memory from './head.svg'
import web from './planet.svg'
import Max from './peopleCompany/Max.png'
import Ruslan from './peopleCompany/lorem1.png'
import Pavel from './peopleCompany/lorem2.png'
import Valentyn from './peopleCompany/lorem3.png'
import Maksym from './peopleCompany/lorem4.png'
import Oleksii from './peopleCompany/lorem5.png'
import arrow from './arrow.svg'
import Translate from 'translate-components'
import { reactTranslateChangeLanguage } from 'translate-components'
import Helmet from 'react-helmet-async'
import Footer from '../../Basic/Footer';
import ScrollAnimation from 'react-animate-on-scroll'

export default class AboutUs extends Component {
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
            position: 'Managing Designer at DSIDE, founder',
            description: 'He has more than 140 projects done, including 5 large state ones. Maksym has been designing for over 8 years and knows perfectly well what your client wants to see. Worked as a teacher in the Kiev Polytechnic Institute in the direction of design. Also, spoke at the largest IT conferences in Ukraine.',
            behance: 'https://dishots.com/u/DSIDE',
            instagram: 'https://instagram.com/mcseem7'
          }
        },
        {
          active: false,
          checkName: 'Ruslan',
          img: Ruslan,
          information: {
            name: 'Ruslan Khlopieckiy',
            position: 'Сhief executive officer, co-founder',
            description: 'He graduated from the Institute of Management in Warsaw. Managed student self-government throughout Warsaw. He spoke at many conferences and has a strong business acumen.'
          }
        },
        {
          active: false,
          checkName: 'Pavel',
          img: Pavel,
          information: {
            name: 'Pavel Litvinau',
            position: 'Regional represantative in CZ',
            description: 'Organizer of mass events with ten years of experience. Regional represantative of DSIDE in Czech Republic.',
            instagram: 'https://www.instagram.com/pawel_litvinov/'
          }
        },
        {
          active: false,
          checkName: 'Valentyn',
          img: Valentyn,
          information: {
            name: 'Valentyn Podiias',
            position: 'Sales master',
            description: 'He has a five-year experience in stock trading. Can easily think of a way from an idea to a super-marketable product',
            instagram: 'https://www.instagram.com/valentyn/'
          }
        },
        {
          active: false,
          checkName: 'Maksym',
          img: Maksym,
          information: {
            name: 'Maksym Parfeniuk',
            position: 'Video Producer',
            description: 'Five years of commercial video experience. Can convey any emotion through video. Directing is his strong point.',
            instagram: 'https://www.instagram.com/maksparfilms'
          }
        },
        {
          active: false,
          checkName: 'Oleksii',
          img: Oleksii,
          information: {
            name: 'Oleksii Taran',
            position: 'Project manager, co-founder',
            description: 'This person can tell you how to improve your business. He will make your work with us convenient and easy. Has a business in 2 countries.'
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
    this.setState({ activeTeam: false })
    this.state.dataTeam.map((item) => {
      if (teamMan === item.checkName) {
        this.setState({ result: item })
      } return null;
    })

  }

  hideMeetDeveloper = () => {
    this.setState({ activeTeam: true })
  }

  componentDidUpdate() {
    reactTranslateChangeLanguage.bind(this, localStorage.getItem('lang'))()
  }

  render() {

    return (
      <Fragment>

      <div>
        <Helmet>
          <title> Dside About </title>
        </Helmet>
        <div className="aboutus__container">
          <div className="aboutus__wrapper">
            <div className="aboutus__title-advantage">
              <h1><Translate>advantage</Translate></h1>
            </div>
            <div className="about__us-content">
              <div className="dside__shahmat-img">
                <img src={shahmat} width={110} alt="" />
              </div>
              <div className="dside__what-about">
                <div className="dside__red-logo">
                  <img src={logoRed} alt=""/>
                </div>
                <div className="dside__what-content">

                  <div className="about__company-dside">
                    <p><Translate>DSIDE - Not another digital agency. DSIDE is a digital agency that is advised. It was founded in 2017 in Warsaw.</Translate>
                    </p>
                  </div>
                </div>
              </div>


            </div>
            <div className="dside__meet_team" >

              <div className="meet__team-title">
                <h4>{this.state.activeTeam ? <Translate>meet our team</Translate> : null}</h4>
              </div>


              <div className="meet__team__dside" >



                <div className={`fade__team ${this.state.activeTeam ? 'fadeNo' : ''}`} >
                  <div className="dside__team-man"
                    onClick={() => this.showInformation('Max')}>
                    <img src={Max} alt="" />
                  </div>

                  <div className="dside__team-man">
                    <img src={Ruslan} alt="" onClick={() => this.showInformation('Ruslan')} />
                  </div>

                  <div className="dside__team-man">
                    <img src={Pavel} alt="" onClick={() => this.showInformation('Pavel')} />
                  </div>
                  <div className="dside__team-man">
                    <img src={Valentyn} alt="" onClick={() => this.showInformation('Valentyn')} />
                  </div>
                  <div className="dside__team-man">
                    <img src={Maksym} onClick={() => this.showInformation('Maksym')} alt="" />
                  </div>
                  <div className="dside__team-man">
                    <img src={Oleksii} onClick={() => this.showInformation('Oleksii')} alt="" />
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
                          <img src={arrow} alt="" />
                        </div>

                        <div className="developer__naming">
                          <div className="name-developer">
                            <h4><Translate>{this.state.result.information.name}</Translate></h4>
                          </div>

                          <div className="position-developer">
                            <p><Translate>{this.state.result.information.position}</Translate></p>
                          </div>
                        </div>
                      </div>

                      <div className="about__developer">

                        <p><Translate>{this.state.result.information.description}</Translate></p>

                      </div>

                      <div className="contact__links-developer">

                        {
                          this.state.result.information.behance === undefined ? null : <a href={this.state.result.information.behance}  target='_blank' className="social__icon-behance" > </a>
                        }




                        {
                          this.state.result.information.instagram === undefined ? null : <a href={this.state.result.information.instagram} target='_blank'  className="social__icon-instagram" > </a>
                        }

                      </div>

                    </div>
                  </div>

                }



              </div>



            </div>



          </div>
        </div>
        <div className="about__us-content second-cont">
        <div className="dside__about-content">


                <div className="dside__whyus-content">


                  <div className="about__dside-process">

                    <ul className="dside__business_process">
                      <li>
                        <div className="logo__process logo__business__automated">
                          <img src={auto} alt="" />
                        </div>
                        <div className="title__business-process">
                          <div className="number__bus-process">
                            01
                            </div>
                          <div className="business__title">
                            <p><Translate>Automated business</Translate></p>
                          </div>
                        </div>
                        <div className="description__business-process">
                          <p><Translate>Do so that your business is
                            working while you are solving
                              more important issues</Translate></p>
                        </div>
                      </li>
                      <li>
                        <div className="logo__process logo__business__automated">
                          <img src={memory} alt="" />
                        </div>
                        <div className="title__business-process">
                          <div className="number__bus-process">
                            02
                            </div>
                          <div className="business__title">
                            <p><Translate>Create brand yourself</Translate></p>
                          </div>
                        </div>
                        <div className="description__business-process">
                          <p><Translate>Branded companies sell their
                            products much more expensive,
                              what's stopping you?</Translate></p>
                        </div>
                      </li>
                      <li>
                        <div className="logo__process logo__business__automated">
                          <img src={horse} alt="" />
                        </div>
                        <div className="title__business-process">
                          <div className="number__bus-process">
                            03
                            </div>
                          <div className="business__title">
                            <p><Translate>Memorable logos</Translate></p>
                          </div>
                        </div>
                        <div className="description__business-process">
                          <p><Translate>Make your client remember
                              your company</Translate></p>
                        </div>
                      </li>
                      <li>
                        <div className="logo__process logo__business__automated">
                          <img src={web} alt="" />
                        </div>
                        <div className="title__business-process">
                          <div className="number__bus-process">
                            04
                            </div>
                          <div className="business__title">
                            <p><Translate>Expirienced websites</Translate></p>
                          </div>
                        </div>
                        <div className="description__business-process">
                          <p><Translate>Which perform specific
                              business tasks</Translate></p>
                        </div>
                      </li>
                    </ul>

                  </div>

                </div>


              </div>
              </div>
      </div>
      <Footer/>
      </Fragment>
    )
  }
}