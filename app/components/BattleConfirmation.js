var React = require('react'),
    PropTypes = React.PropTypes,
    styles = require('../styles/index'),
    ReactRouter = require('react-router'),
    Link = ReactRouter.Link,
    UserDetails = require('../components/UserDetails'),
    UserDetailsWrapper = require('../components/UserDetailsWrapper'),
    Loading = require('../components/Loading'),
    MainContainer = require('../components/MainContainer');

function puke(obj) {
    return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function BattleConfirmation(props) {
    return (props.isLoading === true
        ? <Loading speed={500} text='Waiting' />
        : <MainContainer>
            <h1>Confirm Players</h1>
            <div className='col-sm-8 col-sm-offset-2'>
                <UserDetailsWrapper header='Player One'>
                    <UserDetails info={props.playersInfo[0]}/>
                </UserDetailsWrapper>
                <UserDetailsWrapper header='Player Two'>
                    <UserDetails info={props.playersInfo[1]}/>
                </UserDetailsWrapper>
            </div>
            <div className='col-sm-8 col-sm-offset-2'>
                <div className='col-sm-12' style={styles.space}>
                    <button
                        type='button'
                        className='btn btn-lg btn-success'
                        onClick={props.onBattleInit}>Initiate Battle!</button>
                </div>
                <div className='col-sm-12' style={styles.space}>
                    <Link to='/playerOne'>
                        <button type='button' className='btn btn-lg btn-danger'>Reselect Players</button>
                    </Link>
                </div>
            </div>
        </MainContainer>);
}

BattleConfirmation.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    onBattleInit: PropTypes.func.isRequired
};

module.exports = BattleConfirmation;