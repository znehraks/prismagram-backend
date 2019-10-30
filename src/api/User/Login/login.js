import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        login: async(_, args) => {
            const {email, password} = args;
            const user = await prisma.user({email});
            if(user.password === password){
                await prisma.updateUser({
                    where: {id: user.id}, 
                    data: {
                    isLogin: true
                    }
                })
                return true;
            }else{
                throw Error("wrong email/password combination")
            }
        }
    }
};