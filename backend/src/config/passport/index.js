import passport from "passport";
import { configureGoogle } from "./google.js";
import { configureGithub } from "./github.js"; // optional

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Inisialisasi semua strategi
configureGoogle(passport);
configureGithub(passport); // optional

export { passport };
