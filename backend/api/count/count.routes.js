import express from 'express'
import { getUsageCount } from './count.controller.js'
const router = express.Router()

router.get('/', getUsageCount)
export const countRoutes = router
