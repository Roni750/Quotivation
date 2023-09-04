import { logger } from '../../services/logger.service.js'
import { countService } from './count.service.js'

export async function getUsageCount(req, res) {
  try {
    const count = await countService.query()
    if (count) console.log("count", count)
    if (count) res.json(count)
    else throw new Error('Failed to get count')
  } catch (err) {
    logger.error('Failed to get quote', err.message)
    res.status(400).send({ error: err.message })
  }
}

export async function incrementUsageCount(req, res) {
  const count = await countService.incrementCount()
  res.json(count)
}