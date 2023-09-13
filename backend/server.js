import http from 'http'
import cors from 'cors'
import express from 'express'
import path from 'path'
import { logger } from './services/logger.service.js'
import { config } from 'dotenv'
import { rateLimit } from 'express-rate-limit'

config()

const app = express()
const server = http.createServer(app)
const ipLimiters = new Map();
const createIpLimiter = (ip) => {
	return rateLimit({
		windowMs: 1 * 60 * 1000, // 1 minute
		max: 10, // Maximum 10 requests per minute per IP
		keyGenerator: (req) => {
			return ip; // Use the IP address as the key for rate limiting
		},
		message: "Too many requests from this IP",
		handler: (req, res) => {
			res.status(429).json({ error: 'Rate limit exceeded' });
		},
	});
};
// const apiLimiter = rateLimit({
// 	windowMs: 1 * 60 * 1000,
// 	max: 10,
// 	keyGenerator: (req) => {
// 	    return req.socket.remoteAddress
// 	},
// 	message: "Too many requests from this IP",
// 	handler: (req, res) => {
// 		res.status(429).json({ error: 'Rate limit exceeded' })
// 	},
// })

app.use(cors())
// app.use('/api/quote', apiLimiter)
app.use('/api/quote', (req, res, next) => {
	const clientIp = req.socket.remoteAddress;

	// Check if a rate limiter for this IP already exists; if not, create one
	if (!ipLimiters.has(clientIp)) {
		ipLimiters.set(clientIp, createIpLimiter(clientIp));
	}

	// Apply the rate limiter for this IP
	ipLimiters.get(clientIp)(req, res, next);
});
app.use(express.json())
app.use(express.static('public'))

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.resolve('public')))
} else {
	const corsOptions = {
		origin: ['http://127.0.0.1:3000',
			'http://localhost:3000',
			'http://127.0.0.1:5173',
			'http://localhost:5173'],
		credentials: true,
	}
	app.use(cors(corsOptions))
}

import { quoteRoutes } from './api/quote/quote.routes.js'
import { countRoutes } from './api/count/count.routes.js'
app.use('/api/quote', quoteRoutes)
app.use('/api/count', countRoutes)

app.get('/**', (req, res) => {
	res.sendFile(path.resolve('public/index.html'))
})

const port = process.env.PORT || 3030
server.listen(port, () => {
	logger.info('Server is running on port: ' + port)
})