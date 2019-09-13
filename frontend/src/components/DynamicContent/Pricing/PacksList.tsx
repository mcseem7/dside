import React from 'react'
import {createMarkup, Pack, PricesConfig, useDiscount} from './config'
import useLang from '../../../hooks/useLang'
import {orderLang, startsFromLang} from './Step1'
import {take} from 'ramda'
type PacksListProps = {
    onSelect: (index: number) => any
    config: PricesConfig
    serviceIndex: number
    isPopUp?: boolean
    discount?: number
}
const packSvgs = [
    <svg className='pricing-deco-img' enable-background='new -558 659.3  300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='-558 659.3  300 100' width='300px' x='0px' y='0px'>
        <path className='deco-layer deco-layer--4' d='M-585.3,700.6c0,0,218.4,52.6,370.4-16v84.3h-369.9L-585.3,700.6z' fill='#FFF'></path>
    </svg>,
    <svg className='pricing-deco-img' enable-background='new -558 659.3  300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='-558 659.3  300 100' width='300px' x='0px' y='0px'>
        <path className='deco-layer deco-layer--1' d='M-584.7,657.4c0,0,168,74.4,370.4,50.5v61.3h-370.4V657.4z' fill='#058EEA' opacity='0.1' ></path>
        <path className='deco-layer deco-layer--3' d='M-214.3,640.9c0,0-168,90.6-370.4,66.8v61.3h370.4V640.9z' fill='#2E2950' opacity='0.05'></path>
        <path className='deco-layer deco-layer--4' d='M-585.3,700.6c0,0,218.4,52.6,370.4-16v84.3h-369.9L-585.3,700.6z' fill='#FFF'></path>
    </svg>,
    <svg className='pricing-deco-img' enable-background='new -558 659.3  300 100' height='100px' id='Layer_1' preserveAspectRatio='none' version='1.1' viewBox='-558 659.3  300 100' width='300px' x='0px' y='0px'>
        <path className='deco-layer deco-layer--1' d='M-584.7,657.4c0,0,168,74.4,370.4,50.5v61.3h-370.4V657.4z' fill='#058EEA' opacity='0.7' ></path>
        <path className='deco-layer deco-layer--3' d='M-214.3,640.9c0,0-168,90.6-370.4,66.8v61.3h370.4V640.9z' fill='#3a416f' opacity='0.8'></path>
        <path className='deco-layer deco-layer--4' d='M-585.3,700.6c0,0,218.4,52.6,370.4-16v84.3h-369.9L-585.3,700.6z' fill='#FFF'></path>
    </svg>,
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
]

export default ({onSelect, config, serviceIndex, isPopUp, discount = 0}: PacksListProps) => {
    const selectedService = config.services[serviceIndex]
    const packs = selectedService.packs
    return (
        <div className='pricing pricing-palden' style={isPopUp ? {position: 'absolute', background: 'white'}: {}}>
            {
                take(3, selectedService.packs).map( (pack: Pack, packIndex) =>
                    <div className={'pricing-item ' + ((packIndex === 2) ? 'pricing__item--featured' : '')}>
                        <div className={'pricing-deco' + ((packIndex === 3) ? 'elite' : '')}>
                            {packSvgs[packIndex]}
                            <div className='pricing-price'><span className='pricing-period'>{useLang(startsFromLang)}</span><span
                                className='pricing-currency'>$</span>{useDiscount(discount, pack.price)}
                            </div>
                            <h3 className='pricing-title lite'>{useLang(pack.name)}</h3>
                            <button className='pricing-action trans'
                                    onClick={
                                        () =>
                                            onSelect(packIndex)
                                    }
                            >{useLang(orderLang)}</button>
                        </div>
                        <ul className='pricing-feature-list' dangerouslySetInnerHTML={createMarkup(useLang(pack.featureDescriptions))}>
                        </ul>
                    </div>
                )
            }
            {
                // Last elite item has special css and nesting
                <div className="pricing-item elite">
                    <div className="pricing-deco elite">
                        <svg className="pricing-deco-img" enable-background="new -558 659.3  300 100" height="100px"
                             id="Layer_1" preserveAspectRatio="none" version="1.1" viewBox="-558 659.3  300 100"
                             width="300px" x="0px" y="0px">
                            <linearGradient id="MyGradient">
                                <stop offset="0%" stop-color="#2d3356"></stop>
                                <stop offset="50%" stop-color="#2f3558"></stop>
                                <stop offset="100%" stop-color="#2d3356"></stop>
                            </linearGradient>
                            <path className="deco-layer deco-layer--1"
                                  d="M-584.7,657.4c0,0,168,74.4,370.4,50.5v61.3h-370.4V657.4z" fill="#058EEA"
                                  opacity="0.7"></path>
                            <path className="deco-layer deco-layer--3"
                                  d="M-214.3,640.9c0,0-168,90.6-370.4,66.8v61.3h370.4V640.9z" fill="#211F3D"
                                  opacity="0.5"></path>
                            <path className="deco-layer deco-layer--2"
                                  d="M-584.7,698.6c0,0,227.7,52.6,379.8-16v84.3h-379.9L-584.7,698.6z"
                                  fill="#C57762"></path>
                            <path className="deco-layer deco-layer--4 wow"
                                  d="M-585.3,700.6c0,0,218.4,52.6,370.4-16v84.3h-369.9L-585.3,700.6z"
                                  fill="#2E2950"></path>
                        </svg>
                        <div className='pricing-price'><span
                            className='pricing-period'>{useLang(startsFromLang)}</span><span
                            className='pricing-currency'>$</span>{useDiscount(discount, packs[3].price)}
                        </div>
                        <h3 className='pricing-title golden'>{useLang(packs[3].name)}</h3>
                        <button className='elite-btn'
                                onClick={
                                    () =>
                                        onSelect(3)
                                }
                        >{useLang(orderLang)}</button>
                    </div>
                    <ul className='pricing-feature-list'
                        dangerouslySetInnerHTML={createMarkup(useLang(packs[3].featureDescriptions))}
                    >
                    </ul>
                </div>
            }
        </div>
    )
}