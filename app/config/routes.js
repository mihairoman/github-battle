var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var PromptContainer = require('../containers/PromptContainer');
var BattleConfirmationContainer = require('../containers/BattleConfirmationContainer');

var Main = require('../components/Main');
var Home = require('../components/Home');

var routes = (
    <Router history={ReactRouter.browserHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Home} />
            <Route path='playerOne' header='Player One' component={PromptContainer} />
            <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
            <Route path='battle' component={BattleConfirmationContainer} />
        </Route>
    </Router>
);

module.exports =  routes;