const {lecturer,subject,lecturer_subject} = require('../models')

class lecturerController{
    static async getAllLecturer(req,res){
        try{
            let lecturers = await lecturer.findAll({
                order: [
                    ['id','asc']
                ]
            })
            res.render('lecturer/TaskandLecturer.ejs',{lecturers})

        }
        catch(err){
            res.json({
                error: "Data Tidak Tersedia"
            })
        }
    }
    static async getAllLecturerStudent (req, res){
        try{
            let lecturers = await lecturer.findAll({
                order: [
                    ['id','asc']
                ]
            })
            res.render('student/Task.ejs',{lecturers})

        }
        catch(err){
            res.json({
                error: "Data Tidak Tersedia"
            })
        }
    }
    static async createLecturer(req,res){
        try{
            const { name,type_subject,nip,code_lecturer,task,description } = req.body
            let lecturers = await lecturer.create({
                name,type_subject,nip,code_lecturer,task,description
            })
            res.redirect('/lecturers');
        }
        catch(err){
            res.json({
                error: "Data Tidak Tersedia"
            })
        }
    }
    static createLecturerPage(req,res){
        res.render('lecturer/AddPage.ejs')
    }
    static async deleteLecturer(req,res){
        try{
            const id = Number(req.params.id)

            let lecturers = await lecturer.destroy({
                where:{id}
            })
            //res.json(lecturers)
            res.redirect('/lecturers');
        }
        catch(err){
            res.json({
                error: "Data Tidak Tersedia"
            })
        }
    }
    static async updateLecturerPage(req,res){
        try{
            const id = Number(req.params.id);
            let lecturers_data = await lecturer.findOne({
                where:{id}
            })
            res.render('lecturer/EditPage.ejs',{lecturers_data})  
        }
        catch(err){
            res.json({
                error: "Data Tidak Tersedia"
            })
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
                res.redirect('/lecturers')
        }
        catch(err){
            res.json({
                error: "Data Tidak Tersedia"
            })
        }
    }
    static async getLecturerSubject (req, res) {
        try{
            const id = Number(req.params.id)
            let result = await lecturer_subject.findAll({
                where: {
                    lecturerId: id
                },
                include: [lecturer, subject]
            })
            let subjects = result.map(subject_el =>{
                return subject_el.subject.dataValues;
            })

            let resultLC = {
                ...result[0].lecturer.dataValues,subjects: subjects
            }
            //let resultduo={lecturersubjects:resultLC.subjects}
            //console.log(resultduo)
            res.render('./subject/SubjectPage.ejs',{lecturersubjects:resultLC.subjects})  
        }
        catch (err){
            res.json({
                error: "Data Tidak Tersedia"
            })
        }
    }
    static async createSubjects (req,res){
        try{
            const id = Number(req.params.id)
            let subjectfinds = await subject.findAll({});
            let subject_length = subjectfinds.length;
            let subject_id = subject_length + 2;

            const {name} = req.body;
            let subjects = await subject.create({
                name
            })
            let LCs = await lecturer_subject.create({
                lecturerId: id,
                subjectId: subject_id
            })
            res.redirect('/lecturers')
        }
        catch (err){
            res.json({
                error: "Data Tidak Tersedia"
            })
        }
    }
    static async createSubjectsPage(req,res){
        try{
        const id = Number(req.params.id);
        let lecturers_data = await lecturer.findOne({
            where:{id}
        })
        res.render('./subject/AddSubject.ejs',{lecturers_data})
        }
        catch (err){
            res.json({
                error: "Data Tidak Tersedia"
            })
        }

    }
}

module.exports = lecturerController