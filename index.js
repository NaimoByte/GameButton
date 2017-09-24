function getGamesList() {
    return new Promise(function (resolve, reject) {
        $.get('./ListOfGames.txt', function (data) {
            var games = data.split('\n');
            resolve(games);
        })
    });
}

function pick(items) {
    var index = Math.floor(Math.random() * items.length);
    var game = items[index];
    return game;
}

var app = new Vue({
    el: '#app',
    data: {
        game: ''
    },
    methods: {
        pick_game() {
            console.log('picking game');
            getGamesList().then(games => {
                var game = pick(games);
                console.log(game);
                this.game = game;
            });
        }
    }
})