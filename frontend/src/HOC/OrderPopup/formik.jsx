/* ========================================================
    â€” AppForm Wrapper, Container
    â€” AppForm Panel
    â€” AppForm Elements
	â€” AppForm Media Query
======================================================== */


/* ============ AppForm Wrapper & Container =========== */

#appform-page {
    padding: 120px 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    font-family: 'Poppins', sans-serif;
    text-align: left;
    color: #71818c;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: padding .8s ease;
    -webkit-transition: padding .8s ease;
    -moz-transition: padding .8s ease;
}

#appform-wrapper {
    background-color: #fff;
}

#appform-wrapper:before {
    content: '';
    -webkit-transform: skew(0, -7deg);
    transform: skew(0, -7deg);
    position: absolute;
    left: 0;
    right: 0;
    top: -130px;
    height: 500px;
    background: #f7f9fb;
}

#appform-wrapper .appform-container ul,
#appform-wrapper .appform-container ol {
    padding-bottom: 40px;
    list-style: initial;
    text-align: left;
    padding-left: 0px;
}

#appform-wrapper .appform-container li {
    padding-bottom: 10px;
}

.appform-container {
    margin: 0 auto;
    max-width: 1120px;
    padding: 0 80px;
    padding-bottom: 80px;
    padding-top: 80px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    position: relative
}

.appform-container:first-of-type {
    padding-top: 0 !important;
}

.appform-container:last-of-type {
    padding-bottom: 0 !important;
}


/* ============ AppForm Panel =========== */

.panel {
    padding: 40px;
    width: 100%;
    background-color: #fff;
    border-radius: 4px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-shadow: 0px 20px 150px #d6dee4;
}

.panel-small {
    margin: 0 auto;
    max-width: 480px;
    text-align: center;
}

.panel-big {
    margin: 0 auto;
    max-width: 600px;
    text-align: center;
}

.panel p {
    padding-bottom: 10px;
    line-height: 26px;
    color: #71818c;
}

.panel a {
    text-decoration: none;
    transition: color .5s ease;
    -webkit-transition: color .5s ease;
    -moz-transition: color .5s ease;
    color: #4843d2;
}

.panel a:hover {
    text-decoration: none
}

h2.panel-heading {
    font-size: 24px;
    line-height: 34px;
    padding-bottom: 20px;
    color: #20292f;
    font-weight: 400;
}

h2.panel-heading a {
    color: #20292f;
}


/* Clearfix !important */

.clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0
}

* html .clearfix,
:first-child+html .clearfix {
    zoom: 1
}


/* ============ AppForm Elements =========== */

input.text,
input.title,
input[type=email],
input[type=text],
input[type=url],
select,
textarea {
    background-color: #fff;
    border: 1px solid #bbb;
    padding: 2px;
    color: #20292f
}

input.text:focus,
input.title:focus,
input[type=email]:focus,
input[type=text]:focus,
input[type=url]:focus,
select:focus,
textarea:focus {
    border-color: #2D3940;
    color: #3e3e3e
}

input.text,
input.title,
input[type=text],
select,
textarea {
    margin: .5em 0
}

textarea {
    padding: 4px 0;
}

select {
    padding: 0px;
}

