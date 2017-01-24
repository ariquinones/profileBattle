var React = require('react');
var ReactDom = require('react-dom');
var routes = require('./config/routes');

var Hello = React.createClass({
	render: function() {
		return (
			<div>
			Hello
			</div>
		)
	}
})
ReactDom.render(
	routes, 
	document.getElementById('app')
);