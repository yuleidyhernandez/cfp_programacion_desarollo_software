const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const dbConfig ={
    user:"SYSTEM",
    password :"CFP2024",
    connectString: "192.168.52.73:1521/XE"
};

async function run(query, params){
    const connection = await oracledb.getConnection(dbConfig)
    const result = await connection.execute( query,params
        /*`SELECT 'Hola' AS saludo, :id AS id 
        FROM dual
        
        UNION
        
        SELECT 'Hola' AS saludo, 109 AS id 
        FROM dual`,
        [103]*/
    )
    console.log(result.rows)
    await connection.close()
}

module.exports = run




