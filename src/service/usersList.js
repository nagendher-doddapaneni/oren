import request from './Request'

function initiateFetchUsersList() {
    return request({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET',
    })
}

const usersService = {
    initiateFetchUsersList
}

export default usersService
