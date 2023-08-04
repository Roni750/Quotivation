import express from 'express'
import { getQuoteById, getQuotes } from './quote.controller.js'
const router = express.Router()

// router.get('/', getQuotes)
router.get('/', getQuotes)
router.get('/:id', getQuoteById)

export const quoteRoutes = router