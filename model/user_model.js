var path = require('path');
const fs = require('fs');

exports.getuser = function(){
	const filePath = path.join(process.cwd(), 'data', 'users.json');
    console.log(filePath);
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            const datas = { code: 500, status: false, message: 'Internal server error' }; 
            //   return res.status(500).json(datas);
            return datas
        }
    
        try {
            const jsonData = JSON.parse(data);
            const datas = {code:200, status:true, data:jsonData}
            // return res.status(200).json(datas);
            return datas
        } catch (parseErr) {
            console.error('Error parsing JSON:', parseErr);
            const datas = { code: 500, status: false, message: 'Error parsing JSON' };
            // return res.status(500).json(datas);
            return datas
        }
    });
}