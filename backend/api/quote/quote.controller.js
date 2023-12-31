import { logger } from '../../services/logger.service.js'
import { quoteService } from './quote.service.js'
import { incrementUsageCount } from '../count/count.controller.js'

export async function getQuoteById(req, res) {
  try {
    const quoteId = req.params.id
    const quote = await quoteService.getById(quoteId)
    if (quote) {
      incrementUsageCount()
      res.json(quote)
    }
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
    if (quotes.length >= 1) {
      incrementUsageCount()
      res.json(quotes)
    }
    else throw new Error(`Failed to get quotes by ${author}`)
  } catch (err) {
    logger.error(`Failed to get quotes by ${author}`)
    res.status(400).send({ error: err.message })
  }
}

export async function getBatchQuotes(req, res) {
  try {
    const amount = req.params.amount
    const quotes = await quoteService.getBatchedQuotes(amount)
    if (quotes.length >= 1) {
      incrementUsageCount()
      res.json(quotes)
    }
  } catch (err) {
    logger.error('Failed to get batch of quotes', err)
    res.status(400).send({ error: err.message })
  }

}

export async function getQuotes(req, res) {
  try {
    const quotes = await quoteService.query()
    logger.debug('Getting Quotes:', quotes)
    res.json(quotes)
  } catch (err) {
    logger.error('Failed to get quotes', err)
    res.status(400).send({ err: 'Failed to get quotes' })
  }
}