.appform-button {
    display: block;
    text-align: center;
    box-shadow: 0px 5px 20px #d6dee4;
    -moz-box-shadow: 0px 5px 20px #d6dee4;
    -webkit-box-shadow: 0px 5px 20px #d6dee4;
    margin-top: 30px;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    padding: 20px;
    background-color: #f92c8b;
    border: none;
    cursor: pointer;
    width: 100%;
    border-radius: 60px;
    -moz-border-radius: 60px;
    -webkit-border-radius: 60px;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

.appform-button:hover {
    background-color: #4843d2;
    box-shadow: 0px 10px 30px #aab9c3;
    -moz-box-shadow: 0px 10px 30px #aab9c3;
    -webkit-box-shadow: 0px 10px 30px #aab9c3;
    text-decoration: none;
}

.appform-group {
    position: relative;
    height: 74px;
    float: left;
    width: 100%;
    border-bottom: 2px solid #eff1f3;
}

.appform-group:last-of-type {
    margin-bottom: 40px;
}

.appform-group.appform-group-half {
    width: 42.5%;
    box-sizing: border-box;
}

.appform-group-half:nth-of-type(2n+0) {
    margin-left: 15%;
}

.appform-group.appform-group-third {
    width: 23.3%;
    box-sizing: border-box;
}


.appform-group-third:nth-of-type(3n+0) {
    margin-right: 15%;
    margin-left: 15%;
}



.appform-group label {
    position: absolute;
    top: 27px;
    left: 0;
    color: #71818c;
    font-size: 18px;
    pointer-events: none;
    -webkit-transition: all, .4s;
    transition: all, .4s;
}

.appform-group input,
.appform-group select {
    width: 100%;
    height: 74px;
    border: none;
    background-color: transparent;
    margin: 13px 0 0;
    padding: 0;
}

.appform-group input:focus,
.appform-group input,
.appform-group select {
    box-sizing: border-box;
}

.appform-group select {
    border: none;
}

.appform-group label,
.appform-group input,
.appform-group select {
    font-size: 16px;
}

.appform-group textarea {
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    height: 100px;
    font-size: 18px;
    padding-top: 32px;
    border: none;
}

.appform-group input:-webkit-autofill {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    color: #20292f !important;
    background: #fff !important;
    background-color: #fff !important;
}

.appform-group textarea:-webkit-autofill {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    color: #20292f !important;
    background: #fff !important;
    background-color: #fff !important;
}

.appform-group select:-webkit-autofill {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    color: #20292f !important;
    background: #fff !important;
    background-color: #fff !important;
}

.appform-textarea {
    height: initial;
}

.appform-filled label {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    opacity: .6;
    top: 14px;
}

.appform-checkbox {
    margin: 0 0 10px 0;
}

.appform-checkbox-button {
    width: 28px;
    height: 28px;
    position: relative;
    border: 2px solid #eff1f3;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    float: left;
    margin-right: 10px;
    top: 33px;
}

.appform-checkbox > span {
    color: #71818c;
    position: relative;
    float: left;
    margin: 36px 30px 0 0;
}

.appform-checkbox-button label {
    width: 100%;
    height: 100%;
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 0;
}

.appform-checkbox-button label:after {
    content: '';
    width: 19px;
    height: 16px;
    position: absolute;
    top: 7px;
    left: 4px;
    background: url('../images/correct.png') no-repeat;
    opacity: 0;
    transition: opacity .3s ease;
}

.appform-checkbox-button label:hover::after {
    opacity: 0.3;
}

.appform-checkbox-button input[type=checkbox] {
    visibility: hidden;
}

.appform-checkbox-button input[type=checkbox]:checked + label:after {
    opacity: 1;
    -webkit-animation-name: bounceIn;
    animation-name: bounceIn;
    -webkit-animation-duration: .75s;
    animation-duration: .75s;
}

.appform-radio {
    margin: 0 0 10px 0;
}

.appform-radio-button {
    width: 28px;
    height: 28px;
    position: relative;
    border: 2px solid #eff1f3;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    float: left;
    margin-right: 10px;
    top: 33px;
}

.appform-radio > span {
    color: #71818c;
    position: relative;
    float: left;
    margin: 36px 30px 0 0;
}

.appform-radio-button label {
    width: 100%;
    height: 100%;
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 0;
}

.appform-radio-button label:after {
    content: '';
    width: 19px;
    height: 19px;
    position: absolute;
    top: 6px;
    left: 5px;
    background: url('../images/circle.png') no-repeat;
    opacity: 0;
    transition: opacity .3s ease;
}

.appform-radio-button label:hover::after {
    opacity: 0.3;
}

.appform-radio-button input[type=radio] {
    visibility: hidden;
}

.appform-radio-button input[type=radio]:checked + label:after {
    opacity: 1;
    -webkit-animation-name: bounceIn;
    animation-name: bounceIn;
    -webkit-animation-duration: .75s;
    animation-duration: .75s;
}

#panel-price {
    font-size: 48px;
    color: #2c93f9;
    margin-top: 17px;
    letter-spacing: -2px;
    font-weight: 600;
}

#panel-bottom {
    font-size: 16px;
    text-align: center;
    padding: 40px 0;
}

#panel-bottom a {
    color: #71818c;
    text-decoration: none
}

#guarantee-price {
    color: #26c15f;
}


/* ============ AppForm Media Query =========== */

@media only screen and (max-width: 768px) {
    .appform-container {
        padding: 0 60px;
        padding-bottom: 60px;
        padding-top: 60px;
    }
}

@media only screen and (max-width: 420px) {
    .appform-container {
        padding: 0 20px;
        padding-top: 40px;
        padding-bottom: 40px;
    }
}