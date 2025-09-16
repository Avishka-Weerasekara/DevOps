const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json())

// Connect to MongoDB
const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/devopsdb'

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err))

// Define a schema and model
const BookSchema = new mongoose.Schema({
  title: String,
})

const Book = mongoose.model('Book', BookSchema)

// Routes
app.get('/', async (req, res) => {
  const books = await Book.find()
  res.json(books)
})

app.post('/', async (req, res) => {
  const book = new Book(req.body)
  await book.save()
  res.json(book)
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})
