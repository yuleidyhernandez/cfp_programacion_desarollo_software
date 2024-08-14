const express = require('express')
const run = require('./consultas')
const app = express()
const port = 3000

app.use(express.json());

app.get('/', async (req, res) => {
  let result = await run(`SELECT 'Hola' AS saludo, :id AS id 
        FROM dual
        
        UNION
        
        SELECT 'Hola' AS saludo, 109 AS id 
        FROM dual`,
        [103])
  res.send(result)
})

app.get('/api/user', async (req, res) => {
  let result = await run(`SELECT id, user_name, password 
    FROM user_todoList
    WHERE id = :id`, [req.query.id]);
  res.send(result) 
})

app.post('/api/user', async (req, res) => {
  console.log(req.body);
  let result = await run(
    `BEGIN
      INSERT INTO user_todoList VALUES(:id, :user_name, :password);
      COMMIT;
    END;`,
    [req.body.id, req.body.name_user, req.body.password]
  // 
);
res.send(result)
});

app.put(`/api/user`, async(req, res) => {
  let result = await run(
    `BEGIN 
        UPDATE user_todoList
        SET user_name = :user_name, password = :password
        WHERE id = :id;
      COMMIT;
    END;`,
    [req.body.name_user, req.body.password, req.body.id]
  );
res.send(result)
})

app.patch(`/api/user`, async(req, res) => {
  let result = await run(
    `BEGIN 
        UPDATE user_todoList
        SET user_name = :user_name
        WHERE id = :id;
      COMMIT;
    END;`,
    [req.body.name_user,   req.body.id]
  );
res.send(result)
})

app.delete(`/api/user`, async(req, res) => {
  let result = await run(
    `BEGIN 
        DELETE FROM user_todoList
        WHERE id = :id;
      COMMIT;
    END;`,
    [req.query.id]
  );
res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
  // run(`SELECT 'Hola' AS saludo, :id AS id 
  //       FROM dual
        
  //       UNION
        
  //       SELECT 'Hola' AS saludo, 109 AS id 
  //       FROM dual`,
  //       [103],

  //   run(`SELECT 'Hola' AS saludo, :id AS id 
  //       FROM dual
        
  //       UNION
        
  //       SELECT 'Hola' AS saludo, 109 AS id 
  //       FROM dual`,
  //       [105]),

  //   run(`SELECT 'Hola' AS saludo, :id AS id 
  //       FROM dual
        
  //       UNION
        
  //       SELECT 'Hola' AS saludo, 109 AS id 
  //       FROM dual`,
  //       [107])
  // );
});

app.get('/api/calendario', async(req, res)=>{
  let result = await run(`SELECT id, id_user, fecha 
      FROM calendario
        WHERE id = :id`, [req.query.id]);
  res.send(result)
})

app.post('/api/calendario', async (req, res) => {
  console.log(req.body);
  let result = await run(
    `BEGIN
      INSERT INTO calendario VALUES(:id, :id_user, TO_DATE(:fecha, 'YYYY/MM/DD'));
      COMMIT;
    END;`,
    [req.body.id, req.body.id_user, req.body.fecha]
  // 
);
res.send(result)
});

app.put('/api/calendario', async(req, res) => {
  let result = await run(
    `BEGIN 
        UPDATE calendario
        SET id_user = :id_user, fecha = :fecha
        WHERE id = :id;
      COMMIT;
    END;`,
    [req.body.id_user, req.body.fecha, req.body.id]
  );
res.send(result)
})

app.patch(`/api/calendario`, async(req, res) => {
  let result = await run(
    `BEGIN 
        UPDATE calendario
        SET fecha = :fecha
        WHERE id = :id;
      COMMIT;
    END;`,
    [req.body.fecha,   req.body.id]
  );
res.send(result)
})

app.delete(`/api/calendario`, async(req, res) => {
  let result = await run(
    `BEGIN 
        DELETE FROM calendario
        WHERE id = :id;
      COMMIT;
    END;`,
    [req.query.id]
  );
res.send(result)
})