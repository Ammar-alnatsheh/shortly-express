const parseCookies = (req, res, next) => {
  var cookies = req.headers.cookie;
  if (cookies === undefined) {
        // return empty object if there is no cookies
        res.cookie = {};
    } else {
        // split the cookies and have them in array object form
        // ex: 'shortlyid=18ea4fb6ab3178092ce936c591ddbb90c99c9f66;
        // otherCookie=2a990382005bcc8b968f2b18f8f7ea490e990e78;
        // anotherCookie=8a864482005bcc8b968f2b18f8f7ea490e577b20'

        //{
        //     shortlyid: '18ea4fb6ab3178092ce936c591ddbb90c99c9f66',
        //     otherCookie: '2a990382005bcc8b968f2b18f8f7ea490e990e78',
        //     anotherCookie: '8a864482005bcc8b968f2b18f8f7ea490e577b20'
        //   }

        var result = {};
        cookies.split('; ').forEach( cooki => {
            var key = cooki.split('=')[0];
            var value = cooki.split('=')[1];
            result[key] = value;
        });
        req.cookies = result;
    }

    next(); // <-- important, do the next step in the app!
};

module.exports = parseCookies;




/////////////////////////////////////////////////////////////////////////////
// how to make a cookie from scratch

// // check if client sent cookie
//   var cookie = req.cookies.cookieName;
//   if (cookie === undefined)
//   {
//     // no: set a new cookie
//     var randomNumber = Math.random().toString();
//     randomNumber = randomNumber.substring(2,randomNumber.length);
//     // set the cookie name and how long it will live in the client side in the res body
//     res.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: true });
//     console.log('cookie created successfully');
//   } 
//   else
//   {
//     // yes, cookie was already present 
//     console.log('cookie exists', cookie);
//   }
//   next(); // <-- important, do the next step in the app!