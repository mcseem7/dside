import React,{Component} from 'react'



function withLanguage(Language) {
    return class withLanguage extends Component {
        constructor(props) {
            super(props)

            this.state = {
                lang: ''
            }
        }

        componentWillMount() {
            this.setState({lang: localStorage.getItem('lang')})
        }


        render() {
            let getActive = ['en', 'pl', 'ru'].filter((item) => {
                return item == this.state.lang
            })

            return(
                <div>
                    <Language activeLang={getActive} language={this.state.lang} {...this.props} />
                </div>
            )
        }
    }
}



export default withLanguage;