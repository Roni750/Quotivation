import { config } from "dotenv"
config()

export default {
	dbURL: process.env.MONGODB_URI,
	dbName: 'quotes_db',
}