import mongodb from 'mongodb'
import { dbService } from '../../services/db.service.js'
import { logger } from '../../services/logger.service.js'
import { MongoClient } from 'mongodb'
const { ObjectId } = mongodb

async function getById(quoteId) {
    try {
        const collection = await dbService.getCollection('quote')
        const idToScan = new ObjectId(quoteId)
        const quote = await collection.findOne({ _id: idToScan })
        return quote
    } catch (err) {
        console.error(`Error while finding quote ${quoteId}`, err)
        throw err
    }
}

async function query() {
    try {
        const collection = await dbService.getCollection('quote')
        const quotes = await collection.find().toArray()
        if (quotes.length === 0) {
            return null
        }
        
        const randomIndex = Math.floor(Math.random() * quotes.length)
        const randomQuote = quotes[randomIndex]
        return randomQuote  
    } catch (err) {
        logger.error('cannot find quotes', err)
        throw err
    }
}


// async function getBatchedQuotes(amount) {
//     try {
//         const collection = await dbService.getCollection('quote')
//         const quote = await collection.find().limit(+amount)
//         return quote
//     } catch (err) {
//         console.error(`Error while finding quotes`, err)
//         throw err
//     }
// }

async function getBatchedQuotes(amount) {
    try {
        const collection = await dbService.getCollection('quote')

        const quotes = await collection.aggregate([
            { $sample: { size: +amount } },
            { $limit: +amount }
        ]).toArray();

        console.log(quotes);
        return quotes;
    } catch (err) {
        console.error(`Error while finding quotes`, err);
        throw err;
    }
}

// async function queryByAuthor(author) {
//     const collection = await dbService.getCollection('quote')
//     const quotes = await collection.find({"author": author}).toArray()
//     console.log(quotes);
//     return quotes
// }

async function queryByAuthor(author) {
    try {
        const collection = await dbService.getCollection('quote');
        const quotes = await collection.find({ author: { $regex: author, $options: 'i' } }).toArray();
        return quotes;
    } catch (err) {
        logger.error('cannot find quotes', err);
        throw err;
    }
}

// Queries all available quotes
// async function query() {
//     try {
        // const criteria = {}
//         const collection = await dbService.getCollection('quote')
//         const quotes = await collection.find({}).toArray()
//         console.log(quotes)
//         return quotes
//     } catch (err) {
//         logger.error('cannot find quotes', err)
//         throw err
//     }
// }

export const quoteService = {
    getById,
    query,
    getBatchedQuotes,
    queryByAuthor
}