const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { createClient } = require('@supabase/supabase-js')

const app = express()
app.use(cors())
app.use(express.json())

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' })
})

app.get('/test-db', async (req, res) => {
  const { data, error } = await supabase
    .from('documents')
    .select('*')
  if (error) return res.json({ error: error.message })
  res.json({ success: true, documents: data })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
