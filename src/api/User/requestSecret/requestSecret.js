import { generateSecret, sendSecretMail } from "../../../utils";
import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        requestSecret: async(_, args, {request}) => {
            console.log(request.user);
            const { email } = args;
            
        }
    }
};