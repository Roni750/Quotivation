import express from 'express'
import { getUsageCount, incrementUsageCount } from './count.controller.js'
const router = express.Router()

router.get('/', getUsageCount)
router.get('/increment', incrementUsageCount)
export const countRoutes = router
