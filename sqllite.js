const { Console } = require('console');
var path =require('path');
var sqlite3 = require('sqlite3');


let db = new sqlite3.Database(path.join(__dirname,'./public/data.db'),(err)=>{
    if(err){
        console.error(err.message);
    }
    console.log('Connection to stock database.');
});

db.serialize(() =>{
    const sql_create_table = ` CREATE TABLE IF NOT EXISTS stock (
      "id" INTEGER PRIMARY KEY,
      "title" TEXT NOT NULL,
      "description" TEXT,
      "price" integer,
      "status" TEXT
    ) `;

    const sql_insert_table = `INSERT INTO stock (title, description, price, status)
    VALUES ('Arduino',
            'xxxxxxx',
            2500,
            'avaliable')`

    db.run(sql_create_table)
//    .run(sql_insert_table)
    //เป็นการแสดงข้อมูลทั้งหมดในตาราง
    .each("select * from stock",(err,row)=>{
        if(err) throw err

        console.log("each query"+`id: ${row.id},title: ${row.title}, description: ${row.description}, price: ${row.price}, status: ${row.status}`);
    });
    
    //เป็นการแสดงเฉพาะข้อมูลที่เป็นแถวแรกเท่านั้น
    db.get("select * from stock", (err, row)=>{
        console.log("get query"+`id: ${row.id},title: ${row.title}, description: ${row.description}, price: ${row.price}, status: ${row.status}`);
    });

    //เป็นการดึงข้อมูลในลักษณะที่เป็น array
    db.all("select * from stock", (err, rows) =>{

        rows.forEach(function(row){
            console.log("all query"+`id: ${row.id},title: ${row.title}, description: ${row.description}, price: ${row.price}, status: ${row.status}`);
        });
    });

});

db.close((err)=>{
    if (err) {
        return console.error(err.message);
    }
});