import React, {Component} from 'react'
import './index.css'
import auto from './auto.svg'
import logoRed from './dsideLogo.svg'
import shahmat from './shahmat.svg'
import horse from './horse.svg'
import memory from './memoru.svg'
import web from './web.svg'
import Max from './peopleCompany/Max.png'
import Vova from './peopleCompany/Volodymyr.png'
import lorem1 from './peopleCompany/lorem1.png'
import lorem2 from './peopleCompany/lorem2.png'
import lorem3 from './peopleCompany/lorem3.png'
import lorem4 from './peopleCompany/lorem4.png'
import lorem5 from './peopleCompany/lorem5.png'

export default class AbotUs extends Component {
  constructor() {
    super()

  }

  componentDidMount() {
    window.scrollTo(0, 0)
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
                    <h4>What dside?</h4>
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


                  <div className="dside__team-man">

                    <img src={Max} alt=""/>

                  </div>


                  <div className="dside__team-man">

                    <img src={Vova} alt=""/>

                  </div>

                  <div className="dside__team-man">

                    <img src={lorem1} alt=""/>

                  </div>

                  <div className="dside__team-man">

                    <img src={lorem2} alt=""/>

                  </div>
                  <div className="dside__team-man">

                    <img src={lorem3} alt=""/>

                  </div>
                  <div className="dside__team-man">

                    <img src={lorem4} alt=""/>

                  </div>
                  <div className="dside__team-man">

                    <img src={lorem5} alt=""/>

                  </div>


                </div>


              </div>



            </div>
          </div>
        </div>
    )
  }
}