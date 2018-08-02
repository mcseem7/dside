import React, {Component} from 'react'




export default function withDsideApi(DsideComponent, apiUrl, lang) {

  class withDsideApi extends Component {
    constructor() {
      super()

      this.state = {
        data: [],
        postData: {
          name: '',
          email: ''
        }
      }
    }

    componentDidMount() {
        this.getDsideApi()
    }

    getDsideApi = () => {
      fetch(`http://dside.pl/api${lang}${apiUrl}`).then((response) => response.json()).then(data => this.setState({data}))
    }

    postFormData = (name, phone) => {
      fetch(`http://dside.pl/api${lang}${apiUrl}`, {
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
            <DsideComponent postData={this.postFormData}  getDsideApi={this.getDsideApi} dataApi={this.state.data}/>
          </div>
      )
    }
  }

  return withDsideApi;
}