import React, {Component, Fragment} from 'react'



export default class  LimitData extends Component {

    constructor(props) {
        super(props)


    }



    render() {
        console.log(this.props.limitData)
        return (
            <Fragment>
                <div className="timer__back-order">

                    <div className="timer-days__order">
                        <p className="time">21</p>
                        <p className="title__timer">days</p>
                    </div>

                    <div className="timer-hours__order">
                        <p className="time">20</p>
                        <p className="title__timer">hours</p>
                    </div>

                    <div className="timer-minutes__order">
                        <p className="time">53</p>
                        <p className="title__timer">minutes</p>
                    </div>

                    <div className="timer-seconds__order">
                        <p className="time">11</p>
                        <p className="title__timer">seconds</p>
                    </div>


                </div>
            </Fragment>
        );
    }

}