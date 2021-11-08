const fs = require('fs');
const path = require('path');
const folderDirectory = path.join(__dirname, '/secret-folder');

fs.readdir(folderDirectory,  (error, filesList) => {
    if (error) {
        throw error;
    }
        filesList.forEach(file=>{

            let fileDirectory = folderDirectory +  `/${file}`
        
            fs.stat(fileDirectory, (error, info) => {
                if (error) {
                throw error;
            }
            
            if (info.isFile()) {
                console.log(`${path.parse(file).name} - ${path.extname(file).slice(1)} - ${info.size}b`);
            }
            })    
        });
     
})

