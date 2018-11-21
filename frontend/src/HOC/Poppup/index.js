import React, { Component, Fragment } from "react";
import {
  reactTranslateChangeLanguage,
  TranslateProvider
} from "translate-components";
import $ from "jquery";
import Cookies from 'js-cookie';

 export default function withPoppupHOC(PoppupHOC, apiUrl, type) {
  return class withPoppupHOC extends Component {
    constructor() {
      super();

      this.state = {
        result: false,
        lang: "",
        postData: {},
        errorModal: false
      };
      
    }

    componentDidUpdate() {
      
      $(function() {
        $(".holder__poppup + input").keyup(function() {
          if ($(this).val().length) {
            $(this)
              .prev(".holder__poppup")
              .hide();
          } else {
            $(this)
              .prev(".holder__poppup")
              .show();
          }
        });
        $(".holder__poppup").click(function() {
          $(this)
            .next()
            .focus();
        });
      });
    }

    handleSubmit =  async (...postData) => {
   
      switch (type) {
        case "ORDER":
          await this.setState({
            postData: {
              name: postData[0],
              phone: postData[1],
              data: new Date().toISOString()
            }
          });
          break;
        case "SUGGEST":
         await this.setState({
            postData: {
              name: postData[0].current.value,
              email: postData[1].current.value,
              social_link: postData[2].current.value,
              text: postData[3].current.value
            }
          });
          break;
        case "REVIEW":
        console.log(postData)
          postData[6]()
          if(postData[7] == true) {
         await  this.setState({
            postData: {
              name: postData[0].current.value,
              email: postData[1].current.value,
              social_link: postData[2].current.value,
              text: postData[3].current.value,
              title: postData[4].current.value,
              image: postData[5]
            }
          })} else {
            return false;
          }
          break;
      default:
        return null    
      }
      fetch(`${process.env.REACT_APP_API}/${this.props.language}${apiUrl}`, {
        headers: {
          Accept: "application/json",
          'Content-Type': 'multipart/form-data',
          'X-CSRFToken': Cookies.get('csrftoken')
        },
        method: "POST",
        body: JSON.stringify(this.state.postData)
      }).then((response) => {
        if(response.status >= 400) {
          throw new Error()
        } else {
          this.setState({ result: true });
        }
      }).catch((e) => {
        this.setState({errorModal: true})
    setTimeout(() => {
      this.setState({errorModal: false})
    }, 1000);
      })
    };

    render() {
      
      return (
        <div>
          <PoppupHOC
            {...this.props}
            result={this.state.result}
            getSubmitForm={this.handleSubmit}
            statusModal={this.state.errorModal}
          />
        </div>
      );
    }
  };
}
