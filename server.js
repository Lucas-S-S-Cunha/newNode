import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())




app.get('/users', async (req, res) => {

    const users = await prisma.user.findMany()
    res.status(200).json(users)

    
})
app.post("/users", async (req, res) => {
    await prisma.user.create({
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })

    res.status(201).json({ message: "usuario criado com sucesso!!"})
})
app.listen(3000)

/*
// lucas 
// PQwHzyh9YvApa99W
*/ 