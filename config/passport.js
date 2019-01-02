const { Strategy, ExtractJwt } = require("passport-jwt");

const userController = require('../controllers/user.controller');

module.exports = function(passport) {
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = process.env.PASSPORT_SECRET;

    passport.use(new Strategy(opts, async (jwt_payload, done) => {
        try {
            const user = await userController.getOne({ _id: jwt_payload._doc._id });
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        } catch (error) {
            return done(err, false);
        }
    }));
};