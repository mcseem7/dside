import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { matchPath } from "react-router";
import withLanguage from "../../../HOC/withLanguage";
import withDsideApi from "../../../HOC/Fetch/index";
import { compose } from "recompose";
import grades from "./index.css";
import gradeReview from "./grade__review.png";
import { FacebookProvider, Comments } from "react-facebook";
import moment from "moment";
import arrow from "./arrow.png";
import "pure-react-carousel/dist/react-carousel.es.css";
import Carousel from "./carousel";
import ItemModal from "./ItemModal";
import Helmet from "react-helmet-async";
import Footer from "../../Basic/Footer";
import Header from "../../Basic/Header";
import Loader from "react-loader-spinner";
import { DiscussionEmbed } from "disqus-react";


class GradeItem extends Component {
  constructor() {
    super();

    this.state = {
      grade: [],
      gradeItems: [],
      avatar: "",
      text: [],
      activeSlide: null,
      loader: false,
      iDgrade: 0,
      titleGrade: ''
    };
  }

  async componentDidMount() {
    const match = await matchPath(this.props.location.pathname, {
      path: `/${this.props.language}/grade/:gradeitem`,
      exact: true,
      strict: false
    });

    return await fetch(
      `${process.env.REACT_APP_API}/${
        this.props.language
      }/review/getReviewDetails/${match.params.gradeitem}/`
    )
      .then(response => {
        if(response.status >= 400) {
          throw new Error()
        } 
        return response.json();
      })
      .then(response => {
        if (Object.keys(response).length == 0) {
          return this.props.history.push(`/${this.props.language}/notfound`);
        } else {
          this.setState({
            grade: response,
            avatar: response.graded_by,
            text: response.text_blocks,
            iDgrade: response.id,
            titleGrade: response.name
          }, );
        }
      }).then(() => {
        setTimeout(() => {
        this.setState({loader: true})
        }, 1300)
      })
      .catch(error => {
       
        console.error("GradeItem dont loading");
      });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.gradeItem !== nextProps.gradeItem) {
      this.setState({ gradeItems: nextProps.gradeItem });
    }
  }

  render() {
    const { grade } = this.state;
    const { gradeItem, history } = this.props;
    const disqusShortname = "mydsidegrade";
    const disqusConfig = {
      url: `https://mydside.com/${this.props.language}/grade/${this.state.iDgrade}`,
      identifier: this.state.iDgrade,
      title: this.state.titleGrade,
    };
    console.log(disqusConfig)
    return (
      <Fragment>
      
        <div className="review__container-wrapper">
          <Helmet>
            <title>Dside Review</title>
          </Helmet>
          <div className="review__container">
            <div className="review__information-left">
              <div className="review__title-wrapper">
                <h3 className="review__title">{`${moment(grade.date).format(
                  "dddd Do"
                )}, ${grade.name}`}</h3>
              </div>
              <div className="review__image-container">
                <div className="grader__modal-content">
                  <img
                    src={`${process.env.REACT_APP_DOMAIN}${grade.background}`}
                  />
                  {
                    Object.keys(this.state.text).map((item, index) => {
                      return (
                        <ItemModal id={item} textData={this.state.text[item]} {...item} />
                      )
                    })
                  }
                </div>
              </div>
              {/* {this.state.text.map(item => {
                return (
                  <div className="grade-text__description">
                    <p className={item.classes}>{item.text}</p>
                  </div>
                );
              })} */}
              <div className="grade-comment__body-post">
                <div id="grade-comment__container">{
                  // <FacebookProvider wait={true} appId="329972810887548">
                  //   <Comments
                  //     width="770"
                  //     href={`${process.env.REACT_APP_DOMAIN}/${
                  //       this.state.lang
                  //     }/grade/${grade.id}`}
                  //   />
                  // </FacebookProvider> 
                  /* Facebook integrate or Disqus */
                  <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                }
                </div>
              </div>
            </div>

            <div className="review__information-right">
              <div className="review__right-wrapper">
                <div className="review__grader-wrapper">
                  <div className="review__grader-title">
                    <h3 className="review__grader">Graded by:</h3>
                  </div>
                  <br />
                  {this.state.loader ? (
                    <div className={`review__grader-information ${this.state.loader ? 'active' : ''}`}
                    >
                      <div className="review__grader-img">
                        <img
                          src={`${process.env.REACT_APP_DOMAIN}${
                            this.state.avatar.avatar
                          }`}
                        />
                      </div>
                      <div className="reviewers__data">
                      <div className="grader__name">
                        <p>{this.state.avatar.name}</p>
                      </div>
                      <div className="grader__position">
                        <p>{this.state.avatar.position}</p>
                      </div>
                      <div className="social__links-reviewers">
                      <a href={this.state.avatar.links[0]}  target='_blank' className="social__icon-behance" />
                      <a href={this.state.avatar.links[1]} target='_blank'  className="social__icon-instagram" />
                      </div>
                      </div>
                    </div>
                  ) : (
                    <p style={{fontFamily: 'MontLight, sans-serif' }}>Loading...</p>
                  )}

                  <div className="grades__recents-review">
                    <div className="recent__title-grades">
                      <h3>Recent</h3>
                    </div>

                    
                      
                       
                          
                          {this.state.loader ? (
                          <div className={`similar__grades ${this.state.loader ? 'active' : ''}`} >
                          <Carousel {...this.props} />
                          </div>
                          ) : (
                            <Loader
                              type="Rings"
                              color="#B2BBC4"
                              height="60"
                              width="60"
                            />
                          )}
                         
                       
                      
                     
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default compose(
  withLanguage,
  withRouter,
  withDsideApi
)(GradeItem, "/review/getReviewList/", "GRADE");
