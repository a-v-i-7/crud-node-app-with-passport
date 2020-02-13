/**
 * Requiring JWTStrategy from passport
 */
const JWTStrategy = require("passport-jwt").Strategy;
console.log('hi');
/**
 * Importing the environment variables
 */
require("dotenv").config();

/**
 * It containes different strategies for extracting JWT from headers
 */
const ExtractJWT = require("passport-jwt").ExtractJwt;

/**
 * Passport options as to from where to extract the JWT
 */
const options = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme("JWT"),
  secretOrKey: process.env.JWT_SECRET
};

/**
 * Requiring passport
 */
const passport = require("passport");
const { USER } = require("../../schema/index");

/**
 * Using JWT Strategy
 */
passport.use(
  new JWTStrategy(options, async function (jwtPayload, done) {
    console.log(jwtPayload);
    await USER.findById({ _id: jwtPayload.id })
      .then(user => {
        if (user) {
          return done(null, user);
        }
        return done(null, jwtPayload.id);
      })
      .catch(err => done(err));
  })
);
