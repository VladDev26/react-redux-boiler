import React, {Component} from 'react';
import { connect } from 'react-redux';



class App extends Component{
	componentDidMount(){}

	render(){
		return(
			<div className="wrapper">
				App
			</div>
		);
	}
}

const mapStateToProps = store => {
	return {};
};
const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
