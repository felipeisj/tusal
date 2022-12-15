import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

const User = {
    list: async (req, res) => {
        const users = await prisma.user.findMany()
        res.status(200).send(users)
    },
    create: async (req, res) => {
        console.log(req)
        const user = await prisma.user.create(req.body)
        console.log("Usuario creado!");
        res.status(201).send('Usuario creado!')
    },
    delete: async (req, res) => {
        const { id } = req.params
        const user = await prisma.user.delete({
            where: {
                id: { id },
            }
        })
        res.status(204).send("Se ha eliminado el usuario")
    }
}

export default User