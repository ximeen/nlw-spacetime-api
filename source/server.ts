import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'
import { statusResponse } from './routes/status'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(memoriesRoutes, statusResponse)

app.listen({ port: 3333 }).then(() => {
  console.log('🚀 HTTP server is running in port http://localhost:3333')
})
