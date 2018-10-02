import React, {Component} from 'react'
import fetch from 'isomorphic-fetch'



export default function withDsideApi(DsideComponent, apiUrl, lang) {

  class withDsideApi extends Component {
    constructor() {
      super()

      this.state = {
        dataDside: [],
        dataItemHome: [],
          loading: false,
        postData: {
          name: '',
          email: ''
        },
          langContent: ''
      }

    }



   componentDidMount()  {
       if(typeof window != "undefined") {
           this.setState({langContent: localStorage.getItem('lang')}, () => { //callback after get language
               this.getDsideApi()
           })
       } else {
           console.log('loading')
       }
    }




    getDsideApi = async () => {
      await fetch(`http://mydside.com/api/${this.state.langContent}${apiUrl}`)
       .then((response) => response.json())
       .then(data => this.setState({dataDside: data}))
        .catch(error => console.log(error))
      await this.getItemApiHome()
      await this.setState({loading: true})
    }

    getItemApiHome = () => {
      Array.isArray(this.state.dataDside) &&  this.state.dataDside.map((homeItem) => {
          return fetch(`http://mydside.com/api/${this.state.langContent}/portfolio/getPortfolioItemDetails/${homeItem.CURL}/`).then((response) => {
            return response.json()
          }).then((item) => {
            this.setState({dataItemHome: this.state.dataItemHome.concat(item)})
          })
        })
    }

    postFormData = (name, phone) => {
      fetch(`http://mydside.com/api/${this.state.langContent}${apiUrl}`, {
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
                loading={this.state.loading}
                getDsideApi={this.getDsideApi}
                dataDside={this.state.dataDside}/>
          </div>
      )
    }
  }

  return withDsideApi;
}