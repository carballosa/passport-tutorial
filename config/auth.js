// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '145250232682988', // your App ID
        'clientSecret'  : '0af7589a67deb797070a27500f901954', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'Wo1ZR4wydot2WqDK90yEozCSI',
        'consumerSecret'    : 'mOJJn7mYPXfZ5foqwFJwWTo6dKgwnhS2uqQrWFaWkHoeYMzyho',
        'callbackURL'       : 'http://127.0.0.1:8080/auth/twitter/callback' // Twitter doesn't like localhost:8080
    },                                                                      // Testing needs to start from http://127.0.0.1:8080
                                                                            // to avoid an error during redirects to our callback URL
    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};