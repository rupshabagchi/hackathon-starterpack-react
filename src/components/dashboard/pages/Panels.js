import React from 'react';

export default class Panels extends React.Component {
  render () {
    return (

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Navigation Pills -
                  <small>Horizontal Tabs</small>
                </h4>
              </div>
              <div className="card-content">
                <ul className="nav nav-pills nav-pills-warning">
                  <li className="active">
                    <a data-toggle="tab" href="panels.html#pill1">Profile</a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="panels.html#pill2">Settings</a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="panels.html#pill3">Options</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div id="pill1" className="tab-pane active">
                    Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
                    <br />
                    <br /> This is very nice.
                  </div>
                  <div id="pill2" className="tab-pane">
                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.
                    <br />
                    <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.
                  </div>
                  <div id="pill3" className="tab-pane">
                    Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
                    <br />
                    <br />Dynamically innovate resource-leveling customer service for state of the art customer service.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Navigation Pills -
                  <small className="category">Vertical Tabs</small>
                </h4>
              </div>
              <div className="card-content">
                <div className="row">
                  <div className="col-md-4">
                    <ul className="nav nav-pills nav-pills-rose nav-stacked">
                      <li className="active">
                        <a data-toggle="tab" href="panels.html#tab1">Profile</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="panels.html#tab2">Settings</a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="panels.html#tab3">Options</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-8">
                    <div className="tab-content">
                      <div id="tab1" className="tab-pane active">
                        Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
                        <br />
                        <br /> Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. This is very nice.
                      </div>
                      <div id="tab2" className="tab-pane">
                        Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.
                        <br />
                        <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.
                      </div>
                      <div id="tab3" className="tab-pane">
                        Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
                        <br />
                        <br />Dynamically innovate resource-leveling customer service for state of the art customer service.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Collapsible Accordion</h4>
              </div>
              <div className="card-content">
                <div aria-multiselectable="true" role="tablist" id="accordion" className="panel-group">
                  <div className="panel panel-default">
                    <div id="headingOne" role="tab" className="panel-heading">
                      <a aria-controls="collapseOne" aria-expanded="true" href="panels.html#collapseOne" data-parent="#accordion" data-toggle="collapse" role="button">
                        <h4 className="panel-title">
                          Collapsible Group Item #1
                          <i className="material-icons">keyboard_arrow_down</i>
                        </h4>
                      </a>
                    </div>
                    <div aria-labelledby="headingOne" role="tabpanel" className="panel-collapse collapse in" id="collapseOne">
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div id="headingTwo" role="tab" className="panel-heading">
                      <a aria-controls="collapseTwo" aria-expanded="false" href="panels.html#collapseTwo" data-parent="#accordion" data-toggle="collapse" role="button" className="collapsed">
                        <h4 className="panel-title">
                          Collapsible Group Item #2
                          <i className="material-icons">keyboard_arrow_down</i>
                        </h4>
                      </a>
                    </div>
                    <div aria-labelledby="headingTwo" role="tabpanel" className="panel-collapse collapse" id="collapseTwo">
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div id="headingThree" role="tab" className="panel-heading">
                      <a aria-controls="collapseThree" aria-expanded="false" href="panels.html#collapseThree" data-parent="#accordion" data-toggle="collapse" role="button" className="collapsed">
                        <h4 className="panel-title">
                          Collapsible Group Item #3
                          <i className="material-icons">keyboard_arrow_down</i>
                        </h4>
                      </a>
                    </div>
                    <div aria-labelledby="headingThree" role="tabpanel" className="panel-collapse collapse" id="collapseThree">
                      <div className="panel-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Navigation Pills Icons -
                  <small className="category">Vertical Tabs</small>
                </h4>
              </div>
              <div className="card-content">
                <div className="row">
                  <div className="col-md-4">
                    <ul role="tablist" className="nav nav-pills nav-pills-icons nav-pills-rose nav-stacked">
                      {/*
                                    color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger"
                                */}
                      <li className="active">
                        <a data-toggle="tab" role="tab" href="panels.html#dashboard-2">
                          <i className="material-icons">dashboard</i> Dashboard
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" role="tab" href="panels.html#schedule-2">
                          <i className="material-icons">schedule</i> Schedule
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-8">
                    <div className="tab-content">
                      <div id="dashboard-2" className="tab-pane active">
                        Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
                        <br />
                        <br /> Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
                        <br />
                        <br /> Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
                      </div>
                      <div id="schedule-2" className="tab-pane">
                        Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.
                        <br />
                        <br /> Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h3 className="title text-center">Page Subcategories</h3>
            <br />
            <div className="nav-center">
              <ul role="tablist" className="nav nav-pills nav-pills-warning nav-pills-icons">
                {/*
                        color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger"
                    */}
                <li>
                  <a data-toggle="tab" role="tab" href="panels.html#description-1">
                    <i className="material-icons">info</i> Description
                  </a>
                </li>
                <li className="active">
                  <a data-toggle="tab" role="tab" href="panels.html#schedule-1">
                    <i className="material-icons">location_on</i> Location
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" role="tab" href="panels.html#tasks-1">
                    <i className="material-icons">gavel</i> Legal Info
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" role="tab" href="panels.html#tasks-2">
                    <i className="material-icons">help_outline</i> Help Center
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content">
              <div id="description-1" className="tab-pane">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Description about product</h4>
                    <p className="category">
                      More information here
                    </p>
                  </div>
                  <div className="card-content">
                    Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence without revolutionary ROI.
                  </div>
                </div>
              </div>
              <div id="schedule-1" className="tab-pane active">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Location of the product</h4>
                    <p className="category">
                      More information here
                    </p>
                  </div>
                  <div className="card-content">
                    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions without functional solutions.
                  </div>
                </div>
              </div>
              <div id="tasks-1" className="tab-pane">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Legal info of the product</h4>
                    <p className="category">
                      More information here
                    </p>
                  </div>
                  <div className="card-content">
                    Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
                    <br />
                    <br />Dynamically innovate resource-leveling customer service for state of the art customer service.
                  </div>
                </div>
              </div>
              <div id="tasks-2" className="tab-pane">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Help center</h4>
                    <p className="category">
                      More information here
                    </p>
                  </div>
                  <div className="card-content">
                    From the seamless transition of glass and metal to the streamlined profile, every detail was carefully considered to enhance your experience. So while its display is larger, the phone feels just right.
                    <br />
                    <br /> Another Text. The first thing you notice when you hold the phone is how great it feels in your hand. The cover glass curves down around the sides to meet the anodized aluminum enclosure in a remarkable, simplified design.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <div className="card-header">
                <h4 className="card-title">Pick your Color</h4>
              </div>
              <div className="card-content">
                <button className="btn">Default</button>
                <button className="btn btn-primary">Primary</button>
                <button className="btn btn-info">Info</button>
                <button className="btn btn-success">Success</button>
                <button className="btn btn-warning">Warning</button>
                <button className="btn btn-danger">Danger</button>
                <button className="btn btn-rose">Rose</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-header">
                <h4 className="card-title">Buttons with Label</h4>
              </div>
              <div className="card-content">
                <button className="btn">
                  <span className="btn-label">
                    <i className="material-icons">keyboard_arrow_left</i>
                  </span>
                  Left
                </button>
                <button className="btn">
                  Right
                  <span className="btn-label btn-label-right">
                    <i className="material-icons">keyboard_arrow_right</i>
                  </span>
                </button>
                <button className="btn btn-info">
                  <span className="btn-label">
                    <i className="material-icons">priority_high</i>
                  </span>
                  Info
                </button>
                <button className="btn btn-success">
                  <span className="btn-label">
                    <i className="material-icons">check</i>
                  </span>
                  Success
                </button>
                <button className="btn btn-warning">
                  <i className="material-icons">warning</i> Warning
                </button>
                <button className="btn btn-danger">
                  <i className="material-icons">close</i> Danger
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card-header">
                <h4 className="card-title">Pick your Size</h4>
              </div>
              <div className="card-content">
                <button className="btn btn-primary btn-xs">x-Small</button>
                <button className="btn btn-primary btn-sm">Small</button>
                <button className="btn btn-primary">Regular</button>
                <button className="btn btn-primary btn-lg">Large</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-header">
                <h4 className="card-title">Pick your Style</h4>
              </div>
              <div className="card-content">
                <button className="btn btn-primary">Default</button>
                <button className="btn btn-primary btn-round">round</button>
                <button className="btn btn-primary btn-round">
                  <i className="material-icons">favorite</i> with icon
                </button>
                <button className="btn btn-primary btn-round btn-fab btn-fab-mini">
                  <i className="material-icons">favorite</i>
                </button>
                <button className="btn btn-primary btn-simple">
                  simple
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card-header">
                <h4 className="card-title">Pagination</h4>
              </div>
              <div className="card-content">
                <ul className="pagination pagination-primary">
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">...</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">6</a>
                  </li>
                  <li className="active">
                    <a href="#">7</a>
                  </li>
                  <li>
                    <a href="#">8</a>
                  </li>
                  <li>
                    <a href="#">9</a>
                  </li>
                  <li>
                    <a href="#">...</a>
                  </li>
                  <li>
                    <a href="#">12</a>
                  </li>
                </ul>
                <ul className="pagination pagination-info">
                  <li>
                    <a href="#"> prev</a>
                  </li>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li className="active">
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">next </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card-header">
                <h4 className="card-title">Button Group</h4>
              </div>
              <div className="card-content">
                <div className="btn-group">
                  <button className="btn btn-info" type="button">Left</button>
                  <button className="btn btn-info" type="button">Middle</button>
                  <button className="btn btn-info" type="button">Right</button>
                </div>
                <br />
                <br />
                <div className="btn-group">
                  <button className="btn btn-round btn-info" type="button">1</button>
                  <button className="btn btn-round btn-info" type="button">2</button>
                  <button className="btn btn-round btn-info" type="button">3</button>
                  <button className="btn btn-round btn-info" type="button">4</button>
                </div>
                <div className="btn-group">
                  <button className="btn btn-round btn-info" type="button">5</button>
                  <button className="btn btn-round btn-info" type="button">6</button>
                  <button className="btn btn-round btn-info" type="button">7</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card-header">
                <h4 className="card-title">Social buttons</h4>
              </div>
              <div className="card-content">
                <div className="row">
                  <div className="col-md-4 col-sm-4">
                    <button className="btn btn-social btn-fill btn-twitter">
                      <i className="fa fa-twitter" /> Connect with Twitter
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon btn-twitter">
                      <i className="fa fa-twitter" />
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon btn-round btn-twitter">
                      <i className="fa fa-twitter" />
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon btn-simple btn-twitter">
                      <i className="fa fa-twitter" />
                    </button>
                  </div>
                  <div className="col-md-3 col-sm-4">
                    <button className="btn btn-simple btn-twitter">
                      <i className="fa fa-twitter" /> Connect with Twitter
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 col-sm-4">
                    <button className="btn btn-social btn-fill btn-facebook">
                      <i className="fa fa-facebook-square" /> Share · 2.2k
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon btn-facebook">
                      <i className="fa fa-facebook"> </i>
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon btn-round btn-facebook">
                      <i className="fa fa-facebook"> </i>
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon btn-simple btn-facebook">
                      <i className="fa fa-facebook-square"> </i>
                    </button>
                  </div>
                  <div className="col-md-3 col-sm-4">
                    <button className="btn btn-simple btn-facebook">
                      <i className="fa fa-facebook-square" /> Share · 2.2k
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 col-sm-4">
                    <button className="btn btn-social btn-fill btn-google">
                      <i className="fa fa-google-square" /> Share on Google+
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon  btn-google">
                      <i className="fa fa-google"> </i>
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon btn-round btn-google">
                      <i className="fa fa-google"> </i>
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon btn-simple btn-google">
                      <i className="fa fa-google"> </i>
                    </button>
                  </div>
                  <div className="col-md-3 col-sm-4">
                    <button className="btn btn-simple btn-google">
                      <i className="fa fa-google-square" /> Share on Google+
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 col-sm-4">
                    <button className="btn btn-social btn-fill btn-linkedin">
                      <i className="fa fa-linkedin-square" /> Connect with Linkedin
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon  btn-linkedin">
                      <i className="fa fa-linkedin" />
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon btn-round btn-linkedin">
                      <i className="fa fa-linkedin" />
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon btn-simple btn-linkedin">
                      <i className="fa fa-linkedin-square" />
                    </button>
                  </div>
                  <div className="col-md-3 col-sm-4">
                    <button className="btn btn-simple btn-linkedin">
                      <i className="fa fa-linkedin-square" /> Connect with Linkedin
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 col-sm-4">
                    <button className="btn btn-social btn-fill btn-pinterest">
                      <i className="fa fa-pinterest" /> Pint it · 212
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon  btn-pinterest">
                      <i className="fa fa-pinterest" />
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon btn-round btn-pinterest">
                      <i className="fa fa-pinterest" />
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon btn-simple btn-pinterest">
                      <i className="fa fa-pinterest" />
                    </button>
                  </div>
                  <div className="col-md-3 col-sm-4">
                    <button className="btn btn-simple btn-pinterest">
                      <i className="fa fa-pinterest" /> Pint it · 212
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 col-sm-4">
                    <button className="btn btn-social btn-fill btn-youtube">
                      <i className="fa fa-youtube-play" /> View on Youtube
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon  btn-youtube">
                      <i className="fa fa-youtube"> </i>
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon btn-round btn-youtube">
                      <i className="fa fa-youtube"> </i>
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon btn-simple btn-youtube">
                      <i className="fa fa-youtube"> </i>
                    </button>
                  </div>
                  <div className="col-md-3 col-sm-4">
                    <button className="btn btn-simple btn-youtube">
                      <i className="fa fa-youtube-play" /> View on Youtube
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 col-sm-4">
                    <button className="btn btn-social btn-fill btn-tumblr">
                      <i className="fa fa-tumblr-square" /> Repost
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon  btn-tumblr">
                      <i className="fa fa-tumblr"> </i>
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon btn-round btn-tumblr">
                      <i className="fa fa-tumblr"> </i>
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon btn-simple btn-tumblr">
                      <i className="fa fa-tumblr-square"> </i>
                    </button>
                  </div>
                  <div className="col-md-3 col-sm-4">
                    <button className="btn btn-simple btn-tumblr">
                      <i className="fa fa-tumblr-square" /> Repost
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 col-sm-4">
                    <button className="btn btn-social btn-fill btn-github">
                      <i className="fa fa-github" /> Connect with Github
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon  btn-github">
                      <i className="fa fa-github" />
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon btn-round btn-github">
                      <i className="fa fa-github" />
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon btn-simple btn-github">
                      <i className="fa fa-github" />
                    </button>
                  </div>
                  <div className="col-md-3 col-sm-4">
                    <button className="btn btn-simple btn-github">
                      <i className="fa fa-github" /> Connect with Github
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 col-sm-4">
                    <button className="btn btn-social btn-fill btn-behance">
                      <i className="fa fa-behance-square" /> Follow us
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon  btn-behance">
                      <i className="fa fa-behance" />
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon btn-round btn-behance">
                      <i className="fa fa-behance" />
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon btn-simple btn-behance">
                      <i className="fa fa-behance" />
                    </button>
                  </div>
                  <div className="col-md-3 col-sm-4">
                    <button className="btn btn-simple btn-behance">
                      <i className="fa fa-behance-square" /> Follow us
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 col-sm-4">
                    <button className="btn btn-social btn-fill btn-dribbble">
                      <i className="fa fa-dribbble" /> Find us on Dribble
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon  btn-dribbble">
                      <i className="fa fa-dribbble" />
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon btn-round btn-dribbble">
                      <i className="fa fa-dribbble" />
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon btn-simple btn-dribbble">
                      <i className="fa fa-dribbble" />
                    </button>
                  </div>
                  <div className="col-md-3 col-sm-4">
                    <button className="btn btn-simple btn-dribbble">
                      <i className="fa fa-dribbble" /> Find us on Dribble
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 col-sm-4">
                    <button className="btn btn-social btn-fill btn-reddit">
                      <i className="fa fa-reddit" /> Repost · 232
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon  btn-reddit">
                      <i className="fa fa-reddit" />
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon btn-round btn-reddit">
                      <i className="fa fa-reddit" />
                    </button>
                  </div>
                  <div className="col-md-1 col-sm-1">
                    <button className="btn btn-just-icon btn-simple btn-reddit">
                      <i className="fa fa-reddit" />
                    </button>
                  </div>
                  <div className="col-md-3 col-sm-4">
                    <button className="btn btn-simple btn-reddit">
                      <i className="fa fa-reddit" /> Repost · 232
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4 className="title">XS Grid
          <small>Always Horizontal</small>
        </h4>
        <div className="row">
          <div className="col-xs-4">
            <div className="card">
              <div className="card-content text-center">
                <code>col-xs-4</code>
              </div>
            </div>
          </div>
          <div className="col-xs-4">
            <div className="card">
              <div className="card-content text-center">
                <code>col-xs-4</code>
              </div>
            </div>
          </div>
          <div className="col-xs-4">
            <div className="card">
              <div className="card-content text-center">
                <code>col-xs-4</code>
              </div>
            </div>
          </div>
        </div>
        <h4 className="title">SM Grid
          <small>Collapsed at 768px</small>
        </h4>
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-content text-center">
                <code>col-sm-4</code>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-content text-center">
                <code>col-sm-4</code>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-content text-center">
                <code>col-sm-4</code>
              </div>
            </div>
          </div>
        </div>
        <h4 className="title">MD Grid
          <small>Collapsed at 992px</small>
        </h4>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-content text-center">
                <code>col-md-4</code>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-content text-center">
                <code>col-md-4</code>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-content text-center">
                <code>col-md-4</code>
              </div>
            </div>
          </div>
        </div>
        <h4 className="title">LG Grid
          <small>Collapsed at 1200px</small>
        </h4>
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-content text-center">
                <code>col-lg-4</code>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-content text-center">
                <code>col-lg-4</code>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-content text-center">
                <code>col-lg-4</code>
              </div>
            </div>
          </div>
        </div>
        <h4 className="title">Mixed Grid
          <small>Showing different sizes on different screens</small>
        </h4>
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="card">
              <div className="card-content text-center">
                <code>col-sm-6 col-lg-3</code>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card">
              <div className="card-content text-center">
                <code>col-sm-6 col-lg-3</code>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card">
              <div className="card-content text-center">
                <code>col-sm-6 col-lg-3</code>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card">
              <div className="card-content text-center">
                <code>col-sm-6 col-lg-3</code>
              </div>
            </div>
          </div>
        </div>
        <h4 className="title">Offset Grid
          <small>Adding some space when needed</small>
        </h4>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-content text-center">
                <code>col-md-3</code>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-6">
            <div className="card">
              <div className="card-content text-center">
                <code>col-md-3 col-md-offset-6</code>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-md-offset-1">
            <div className="card">
              <div className="card-content text-center">
                <code>col-md-4 col-md-offset-1</code>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-md-offset-2">
            <div className="card">
              <div className="card-content text-center">
                <code>col-md-4 col-md-offset-2</code>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-md-offset-3">
            <div className="card">
              <div className="card-content text-center">
                <code>col-md-6 col-md-offset-3</code>
              </div>
            </div>
          </div>
        </div>
        <h4 className="title">Paragraphs</h4>
        <div className="card">
          <div className="card-content">
            <div className="row">
              <div className="col-sm-6">
                <h3>Some Title Here</h3>
                <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.</p>
              </div>
              <div className="col-sm-6">
                <h3>Another Title Here</h3>
                <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought.</p>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-sm-4">
                <h3>Some Title Here</h3>
                <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
              </div>
              <div className="col-sm-4">
                <h3>Another Title Here</h3>
                <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
              </div>
              <div className="col-sm-4">
                <h3>Another Title Here</h3>
                <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-sm-4">
                <h3>Some Title Here</h3>
                <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
              </div>
              <div className="col-sm-8">
                <h3>Another Title Here</h3>
                <p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}