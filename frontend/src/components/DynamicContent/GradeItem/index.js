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
import Helmet from 'react-helmet-async'

class GradeItem extends Component {
  constructor() {
    super();

    this.state = {
      grade: [],
      gradeItems: [],
      avatar: "",
      text: [],
      activeSlide: null
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
       
        return response.json();
      })
      .then(response => {
       if(Object.keys(response).length == 0) {
        return this.props.history.push(`/${this.props.language}/notfound`)    
      } else {
        this.setState({ grade: response, avatar: response.graded_by, text: response.text_blocks });
      }
      }).catch(error => {
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
    const items = [
      {
        id: 1,
        name: "Good one",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        id: 2,
        name: "Good two",
        description: "Lorem ipsum dolor sit amet"
      },
      {
        id: 3,
        name: "Good three",
        description: "Lorem ipsum dolor sit amet"
      }
    ];
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
                  <img src={gradeReview} />

                  {items.map(item => {
                    return <ItemModal {...item} />;
                  })}
                </div>
              </div>
              {this.state.text.map(item => {
                return (
                  <div className="grade-text__description">
                    <p className={item.classes}>{item.text}</p>
                  </div>
                );
              })}

              <div className="grade-comment__body-post">
                <div id="grade-comment__container">
                  <FacebookProvider appId="329972810887548">
                    <Comments
                      width="100%"
                      max-width="700px"
                      mobile="true"
                      href={`${process.env.REACT_APP_DOMAIN}/${
                        this.state.lang
                      }/grade/${grade.id}`}
                    />
                  </FacebookProvider>
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
                  <div className="review__grader-information">
                    <div className="review__grader-img">
                      <img
                        src={`${process.env.REACT_APP_DOMAIN}${
                          this.state.avatar.avatar
                        }`}
                      />
                    </div>
                    <div className="grader__name">
                      <p>{this.state.avatar.name}</p>
                    </div>
                  </div>

                  <div className="grades__recents-review">
                    <div className="recent__title-grades">
                      <h3>Recent</h3>
                    </div>

                    <div className="similar__grades">
                      <Carousel {...this.props} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default compose(
  withLanguage,
  withRouter,
  withDsideApi
)(GradeItem, "/review/getReviewList/", "GRADE");
