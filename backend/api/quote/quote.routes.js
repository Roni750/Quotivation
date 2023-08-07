import express from 'express'
import { getQuoteById, getQuotes, getBatchQuotes, getQuotesByAuthor } from './quote.controller.js'
const router = express.Router()

// router.get('/', getQuotes)
router.get('/', getQuotes)
router.get('/:id', getQuoteById)
router.get('/batch/:amount', getBatchQuotes)
router.get('/author/:name', getQuotesByAuthor)
export const quoteRoutes = router