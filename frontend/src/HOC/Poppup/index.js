import React, {Component, Fragment} from 'react'
import { reactTranslateChangeLanguage, TranslateProvider } from "translate-components";


export default function withPoppupHOC(PoppupHOC, apiUrl, type) {
    return class withPoppupHOC extends Component {
        constructor() {
            super()

          this.state ={
                result: false,
                lang: '',
                postData: {}
           }
        }



        componentDidMount() {
            reactTranslateChangeLanguage.bind(this, this.state.lang)()
             this.setState({lang: localStorage.getItem('lang')})
        }



        handleSubmit = async(event, ...postData) => {

            await event.preventDefault()
            switch (type) {
                case 'ORDER':
                    await this.setState({postData: {
                          name: postData[0],
                          phone: postData[1],
                          data: new Date().toISOString()
                     } })
                    break;
                case 'SUGGEST':
                    await this.setState({postData: {
                            name: postData[0].current.value,
                            email: postData[1].current.value,
                            social_link: postData[2].current.value,
                            text: postData[3].current.value
                        } })
                    break;
            }
            await fetch(`${process.env.REACT_APP_API}/${this.state.lang}${apiUrl}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify( this.state.postData )
            })
            this.setState({result: true})
        }


        render() {
            return (
                <div>
                    <PoppupHOC
                        {...this.props}
                        result={this.state.result}
                        getSubmitForm={this.handleSubmit} />
                </div>
            );
        }
    }
}