import React from 'react';
import Images from '../../../assets';

// Docs: https://limonte.github.io/sweetalert2/
import SweetAlert from 'sweetalert2';

export default class AlertsPage extends React.Component {

	showNotification(from, align) {
    const type = ['','info','success','warning','danger','rose','primary'];
    const color = Math.floor((Math.random() * 6) + 1);

    window.$.notify({
        icon: "notifications",
        message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."
    }, {
        type: type[color],
        timer: 3000,
        placement: {
            from: from,
            align: align
        }
    });
	}

  createSweetAlertBasic() {
    SweetAlert({
      title: "Here's a message!",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      type: 'success'
    });
  }

  createSweetAlertAdvanced() {
    SweetAlert.queue([{
      title: 'Your public IP',
      confirmButtonText: 'Show my public IP',
      text: 'Your public IP will be received via AJAX request',
      showLoaderOnConfirm: true,
      preConfirm: function () {
        return new Promise((resolve) => {
          fetch('https://api.ipify.org?format=json')
          .then(data => data.json())
          .then(data => {
            SweetAlert.insertQueueStep(data.ip);
            resolve(); // our wrapping Promise
          });
        });
      }
    }]);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="header text-center">
          <h3 className="title">Notifications</h3>
          <p className="category">Handcrafted by our friend
            <a href="https://github.com/mouse0270" target="_blank">Robert McIntosh</a>. Please checkout the
            <a target="_blank" href="http://bootstrap-notify.remabledesigns.com/">full documentation.</a>
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Notifications Style</h4>
              </div>
              <div className="card-content">
                <div className="alert alert-info">
                  <span>This is a plain notification</span>
                </div>
                <div className="alert alert-info">
                  <button className="close" aria-hidden="true" type="button">
                    <i className="material-icons">close</i>
                  </button>
                  <span>This is a notification with close button.</span>
                </div>
                <div data-notify="container" className="alert alert-info alert-with-icon">
                  <i data-notify="icon" className="material-icons">notifications</i>
                  <button className="close" aria-hidden="true" type="button">
                    <i className="material-icons">close</i>
                  </button>
                  <span data-notify="message">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>
                </div>
                <div data-notify="container" className="alert alert-rose alert-with-icon">
                  <i data-notify="icon" className="material-icons">notifications</i>
                  <button className="close" aria-hidden="true" type="button">
                    <i className="material-icons">close</i>
                  </button>
                  <span data-notify="message">This is a notification with close button and icon and is made with ".alert-rose". You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Notification states</h4>
              </div>
              <div className="card-content">
                <div className="alert alert-info">
                  <button className="close" aria-hidden="true" type="button">
                    <i className="material-icons">close</i>
                  </button>
                  <span>
                    <b> Info - </b> This is a regular notification made with ".alert-info"</span>
                </div>
                <div className="alert alert-success">
                  <button className="close" aria-hidden="true" type="button">
                    <i className="material-icons">close</i>
                  </button>
                  <span>
                    <b> Success - </b> This is a regular notification made with ".alert-success"</span>
                </div>
                <div className="alert alert-warning">
                  <button className="close" aria-hidden="true" type="button">
                    <i className="material-icons">close</i>
                  </button>
                  <span>
                    <b> Warning - </b> This is a regular notification made with ".alert-warning"</span>
                </div>
                <div className="alert alert-danger">
                  <button className="close" aria-hidden="true" type="button">
                    <i className="material-icons">close</i>
                  </button>
                  <span>
                    <b> Danger - </b> This is a regular notification made with ".alert-danger"</span>
                </div>
                <div className="alert alert-primary">
                  <button className="close" aria-hidden="true" type="button">
                    <i className="material-icons">close</i>
                  </button>
                  <span>
                    <b> Primary - </b> This is a regular notification made with ".alert-primary"</span>
                </div>
                <div className="alert alert-rose">
                  <button className="close" aria-hidden="true" type="button">
                    <i className="material-icons">close</i>
                  </button>
                  <span>
                    <b> Rose - </b> This is a regular notification made with ".alert-rose"</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card">
              <div className="card-content">
                <div className="places-buttons">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center">
                      <h4 className="card-title">
                        Notifications Places
                        <p className="category">Click to view notifications</p>
                      </h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                      <div className="col-md-4">
                        <button onClick={() => this.showNotification('top','left')} className="btn btn-primary btn-block">Top Left</button>
                      </div>
                      <div className="col-md-4">
                        <button onClick={() => this.showNotification('top','center')} className="btn btn-primary btn-block">Top Center</button>
                      </div>
                      <div className="col-md-4">
                        <button onClick={() => this.showNotification('top','right')} className="btn btn-primary btn-block">Top Right</button>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                      <div className="col-md-4">
                        <button onClick={() => this.showNotification('bottom','left')} className="btn btn-primary btn-block">Bottom Left</button>
                      </div>
                      <div className="col-md-4">
                        <button onClick={() => this.showNotification('bottom','center')} className="btn btn-primary btn-block">Bottom Center</button>
                      </div>
                      <div className="col-md-4">
                        <button onClick={() => this.showNotification('bottom','right')} className="btn btn-primary btn-block">Bottom Right</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <div className="card-header">
                      <h4 className="card-title">Modal</h4>
                    </div>
                    <button data-target="#myModal" data-toggle="modal" className="btn btn-primary btn-raised btn-round">
                      Classic modal
                    </button>
                    <button data-target="#noticeModal" data-toggle="modal" className="btn btn-raised btn-round btn-info">
                      Notice modal
                    </button>
                    <button data-target="#smallAlertModal" data-toggle="modal" className="btn btn-raised btn-round btn-rose">
                      Small alert modal
                    </button>
                    {/* Classic Modal */}
                    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex={-1} id="myModal" className="modal fade">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button aria-hidden="true" data-dismiss="modal" className="close" type="button">
                              <i className="material-icons">clear</i>
                            </button>
                            <h4 className="modal-title">Modal title</h4>
                          </div>
                          <div className="modal-body">
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button className="btn btn-simple" type="button">Nice Button</button>
                            <button data-dismiss="modal" className="btn btn-danger btn-simple" type="button">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*  End Modal */}
                    {/* notice modal */}
                    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex={-1} id="noticeModal" className="modal fade">
                      <div className="modal-dialog modal-notice">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button aria-hidden="true" data-dismiss="modal" className="close" type="button"><i className="material-icons">clear</i></button>
                            <h5 id="myModalLabel" className="modal-title">How Do You Become an Affiliate?</h5>
                          </div>
                          <div className="modal-body">
                            <div className="instruction">
                              <div className="row">
                                <div className="col-md-8">
                                  <strong>1. Register</strong>
                                  <p>The first step is to create an account at
                                    <a href=""></a>. You can choose a social network or go for the classic version, whatever works best for you.</p>
                                </div>
                                <div className="col-md-4">
                                  <div className="picture">
                                    <img className="img-rounded img-responsive" role="presentation" src={Images.cardA} />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="instruction">
                              <div className="row">
                                <div className="col-md-8">
                                  <strong>2. Apply</strong>
                                  <p>The first step is to create an account at
                                    <a href=""></a>. You can choose a social network or go for the classic version, whatever works best for you.</p>
                                </div>
                                <div className="col-md-4">
                                  <div className="picture">
                                    <img className="img-rounded img-responsive" role="presentation" src={Images.cardB} />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p>If you have more questions, don't hesitate to contact us or send us a tweet @creativetim. We're here to help!</p>
                          </div>
                          <div className="modal-footer text-center">
                            <button data-dismiss="modal" className="btn btn-info btn-round" type="button">Sounds good!</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end notice modal */}
                    {/* small modal */}
                    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex={-1} id="smallAlertModal" className="modal fade">
                      <div className="modal-dialog modal-small ">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button aria-hidden="true" data-dismiss="modal" className="close" type="button"><i className="material-icons">clear</i></button>
                          </div>
                          <div className="modal-body text-center">
                            <h5>Are you sure you want to do this? </h5>
                          </div>
                          <div className="modal-footer text-center">
                            <button data-dismiss="modal" className="btn btn-simple" type="button">Never mind</button>
                            <button className="btn btn-success btn-simple" type="button">Yes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*    end small modal */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header text-center">
          <h3 className="title">Sweet Alert 2</h3>
          <p className="category">A beautiful plugin, that replace the classic alert, Handcrafted by our friend
            <a href="https://twitter.com/t4t5" target="_blank">Tristan Edwards</a>. Please check out the
            <a target="_blank" href="http://limonte.github.io/sweetalert2/">full documentation.</a>
          </p>
        </div>
        <div className="places-sweet-alerts">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-content text-center">
                  <h5>Basic example of SweetAlert2</h5>
                  <button onClick={this.createSweetAlertBasic} className="btn btn-rose btn-fill">Try me!</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-content text-center">
                  <h5>More involved SweetAlert2</h5>
                  <button onClick={this.createSweetAlertAdvanced} className="btn btn-rose btn-fill">Try me!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
