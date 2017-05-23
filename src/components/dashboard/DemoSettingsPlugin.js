import React from 'react';
import images from '../../assets';

// DemmoSettings Plugin
export default (props) => (
  <div className="fixed-plugin">
    <div className="dropdown show-dropdown">
      <a data-toggle="dropdown" href="dashboard.html#">
        <i className="fa fa-cog fa-2x"> </i>
      </a>
      <ul className="dropdown-menu">
        <li className="header-title"> Sidebar Filters</li>
        <li className="adjustments-line">
          <a className="switch-trigger active-color" href="#">
            <div className="badge-colors text-center">
              <span data-color="purple" className="badge filter badge-purple" />
              <span data-color="blue" className="badge filter badge-blue" />
              <span data-color="green" className="badge filter badge-green" />
              <span data-color="orange" className="badge filter badge-orange" />
              <span data-color="red" className="badge filter badge-red" />
              <span data-color="rose" className="badge filter badge-rose active" />
            </div>
            <div className="clearfix" />
          </a>
        </li>
        <li className="header-title">Sidebar Background</li>
        <li className="adjustments-line">
          <a className="switch-trigger background-color" href="#">
            <div className="text-center">
              <span data-color="white" className="badge filter badge-white" />
              <span data-color="black" className="badge filter badge-black active" />
            </div>
            <div className="clearfix" />
          </a>
        </li>
        <li className="adjustments-line">
          <a className="switch-trigger" href="#">
            <p>Sidebar Mini</p>
            <div className="togglebutton switch-sidebar-mini">
              <label>
                <input type="checkbox" />
              </label>
            </div>
            <div className="clearfix" />
          </a>
        </li>
        <li className="adjustments-line">
          <a className="switch-trigger" href="#">
            <p>Sidebar Image</p>
            <div className="togglebutton switch-sidebar-image">
              <label>
                <input type="checkbox" defaultChecked />
              </label>
            </div>
            <div className="clearfix" />
          </a>
        </li>
        <li className="header-title">Images</li>
        <li className="active">
          <a href="#" className="img-holder switch-trigger">
            <img role="presentation" src={images.sidebarA} />
          </a>
        </li>
        <li>
          <a href="#" className="img-holder switch-trigger">
            <img role="presentation" src={images.sidebarB} />
          </a>
        </li>
        <li>
          <a href="#" className="img-holder switch-trigger">
            <img role="presentation" src={images.sidebarC} />
          </a>
        </li>
        <li>
          <a href="#" className="img-holder switch-trigger">
            <img role="presentation" src={images.sidebarD} />
          </a>
        </li>
        <li className="button-container">
          <div className>
            <a className="btn btn-rose btn-block" target="_blank" href="#">Buy Now</a>
          </div>
          <div className>
            <a className="btn btn-info btn-block" target="_blank" href="#">Get Free Demo</a>
          </div>
        </li>
        <li className="header-title">Thank you for 95 shares!</li>
        <li className="button-container">
          <button className="btn btn-social btn-twitter btn-round" id="twitter"><i className="fa fa-twitter" /> · 45</button>
          <button className="btn btn-social btn-facebook btn-round" id="facebook"><i className="fa fa-facebook-square"> ·</i>50</button>
        </li>
      </ul>
    </div>
  </div>
);
