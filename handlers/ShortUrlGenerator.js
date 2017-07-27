var crypto = require("crypto");
exports.shortURL = function () {
        var sURL = '',
            _rand = crypto.randomBytes(25).toString('hex'),
            _base = _rand.length;
        for (var i = 0; i < 7; i++)
            sURL += _rand.charAt(Math.floor(Math.random() * _rand.length));
        return sURL;
    };
