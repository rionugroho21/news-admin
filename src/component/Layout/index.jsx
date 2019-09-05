import React, { Component } from 'react';
import { object } from 'prop-types'
import { renderRoutes } from 'react-router-config';

import Aside from '../Aside';
import Header from '../Header';
import Breadcrumbs from '../Breadcrumbs';

class Layout extends Component{
  static propTypes = {
    route: object
  };

  render() {
    return (
      <div>
        <Aside />
        <div id="right-panel" className="right-panel">
          <Header />
          <Breadcrumbs />
          <div className="content mt-3">
            {renderRoutes(this.props.route.routes)}
          </div>
        </div>
      </div>
    )
  }
}

export default Layout;
