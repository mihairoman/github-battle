var React = require('react'),
    PropTypes = React.PropTypes,
    styles = require('../styles/index');

function UserDetailsWrapper (props) {
    return (
        <div className='col-sm-6' style={styles.padding}>
            <p className='lead'>{props.header}</p>
            {props.children}
        </div>
    );
}

module.exports = UserDetailsWrapper;