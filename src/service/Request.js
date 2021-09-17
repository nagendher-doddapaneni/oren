import axios from 'axios'

const commonInterceptorResError = error => {
    const err = error
    if (error.message === 'Network Error') {
        err.response = {
            data: {
                message: 'Could not fetch details, Please try again later.'
            },
            status: 503
        }
    }
    return Promise.reject(err)
}

const request = async (options) => {
    const requestClient = axios.create({
        timeout: 60000
    })
    return makerequest(options, requestClient)
}

const makerequest = async (options, requestClient) => {
    requestClient.interceptors.request.use(req => {
        return req
    }, error => {
        return Promise.reject(error)
    })

    requestClient.interceptors.response.use(response => {
        return response
    }, error => {
        return commonInterceptorResError(error)
    })

    const response = await requestClient(options)
    if (response.status >= 400) {
        throw new Error(response.error)
    }
    return response
}

export default request
