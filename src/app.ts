import Fastify from 'fastify'
import cors from '@fastify/cors'
import { getLastSimarAlertsFromCache } from "./services/simar-service"

// Settings
const fastify = Fastify({
    logger: true
})
fastify.register(cors, {
    origin: "*",
    methods: ["GET"]
})

// Declare a route
fastify.get('/', async function handler(request, reply) {
    return { hello: 'world' }
})

// Declare a route
fastify.get('/alerts', async function handler(request, reply) {
    try {
        const alerts = await getLastSimarAlertsFromCache();
        return alerts
    } catch (error) {
        console.error(error)
        return reply.code(500).send({ error: "Something went wrong!" })
    }
})

export default fastify