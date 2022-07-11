import { storageService } from './storage-service.js'
import { utilService } from './util-service.js'

const KEY = 'toysDB'
_createToys()

export const toyService = {
    query,
    getById,
    remove,
    save,
    getEmptyToy,
    getLabels,
}

function query() {
    return storageService.query(KEY)
}

function getById(toyId) {
    return storageService.get(KEY, toyId)
}

function remove(toyId) {
    return storageService.remove(KEY, toyId)
}

function save(toy) {
    if (toy._id) return storageService.put(KEY, toy)
    return storageService.post(KEY, toy)
}

function getLabels() {
    return labels
}

function getEmptyToy() {
    return {
        _id: '',
        name: '',
        price: 0,
        labels: [],
        createdAt: '',
        inStock: false,
        reviews: [],
    }
}

function _createToys() {
    let toys = utilService.loadFromStorage(KEY)
    if (!toys || !toys.length) {
        toys = [
          _createToy('Talking Doll', 123),
          _createToy('Baby Doll', 222),
          _createToy('Ball', 174),
        ]
        utilService.saveToStorage(KEY, toys)
    }
    return toys
}

function _createToy(name, price) {
    return {
        _id: utilService.makeId(),
        name,
        price,
        labels: ['Doll', 'Battery Powered', 'Baby'],
        createdAt: Date.now(),
        inStock: true,
        reviews: ['this toy is very good!!!', 'Good quality'],
    }
}
