// server.js
import express from 'express';

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({"status" : 200, "data" : [{}]});
  res.status(404);
res.send('relevant error message');
})

app.listen(3000)
console.log('app running on port ', 3000);

import Reflection from 'ReflectionController1.js';

app.post('/api/v1/reflections', Reflection.create);
app.get('/api/v1/reflections', Reflection.getAll);
app.get('/api/v1/reflections/:id', Reflection.getOne);
app.put('/api/v1/reflections/:id', Reflection.update);
app.delete('/api/v1/reflections/:id', Reflection.delete);
