const {lecturer} = require('../models')

class lecturerController{
    static async getAllLecturer(req,res){
        try{
            let lecturers = await lecturer.findAll()
            res.json(lecturers)

        }
        catch(err){
            res.json(err)
        }
    }
    static async createLecturer(req,res){
        try{
            const { name,type_subject,nip,code_lecturer,task,description } = req.body
            let lecturers = await lecturer.create({
                name,type_subject,nip,code_lecturer,task,description
            })
            res.json(lecturers)
        }
        catch(err){
            res.json({
                message:err.message
            })
        }
    }
    static createLecturerPage(req,res){

    }
    static async deleteLecturer(req,res){
        try{
            const id = Number(req.params.id)

            let lecturers = await lecturer.destroy({
                where:{id}
            })
            res.json(lecturers)
        }
        catch(err){
            res.json(err)
        }
    }
    static async updateLecturer(req,res){
        try{
           
                const id =Number(req.params.id)
                const {name,type_subject,nip,code_lecturer,task,description} = req.body
    
                let lecturers = await lecturer.update({
                    name,type_subject,nip,code_lecturer,task,description
                },{
                    where: {id}
                })
                res.json(lecturers)
        }
        catch(err){
            res.json(err)
        }
    }
    static updateLecturerPage(req,res){
        
    }


    
}

module.exports = lecturerController