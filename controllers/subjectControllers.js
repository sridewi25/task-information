const {subject} = require('../models')

class subjectController{
    static async getAllSubject(req,res){
        try{
            let subjects = await subject.findAll({
                order: [
                    ['id','asc']
                ]
            })
            //res.render('subject/SubjectPage.ejs',{subjects})
        }
        catch(err){
            res.json(err)
        }
    }
}

module.exports = subjectController;