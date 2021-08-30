module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/comprendre-test',
                permanent: true,
            },
        ]
    },
    env: {
        API_URL: process.env.API_URL
    }
}