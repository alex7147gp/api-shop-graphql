import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import express from 'express'
import http from 'http'
import path from 'path'
import { PrismaClient } from '@prisma/client'
import { readFileSync } from 'fs'
import resolvers from './resolvers'
import app from './server'

const httpServer = http.createServer(app)
const typeDefs = readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8')
const orm = new PrismaClient();

const port = process.env.PORT || 4000

export default async function start() {
    
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({ req }) => (

          { orm, user: req.user}

        ), 
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
        introspection: true,   
    })

    await server.start()
    server.applyMiddleware({
        app,
        path: '/graphql'
    })
    
    await new Promise<void>((resolve) => {
        httpServer.listen({ port }, resolve)
    })
    console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
  
}
