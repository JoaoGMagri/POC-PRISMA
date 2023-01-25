import prisma from "../database/database.js";

async function singUpRep(obj) {
    const { email, password, name } = obj;
    return prisma.users.create({
        data:{
            email: email,
            name: name,
            password: password
        }
    });
}
async function singInRep(id: number, token: string) {
    return await prisma.session.create({
        data: {
            idUser: id,
            token: token
        }
    });
}
async function validateEmail(email: string){
    return await prisma.users.findMany({ where: { email: email } });
}
async function validateSession(id: number){
    return await prisma.session.findMany({ where: { idUser: id } });
}
async function validateToken(token: string){
    return await prisma.session.findUnique({ where: { token: token || "" }, });
}

export const sessionRepositories = {
    singUpRep,
    singInRep,
    validateEmail,
    validateSession,
    validateToken
}