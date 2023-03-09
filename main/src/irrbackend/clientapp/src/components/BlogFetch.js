import "./styles/blogfetch.css";
import React from 'react';

class BlogFetch extends React.Component{
    render() {
        return (
            <div id="greybox" className="w-50">
              <div className="d-flex p-2 justify-content-end align-items-end">
                <h5 id="textboxmain" className="float-end m-2">Recent Blog</h5>
                <i class="bi bi-blockquote-left font-large"></i>
              </div>
              <p>My last blog post can be seen below</p>
            </div>
        )
    }
}

export default BlogFetch;