const mongoose = require('mongoose');
const Url = mongoose.model('Url');
const shortUrlGenerator = require('../handlers/ShortUrlGenerator');
const validUrl = require('valid-url');

exports.homepage = (req, res) => {
    res.send('Hey! It works!');
}

exports.getUrl = async (req, res) => {
    const result = await Url.findOne({ shortUrl: req.params.urlId});
    if (!result) {
        //Find by urlId - Failure
        res.send({
            "error": "This url is not on the database."
        });
    }
    else {
        //Find by urlId - Success
        res.redirect(result.url);
    }
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
