import { logger } from '../../services/logger.service.js'
import {countService} from './count.service.js'

export async function getUsageCount() {
    try {
      const count = await countService.query()
      // if (count) res.json(count)
      if (!count) throw new Error('Failed to get count')
      // else throw new Error('Failed to get count')
    } catch (err) {
      logger.error('Failed to get quote', err.message)
      res.status(400).send({ error: err.message })
    }
  }