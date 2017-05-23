import React, { Component } from 'react';

import Sidebar from './Sidebar';
import HeadNavbar from './HeadNavbar';
import Footer from './Footer';

import DemoSettingsPlugin from './DemoSettingsPlugin';

class AppLayout extends Component {
	render() {
		return (
			<div className="wrapper">
				<Sidebar />
				
				<div className="main-panel">
					<HeadNavbar />
					<div className="content">
						{this.props.children} {/* This will be one Route/Page at a time */}
					</div>
					<Footer />
				</div>

				<DemoSettingsPlugin />
			</div>
		);
	}
}

export default AppLayout;
