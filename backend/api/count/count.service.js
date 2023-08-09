// import { logger } from "../../services/logger.service"
import { dbService } from "../../services/db.service.js"

async function query() {
        try {
            const collection = await dbService.getCollection('count')
            const usage = await collection.find().toArray()

            if (usage.length === 0) {
                return null
            }
            incrementCount(collection)

            return usage
        } catch (err) {
            console.error('cannot find usage count', err)
            throw err
        }
}

async function incrementCount(collection) {
    try {
      const usage = await collection.findOne(); // Assuming you want to update a single document
  
      if (!usage) {
        return null;
      }
  
      const newCount = usage.count + 1;
      
      await collection.updateOne({ _id: usage._id }, { $set: { count: newCount } });
  
      console.log('hey', usage);
      return usage;
    } catch (err) {
      console.error("Couldn't increment usage count", err);
      throw err;
    }
  }
  
export const countService = {
    query,
    incrementCount
}