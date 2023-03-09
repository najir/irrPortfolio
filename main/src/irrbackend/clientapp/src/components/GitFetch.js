import "./styles/git.css";
import React from 'react';

class GitFetch extends React.Component{
    render() {
        return (
            <div>
              <div id="clearbox" className="mb-5 mt-5">
                <div className="d-flex justify-content-start align-items-end">
                  <i class="bi bi-graph-up font-large"></i>
                  <h5 id="textboxmain" className="ms-2">Performance and Activity</h5>
                </div>
                <p className="mt-5 mb-5">A small visualization of my recent personal acitivty and creativity</p>
              </div>
            </div>
        )
    }
}

export default GitFetch;