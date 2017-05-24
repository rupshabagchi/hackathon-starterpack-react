import React from 'react';

// HeadNavbar
export default (props) => (
  <nav className="navbar navbar-transparent navbar-absolute">
    <div className="container-fluid">
      <div className="navbar-minimize">
        <button className="btn btn-round btn-white btn-fill btn-just-icon" id="minimizeSidebar">
          <i className="material-icons visible-on-sidebar-regular">more_vert</i>
          <i className="material-icons visible-on-sidebar-mini">view_list</i>
        </button>
      </div>
      <div className="navbar-header">
        <button data-toggle="collapse" className="navbar-toggle" type="button">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="#" className="navbar-brand">  </a>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
              <i className="material-icons">page</i>
              <p className="hidden-lg hidden-md">Page</p>
            </a>
          </li>
          <li className="dropdown">
            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
              <i className="material-icons">notifications</i>
              <span className="notification">5</span>
              <p className="hidden-lg hidden-md">
                Notifications
                <b className="caret" />
              </p>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#">Mike John responded to your email</a>
              </li>
              <li>
                <a href="#">You have 5 new tasks</a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#">Another Notification</a>
              </li>
              <li>
                <a href="#">Another One</a>
              </li>
            </ul>
          </li>
          <li>
            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
              <i className="material-icons">person</i>
              <p className="hidden-lg hidden-md">Profile</p>
            </a>
          </li>
          <li className="separator hidden-lg hidden-md" />
        </ul>
        <form role="search" className="navbar-form navbar-right">
          <div className="form-group form-search is-empty">
            <input type="text" placeholder="Search" className="form-control" />
            <span className="material-input" />
          </div>
          <button className="btn btn-white btn-round btn-just-icon" type="submit">
            <i className="material-icons">search</i>
            <div className="ripple-container" />
          </button>
        </form>
      </div>
    </div>
  </nav>
);
