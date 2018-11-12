import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {};

const defaultProps = {
    isActiveCategory: false
};

export default class CategoryItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemCategory: '',
            categoryLength: []
        };
    }

    async componentWillReceiveProps () {
        if(this.state.categoryLength.length == 0) {
       await this.setState({categoryLength: this.props.dataItems.filter(function(event){
            return event.category.tag == this.props.category.tag
        }.bind(this))
      })
    }
    }


    render() {
        console.log(this.state.categoryLength)
        return (
            <React.Fragment>
               
                      <li className="portfolio-category__item" 
                          onClick={this.props.onActiveFilteringCategory}>

                        <p className={this.props.isActiveCategory ?  'golden' : ''}>{this.props.category.tag}<sup>({this.state.categoryLength.length})</sup></p>
                      </li>
                
            </React.Fragment>
        );
    }
}

 CategoryItem.propTypes = propTypes;
 CategoryItem.defaultProps = defaultProps;