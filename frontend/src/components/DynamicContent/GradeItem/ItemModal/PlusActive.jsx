import React from 'react';
import PropTypes from 'prop-types';


export default function PlusActive({activeItem, handleChangeActive}) {
    return (
        <React.Fragment>
            <div className="grade__plus-item" onClick={() => {
                handleChangeActive()
            }} style={{background: activeItem ? '#000' : '#fff'  }}>
              <div className="grader__plus-itemActive" 
              style={{color: activeItem ? '#fff' : '#000'  }}>{activeItem ? '-' : '+'}</div>
            </div>
        </React.Fragment>
    );
}


PlusActive.defaultProps = {
  
};