import React from 'react';
import { Link, withRouter } from "react-router-dom";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff9900" };
  } else {
    return { color: "#000" };
  }
};

const Navbar =({ history }) => (
 
      <div>
         <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
            <div className='head-nav'>

                <h2 className='logo'>STAY HOME - SAVE LIVES</h2>
                <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i className="fas fa-align-justify"></i>
                </button>
            </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav ml-auto pr-5">
                        <li className="nav-item active">
                            <Link className="nav-link p-4" style={isActive(history, "/")} to="/">Statistic</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link p-4" style={isActive(history, "/symptoms")} to="/symptoms">Symptoms</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link p-4" style={isActive(history, "/prevention")} to="/prevention">Prevention</Link>
                        </li>
                      
                    </ul>
                </div>
            </div>
        </nav>
      </div>
    
)

export default withRouter(Navbar);