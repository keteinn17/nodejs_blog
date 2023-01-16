const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// hai ham nay la tuong duong nhau

// app.get('/test', function(req,res){
//     return res.send('Hello world!');
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})