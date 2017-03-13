var React = require('react'),
    PropTypes = React.PropTypes;

function Results(props) {
    console.log(props);
    return (
        <div> Results </div>
    );
}

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
}

module.exports = Results;