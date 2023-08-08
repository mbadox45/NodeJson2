var path = require('path');
const fs = require('fs');

exports.getuser = function(){
	const filePath = path.join(process.cwd(), '../../data', 'users.json');
    console.log(filePath);
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return { code: 500, status: false, message: 'Internal server error' };
        }
    
        try {
          const jsonData = JSON.parse(data);
          return {code:200, status:true, data:jsonData};
        } catch (parseErr) {
          console.error('Error parsing JSON:', parseErr);
          return { code: 500, status: false, message: 'Error parsing JSON' };
        }
    });
}