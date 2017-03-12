var React = require('react');

function puke(obj) {
    return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function BattleConfirmation(props) {
    return (
        props.isLoading === true ? <p> Loading </p> : <div> Confirm battle ! : { puke(props) } </div>
    );
}

module.exports = BattleConfirmation;