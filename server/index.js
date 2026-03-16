const express = require('express')
const cors = require('cors')
const multer = require('multer')
require('dotenv').config()
const { createClient } = require('@supabase/supabase-js')

const app = express()
app.use(cors())
app.use(express.json())

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

const upload = multer({ dest: './uploads' })

app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' })
})

app.post('/api/upload', upload.single('pdf'), async (req, res) => {
  try {
    const file = req.file
    if (!file) return res.status(400).json({ error: 'No file uploaded' })

    const { data, error } = await supabase
      .from('documents')
      .insert({
        filename: file.originalname,
        file_path: file.path,
        status: 'uploaded'
      })
      .select()

    if (error) return res.status(500).json({ error: error.message })

    res.json({ success: true, document: data[0] })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.listen(3001, () => {
  console.log('Server running on port 3001')
})
