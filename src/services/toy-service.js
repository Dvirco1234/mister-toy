import axios from 'axios'

export const toyService = {
    query,
    getById,
    getEmptyToy,
    save,
    remove,
}

// const API = '//localhost:3030/api/toy/'
// const API = 'api/toy/'
function _getUrl(id = '') {
    const BASE_URL =
        process.env.NODE_ENV !== 'development'
            ? '/api/toy'
            : '//localhost:3030/api/toy'
    return `${BASE_URL}/${id}`
}
// function query() {
//     return axios.get(API).then(res => res.data)
// }

function query(filterBy) {
    console.log(filterBy)

    return axios.get(_getUrl(), { params: filterBy }).then(res => res.data)
}

function getById(toyId) {
    return axios.get(_getUrl(toyId)).then(res => res.data)
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

function remove(toyId) {
    return axios
        // .delete(API + toyId)
        .delete(_getUrl(toyId))
        .then(res => res.data)
        .catch(err => {
            // if (err.response.status === 401) {
            //     eventBus.emit('show-msg', {
            //         txt: 'Please login if you want to delete toy!',
            //         type: 'error',
            //     })
            // }
            console.log(err)
        })
}

function save(toy) {
    if (toy._id)
        return (
            axios
                .put(_getUrl(toy._id), toy)
                .then(res => res.data)
                // .then(() =>
                // eventBus.emit('show-msg', {
                //     txt: 'Toy saved successfully',
                //     type: 'success',
                // })
                // )
                .catch(err => {
                    // if (err.response.status === 401) {
                    //     eventBus.emit('show-msg', {
                    //         txt: 'Please login if you want to edit toy!',
                    //         type: 'error',
                    //     })
                    // }
                    console.log(err)
                })
        )
    else return axios.post(_getUrl(), toy).then(res => res.data)
}

// import { storageService } from './storage-service.js'
// import { utilService } from './util-service.js'

// const KEY = 'toysDB'
// _createToys()

// export const toyService = {
//     query,
//     getById,
//     remove,
//     save,
//     getEmptyToy,
// }

// function query() {
//     return storageService.query(KEY)
// }

// function getById(toyId) {
//     return storageService.get(KEY, toyId)
// }

// function remove(toyId) {
//     return storageService.remove(KEY, toyId)
// }

// function save(toy) {
//     if (toy._id) return storageService.put(KEY, toy)
//     return storageService.post(KEY, toy)
// }

// function getEmptyToy() {
//     return {
//         _id: '',
//         name: '',
//         price: 0,
//         labels: [],
//         createdAt: '',
//         inStock: false,
//         reviews: [],
//     }
// }

// function _createToys() {
//     let toys = utilService.loadFromStorage(KEY)
//     if (!toys || !toys.length) {
//         toys = [
//           _createToy('Talking Doll', 123),
//           _createToy('Baby Doll', 222),
//           _createToy('Ball', 174),
//         ]
//         utilService.saveToStorage(KEY, toys)
//     }
//     return toys
// }

// function _createToy(name, price) {
//     return {
//         _id: utilService.makeId(),
//         name,
//         price,
//         labels: ['Doll', 'Battery Powered', 'Baby'],
//         createdAt: Date.now(),
//         inStock: true,
//         reviews: ['this toy is very good!!!', 'Good quality'],
//     }
// }
