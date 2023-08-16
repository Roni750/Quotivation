import http from 'http'
import cors from 'cors'
import express from 'express'
import { logger } from './services/logger.service.js'
import path from 'path'
import { config } from 'dotenv'
config()

const app = express()
const server = http.createServer(app)

app.use(cors());
app.use(express.json());
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