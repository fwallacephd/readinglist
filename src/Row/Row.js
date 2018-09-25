import React from 'react';

const row = (props) => {
  return (
    <div className="bookListing container-fluid">
      <div className="row center-block">
        {props.children}
      </div>
    </div>
  );
}

export default row;