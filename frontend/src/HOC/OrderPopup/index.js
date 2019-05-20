import React, {Component, Fragment} from 'react'
import './index.css'
import arrow from '../arrow.svg'
import { reactTranslateChangeLanguage } from "translate-components";
import Translate from 'translate-components'
import InputMask from 'react-input-mask';
import withPoppupHOC from '../Poppup/index'
import withLanguage from '../withLanguage/index'
import {compose} from 'recompose'
import { Formik } from 'formik';
import * as Yup from 'yup';


class OrderPoppup extends Component {
  constructor(props) {
    super(props)

    this.nameRef = React.createRef()
    this.phoneRef = React.createRef()
    this.state = {
      modalState: this.props.modalStatus,
      result: props.result
    }
  }



  componentWillReceiveProps(nextProps) {
    if(this.state.result !== nextProps.result) {
      this.setState({result: nextProps.result})
    }

    if(this.state.modalState !== nextProps.modalStatus) {
      this.setState({modalState: nextProps.modalStatus})
    }
  }

  componentDidUpdate() {
    reactTranslateChangeLanguage.bind(this, this.props.language)();
  }


  render() {

    return(
      <Fragment>
        <div className={`modal-overlay ${this.state.modalState ? 'active' : ''}`}>
          <div className={`modal  ${this.state.modalState ? 'active' : ''}`}>
{this.state.modalState ?   <Fragment> <a className="close-modal" onClick={() => {
  return  this.props.onClose()
}}>
  <svg viewBox="0 0 20 20">
    <path fill="#000000" d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
  </svg>
</a>

<div className="modal-content">
  <div className="form-wrap">
 <Formik
      initialValues={{ name: '', phone: '' }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          this.props.getSubmitForm(this.nameRef.current.value, this.phoneRef.current.value);
          setSubmitting(false);
        }, 1);
      }}
      validationSchema={Yup.object().shape({
        phone: Yup.string()
          .min(15, 'Too short phone number')
          .required('Required'),
        name: Yup.string()
          .min(2, 'Too short name')
          .max(30, 'Too long name')
          .required('Required'),
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <form onSubmit={handleSubmit}>
                  <div id="form-itself"> <h3><Translate>Leave your phone number</Translate></h3>
          <p><Translate>And you will receive a free consultation on the question that interests you. Usually we call back
            within 30 seconds.
          </Translate></p></div>
            <label htmlFor="name" style={{ display: 'block' }}>
              Name
            </label>
            <input
              id="name"
              placeholder="Enter your name"
              type="text"
              ref={this.nameRef}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.name && touched.name ? 'text-input error' : 'text-input'
              }
            />{errors.name && touched.name && (
              <div className="input-feedback">{errors.name}</div>
            )}
            <label htmlFor="phone" style={{ display: 'block' }}>
            Phone
          </label>
             <InputMask
              maskChar={null}
              defaultValue={this.props.language !== "pl" ? "+" : "+48"}
              mask={this.props.language !== "pl" ? "+99 999 999 99 99" : "+48 999-999-999"}
              id="phone"
              placeholder={this.props.language !== "pl" ? "+" : "+48"}
              type="text"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              ref={this.phoneRef}
              className={
                errors.phone && touched.phone ? 'text-input error' : 'text-input'
              }
            />
            {errors.phone && touched.phone && (
              <div className="input-feedback">{errors.phone}</div>
            )}

            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>

          </form>
        );
      }}
    </Formik>
  </div>
</div></Fragment> : null}
          
          </div>
        </div>
    
      </Fragment>
    )
  }

}




export default compose(
  withLanguage,
 withPoppupHOC
)(OrderPoppup, '/home/addOrder/', 'ORDER')