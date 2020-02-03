import React, { Component } from 'react'
import './index.css'
import  Arrow  from '../../../Basic/Footer/arrow.svg';
import Ad  from '../About__block/chess.png';
import Translate from 'translate-components'
import ScrollMagic from "../../../scrollMagic";
import useLang from '../../../../hooks/useLang'
import { TimelineMax } from "gsap";

export const trForge = {
    ru: ["СЕГОДНЯ","Дизайн","Готовность заказа","Подтверждение","ПРИГЛАСИТЬ ДРУГА","ПРИНЯТЬ","ПРАВКИ","НАПИСАТЬ НАМ","6 часов","/ cлед. стадия","Проектируем дизайн сайта.","Мы подготовили макет сайта","Загрузите или откройте макет","Мы создали прототип","Мы подготовили макет сайта загрузите или отройте макет и приймите","ВАШ МЕНЕДЖЕР","Ростислав","+3857742553","Разработка прототипа","Мы создали проект","Проект стартовал","Готовим презентацию проекта","Финиш проекта","СТАДИЯ","Здравствуйте, Клиент"],
    pl: ["DZISIAJ","Projektowanie","Postęp zamówienia","Potrzebna akceptacja","DODAJ ZNAJOMEGO","AKCEPTUJ","EDYTUJ","NAPISZ DO NAS","6 godz","/ następny etap","Projektujemy stronę.","Przygotowaliśmy ukłąd strony","Pobierz lub otwórz układ","Stworzyliśmy prototyp. Zaakceptowany przez Andrzeja 15:31, Dzisiaj","Przygotowaliśmy układ strony, pobierz lub otwórz układ i zaakceptuj","TWÓJ MENEDŻĘR","Rostysław","+4857742553","Prototypowanie strony","Stworzyliśmy projekt","Projekt został dodany","Przygotyjemy prezentacje projektu","Koniec projektu","ETAP","Witamy, Andzej"],
    en: ["TODAY","Design","Project status","Needed approvement","INVITE YOUR FRIEND"," APPROVE","REDACT","DROP US A LINE","6 hours","/ next stage","Making your website design","We have prepared a site layout","Download or open the layout","We've created a prototype. Accepted by Andrew 15:31, Today","We've made your website layout, download or open the layout and approve it","YOUR MANAGER","Rostick","+3557742553","Website prototyping","We have created project","Project has been created","We are preparing project presentation","End of the project","STAGE","Welcome, Andrew"],
}
let trFused = useLang(trForge);
console.log(trForge);

export default class About extends Component {
  constructor (props) {
    super(props);
      this.state = {
        lang: ''
      }

  }
 componentDidMount()
    {
        let tl = new TimelineMax();
        let tl2 = new TimelineMax();
        let trigger = ".container__about-content";
        let trigger2 = ".rodrigo";
        let items = ".adh";
        tl.from('.scr', 0.2, {fill:'#1F2239', ease: 'Power3.easeNone' })
        .staggerFrom('.adht', 0.5, {autoAlpha:0, ease: 'Power3.easeNone' }, 0.04)
        .staggerFrom(items, 0.4, { y: 15, opacity: 0, ease: 'Power3.easeNone' }, 0.04, "-=2.1")
        .staggerFrom('.a1', 0.4, { y: 15, opacity: 0, ease: 'Power3.easeNone' }, 0.14, "-=2.1");
        tl2.staggerFrom('.a2', 0.4, { y: 15, opacity: 0, ease: 'Power3.easeNone' }, 0.14, "-=2.1");
        let controller = new ScrollMagic.Controller();
        let controller2 = new ScrollMagic.Controller();
        let scene = new ScrollMagic.Scene({triggerElement: trigger, triggerHook: .3})
                .setTween(tl)
                .addTo(controller);
        let scene2 = new ScrollMagic.Scene({triggerElement: trigger2, triggerHook: .3})
                .setTween(tl2)
                .addTo(controller2);
    }


