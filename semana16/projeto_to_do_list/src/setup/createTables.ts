import { connection } from '../connections/dataBaseConnection'



const createTable = async(): Promise<void> => {

    await connection.raw(`
      
        CREATE TABLE ToDoList_User (
          id VARCHAR(255) PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          nickname VARCHAR(255) NOT NULL,
          email: VARCHAR(255) UNIQUE NOT NULL,
        );    
    
    `)

    await connection.raw(`
      
        CREATE TABLE ToDoList_Task (
          taskId VARCHAR(255) PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          description TEXT NOT NULL,
          limitDate: DATE NOT NULL,
          status:  VARCHAR(255) NOT NULL DEFAULT "to_do",
          creatorUserId: VARCHAR(255) NOT NULL,
          FOREIGN KEY (creatorUserId) REFERENCES ToDoListUSer(id)
        );    
    
    `)


    await connection.raw(`
      
        CREATE TABLE Accountable_Task (
          taskId VARCHAR(255),
          userId VARCHAR(255),
          FOREIGN KEY (taskId) REFERENCES ToDoList_Task(id)
          FOREIGN KEY (userId) REFERENCES ToDoList_USer(id)
        );    
    
    `)
} 
