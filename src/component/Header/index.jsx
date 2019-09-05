import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render(){
    return (
      <header id="header" className="header">
        <div className="header-menu">
          <div className="col-sm-7">
            <p id="menuToggle" className="menutoggle pull-left"><i className="fa fa fa-tasks"></i></p>
            <div className="header-left">
              <div className="add">
                <Link className="add-trigger" to="/addNews"><i className="fa fa-plus"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
