const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
         `insert into students(firstName, lastName, email, password, number, university, college, year, branch, gender, address)
                     values(?,?,?,?,?,?,?,?,?,?,?)`,
          [
              data.first_name,
              data.last_name,
              data.email,
              data.password, 
              data.number,
              data.university,
              data.college,
              data.year,
              data.branch,
              data.gender,
              data.address
          ],
          (error, results, fields) => {
              if (error) {
                 return callBack(error);
              }
              return callBack(null, results); 
          }            
        );
    },
  getUsers: callBack => {
      pool.query(
          `select id,firstName,lastName,email,number,university,college,year,branch,gender,address from students`,
        [],
        (error, results, fields) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, results);
        }
      );
  },
   getUserByUserId: (id, callBack) => {
       pool.query(
           `select id,firstName,lastName,email,number,university,college,branch,gender,address from students where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                   return callBack(error);
                }
                return callBack(null, results[0]);
            } 
           );
    },
    updateUser: (data, callBack) => {
        pool.query(
         `update students set firstName=?, lastName=?, email=?, password=?, number=?, university=?, college=?, branch=?, gender=?, address=? where id = ?`,
         [
             data.first_name,
             data.last_name,
             data.email,
             data.password,
             data.number,
             data.university,
             data.college,
             data.branch,
             data.gender,
             data.address,
             data.id 
         ],
         (error, results, fields) => {
             if (error) {
                 callBack(error);
             }
             return callBack(null, results); 
         }   
        )
    },
    deleteUser: (data, callBack) => {
        pool.query(
            `delete from students where id =?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                   return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
   getUserByUserEmail: (email, callBack) => {
       pool.query(
           `select * from students where email = ?`,
       [email],
       (error, results, fields) => {
           if (error) {
               callBack(error);
           }
           return callBack(null, results[0]);
       }
       );
   }
};