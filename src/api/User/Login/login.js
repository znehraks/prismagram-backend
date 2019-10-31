import { prisma } from "../../../../generated/prisma-client";
import { generateToken } from "../../../utils";

export default {
    Mutation: {
        login: async(_, args) => {
            const {email, password} = args;
            const user = await prisma.user({email});
            const exists = await prisma.$exists.user({ email });
            if(user.password === password){
                await prisma.updateUser({
                    where: {id: user.id}, 
                    data: {
                    isLogin: true
                    }
                })
                return generateToken(user.id);
            }else if(exists){
                console.log("wrong email/password combination");
                return "";
            }else{
                console.log("You Need to Sign up")
                return undefined;
            }
        }
    }
};