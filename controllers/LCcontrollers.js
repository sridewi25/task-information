const {lecturer_subject,subject,lecturer} = require('../models')

class lcController{
    static async getAll(req,res){
        try{
            let LCs = await lecturer_subject.findAll({
                include: [lecturer,subject],
                order: [
                    ['id','asc']
                ],
                attribute:['id']
            })
            res.json(LCs)
        }
        catch(err){
            res.json(err)
        }
    }
    static async create(req,res){
        try{
            const{lecturerId,subjectId} = req.body
            let LCs = await lecturer_subject.create({
                lecturerId:Number(lecturerId),
                subjectId:Number(subjectId)
            })
            res.redirect('/lecturer_subjects')
        }
        catch(err){
            res.json(err)
        }
    }
    static createPage(req,res){
        res.render('')
    }

}

module.exports = lcController;