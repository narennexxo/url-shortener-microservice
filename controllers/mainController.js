const mongoose = require('mongoose');
const Url = mongoose.model('Url');
const shortUrlGenerator = require('../handlers/ShortUrlGenerator');
const validUrl = require('valid-url');

exports.homepage = (req, res) => {
    res.send('Hey! It works!');
}

exports.getUrl = (req, res) => {
    //Find by urlId - Success
    //Find by urlId - Failure
}

exports.addUrl = async(req, res) => {
    var url = req.url.slice(5)
    var urlJson = {};
    //Validate Url
    if (!validUrl.isUri(url)) {
        urlJson = {
            "error": "Wrong url format, make sure you have a valid protocol and real site."
        };
    } else {
        //Save url
        const sUrl = new Url();
        sUrl.url = url;
        sUrl.shortUrl = shortUrlGenerator.shortURL();
        await sUrl.save();

        urlJson = {
            "original_url": sUrl.url,
            "short_url": process.env.APP_URL + sUrl.shortUrl
        };
    }

    //Return json
    res.json(urlJson);
}
