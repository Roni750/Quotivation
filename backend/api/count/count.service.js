import { dbService } from "../../services/db.service.js"
import { logger } from "../../services/logger.service.js"

async function query() {
        try {
            const collection = await dbService.getCollection('count')
            const usage = await collection.find().toArray()

            if (usage.length === 0) {
                return null
            }

            return usage
        } catch (err) {
            logger.error('cannot find usage count', err)
            throw err
        }
}

async function incrementCount() {
    try {
      const collection = await dbService.getCollection('count')
      const usage = await collection.findOne()
  
      if (!usage) {
        return null
      }
  
      const newCount = usage.count + 1
      
      await collection.updateOne({ _id: usage._id }, { $set: { count: newCount } })

      return usage
    } catch (err) {
      logger.error("Couldn't increment usage count", err)
      throw err
    }
  }
  
export const countService = {
    query,
    incrementCount
}