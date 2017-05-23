import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-primary navbar-transparent navbar-absolute">
        <div className="container">
          <div className="navbar-header">
            <button data-target="#navigation-example-2" data-toggle="collapse" className="navbar-toggle" type="button">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link to="/" className="navbar-brand">Material Dashboard Pro</Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/">
                  <i className="material-icons">dashboard</i> Dashboard
                </Link>
              </li>
              <li className={this.props.tab === "register" ? "active" : ""}>
                <Link to="/register">
                  <i className="material-icons">person_add</i> Register
                </Link>
              </li>
              <li className={this.props.tab === "login" ? "active" : ""}>
                <Link to="login">
                  <i className="material-icons">fingerprint</i> Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}