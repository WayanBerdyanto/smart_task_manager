import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from 'dotenv';
import userService from "../../services/userService.js";

dotenv.config();

export function configureGoogle(passport) {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback"
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            const user = await userService.loginWithGoogle(profile);
            return done(null, user);
        } catch (error) {
            return done(error, null);
        }
    }));
}
