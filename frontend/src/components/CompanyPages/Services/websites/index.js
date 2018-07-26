import React, { Component, Fragment } from 'react'
import HeaderService from '../serviceComponents/HeaderService/index'
import CaseService from '../serviceComponents/CaseService/index'
import LimitedService from '../serviceComponents/LimitedService'
import LogoBrand from './images/Layer 120.png'
import Vova from './images/vova__dside.png'
import Versus from './images/Layer 123.png'
import BakerAndrew from './images/baker__andrew.svg'
import './index.css'

export default class Website extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <Fragment>
        <div>
          <HeaderService
              logoHeader={LogoBrand}
              stylelogotext={'logo__service-text_website'}
              serviceSlogan={'DSIDE to make your website DO'}
              imgLogoPosition={'logo__service-img_website'}
              textContainer={'dside_textContainer-website'}
              textHeader={[<p>Webstes</p>, <p>That sell</p>, <p>your</p>, <p>goods</p>]}
          />

          <section className="developers__quality">

            <div className="developer__left-content">

              <div className="contentby__vova">
              <h3>Quality implemented  website</h3>
              <p>is the key to a successful and scalable business</p>
              </div>

              <div className="titles__developer">
                <p className="name__developer">Volodymyr Piskun</p>
                <p className="position__developer">Senior backend developer</p>
              </div>

              <div className="discover__button">
                <a href="#">
                  discover your possibilites
                </a>
              </div>

            </div>

            <div className="developer__right-content">

              <div className="developer__photo">

                <img src={Vova} alt=""/>

              </div>

            </div>


          </section>



          <section className="versus__section">


            <div className="versus__section-wrapper">

              <div className="content__section-versus">

              <div className="versus__section-content">

                <h3 className="versus__title">Let's imagine a little</h3>


                <p className="versus__text">To the left is our Andrew, who made the site with us and successfully sells buns,
                  but to the right - John and Matthew, who got stuck in the 2000s
                  and do not automate the business,<span> what happens to them? </span></p>

              </div>


              <div className="versus__image-people">

                <img src={Versus} alt=""/>

              </div>
            </div>

            </div>
          </section>



          <section className="content__people-versus">

            <div className="about__people-wrapper">

              <div className="about__andrew-baker">

                <div className="about__bakers-title">

                  <div className="andrew__log-img">
                    <img src={BakerAndrew} alt=""/>
                  </div>

                  <div className="baker__titles">
                    <h3>andrew</h3>
                    <p>24 YO Baker</p>
                  </div>
                </div>

                <div className="about__list-andrew">
                  <ul className="features__bakers">
                    <li>His customers do not wait in line, because
                      he has the applications and the bakery can be ordered
                      before you come to the bakery</li>
                    <li>
                      Accounting, what is in his warehouse is automatically maintained
                    </li>
                    <li>
                      He always has fresh products,
                      because the system itself
                      warns him about the timing of implementation
                    </li>
                  </ul>
                </div>

              </div>


              <div className="about__matthew-baker">
                <div className="about__bakers-title">

                  <div className="matthew__log-img">
                    <img src={BakerAndrew} alt=""/>
                  </div>

                  <div className="baker__titles">
                    <h3>JOHN & MATTHEW</h3>
                    <p>24 and 27 Y.O BAKERS</p>
                  </div>
                </div>

                <div className="about__list-matthew">
                  <ul className="features__bakers">
                    <li>Their customers stand in line, thereby closing the influx of new ones that are rushing</li>
                    <li>
                      the guys had to hire a warehouseman, because they need not only to bake buns, but also to develop their business. Even though their two
                    </li>
                    <li>
                      the risk increases that spoiled food will fall into food and even regular customers will be lost
                    </li>
                  </ul>
                </div>
              </div>

            </div>

          </section>


          <section className="al__time-section">

            <div className="al__time-wrapper">

              <h3>Al time</h3>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>


              <div className="al__time-button">

              </div>

            </div>
          </section>
        </div>
        <CaseService/>
        <LimitedService/>
      </Fragment>
    )
  }
}
