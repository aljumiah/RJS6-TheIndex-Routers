import React, { Component } from "react";
import { Link } from "react-router-dom";

class BookCard extends Component {
  render() {
    const book = this.props.book;
    // console.log("bookcard", book);
    //const authorName = `${author.first_name} ${author.last_name}`;

    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div className="image" />
        <div className="card-body">
          <h5 className="card-title" />
        </div>
      </div>
    );
  }
}

export default BookCard;
