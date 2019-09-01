import React, { Component, Fragment } from 'react'
import './index.css'
import Translate from 'translate-components'
import { reactTranslateChangeLanguage } from 'translate-components'
import Helmet from 'react-helmet-async'
import Footer from '../../Basic/Footer'
import  First  from './1.svg';
import ScrollAnimation from 'react-animate-on-scroll'

export default class Pricing extends Component {
  constructor() {
    super()

    this.state = {
      result: {}

    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  componentDidUpdate() {
    reactTranslateChangeLanguage.bind(this, localStorage.getItem('lang'))()
  }

  render() {

    return (
      <Fragment>

        <Helmet>
          <title> Dside Pricing </title>
        </Helmet>
<div className="pricing__wrapper">
  <div className='pricing pricing-palden'>
    <div className='pricing-item'>
      <div className='pricing-deco'>
              <svg className='pricing-deco-img' enable-background='new -558 659.3  300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='-558 659.3  300 100' width='300px' x='0px' y='0px'>
          <path className='deco-layer deco-layer--4' d='M-585.3,700.6c0,0,218.4,52.6,370.4-16v84.3h-369.9L-585.3,700.6z' fill='#FFF'></path>
        </svg>
        <div className='pricing-price'><span class='pricing-period'>от</span><span className='pricing-currency'>$</span>249
        </div>
        <h3 className='pricing-title lite'>Lite</h3>
              <button className='pricing-action trans'>Заказать</button>
      </div>
      <ul className='pricing-feature-list'>
        <li className='pricing-feature'>3 модуля</li>
        <li className='pricing-feature'>Шаблонный дизайн</li>
        <li className='pricing-feature'>Заявки на email</li>
        <li className='pricing-feature'>Тексты клиента</li>
        <li className='pricing-feature'>Доп. модуль $69</li>
      </ul>
    </div><div className='pricing-item'>
      <div className='pricing-deco'>
<svg className='pricing-deco-img' enable-background='new -558 659.3  300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='-558 659.3  300 100' width='300px' x='0px' y='0px'>
          <path className='deco-layer deco-layer--1' d='M-584.7,657.4c0,0,168,74.4,370.4,50.5v61.3h-370.4V657.4z' fill='#058EEA' opacity='0.1' ></path>
          <path className='deco-layer deco-layer--3' d='M-214.3,640.9c0,0-168,90.6-370.4,66.8v61.3h370.4V640.9z' fill='#2E2950' opacity='0.05'></path>
          <path className='deco-layer deco-layer--4' d='M-585.3,700.6c0,0,218.4,52.6,370.4-16v84.3h-369.9L-585.3,700.6z' fill='#FFF'></path>
        </svg>
        <div className='pricing-price'><span class='pricing-period'>от</span><span className='pricing-currency'>$</span>399
        </div>
        <h3 className='pricing-title classic'>Classic</h3>
              <button className='pricing-action trans'>Заказать</button>
      </div>
      <ul className='pricing-feature-list'>
        <li className='pricing-feature'>Преимущества <span className="litee">Lite</span></li>
        <li className='pricing-feature'>5 модулей</li>
        <li className='pricing-feature'>Уникальный дизайн</li>
        <li className='pricing-feature'>Заявки в CRM-систему</li>
        <li className='pricing-feature'>Google Analytics</li>
        <li className='pricing-feature'>Facebook Pixel</li>
        <li className='pricing-feature'>Доп. модуль $59</li>
      </ul>
    </div>
    <div className='pricing-item pricing__item--featured'>
      <div className='pricing-deco'>
              <svg className='pricing-deco-img' enable-background='new -558 659.3  300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='-558 659.3  300 100' width='300px' x='0px' y='0px'>
          <path className='deco-layer deco-layer--1' d='M-584.7,657.4c0,0,168,74.4,370.4,50.5v61.3h-370.4V657.4z' fill='#058EEA' opacity='0.7' ></path>
          <path className='deco-layer deco-layer--3' d='M-214.3,640.9c0,0-168,90.6-370.4,66.8v61.3h370.4V640.9z' fill='#3a416f' opacity='0.8'></path>
          <path className='deco-layer deco-layer--4' d='M-585.3,700.6c0,0,218.4,52.6,370.4-16v84.3h-369.9L-585.3,700.6z' fill='#FFF'></path>
        </svg>
        <div className='pricing-price'><span class='pricing-period'>от</span><span className='pricing-currency'>$</span>549
        </div>
        <h3 className='pricing-title business'>Business</h3>
              <button className='pricing-action'>Заказать</button>
      </div>
      <ul className='pricing-feature-list'>
        <li className='pricing-feature'>Преимущества <span className="classice">Classic</span></li>
          <li className='pricing-feature'>7 модулей</li>
        <li className='pricing-feature'>Тексты от копирайтера</li>
         <li className='pricing-feature'>Разработка УТП</li>
         <li className='pricing-feature'>1 Круг правок</li>
         <li className='pricing-feature'>OG разметка</li>
         <li className='pricing-feature'>Редактор текста</li>
         <li className='pricing-feature'>Доп. модуль $49</li>
      </ul>
    </div>
    <div className='pricing-item elite'>
      <div className='pricing-deco elite'>
<svg className='pricing-deco-img' enable-background='new -558 659.3  300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='-558 659.3  300 100' width='300px' x='0px' y='0px'>
         <linearGradient id="MyGradient">
          <stop offset="0%" stop-color="#2d3356" />
          <stop offset="50%" stop-color="#2f3558" />
          <stop offset="100%" stop-color="#2d3356" />
        </linearGradient>
          <path className='deco-layer deco-layer--1' d='M-584.7,657.4c0,0,168,74.4,370.4,50.5v61.3h-370.4V657.4z' fill='#058EEA' opacity='0.7' ></path>
          <path className='deco-layer deco-layer--3' d='M-214.3,640.9c0,0-168,90.6-370.4,66.8v61.3h370.4V640.9z' fill='#211F3D' opacity='0.5'></path>
          <path className='deco-layer deco-layer--2' d='M-584.7,698.6c0,0,227.7,52.6,379.8-16v84.3h-379.9L-584.7,698.6z' fill='#C57762' ></path>
          <path className='deco-layer deco-layer--4 wow' d='M-585.3,700.6c0,0,218.4,52.6,370.4-16v84.3h-369.9L-585.3,700.6z' fill='#2E2950'></path>
        </svg>
        <div className='pricing-price'><span class='pricing-period'>от</span><span className='pricing-currency'>$</span>899
        </div>
        <h3 className='pricing-title golden'>Elite</h3>
               <button className='elite-btn'>Заказать</button>
      </div>
      <ul className='pricing-feature-list'>
         <li className='pricing-feature'>Преимущества <span className="businesse">Business</span></li>
         <li className='pricing-feature'>9 модулей</li>
         <li className='pricing-feature'>Эксклюзивный дизайн</li>
         <li className='pricing-feature'>2 круга правок</li>
         <li className='pricing-feature'>Оповещение о заявке</li>
         <li className='pricing-feature'>Перезвоним за 30 секунд</li>
         <li className='pricing-feature'>Доп. модуль $39</li>
      </ul>
    </div>
  </div>
</div>
      <Footer/>
      </Fragment>
    )
  }
}