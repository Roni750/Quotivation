import mongodb from 'mongodb';
import { dbService } from '../../services/db.service.js'
import { logger } from '../../services/logger.service.js';
import { MongoClient } from 'mongodb';
const { ObjectId } = mongodb;

async function getById(quoteId) {
    try {
        const collection = await dbService.getCollection('quote')
        const idToScan = new ObjectId(quoteId)
        const quote = await collection.findOne({ _id: idToScan });
        console.log("quoteId:", quoteId)
        console.log("quote:", quote)
        return quote
    } catch (err) {
        console.error(`Error while finding quote ${quoteId}`, err)
        throw err
    }
}


async function query() {
    try {
        // const criteria = {}
        const collection = await dbService.getCollection('quote')
        const quotes = await collection.find({}).toArray()
        return quotes
    } catch (err) {
        logger.error('cannot find quotes', err)
        throw err
    }
}

export const quoteService = {
    getById,
    query
}