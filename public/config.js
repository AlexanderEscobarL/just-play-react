const hostname = window && window.location && window.location.hostname
//let backendHost = `https://node-base-app-production.up.railway.app`
let backendHost = `http://${hostname}`
const contextPath = '/api'

if(backendHost.includes('127.0.0.1') || backendHost.includes('localhost') ){
    backendHost = 'http://localhost:8080'
}

window.baseURL = `${backendHost}${contextPath}`
