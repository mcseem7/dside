import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import PropTypes from 'prop-types'
import $ from 'jquery'
import withLanguage from '../withLanguage'
import { matchPath } from 'react-router'
import Cookies from 'js-cookie'

export default function withDsideApi(DsideComponent, apiUrl, type) {

  class withDsideApi extends Component {
    constructor() {
      super()

      this.state = {
        dataDside: [],
        dataItemHome: [],
        gradeItem: [],
        loading: false,
        blogItem: [],
        nextPost: [],
        lastPost: false,
        postOrderActive: true,
        postData: {
          name: '',
          email: ''
        }
      }

    }

    static contextTypes = {
      router: PropTypes.object.isRequired
    }


    componentDidMount() {
      if (typeof window != "undefined") {
        this.setState({ langContent: localStorage.getItem('lang') }, () => { //callback after get language
          this.getDsideApi()
        })
      }
      $(function () {
        $(".holder + input").keyup(function () {
          if ($(this).val().length) {
            $(this).prev('.holder').hide();
          } else {
            $(this).prev('.holder').show();
          }
        });
        $(".holder").click(function () {
          $(this).next().focus();
        });
      });
    }




      getDsideApi = async () => {
      await fetch(`${process.env.REACT_APP_API}/${this.state.langContent}${apiUrl}`)
        .then((response) => response.json())
        .then(data => this.setState({
          dataDside: data
        }))
        .catch(error => console.log(error))
      switch (type) {
        case 'BLOG':
          await this.getItemBlog()
          break;
        case 'HOME':
          await this.getItemApiHome()
          break;
        case 'GRADE':
          await this.getItemGrade()
      }
      await this.setState({ loading: true })
    }



    getItemGrade = () => {
      this.state.dataDside.map((homeItem) => {
        
        return fetch(`${process.env.REACT_APP_API}/${this.state.langContent}/review/getReviewDetails/${homeItem.id}/`).then((response) => {
          return response.json()
        }).then((item) => {
          this.setState({ gradeItem: this.state.gradeItem.concat(item) })
        })
      })
    }

    getItemApiHome = () => {
      Array.isArray(this.state.dataDside) && this.state.dataDside.map((homeItem) => {
        return fetch(`${process.env.REACT_APP_API}/${this.state.langContent}/portfolio/getPortfolioItemDetails/${homeItem.CURL}/`).then((response) => {
          return response.json()
        }).then((item) => {
          this.setState({ dataItemHome: this.state.dataItemHome.concat(item) })
        })
      })
    }


    getItemBlog = () => {
      Array.isArray(this.state.dataDside) && this.state.dataDside.map((blogItem) => {
        return fetch(`${process.env.REACT_APP_API}/${this.state.langContent}/blog/getBlogItemDetails/${blogItem.base_name}/`).then((response) => {
          return response.json()
        }).then((item) => {
          this.setState({ blogItem: this.state.blogItem.concat(item) })
        })
      })
    }



    postFormData = async (name, phone) => {
      try {
        const postOrderForm = await fetch(`${process.env.REACT_APP_API}/${this.state.langContent}${apiUrl}`, {
          headers: {
            'X-CSRFToken': Cookies.get('csrftoken'),
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({ name: name.current.value, phone: phone.current.value, data: new Date().toISOString() })
        })
        if(postOrderForm.status >= 400) {
          throw new Error()
        }
      } catch(e) {
        this.setState({postOrderActive: false})
      }
  }



    render() {
      return (
        <div>
          <DsideComponent
            {...this.props}
            postOrderActive={this.state.postOrderActive}
            nextPost={this.state.nextPost}
            gradeItem={this.state.gradeItem}
            dataItem={this.state.dataItemHome}
            blogItem={this.state.blogItem}
            postData={this.postFormData}
            loading={this.state.loading}
            lastPost={this.state.lastPost}
            getDsideApi={this.getDsideApi}
            dataDside={this.state.dataDside} />
        </div>
      )
    }
  }

  return withLanguage(withDsideApi)
}