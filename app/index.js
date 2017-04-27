var React = require('react');
var ReactDOM = require('react-dom');
import Avatar from './react-modules/userProfile';
import USER_DATA from './react-modules/userData';

var routes = require('./config/routes');

ReactDOM.render(routes, document.getElementById('app'));