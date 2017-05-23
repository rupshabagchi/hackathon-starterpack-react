import React from 'react';

import Images from '../../../assets';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default class LoginPage extends React.Component {
  componentDidMount() {
    window.md.checkFullPageBackgroundImage();

    setTimeout(function() {
        // after 1000 ms we add the class animated to the login/register card
        window.$('.card').removeClass('card-hidden');
    }, 700);
  }

  render() {
    return (
      <div>
        <Navbar tab="login" />
        <div className="wrapper wrapper-full-page">
          <div data-image={Images.backgroundLandingC} filter-color="black" className="full-page login-page">
            {/*   you can change the color of the filter page using: data-color="blue | purple | green | orange | red | rose " */}
            <div className="content">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                    <form action="#" method="#">
                      <div className="card card-login card-hidden">
                        <div data-background-color="rose" className="card-header text-center">
                          <h4 className="card-title">Login</h4>
                          <div className="social-line">
                            <a className="btn btn-just-icon btn-simple" href="#">
                              <i className="fa fa-facebook-square" />
                            </a>
                            <a className="btn btn-just-icon btn-simple" href="#">
                              <i className="fa fa-twitter" />
                            </a>
                            <a className="btn btn-just-icon btn-simple" href="#">
                              <i className="fa fa-google-plus" />
                            </a>
                          </div>
                        </div>
                        <p className="category text-center">
                          Or Be Classical
                        </p>
                        <div className="card-content">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">face</i>
                            </span>
                            <div className="form-group label-floating">
                              <label className="control-label">First Name</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">email</i>
                            </span>
                            <div className="form-group label-floating">
                              <label className="control-label">Email address</label>
                              <input type="email" className="form-control" />
                            </div>
                          </div>
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="material-icons">lock_outline</i>
                            </span>
                            <div className="form-group label-floating">
                              <label className="control-label">Password</label>
                              <input type="password" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="footer text-center">
                          <button className="btn btn-rose btn-simple btn-wd btn-lg" type="submit">Let's go</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
