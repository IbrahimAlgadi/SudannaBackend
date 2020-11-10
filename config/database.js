module.exports = ({ env }) => ({
  "defaultConnection": "default",
  "connections": {
    "default": {
      "connector": "bookshelf",
      "settings": {
        "client": "mysql",
        "host": `${process.env.DATABASE_HOST || '127.0.0.1'}`,
        "port": `${process.env.DATABASE_PORT || 3306}`,
        "database": `${process.env.DATABASE_NAME || 'sudanna_db'}`,
        "username": `${process.env.DATABASE_USERNAME || 'root'}`,
        "password": `${process.env.DATABASE_PASSWORD || ''}`
      },
      "options": {
        "ssl": false
      }
    }
  }
});
