var axios = require('axios');

var id = "CLIENT_ID",
    secret = "SECRET_ID",
    param = "?client_id=" + id + '&client_secret=' + secret;

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username + param);
}

function getRepos(username) {
     return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100');
}

function getTotalStars(repos) {
    return repos.data.reduce(function (prev, current) {
        return prev + current.stargazers_count;
    }, 0);
}

function getPlayersData(player) {
    return getRepos(player.login).then(getTotalStars).then(function(totalStars){
        return {
            followers: player.followers,
            totalStars: totalStars
        }
    });
}

function calculateScores(players) {
    return [
        players[0].followers * 3 + players[0].totalStars,
        players[1].followers * 3 + players[1].totalStars
    ]
}

var helpers = {
    getPlayersInfo: function(players) {
        return axios.all(players.map((username) => {
            return getUserInfo(username);
        })).then((info) => {
            return info.map((user) => {
                return user.data;
            });
        }).catch((err) => {
            console.warn('Error in getPlayersInfo', err);
        });
    },

    battle: function(playersInfo) {
        var playerOneData = getPlayersData(playersInfo[0]),
            playerTwoData = getPlayersData(playersInfo[1]);
        return axios.all([playerOneData, playerTwoData]).then(calculateScores).catch(function(err){
            console.warn('Error in getPlayersInfo: ', err);
        });
    }
};

module.exports = helpers;