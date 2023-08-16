import { logger } from '../../services/logger.service.js'
import { quoteService } from './quote.service.js'

import axios from 'axios'
export async function getQuoteById(req, res) {
  try {
    const quoteId = req.params.id
    console.log("quoteId", quoteId)
    const quote = await quoteService.getById(quoteId)
    if (quote) {
      await axios.get("http://localhost:3030/api/count/increment")
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
    await axios.get("http://localhost:3030/api/count/increment")
    if (quotes.length >= 1) {
      await axios.get("http://localhost:3030/api/count/increment")
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
      await axios.get("http://localhost:3030/api/count/increment")
      res.json(quotes)
    }
  } catch (err) {
    logger.error('Failed to get batch of quotes', err)
    res.status(400).send({ error: err.message })
  }

}

export async function getQuotes(req, res) {
  try {
    logger.debug('Getting Quotes:')
    const quotes = await quoteService.query()
    res.json(quotes)
  } catch (err) {
    logger.error('Failed to get quotes', err)
    res.status(400).send({ err: 'Failed to get quotes' })
  }
}