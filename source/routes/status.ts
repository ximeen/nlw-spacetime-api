import { FastifyInstance } from 'fastify'
export async function statusResponse(app: FastifyInstance) {
  app.get('/', () => {
    return {
      status: 'ok',
    }
  })
}
