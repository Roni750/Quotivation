import { logger } from '../../services/logger.service.js'
import { countService } from './count.service.js'

export async function getUsageCount(req, res) {
  try {
    const count = await countService.query()
    if (count) res.json(count)
    else throw new Error('Failed to get count')
  } catch (err) {
    logger.error('Failed to get count', err.message)
    res.status(400).send({ error: err.message })
  }
}

export async function incrementUsageCount(req, res) {
  try {
    countService.incrementCount()
  } catch (err) {
    logger.error('Failed to increment API counter')
  }
}