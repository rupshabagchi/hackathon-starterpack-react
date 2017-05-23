import React from 'react';
import Chartist from 'chartist';
import Images from '../../../assets';

export default class MainPanel extends React.Component {
  componentDidMount() {
    this.initPageCharts();
  }

  initPageCharts() {
    const dataDailySalesChart = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        series: [ [12, 17, 7, 17, 23, 18, 38] ]
    };
    const optionsDailySalesChart = {
        lineSmooth: Chartist.Interpolation.cardinal({ tension: 0 }),
        low: 0,
        high: 50, // recommend you to set the high sa the biggest value + something for a better look
        chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
    }
    const dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
    window.md.startAnimationForLineChart(dailySalesChart, Chartist);

    const dataCompletedTasksChart = {
        labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
        series: [ [230, 750, 450, 300, 280, 240, 200, 190] ]
    };
    const optionsCompletedTasksChart = {
        lineSmooth: Chartist.Interpolation.cardinal({ tension: 0 }),
        low: 0,
        high: 1000, //  recommend you to set the high sa the biggest value + something for a better look
        chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
    }

    const completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
    // start animation for the Completed Tasks Chart - Line Chart
    window.md.startAnimationForLineChart(completedTasksChart, Chartist);

    const dataWebsiteViewsChart = {
      labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      series: [ [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895] ]
    };
    const optionsWebsiteViewsChart = {
        axisX: { showGrid: false },
        low: 0,
        high: 1000,
        chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
    };
    const responsiveOptions = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];
    const websiteViewsChart = Chartist.Bar('#websiteViewsChart', dataWebsiteViewsChart, optionsWebsiteViewsChart, responsiveOptions);
    // start animation for the Emails Subscription Chart
    window.md.startAnimationForBarChart(websiteViewsChart, Chartist);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="header text-center">
          <h3 className="title">Chartist.js</h3>
          <p className="category">Handcrafted by our friends from <a href="https://gionkunz.github.io/chartist-js/" target="_blank">Chartist.js</a>.
          Please checkout their <a target="_blank" href="https://gionkunz.github.io/chartist-js/getting-started.html">full documentation.</a>
          </p>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="card card-chart">
              <div data-header-animation="true" data-background-color="rose" className="card-header">
                <div id="websiteViewsChart" className="ct-chart" />
              </div>
              <div className="card-content">
                <div className="card-actions">
                  <button className="btn btn-danger btn-simple fix-broken-card" type="button">
                    <i className="material-icons">build</i> Fix Header!
                  </button>
                  <button title="Refresh" data-placement="bottom" rel="tooltip" className="btn btn-info btn-simple" type="button">
                    <i className="material-icons">refresh</i>
                  </button>
                  <button title="Change Date" data-placement="bottom" rel="tooltip" className="btn btn-default btn-simple" type="button">
                    <i className="material-icons">edit</i>
                  </button>
                </div>
                <h4 className="card-title">Website Views</h4>
                <p className="category">Last Campaign Performance</p>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">access_time</i> campaign sent 2 days ago
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-chart">
              <div data-header-animation="true" data-background-color="green" className="card-header">
                <div id="dailySalesChart" className="ct-chart" />
              </div>
              <div className="card-content">
                <div className="card-actions">
                  <button className="btn btn-danger btn-simple fix-broken-card" type="button">
                    <i className="material-icons">build</i> Fix Header!
                  </button>
                  <button title="Refresh" data-placement="bottom" rel="tooltip" className="btn btn-info btn-simple" type="button">
                    <i className="material-icons">refresh</i>
                  </button>
                  <button title="Change Date" data-placement="bottom" rel="tooltip" className="btn btn-default btn-simple" type="button">
                    <i className="material-icons">edit</i>
                  </button>
                </div>
                <h4 className="card-title">Daily Sales</h4>
                <p className="category">
                  <span className="text-success"><i className="fa fa-long-arrow-up" /> 55% </span> increase in today sales.</p>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">access_time</i> updated 4 minutes ago
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-chart">
              <div data-header-animation="true" data-background-color="blue" className="card-header">
                <div id="completedTasksChart" className="ct-chart" />
              </div>
              <div className="card-content">
                <div className="card-actions">
                  <button className="btn btn-danger btn-simple fix-broken-card" type="button">
                    <i className="material-icons">build</i> Fix Header!
                  </button>
                  <button title="Refresh" data-placement="bottom" rel="tooltip" className="btn btn-info btn-simple" type="button">
                    <i className="material-icons">refresh</i>
                  </button>
                  <button title="Change Date" data-placement="bottom" rel="tooltip" className="btn btn-default btn-simple" type="button">
                    <i className="material-icons">edit</i>
                  </button>
                </div>
                <h4 className="card-title">Completed Tasks</h4>
                <p className="category">Last Campaign Performance</p>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">access_time</i> campaign sent 2 days ago
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div data-background-color="orange" className="card-header">
                <i className="material-icons">weekend</i>
              </div>
              <div className="card-content">
                <p className="category">Bookings</p>
                <h3 className="card-title">184</h3>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons text-danger">warning</i>
                  <a href="dashboard.html#pablo">Get More Space...</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div data-background-color="rose" className="card-header">
                <i className="material-icons">equalizer</i>
              </div>
              <div className="card-content">
                <p className="category">Website Visits</p>
                <h3 className="card-title">75.521</h3>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">local_offer</i> Tracked from Google Analytics
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div data-background-color="green" className="card-header">
                <i className="material-icons">store</i>
              </div>
              <div className="card-content">
                <p className="category">Revenue</p>
                <h3 className="card-title">$34,245</h3>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">date_range</i> Last 24 Hours
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card card-stats">
              <div data-background-color="blue" className="card-header">
                <i className="fa fa-twitter" />
              </div>
              <div className="card-content">
                <p className="category">Followers</p>
                <h3 className="card-title">+245</h3>
              </div>
              <div className="card-footer">
                <div className="stats">
                  <i className="material-icons">update</i> Just Updated
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3>Manage Listings</h3>
        <br />
        <div className="row">
          <div className="col-md-4">
            <div className="card card-product">
              <div data-header-animation="true" className="card-image">
                <a href="dashboard.html#pablo">
                  <img src={Images.cardB} className="img" role="presentation" />
                </a>
              </div>
              <div className="card-content">
                <div className="card-actions">
                  <button className="btn btn-danger btn-simple fix-broken-card" type="button">
                    <i className="material-icons">build</i> Fix Header!
                  </button>
                  <button title="View" data-placement="bottom" rel="tooltip" className="btn btn-default btn-simple" type="button">
                    <i className="material-icons">art_track</i>
                  </button>
                  <button title="Edit" data-placement="bottom" rel="tooltip" className="btn btn-success btn-simple" type="button">
                    <i className="material-icons">edit</i>
                  </button>
                  <button title="Remove" data-placement="bottom" rel="tooltip" className="btn btn-danger btn-simple" type="button">
                    <i className="material-icons">close</i>
                  </button>
                </div>
                <h4 className="card-title">
                  <a href="dashboard.html#pablo">Cozy 5 Stars Apartment</a>
                </h4>
                <div className="card-description">
                  The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
                </div>
              </div>
              <div className="card-footer">
                <div className="price">
                  <h4>$899/night</h4>
                </div>
                <div className="stats pull-right">
                  <p className="category"><i className="material-icons">place</i> Barcelona, Spain</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-product">
              <div data-header-animation="true" className="card-image">
                <a href="dashboard.html#pablo">
                  <img src={Images.cardC} className="img" role="presentation"/>
                </a>
              </div>
              <div className="card-content">
                <div className="card-actions">
                  <button className="btn btn-danger btn-simple fix-broken-card" type="button">
                    <i className="material-icons">build</i> Fix Header!
                  </button>
                  <button title="View" data-placement="bottom" rel="tooltip" className="btn btn-default btn-simple" type="button">
                    <i className="material-icons">art_track</i>
                  </button>
                  <button title="Edit" data-placement="bottom" rel="tooltip" className="btn btn-success btn-simple" type="button">
                    <i className="material-icons">edit</i>
                  </button>
                  <button title="Remove" data-placement="bottom" rel="tooltip" className="btn btn-danger btn-simple" type="button">
                    <i className="material-icons">close</i>
                  </button>
                </div>
                <h4 className="card-title">
                  <a href="dashboard.html#pablo">Office Studio</a>
                </h4>
                <div className="card-description">
                  The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.
                </div>
              </div>
              <div className="card-footer">
                <div className="price">
                  <h4>$1.119/night</h4>
                </div>
                <div className="stats pull-right">
                  <p className="category"><i className="material-icons">place</i> London, UK</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-product">
              <div data-header-animation="true" className="card-image">
                <a href="dashboard.html#pablo">
                  <img src={Images.cardA} className="img" role="presentation" />
                </a>
              </div>
              <div className="card-content">
                <div className="card-actions">
                  <button className="btn btn-danger btn-simple fix-broken-card" type="button">
                    <i className="material-icons">build</i> Fix Header!
                  </button>
                  <button title="View" data-placement="bottom" rel="tooltip" className="btn btn-default btn-simple" type="button">
                    <i className="material-icons">art_track</i>
                  </button>
                  <button title="Edit" data-placement="bottom" rel="tooltip" className="btn btn-success btn-simple" type="button">
                    <i className="material-icons">edit</i>
                  </button>
                  <button title="Remove" data-placement="bottom" rel="tooltip" className="btn btn-danger btn-simple" type="button">
                    <i className="material-icons">close</i>
                  </button>
                </div>
                <h4 className="card-title">
                  <a href="dashboard.html#pablo">Beautiful Castle</a>
                </h4>
                <div className="card-description">
                  The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.
                </div>
              </div>
              <div className="card-footer">
                <div className="price">
                  <h4>$459/night</h4>
                </div>
                <div className="stats pull-right">
                  <p className="category"><i className="material-icons">place</i> Milan, Italy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
