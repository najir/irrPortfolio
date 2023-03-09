import "./styles/book.css";
import React from 'react';

class BookFetch extends React.Component{
    render() {
        return (
            <div id="greybox" className="w-50">
              <div className="d-flex p-2 justify-content-start align-items-end">
                <i class="bi bi-book-half font-large"></i>
                <h5 id="textboxmain" className="float-start m-2">Recent Book</h5>
              </div>
              <p>My last book review can be seen below</p>
            </div>
        )
    }
}

export default BookFetch