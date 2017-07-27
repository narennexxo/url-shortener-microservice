const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const urlSchema = new mongoose.Schema({
    url: {
        type: String,
        trim: true,
        required: 'Please enter url to save'
    },
    shortUrl:{
        type: String,
        trim: true,
        required: 'ShortUrl needed'
    }
});

module.exports = mongoose.model('Url', urlSchema);
