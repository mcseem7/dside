import React, {Component} from 'react'




export default function withDsideApi(DsideComponent, apiUrl, lang) {

  class withDsideApi extends Component {
    constructor() {
      super()

      this.state = {
        data: []
      }
    }

    componentDidMount() {
        this.getDsideApi()
    }

    getDsideApi = () => {
      fetch(`http://dside.pl/api${lang}${apiUrl}`).then((response) => response.json()).then(data => this.setState({data}))
    }



    render() {
      return(
          <div>
            <DsideComponent getDsideApi={this.getDsideApi} dataApi={this.state.data}/>
          </div>
      )
    }
  }

  return withDsideApi;
}