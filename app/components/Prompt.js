var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles/index').transparentBg;


//When having a component with no internal state, it is a good idea to use functional stateless components

function Prompt (props) {
    return (
            <div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style = { transparentBg }>
            <h1> { props.header } </h1>
            <div className='col-sm-12'>
                <form onSubmit={props.onUserSubmit}>
                    <div className='form-group'>
                        <input className='form-control' placeholder='Github username'  type='text' onChange={props.onUserUpdate} value={props.username} />
                    </div>
                    <div className='form-group col-sm-4 col-sm-offset-4'>
                        <button className='btn btn-block btn-success' type='submit'>Continue</button>
                    </div>
                </form>
            </div>
        </div>
    );
}


Prompt.propTypes = {
    header: PropTypes.string.isRequired,
    onUserSubmit: PropTypes.func.isRequired,
    onUserUpdate: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
};

module.exports = Prompt;