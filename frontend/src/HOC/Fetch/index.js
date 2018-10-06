import React, {Component} from 'react'
import fetch from 'isomorphic-fetch'



export default function withDsideApi(DsideComponent, apiUrl, type) {

  class withDsideApi extends Component {
    constructor() {
      super()

      this.state = {
        dataDside: [],
        dataItemHome: [],
          loading: false,
        blogItem: [],
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
      await fetch(`${process.env.REACT_APP_API}/${this.state.langContent}${apiUrl}`)
       .then((response) => response.json())
       .then(data => this.setState({dataDside: data}))
        .catch(error => console.log(error))
      switch (type) {
        case 'BLOG':
          await this.getItemBlog()
          break;
        case 'HOME':
          await this.getItemApiHome()
          break;
      }
      await this.setState({loading: true})
    }

    getItemApiHome = () => {
      Array.isArray(this.state.dataDside) &&  this.state.dataDside.map((homeItem) => {
          return fetch(`${process.env.REACT_APP_API}/${this.state.langContent}/portfolio/getPortfolioItemDetails/${homeItem.CURL}/`).then((response) => {
            return response.json()
          }).then((item) => {
            this.setState({dataItemHome: this.state.dataItemHome.concat(item)})
          })
        })
    }

    getItemBlog = () => {
      Array.isArray(this.state.dataDside) &&  this.state.dataDside.map((blogItem) => {
        return fetch(`${process.env.REACT_APP_API}/${this.state.langContent}/blog/getBlogItemDetails/${blogItem.base_name}/`).then((response) => {
          return response.json()
        }).then((item) => {
          this.setState({blogItem: this.state.blogItem.concat(item)})
        })
      })
    }



    postFormData = (name, phone) => {
      fetch(`${process.env.REACT_APP_API}/${this.state.langContent}${apiUrl}`, {
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
                {...this.props}
                dataItem={this.state.dataItemHome}
                blogItem={this.state.blogItem}
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