    render () {

    return (

      <div className="container__about-content">
                <div className="advantages">
                    <div className="advantage-item">
                        <div className="advitem-image-holder"><svg viewBox="594.4 135.4 634.5 508.9">
                          <path class="mb0" d="M1220,616.4h-83c1-2.2,1.5-4.9,1.5-10.4V162.5c0-9.1-1-12.6-2.8-16.1c-1.9-3.5-4.6-6.3-8.2-8.2
		c-3.5-1.9-7-2.8-16.1-2.8h-517v455.5v25.5v1.5h119.9h0.1l0.9,1.5l0.6,1c0.4,0.7,1,1.4,1.6,2c0.6,0.6,1.2,1.1,1.9,1.5
		c1.1,0.7,2.3,1.2,3.7,1.5c1.3,0.3,2.6,0.5,4.1,0.5H829c1.5,0,2.9-0.2,4.2-0.5c1.4-0.3,2.6-0.8,3.7-1.5c0.7-0.4,1.3-0.9,1.9-1.5
		c0.6-0.5,1.1-1.1,1.5-1.8l0.8-1.2l0.9-1.5h290.6h1.9h1.8h83.8c0.6,0,1,0.4,1,1v10.7l-444,1.3h-97.7h-85v1.5v9l182.6,0.3v-9.3h0v9.3
		l373.6-1c8.8,0,68.5-6.6,70-7.2c1.6-0.6,1.8-2.4,1.8-3.6c0,0,0,0,0-0.1v-11C1222.5,617.5,1221.4,616.4,1220,616.4z M771,154.9
		c-2.2,0-4-1.8-4-4s1.8-4,4-4c2.2,0,4,1.8,4,4S773.2,154.9,771,154.9z"/>
<rect x="594.4" y="162.9" class="mb1 scr" width="524.6" height="428"/>
                            <g className="advimghld">
	<polygon class="mb0 adh" points="594.4,630.9 679.3,630.9 594.4,630.6 	"/>
	<circle class="mb1" cx="771" cy="150.9" r="4"/>
<path class="mb2 adh" d="M1083.8,207.9h-78.6c-1.1,0-2-0.9-2-2v-13.3c0-1.1,0.9-2,2-2h78.6c1.1,0,2,0.9,2,2v13.3
	C1085.8,207,1084.9,207.9,1083.8,207.9z"/>
<path class="mb3 adh" d="M943,257.8h-47.5c-1.1,0-2-0.9-2-2v-13.3c0-1.1,0.9-2,2-2H943c1.1,0,2,0.9,2,2v13.3
	C945,256.9,944.1,257.8,943,257.8z"/>
<path class="mb3 adh" d="M734.3,452.8h-47.2c-1.1,0-2-0.9-2-2v-13.3c0-1.1,0.9-2,2-2h47.2c1.1,0,2,0.9,2,2v13.3
	C736.3,451.9,735.4,452.8,734.3,452.8z"/>
<path class="mb2 adh" d="M888.9,257.8H877c-1.1,0-2-0.9-2-2v-13.3c0-1.1,0.9-2,2-2h11.9c1.1,0,2,0.9,2,2v13.3
	C890.9,256.9,890,257.8,888.9,257.8z"/>
<path class="mb2 adh" d="M679.9,452.9H668c-1.1,0-2-0.9-2-2v-13.3c0-1.1,0.9-2,2-2h11.9c1.1,0,2,0.9,2,2v13.3
	C681.9,452,681,452.9,679.9,452.9z"/>
<path class="mb4 adh" d="M870.2,257.8h-11.9c-1.1,0-2-0.9-2-2v-13.3c0-1.1,0.9-2,2-2h11.9c1.1,0,2,0.9,2,2v13.3
	C872.2,256.9,871.3,257.8,870.2,257.8z"/>
<path class="mb4 adh" d="M661.2,452.8h-11.9c-1.1,0-2-0.9-2-2v-13.3c0-1.1,0.9-2,2-2h11.9c1.1,0,2,0.9,2,2v13.3
	C663.2,451.9,662.3,452.8,661.2,452.8z"/>
<path class="mb5 adh" d="M998.2,207.9h-69.9c-1.1,0-2-0.9-2-2v-13.3c0-1.1,0.9-2,2-2h69.9c1.1,0,2,0.9,2,2v13.3
	C1000.2,207,999.3,207.9,998.2,207.9z"/>
<path class="mb5 adh" d="M785.7,452.6H741c-1.1,0-2-0.9-2-2v-12.8c0-1.1,0.9-2,2-2h44.7c1.1,0,2,0.9,2,2v12.8
	C787.7,451.7,786.8,452.6,785.7,452.6z"/>
<path class="mb6 adh" d="M952.6,274.3H743.4c-1.1,0-2-0.9-2-2v-46.7c0-1.1,0.9-2,2-2h209.2c1.1,0,2,0.9,2,2v46.7
	C954.6,273.5,953.7,274.3,952.6,274.3z"/>
<path class="mb7 adh" d="M734.6,274.3H569.4c-1.1,0-2-0.9-2-2v-46.7c0-1.1,0.9-2,2-2h165.2c1.1,0,2,0.9,2,2v46.7
	C736.6,273.5,735.7,274.3,734.6,274.3z"/>
<path class="mb7 adh" d="M1083.1,289.5H961.4c-1.1,0-2-0.9-2-2v-61.9c0-1.1,0.9-2,2-2h121.7c1.1,0,2,0.9,2,2v61.9
	C1085.1,288.6,1084.2,289.5,1083.1,289.5z"/>
<ellipse class="mb8 adh" cx="975.9" cy="250.3" rx="7.1" ry="7.3"/>
<circle class="mb9 adh" cx="592.1" cy="249" r="14.8"/>
<line class="mb10 adh" x1="635.5" y1="296.8" x2="635.5" y2="536.2"/>
<circle class="mb2 adh" cx="635.6" cy="485.3" r="2.1"/>
<circle class="mb11 adh" cx="635.6" cy="392.5" r="2.1"/>
<circle class="mb12  adh" cx="635.6" cy="371.5" r="2.1"/>
<text transform="matrix(1 0 0 1 647.3929 374.2318)" class="mb13 mb14 adht">{trFused[0]}</text>
<text transform="matrix(1 0 0 1 605.8017 395.068)" class="mb13 mb15 adht">21:03</text>
<text transform="matrix(1 0 0 1 647.6773 395.068)" class="mb16 mb15 adht">{trFused[1]}</text>
<text transform="matrix(1 0 0 1 616 239.4871)" class="mb16 mb17 adht">{trFused[2]}</text>
<text transform="matrix(1 0 0 1 760.5259 239.4871)" class="mb16 mb17 adht">{trFused[3]}</text>
<text transform="matrix(1 0 0 1 1018.7148 201.2885)" class="mb1 mb16 mb18 adht">{trFused[4]}</text>
<text transform="matrix(1 0 0 1 908 251.4631)" class="mb1 mb16 mb18 adht"> {trFused[5]}</text>
<text transform="matrix(1 0 0 1 700 446.4667)" class="mb1 mb16 mb18 adht"> {trFused[5]}</text>
<text transform="matrix(1 0 0 1 754.5575 446.4667)" class="mb19 mb16 mb18 adht">{trFused[6]}</text>
<text transform="matrix(1 0 0 1 944.0929 201.2883)" class="mb19 mb16 mb18 adht">{trFused[7]}</text>
<text transform="matrix(1 0 0 1 616 261.8905)"><tspan x="0" y="0" class="mb13 mb15 adht">{trFused[8]}</tspan><tspan x="31.4" y="0" class="mb20 mb13 mb15 adht">{trFused[9]}</tspan></text>
<text transform="matrix(1 0 0 1 616 249.2572)" class="mb13 mb21 adht">{trFused[10]}</text>
<text transform="matrix(1 0 0 1 760.8827 253.3447)"><tspan x="0" y="0" class="mb13 mb22 adht">{trFused[11]}</tspan><tspan x="0" y="6.3" class="mb13 mb22 adht">{trFused[12]}</tspan></text>
<text transform="matrix(1 0 0 1 646.9969 501.0167)" class="mb13 mb21 adht">{trFused[13]}</text>
<text transform="matrix(1 0 0 1 646.9969 421.4966)" class="mb13 mb21 adht">{trFused[14]}</text>
<text transform="matrix(1 0 0 1 969.2015 237.6825)" class="mb16 mb23 adht">{trFused[15]}</text>
<text transform="matrix(1 0 0 1 990.3543 251.9349)" class="mb13 mb24 adht">{trFused[16]}</text>
<text transform="matrix(1 0 0 1 1001.0272 265.0955)" class="mb13 mb25 adht">{trFused[17]}</text>
<text transform="matrix(1 0 0 1 1000.7845 275.8935)" class="mb13 mb25 adht">info@mydside.com</text>
<text transform="matrix(1 0 0 1 646.8088 487.8598)" class="mb16 mb15 adht">{trFused[18]}</text>
<text transform="matrix(1 0 0 1 657.6773 407.5757)" class="mb13 mb15 adht">{trFused[3]}</text>
<text transform="matrix(1 0 0 1 609.1171 487.9599)" class="mb13 mb15 adht">12:17</text>
<circle class="mb2 adh" cx="635.6" cy="535.3" r="2.1"/>
<text transform="matrix(1 0 0 1 646.9969 551.0167)" class="mb13 mb21 adht">{trFused[19]}</text>
<text transform="matrix(1 0 0 1 646.8088 537.8598)" class="mb16 mb15 adht">{trFused[20]}</text>
<text transform="matrix(1 0 0 1 611.3329 537.9598)" class="mb13 mb15 adht">9:51</text>
<circle class="mb26 adh" cx="635.6" cy="328.3" r="2.1"/>
<text transform="matrix(1 0 0 1 646.9969 344.0167)" class="mb19 mb13 mb21 adht">{trFused[21]}</text><text transform="matrix(1 0 0 1 646.8088 330.8598)" class="mb19 mb16 mb15 adht">{trFused[22]}</text><text transform="matrix(1 0 0 1 610.2367 330.9599)" class="mb19 mb13 mb15 adht">19:11</text>
<text transform="matrix(1 0 0 1 585.6464 256.193)" class="mb13 mb27 adht">{trFused[23]}</text>
<text transform="matrix(1 0 0 1 568.3163 202.1587)" class="mb16 mb28 adht">{trFused[24]}</text>
<circle class="mb29 adh" cx="593.4" cy="249.6" r="14"/>
<text transform="matrix(1 0 0 1 584.4276 250.8481)" class="mb16 mb30 adht">96%</text>
<path class="mb1 adh" d="M1014.9,198.8h-2.3v-2.3c0-0.2-0.2-0.4-0.4-0.4s-0.4,0.2-0.4,0.4v2.3h-2.3c-0.2,0-0.4,0.2-0.4,0.4
	s0.2,0.4,0.4,0.4h2.3v2.3c0,0.2,0.2,0.4,0.4,0.4s0.4-0.2,0.4-0.4v-2.3h2.3c0.2,0,0.4-0.2,0.4-0.4S1015.1,198.8,1014.9,198.8z"/>
<path class="mb19 adh" d="M939.1,196.1h-5.5c-0.6,0-1,0.5-1,1v4.1c0,0.6,0.5,1,1,1h5.5c0.6,0,1-0.5,1-1v-4.1
	C940.1,196.6,939.6,196.1,939.1,196.1z M933.6,196.8h5.5c0.1,0,0.2,0.1,0.3,0.2l-3,2.1l-3-2.1C933.4,196.9,933.5,196.8,933.6,196.8z
	 M939.1,201.6h-5.5c-0.2,0-0.3-0.2-0.3-0.3v-3.4l2.9,2c0.1,0,0.1,0.1,0.2,0.1s0.1,0,0.2-0.1l2.9-2v3.4
	C939.4,201.4,939.3,201.6,939.1,201.6z"/>
<path class="mb3 adh" d="M997.2,270.7h-4.6c-0.5,0-0.9,0.4-0.9,0.9v3.4c0,0.5,0.4,0.9,0.9,0.9h4.6c0.5,0,0.9-0.4,0.9-0.9v-3.4
	C998,271.1,997.6,270.7,997.2,270.7z M992.6,271.3h4.6c0.1,0,0.2,0.1,0.3,0.2l-2.5,1.8l-2.5-1.8
	C992.4,271.3,992.5,271.3,992.6,271.3z M997.2,275.3h-4.6c-0.2,0-0.3-0.1-0.3-0.3v-2.9l2.4,1.7c0,0,0.1,0.1,0.2,0.1s0.1,0,0.2-0.1
	l2.4-1.7v2.9C997.4,275.1,997.3,275.3,997.2,275.3z"/>
<path class="mb1 adh" d="M976.2,253.2c0.3,0,0.7-0.1,1-0.2c0,0,0,0,0,0c0.7-0.3,1.3-0.9,1.6-1.6c0.2-0.4,0.2-0.7,0.2-1.1
	s-0.1-0.8-0.2-1.1c0,0,0,0,0,0c-0.1-0.3-0.4-0.7-0.6-0.9c-0.3-0.3-0.6-0.5-0.9-0.6c0,0,0,0,0,0c-0.2-0.1-0.4-0.1-0.6-0.2
	c-0.2,0-0.4-0.1-0.6-0.1h-2.4v5.8h2.4C976.1,253.2,976.1,253.2,976.2,253.2z"/>
	<path class="mb2 adh" d="M659.3,443.9c-0.1-0.1-1.5-2.9-4-2.9s-3.9,2.8-4,2.9c0,0.1,0,0.2,0,0.3c0.1,0.1,1.5,2.9,4,2.9s3.9-2.8,4-2.9
		C659.4,444.1,659.4,444,659.3,443.9z M655.3,446.4c-1.8,0-3-1.8-3.3-2.4c0.3-0.5,1.5-2.4,3.3-2.4c1.8,0,3,1.8,3.3,2.4
		C658.3,444.6,657.1,446.4,655.3,446.4z"/>
	<path class="mb2 adh" d="M655.3,442.7c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3s1.3-0.6,1.3-1.3
		C656.7,443.3,656.1,442.7,655.3,442.7z M655.3,444.7c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7s0.7,0.3,0.7,0.7
		S655.7,444.7,655.3,444.7z"/>
	<path class="mb2 adh" d="M868.5,248.9c-0.1-0.1-1.5-2.9-4-2.9s-3.9,2.8-4,2.9c0,0.1,0,0.2,0,0.3c0.1,0.1,1.5,2.9,4,2.9s3.9-2.8,4-2.9
		C868.5,249.1,868.5,249,868.5,248.9z M864.5,251.4c-1.8,0-3-1.8-3.3-2.4c0.3-0.5,1.5-2.4,3.3-2.4c1.8,0,3,1.8,3.3,2.4
		C867.5,249.6,866.3,251.4,864.5,251.4z"/>
	<path class="mb2 adh" d="M864.5,247.7c-0.7,0-1.3,0.6-1.3,1.3c0,0.7,0.6,1.3,1.3,1.3c0.7,0,1.3-0.6,1.3-1.3
		C865.8,248.3,865.2,247.7,864.5,247.7z M864.5,249.8c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7s0.7,0.3,0.7,0.7
		C865.1,249.5,864.8,249.8,864.5,249.8z"/>
	<path class="mb1 adh" d="M676.9,444.7c-0.2,0-0.3,0.1-0.3,0.3v1.3c0,0.2-0.1,0.3-0.3,0.3h-4.7c-0.2,0-0.3-0.1-0.3-0.3V445
		c0-0.2-0.1-0.3-0.3-0.3c-0.2,0-0.3,0.1-0.3,0.3v1.3c0,0.5,0.4,1,1,1h4.7c0.5,0,1-0.4,1-1V445C677.2,444.9,677.1,444.7,676.9,444.7z
		"/>
	<path class="mb1 adh" d="M673.7,445.3c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0s0.1,0,0.1,0c0,0,0.1,0,0.1-0.1l1.7-1.6
		c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.3-0.1-0.5,0l-1.1,1.1v-3.1c0-0.2-0.1-0.3-0.3-0.3s-0.3,0.1-0.3,0.3v3.1l-1.1-1.1
		c-0.1-0.1-0.3-0.1-0.5,0c-0.1,0.1-0.1,0.3,0,0.5L673.7,445.3z"/>
	<path class="mb1 adh" d="M886.1,249.7c-0.2,0-0.3,0.1-0.3,0.3v1.3c0,0.2-0.1,0.3-0.3,0.3h-4.7c-0.2,0-0.3-0.1-0.3-0.3v-1.3
		c0-0.2-0.1-0.3-0.3-0.3s-0.3,0.1-0.3,0.3v1.3c0,0.5,0.4,1,1,1h4.7c0.5,0,1-0.4,1-1v-1.3C886.4,249.9,886.2,249.7,886.1,249.7z"/>
	<path class="mb1 adh" d="M882.8,250.3c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0,0.1,0s0.1,0,0.1,0c0,0,0.1,0,0.1-0.1l1.7-1.6
		c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.3-0.1-0.5,0l-1.1,1.1v-3.1c0-0.2-0.1-0.3-0.3-0.3s-0.3,0.1-0.3,0.3v3.1l-1.1-1.1
		c-0.1-0.1-0.3-0.1-0.5,0c-0.1,0.1-0.1,0.3,0,0.5L882.8,250.3z"/>
<path class="mb3 adh" d="M997.2,263.5c-0.3,0-0.5-0.1-0.7-0.2c-0.3-0.1-0.7,0-0.9,0.2l-0.2,0.2c-0.5-0.3-1-0.8-1.3-1.3l0.2-0.2
	c0.2-0.2,0.3-0.6,0.2-0.9c-0.1-0.2-0.2-0.5-0.2-0.8c-0.1-0.4-0.4-0.7-0.9-0.7c0,0,0,0,0,0h-0.9c0,0-0.1,0-0.1,0
	c-0.2,0-0.4,0.1-0.6,0.3c-0.1,0.2-0.2,0.4-0.2,0.6c0.1,0.9,0.4,1.8,0.9,2.6c0.5,0.7,1.1,1.4,1.8,1.8c0.8,0.5,1.7,0.8,2.6,0.9
	c0,0,0.1,0,0.1,0c0,0,0,0,0,0c0.2,0,0.4-0.1,0.6-0.3c0.2-0.2,0.3-0.4,0.3-0.6v-0.9C998,263.9,997.6,263.6,997.2,263.5z M997.4,264.4
	v0.9c0,0.1,0,0.1-0.1,0.2c-0.1,0.1-0.1,0.1-0.2,0.1c-0.8-0.1-1.7-0.4-2.4-0.8c-0.7-0.4-1.2-1-1.6-1.6c-0.5-0.7-0.8-1.5-0.8-2.4
	c0-0.1,0-0.2,0.1-0.2c0-0.1,0.1-0.1,0.2-0.1h0.9c0,0,0,0,0,0c0.1,0,0.3,0.1,0.3,0.2c0,0.3,0.1,0.6,0.2,0.9c0,0.1,0,0.2-0.1,0.3
	l-0.4,0.4c-0.1,0.1-0.1,0.2,0,0.3c0.4,0.8,1.1,1.4,1.8,1.8c0.1,0.1,0.3,0,0.3,0l0.4-0.4c0.1-0.1,0.2-0.1,0.3-0.1
	c0.3,0.1,0.6,0.2,0.9,0.2C997.3,264.1,997.4,264.2,997.4,264.4C997.4,264.4,997.4,264.4,997.4,264.4z"/>
<path class="mb19 adh" d="M751,441.3c-0.4-0.4-1.1-0.4-1.5,0l-3.8,3.8c0,0-0.1,0.1-0.1,0.1l-0.4,1.5c0,0.1,0,0.2,0.1,0.3
	c0.1,0.1,0.1,0.1,0.2,0.1c0,0,0,0,0.1,0l1.5-0.4c0,0,0.1,0,0.1-0.1l3.8-3.8C751.5,442.4,751.5,441.7,751,441.3z M750.7,442.4
	l-3.7,3.7l-1,0.3l0.3-1l3.7-3.7c0.2-0.2,0.5-0.2,0.7,0C750.9,441.9,750.9,442.2,750.7,442.4z"/>
	<path class="mb1 adh" d="M697.3,443.5c-0.2,0-0.3,0.2-0.3,0.3v0.3c0,1.7-1.4,3.1-3.1,3.1c0,0,0,0,0,0c-1.7,0-3.1-1.4-3.1-3.1
		c0-1.7,1.4-3.1,3.1-3.1c0,0,0,0,0,0c0.4,0,0.8,0.1,1.2,0.3c0.2,0.1,0.4,0,0.4-0.2c0.1-0.2,0-0.4-0.2-0.4c-0.5-0.2-1-0.3-1.5-0.3
		c0,0,0,0,0,0c-2.1,0-3.7,1.7-3.7,3.7c0,2.1,1.7,3.7,3.7,3.7c0,0,0,0,0,0c2.1,0,3.7-1.7,3.7-3.7v-0.3
		C697.6,443.7,697.5,443.5,697.3,443.5z"/>
	<path class="mb1 adh" d="M693.1,443.6c-0.1-0.1-0.3-0.1-0.5,0c-0.1,0.1-0.1,0.3,0,0.5l1,1c0.1,0.1,0.1,0.1,0.2,0.1c0.1,0,0.2,0,0.2-0.1
		l3.4-3.4c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.3-0.1-0.5,0l-3.2,3.2L693.1,443.6z"/>
	<path class="mb1 adh" d="M905.8,248.8c-0.2,0-0.3,0.2-0.3,0.3v0.3c0,1.7-1.4,3.1-3.1,3.1c0,0,0,0,0,0c-1.7,0-3.1-1.4-3.1-3.1
		c0-1.7,1.4-3.1,3.1-3.1c0,0,0,0,0,0c0.4,0,0.8,0.1,1.2,0.3c0.2,0.1,0.4,0,0.4-0.2c0.1-0.2,0-0.4-0.2-0.4c-0.5-0.2-1-0.3-1.5-0.3
		c0,0,0,0,0,0c-2.1,0-3.7,1.7-3.7,3.7c0,2.1,1.7,3.7,3.7,3.7c0,0,0,0,0,0c2.1,0,3.7-1.7,3.7-3.7v-0.3
		C906.1,248.9,905.9,248.8,905.8,248.8z"/>
	<path class="mb1 adh" d="M901.6,248.8c-0.1-0.1-0.3-0.1-0.5,0c-0.1,0.1-0.1,0.3,0,0.5l1,1c0.1,0.1,0.1,0.1,0.2,0.1c0.1,0,0.2,0,0.2-0.1
		l3.4-3.4c0.1-0.1,0.1-0.3,0-0.5c-0.1-0.1-0.3-0.1-0.5,0l-3.2,3.2L901.6,248.8z"/>
	<path class="mb31 adh" d="M650.8,400.8c-2.1,0-3.8,1.7-3.8,3.8c0,2.1,1.7,3.8,3.8,3.8c2.1,0,3.8-1.7,3.8-3.8
		C654.6,402.5,652.9,400.8,650.8,400.8z M650.8,407.8c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1c1.7,0,3.1,1.4,3.1,3.1
		C653.9,406.4,652.5,407.8,650.8,407.8z"/>
	<path class="mb31 adh" d="M650.8,405c0.2,0,0.3-0.2,0.3-0.3v-1.4c0-0.2-0.2-0.3-0.3-0.3s-0.3,0.2-0.3,0.3v1.4
		C650.4,404.8,650.6,405,650.8,405z"/>
	<path class="mb31 adh" d="M650.8,405.7L650.8,405.7c-0.2,0-0.4,0.2-0.4,0.3s0.2,0.3,0.4,0.3s0.3-0.2,0.3-0.3S651,405.7,650.8,405.7z"/>
</g>
</svg>
</div>
                        <div className="advitem-inner">
                            <div className="adv-heading a1">Система <span>dsideForge</span></div>
                            <div className="adv-text a1">Что бы мы с Вами не создавали - Вы получите доступ в нашу систему, где сможете отслеживать готовность заказа, вносить правки и управлять ходом выполнения заказа. 24/7, без нервов и сорванных сроков.</div>
                            <div className="adv-btn a1">Подробнее о системе<img src={Arrow} width={16} alt=""/></div>
                        </div>
                    </div>
                    <div className="advantage-item right">
                        <div className="advitem-image-holder small rodrigo">
                            <img src={Ad} width={460} className="a2"/>

                        </div>
                        <div className="advitem-inner right">
                            <div className="adv-heading a2">Сверхгибкая оплата</div>
                            <div className="adv-text a2">Мы создаем инструменты, которые заставляют Ваш бизнес развиваться и процветать. Доказательством этому служит наша система оплат. Мы играем не в длинную, мы играем в "навсегда".</div>
                            <div className="adv-btn a2">Подробнее об оплатах<img src={Arrow} width={16} alt=""/></div>
                        </div>
                    </div>
                </div>
      </div>

    )
  }
}
