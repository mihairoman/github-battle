var React = require('react');
var BattleConfirmation = require('../components/BattleConfirmation');
var githubHelpers = require('../utils/githubHelpers');

var BattleConfirmationContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState: function() {
        return {
            isLoading: true,
            playersInfo: []
        }
    },

    componentWillMount: function() {
        console.log('Component will mount');
    },

    componentDidMount: function() {
        var query = this.props.location.query;
        console.log('Component did mount');
        //Fetch info from github then update the state
        githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo]).then(function (players) {
            this.setState({
                isLoading: false,
                playersInfo: [...players]
            });
        }.bind(this));
    },

    componentWillReceiveProps: function() {
         console.log('Component will receive props');
    },

    componentWillUnmount: function() {
         console.log('Component will unmount');
    },

    handleBattleInitialization: function() {
        console.log("PLAYERS INFO " , this.state.playersInfo);
        this.context.router.push({
            pathname: '/results',
            state: {
                playersInfo: this.state.playersInfo
            }
        });
    },

    render: function() {
        return(
            <BattleConfirmation 
                isLoading={this.state.isLoading} 
                playersInfo={this.state.playersInfo} 
                onBattleInit={this.handleBattleInitialization}
            />
        );
    }
});

module.exports = BattleConfirmationContainer;