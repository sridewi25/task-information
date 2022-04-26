const {subject} = require('../models')

class subjectController{
    static async getAllSubject(req,res){
        try{
            let subjects = await subject.findAll()
            res.json(subjects)
        }
        catch(err){
            res.json(err)
        }
    }
    static async createSubject(req,res){
        try{
            const {name} = req.body;
            let subjects = await subject.create({
                name
            })
            res.json(subjects)
        }
        catch(err){
            res.json(err)
        }
    }
    static createSubjectPage(req,res){

    }
    static async deleteSubject(req,res){
        try{
            const id = Number(req.params.id)

            let subjects = await subject.destroy({
                where:{id}
            })
            res.json(subjects)
        }
        catch(err){
            res.json(err)
        }
    }
    static async updateSubject(req,res){
        try{
            const id =Number(req.params.id)
            const {name} = req.body

            let subjects = await subject.update({
                name
            },{
                where: {id}
            })
            res.json(subjects)
        }
        catch(err){
            res.json(err)
        }
    }
    static updateSubjectPage(req,res){
        
    }
}

module.exports = subjectController;