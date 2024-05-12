import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

// app.use basically used for middlewares or configration setting
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
})) 

// for parsing application/json
app.use(express.json({limit: "18kb"})) 

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true, limit: "16kb" })) 

// for static resource 
app.use(express.static("public"))

app.use(cookieParser())

export { app }
