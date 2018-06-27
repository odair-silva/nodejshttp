var fs = require('fs');

fs.createReadStream('perfil.png')
    .pipe(fs.createWriteStream('perfil-com-stream.png'))
    .on('finish', function(){
        console.log('arquivo escrito com stream');
    });