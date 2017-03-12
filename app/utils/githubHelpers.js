var axios = require('axios');

var id = "CLIENT_ID",
    secret = "SECRET_ID",
    param = "?client_id=" + id + '&client_secret=' + secret;

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username + param);
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
    }
}

module.exports = helpers;