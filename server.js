import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())




app.get('/users', async (req, res) => {

    const users = await prisma.user.findMany()
    res.status(200).json(users)

    
})
app.put("/users/:id", async (req, res) => {

    
    const user = await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    res.status(200).json(user)
})
app.listen(3000)

