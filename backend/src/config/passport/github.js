import { Strategy as GithubStrategy } from "passport-github2";
import dotenv from 'dotenv';
import userService from "../../services/userService.js";

dotenv.config();

export function configureGithub(passport) {
    passport.use(new GithubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: "/auth/github/callback",
        scope: ['user:email']
    },
        async (accessToken, refreshToken, profile, done) => {
            try {
                const user = await userService.loginWithGithub(profile);
                return done(null, user);
            } catch (error) {
                return done(error, null);
            }
        }
    ));

}
