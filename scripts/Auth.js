const passport = require('passport');
const LocalStrategy = require('passport-local').strategy
const strat = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    async (email, pass, done) => {
        const userChosen = await UserModel.findOne({ email: email });
        if (!userChosen)
            return done(null, false, { message: "email not found" })
        else {
            const validate = await userChosen.isValidPassword(pass); //we still have to implement this
            if (!validate)
                return done(null, false, { message: "load pass" });
            else
                return done(null, userChosen, { message: "login worked" })

        }
    })

passport.use(strategy);

passport.serializeUser( (user, done) => done(null, user.email) );

passport.deserializeUser( (email, done) => {
 UserModel.findOne({ email: email }, (err, user) => done(err,
user) );
}); 