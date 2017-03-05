var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState: function() {
        return {
            username: ''
        }
    },

    handleUserUpdate: function(e) {
        this.setState({
           username: e.target.value 
        });
    },

    handleUserSubmit: function(e) {
        e.preventDefault();
        var username = this.state.username;
        this.setState({
            username: ''
        });
       
        if (this.props.routeParams.playerOne) {
            //Player one query param exists in the Url => we are on PlayerTwo page => next step is to begin battle
            this.context.router.push({
                pathname: '/battle',
                query: {
                    playerOne: this.props.routeParams.playerOne,
                    playerTwo: this.state.username
                }
            });
        } else {

            //We are still on player One page => we must go to player two page
            this.context.router.push('/playerTwo/' + this.state.username);
        }
    },

    render: function() {
        return (
           <Prompt 
                onUserSubmit={this.handleUserSubmit}
                onUserUpdate={this.handleUserUpdate}
                header={this.props.route.header}
                username={this.state.username}
           />
        );
    }
});

module.exports = PromptContainer;