var connection = require('../dbConnection/connection');
var conn = connection();
var alumnoController = {}

alumnoController.list = (req, res, next) =>{
    conn.query('SELECT * FROM alumnos',(err, rows) => {
        if (err) next(new Error(err));
        else res.render('alumnos/index',{allStudents : rows});
    })
}
alumnoController.getCreateStudent = (req, res, next) => {
    res.render('alumnos/createStudent');
}
alumnoController.postCreateStudent = (req, res, next) => {
    conn.query(`INSERT INTO alumnos VALUES (id,'${req.body.name}','${req.body.lastName}')`,(err,row,next)=>{
        if (err) next (new Error(err));
        else res.redirect('/alumnos');
    })
}
alumnoController.postDeleteStudent = (req, res) => {
    conn.query(`DELETE FROM alumnos WHERE id = ${req.body.id}`,(err,rows,next)=>{
        if (err) next(new Error(err));
        else res.redirect('/alumnos');
    })
}


alumnoController.getEditStudent = (req, res, next) =>{
    conn.query(`SELECT * FROM alumnos WHERE id = ${req.params.id}`,(err, row)=>{
        if (err) next(new Error(error));
        else res.render('alumnos/editStudent',{oldStudent : row[0]});
    });
}

alumnoController.postEditStudent = (req, res, next) =>{
    conn.query(`UPDATE alumnos SET nombre='${req.body.name}' ,apellido='${req.body.lastName}' WHERE id =${req.params.id}`,(err,row)=>{
        if (err) next(new Error(err));
        else res.redirect('/alumnos');
    });
}

module.exports = alumnoController;