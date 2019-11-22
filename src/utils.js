import { adjectives, nouns } from "./words";
import jwt from "jsonwebtoken";

export const generateSecret = () => {
    const randomNumber = Math.floor(Math.random() * adjectives.length);
    return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

export const generateToken = (id) => jwt.sign({id}, process.env.JWT_SECRET);

