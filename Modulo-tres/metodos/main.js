const express = require('express')
const app = express()
app.use(express.json())// para parciar y poder utilizar json

/// solo vamos aconsultar
app.get('/', (req, res) => {
  res.send('Hello World')
})

// solo vamoa a hacer inserciones
app.post('/', (req, res)=>{
    res.send('post messege')
})

// solo vamos a hacer actualizaciones
app.put('/',(req, res)=>{
    res.send('cambia  main')
})

//solo vamos a hacer eliminaciones
app.delete('/',(req,res)=>{
    res.send('delete main')
})
app.listen(8080)  
