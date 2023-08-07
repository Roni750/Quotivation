import { logger } from '../../services/logger.service.js'
import { quoteService } from './quote.service.js'

export async function getQuoteById(req, res) {
  try {
    const quoteId = req.params.id
    console.log("quoteId", quoteId)
    const filter = req.query
    const quote = await quoteService.getById(quoteId)
    if (quote) res.json(quote)
    else throw new Error('Failed to get quote')
  } catch (err) {
    console.error('Failed to get quote', err.message)
    res.status(400).send({ error: err.message })
  }
}

export async function getQuotesByAuthor(req, res) {
  const author = req.params.name
  try {
    const quotes = await quoteService.queryByAuthor(author)
    if (quotes.length >= 1) res.json(quotes)
    else throw new Error(`Failed to get quotes by ${author}`)
  } catch (err) {
    logger.error(`Failed to get quotes by ${author}`)
    res.status(400).send({ error: err.message })
  }
}

export async function getBatchQuotes(req, res) {
  const amount = req.params.amount
  console.log(amount)
  const quotes = await quoteService.getBatchedQuotes(amount)
}

export async function getQuotes(req, res) {
  try {
    logger.debug('Getting Quotes:', req.query)
    const filterBy = {
      txt: req.query.txt || '',
      pageIdx: req.query.pageIdx
    }
    const quotes = await quoteService.query(filterBy)
    res.json(quotes)
  } catch (err) {
    logger.error('Failed to get quotes', err)
    res.status(400).send({ err: 'Failed to get quotes' })
  }
}