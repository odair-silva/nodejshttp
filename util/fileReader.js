var fs = require('fs');

fs.readFile('perfil.png', function(error, buffer){
    console.log('arquivo lido');
    fs.writeFile('perfil2.png', buffer, function(err){
        console.log('escrevi o arquivo');
    })
});