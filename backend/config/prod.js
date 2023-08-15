import { config } from "dotenv"
config()

export default {
	// dbURL: 'mongodb+srv://roni750:roni42@cluster0.ckri6ih.mongodb.net/',
	dbURL: process.env.MONGODB_URI,
	dbName: 'quotes_db',
}