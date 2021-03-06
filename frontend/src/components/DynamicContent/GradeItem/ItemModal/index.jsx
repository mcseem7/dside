import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import PlusActive from "./PlusActive";

export default class ItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemOpen: false
    };
  }

  changeActivePlus = () => {
    this.setState({ itemOpen: !this.state.itemOpen });
  };

  render() {
   
    return (
      <React.Fragment>
        <div
          className={`grade-information__item grade__information-position ${
            this.props.textData.classes
          }`}
          style={
            this.state.positive
              ? {
                  bottom: this.props.textData.coordinates_x,
                  right: this.props.textData.coordinates_y
                }
              : {
                  top: this.props.textData.coordinates_x,
                  left: this.props.textData.coordinates_y
                }
          }
        >
          <div className={`plus__item-wrapper plus__item ${this.props.id}`}>
            <PlusActive
              handleChangeActive={this.changeActivePlus}
              activeItem={this.state.itemOpen}
            />
          </div>

          <div
            className="grade__information-wrapper"
            style={{ opacity: this.state.itemOpen ? "1" : "0" }}
          >
            <React.Fragment>
              {/* <div className="grade__information-title" >
                    <h4>{this.props.name}</h4></div> */}
              <div className="grade__information-description">
                <p
                  dangerouslySetInnerHTML={{ __html: this.props.textData.text }}
                />
              </div>
            </React.Fragment>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ItemModal.defaultProps = {
  id: 0,
  name: "server dont load name",
  description: "server dont load decription"
};
