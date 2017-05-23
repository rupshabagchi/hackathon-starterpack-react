import React from 'react';
import { Link } from 'react-router-dom'

import images from '../../assets';

class NavItem extends React.Component {
  render () {
    const { to, children, hasSublinks, ...props } = this.props;
    return (
      <li className={this.props.match ? 'active' : ''}>
        {hasSublinks ? children : <Link to={to} {...props}>{children}</Link>}
      </li>
    );
  }
}

/**
 *  Left Sidebar with navigation
 */
export default class Sidebar extends React.Component {
  render() {
    /** Sidebar themes:
     * data-image is the background img,
     * data-background-color: white | black
     * data-active-color: "purple | blue | green | orange | red | rose"
     */
    return (
      <div data-image={images.sidebarA} data-background-color="black" data-active-color="rose" className="sidebar">
        <div className="logo">
          <a className="simple-text" href="http://www.example.com">
            Pages
          </a>
        </div>
        <div className="logo logo-mini">
          <a className="simple-text" href="http://www.example.com">
            Ct
          </a>
        </div>
        <div className="sidebar-wrapper">
          <div className="user">
            <div className="photo">
              <img src={images.avatar} role="presentation" />
            </div>
            <div className="info">
              <a className="collapsed" href="#collapseExample" data-toggle="collapse">
                Tania Andrew
                <b className="caret" />
              </a>
              <div id="collapseExample" className="collapse">
                <ul className="nav">
                  <li>
                    <a href="#">My Profile</a>
                  </li>
                  <li>
                    <a href="#">Edit Profile</a>
                  </li>
                  <li>
                    <a href="#">Settings</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className="nav">
            <NavItem to='/'>
                <i className="material-icons">dashboard</i>
                <p>Dashboard</p>
            </NavItem>
            <NavItem to="/web-components" hasSublinks={true}>
              <a href="#componentsExamples" data-toggle="collapse">
                <i className="material-icons">apps</i>
                <p>Components
                  <b className="caret" />
                </p>
              </a>
              <div id="componentsExamples" className="collapse">
                <ul className="nav">
                  <NavItem to='/web-components/panels'>
                    Panels and Buttons
                  </NavItem>
                  <NavItem to='/web-components/alerts'>
                    Alerts
                  </NavItem>
                </ul>
              </div>
            </NavItem>
            <li>
              <a href="#pagesExamples" data-toggle="collapse">
                <i className="material-icons">image</i>
                <p>Pages
                  <b className="caret" />
                </p>
              </a>
              <div id="pagesExamples" className="collapse">
                <ul className="nav">
                  <NavItem to='/login'>
                    Login Page
                  </NavItem>
                  <NavItem to='/register'>
                    Register Page
                  </NavItem>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
