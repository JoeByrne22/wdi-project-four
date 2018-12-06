const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'dev';
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/quitePlace';
const secret = process.env.SECRET || 'secretsquirrel';

module.exports = { port, dbURI, env, secret };
