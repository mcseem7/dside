import React, {Component} from 'react'

import { withData } from 'react-universal-data'


export default function withDsideApi(DsideComponent, apiUrl, lang) {

  class withDsideApi extends Component {
    constructor() {
      super()

      this.state = {
        dataDside: [],
        dataItemHome: [],
        postData: {
          name: '',
          email: ''
        }
      }
    }

    componentDidMount()  {
     this.getDsideApi()
    }

    getDsideApi = async () => {
      await fetch(`http://mydside.com/api${lang}${apiUrl}`)
       .then((response) => response.json())
       .then(data => this.setState({dataDside: data}))
        .catch(error => console.log(error))
      await this.getItemApiHome()
    }

    getItemApiHome = () => {
      Array.isArray(this.state.dataDside) &&  this.state.dataDside.map((homeItem) => {
          return fetch(`http://mydside.com/api/en/portfolio/getPortfolioItemDetails/${homeItem.CURL}/`).then((response) => {
            return response.json()
          }).then((item) => {
            this.setState({dataItemHome: this.state.dataItemHome.concat(item)})
          })
        })
    }

    postFormData = (name, phone) => {
      fetch(`http://mydside.com/api${lang}${apiUrl}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({name: name.current.value, phone: phone.current.value, data: new Date().toISOString() })
      })
    }



    render() {
      return(
          <div>
            <DsideComponent
                dataItem={this.state.dataItemHome}
                postData={this.postFormData}
                getDsideApi={this.getDsideApi}
                dataDside={this.state.dataDside}/>
          </div>
      )
    }
  }

  return withData()(withDsideApi)
}