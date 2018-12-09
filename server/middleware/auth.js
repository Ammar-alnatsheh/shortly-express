const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
    var cookies = req.headers.cookie;
    var user = req.body;
console.log(req.body);
    if (cookies === undefined || Object.keys(cookies).length === 0 || cookies === null) {

        if(user.username === undefined || user.username === null) {
            models.Sessions.create()
            .then(success => {
                var options = {};
                options['id'] = success.insertId;
                models.Sessions.get(options)
                .then( success => {
                    req.session = {'hash': success.hash};
                    res.cookies = {'shortlyid': {value : success.hash }};
                    next();
                })
                .catch( error => {
                   console.log(error);
                })   
            })
            .catch(error => {
                console.log(error);
            })

        } else {
            // no cookie but there is user id
            console.log("we made it here");
            console.log(req.body);
            // var username = req.body.username;
            // models.Users.get({username})
            // .then( (success) => { 
            //     console.log(success);

            // })


            //  models.Sessions.create()
            // .then(success => {
            //     var options = {};
            //     options['id'] = success.insertId;
            //     models.Sessions.get(options)
            //     .then( success => {
            //         req.session = {'hash': success.hash};
            //         res.cookies = {'shortlyid': {value : success.hash }};
            //         next();
            //     })
            //     .catch( error => {
            //        console.log(error);
            //     })   
            // })
            // .catch(error => {
            //     console.log(error);
            // })

        }
    }

};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/














//  var username = req.body.username;
//         models.Users.get({username})
//         .then( (success) => {
//             // user is registered in our db


//             var userId = success.userId;
//             models.Sessions.create()
//             .then(hash => {
//                 var options = {
//                     'tablename' : 'sessions',
//                     'hash' : hash,
//                     'userId': userId
//                 };
//                 models.create(options);

//             })
//             .catch(error => {
//                 console.log("cant create a session hash");
//             })
//         })
//         .catch(error => {
//             // seesion not found or user is not in the db