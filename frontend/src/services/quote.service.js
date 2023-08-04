import { httpService } from './http.service.js'

const BASE_URL = 'quote/'

export const quoteService = {
    query,
    get,
    remove,
    save,
}

function query(filterBy = {}) {
    return httpService.get(BASE_URL, filterBy)
    // return storageService.query(STORAGE_KEY)
}

function get(quoteId) {
    // return storageService.get(STORAGE_KEY, quoteId)
    return httpService.get(BASE_URL + quoteId)
}

function remove(quoteId) {
    // return storageService.remove(STORAGE_KEY, quoteId)
    return httpService.delete(BASE_URL + quoteId)
}

function save(quote) {
    if (quote._id) {
        // return storageService.put(STORAGE_KEY, quote)
        return httpService.put(BASE_URL, quote)
    } else {
        return httpService.post(BASE_URL, quote)
        // return storageService.post(STORAGE_KEY, quote)
    }
}