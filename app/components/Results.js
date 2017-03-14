var React = require('react'),
    PropTypes = React.PropTypes,
    styles = require('../styles/index'),
    UserDetails = require('../components/UserDetails'),
    UserDetailsWrapper = require('../components/UserDetailsWrapper'),
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link,
    MainContainer = require('./MainContainer'),
    Loading = require('../components/Loading');

function StartOver() {
    return (
        <div className='col-sm-12' style={styles.space}>
            <Link to='/playerOne'>
                <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
            </Link>
        </div>
    );
}

function Results(props) {
    if (props.isLoading) {
        return (
           <Loading />
        );
    }

    if (props.scores[0] === props.scores[1]) {
        return (
            <MainContainer>
                <h1>It's a tie!</h1>
                <StartOver />
            </MainContainer>
        );
    }

    var winningIndex = props.scores[0] > props.scores[1]
        ? 0
        : 1;
    var losingIndex = Number(!winningIndex);
    return (
        <MainContainer>
            <h1>Results</h1>
            <div className='col-sm-8 col-sm-offset-2'>
                <UserDetailsWrapper header='Winner'>
                    <UserDetails
                        score={props.scores[winningIndex]}
                        info={props.playersInfo[winningIndex]}></UserDetails>
                </UserDetailsWrapper>
                <UserDetailsWrapper header='Loser'>
                    <UserDetails
                        score={props.scores[losingIndex]}
                        info={props.playersInfo[losingIndex]}></UserDetails>
                </UserDetailsWrapper>
            </div>
            <StartOver/>
        </MainContainer>
    );
}

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired
}

module.exports = Results;