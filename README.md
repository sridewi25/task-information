# task-information

npx sequelize-cli model:generate --name subject --attributes name:string
npx sequelize-cli model:generate --name lecturer --attributes name:string,type_subject:string,nip:string,code_lecturer:string,task:string,description:string

npx sequelize-cli model:generate --name lecturer_subject --attributes lecturerId:integer,subjectId:integer