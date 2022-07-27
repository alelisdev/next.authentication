module.exports = {
    serverRuntimeConfig: {
        secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'https://5lhh1.sse.codesandbox.io/api' // development api
            : 'https://5lhh1.sse.codesandbox.io/api' // production api
    }
}
