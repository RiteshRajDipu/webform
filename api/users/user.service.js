const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
         `insert into studs(id, firstName, lastName, email, number, university, college, year, branch, USN, gender, adress)
                     values(?,?,?,?,?,?,?,?,?,?,?,?)`,
          [
              data.id,
              data.first_name,
              data.last_name,
              data.email,
              data.number,
              data.university,
              data.college,
              data.year,
              data.branch, 
              data.USN,
              data.gender,
              data.adress
          ],
          (error, results, fields) => {
              if (error) {
                 return callBack(error);
              }
              return callBack(null, results);
          }            
        );
    }
};