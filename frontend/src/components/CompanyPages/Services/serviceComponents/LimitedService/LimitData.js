import React, {Component, Fragment} from 'react'



export default class  LimitData extends Component {

    constructor(props) {
        super(props)

this.state = {
    curTime: new Date().toLocaleString()
}

    }

componentDidMount() {
    setInterval( () => {
        this.setState({
            curTime : new Date().toLocaleString()
        })
    },1000)
}


    render() {
        return (
            <Fragment>
                <div className="timer__back-order">

                    <div className="timer-days__order">
                        <p className="time">{this.state.curTime.substr(0, 2)}</p>
                        <p className="title__timer">days</p>
                    </div>

                    <div className="timer-hours__order">
                        <p className="time">{18}</p>
                        <p className="title__timer">hours</p>
                    </div>

                    <div className="timer-minutes__order">
                        <p className="time">{'05'}</p>
                        <p className="title__timer">minutes</p>
                    </div>

                    <div className="timer-seconds__order">
                        <p className="time">{this.state.curTime.substr(18,18)}</p>
                        <p className="title__timer">seconds</p>
                    </div>


                </div>
            </Fragment>
        );
    }

}