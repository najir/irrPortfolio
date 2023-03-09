import "./styles/project.css";
import React from 'react';

class ProjectFetch extends React.Component{
    render() {
        return (
            <div>
              <div id="clearbox" className="mt-5 mb-5">
                <div className="d-flex justify-content-start align-items-end">
                  <i class="bi bi-server font-large"></i>
                  <h5 id="textboxmain" className="ms-2">Featured Project</h5>
                </div>
                <p className="mt-5 mb-5">Here is my most recently featured project, source can be found at <a href="github.com/najir">GitHub</a></p>
              </div>
            </div>
            
        )
    }
}

export default ProjectFetch