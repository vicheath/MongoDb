import express from "express"
import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"
// Connection string
const ATLAS_URI = process.env.ATLAS_URI
const db = mongoose.connection
// Connect to MongoDB thru Mongoose
mongoose.connect(ATLAS_URI)
db.on("error", (err) => console.log(err.message + " is mongod not running?"))
db.on("open", () => console.log("mongo connected: ", ATLAS_URI))
db.on("close", () => console.log("mongo disconnected"))

const PORT = process.env.PORT || 5050;
const app = express();



// app.use(cors());
// app.use(express.json());

// // Load the /posts routes
// app.use("/posts", posts);
// app.use('/grades', grades)

// // Global error handling
// app.use((err, _req, res, next) => {
//   res.status(500).send("Uh oh! An unexpected error occured.");
// });

// // start the Express server
// app.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });