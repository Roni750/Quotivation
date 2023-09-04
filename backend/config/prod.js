import { config } from "dotenv"
config()

export default {
	dbURL: 'mongodb+srv://roni750:e6l5Dp0t6qNDrbiX@quotescluster.z93crdh.mongodb.net/?retryWrites=true&w=majority',
	// dbURL: process.env.MONGODB_URI,
	dbName: 'quotes_db',
}