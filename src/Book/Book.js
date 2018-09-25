import React from 'react';

const book = (props) => {

  return (

    <div className="col-sm-3 text-center">
        <img className="book-image img-fluid text-center" src={props.image} alt=""></img>
        <br></br>
        <h6 className="title"><span class="title">Title:</span> {props.title}</h6>
        <h6 className="author"><span class="author">Author:</span> {props.author}</h6>
        <h6 className="review"><span class="review">Review:</span> {props.review}</h6>
      </div>
        
  );

}

export default book;