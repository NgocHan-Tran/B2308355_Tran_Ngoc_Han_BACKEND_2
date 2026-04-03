const config = {
    app: {
        port: process.env.PORT || 3000,
    },
    db: {
        // Mình đã đổi 'contactbook' thành 'repair_management'
        uri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/contactbook"
    }
};

module.exports = config;