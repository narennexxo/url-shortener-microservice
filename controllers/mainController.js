//const mongoose = require('mongoose');
//const Url = mongoose.model('Url');
const shortUrlGenerator = require('../handlers/ShortUrlGenerator');
const validUrl = require('valid-url');

exports.homepage = (req, res) => {
    res.send('Hey! It works!');
}

exports.getmessage = (req, res) => {
    var twilio = require('twilio');
    const accountSid = process.env.watsappacid ;
    const authToken = process.env.watsappauth; 
    const client = require('twilio')(accountSid, authToken);

    client.messages
        .create({
            body: 'Thank you for contacting QPAY. Your ticket Number is ' + Math.random(),
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+919958800223'
        })
        .then(message => console.log(message.sid))
        .done();
    res.send(req);
}

exports.sendmessage = (req, res) => {
    console.log("test");
    var twilio = require('twilio');
    const accountSid = 'ACfd6243fb870cbf9a0c666e1d19b95d51';
    const authToken = 'd6c15c1ea286b2402402d3f2ba67055f';
    const client = require('twilio')(accountSid, authToken);

    client.messages
        .create({
            body: 'Hey from node.js',
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+919958800223'
        })
        .then(message => console.log(message.sid))
        .done();
    res.send('watsapp works');
}

// exports.getUrl = async (req, res) => {
//     const result = await Url.findOne({ shortUrl: req.params.urlId});
//     if (!result) {
//         //Find by urlId - Failure
//         res.send({
//             "error": "This url is not on the database."
//         });
//     }
//     else {
//         //Find by urlId - Success
//         res.redirect(result.url);
//     }
// }
//
// exports.addUrl = async(req, res) => {
//     var url = req.url.slice(5)
//     var urlJson = {};
//     //Validate Url
//     if (!validUrl.isUri(url)) {
//         urlJson = {
//             "error": "Wrong url format, make sure you have a valid protocol and real site."
//         };
//     } else {
//         //Save url
//         const sUrl = new Url();
//         sUrl.url = url;
//         sUrl.shortUrl = shortUrlGenerator.shortURL();
//         await sUrl.save();
//
//         urlJson = {
//             "original_url": sUrl.url,
//             "short_url": process.env.APP_URL + sUrl.shortUrl
//         };
//     }
//
//     //Return json
//     res.json(urlJson);
// }
