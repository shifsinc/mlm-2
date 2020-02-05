const formidable = require('formidable');
const fs = require('fs');
const config = require('../configurations/configurations');

exports.upload = (req, res) => {
    var form = new formidable.IncomingForm();
    var nombre_archivo = '';
    var direccion_archivo = '/';
    var direccion_archivo_BD = '/';
    //form.multiples = true;
    form.keepExtensions = true;
    form.encoding = 'utf-8';
    //form.maxFields = 5;
    form.parse(req);
    form.on('fileBegin', function (name, file) {
        file.path = __dirname + '/userFiles/' + file.name;
    });
    form.on('file', function (name, file) {
        if (!fs.existsSync(config.serverURL + direccion_archivo)) {
            try {
                fs.mkdirSync(config.serverURL + direccion_archivo, { recursive: true });/*, (err) => {
                    if (err) {
                        console.error({ message: err });
                    }
                });*/
            } catch (error) {
                console.error({ message: error });
            }
        }
        try {
            fs.rename(__dirname + '/userFiles/' + file.name, config.serverURL + direccion_archivo + '/' + nombre_archivo, (err) => {
                if (err) {
                    console.error({ message: err });
                }
            });
            direccion_archivo_BD = direccion_archivo + '/' + nombre_archivo; //solo guarda la dirección despues del server y su puerto
        } catch (error) {
            console.log('errer', error);
        }
    });
    form.on('field', function (name, value) {
        if (name == 'file_name') {
            nombre_archivo = value;
        }
        if (name == 'file_path') {
            direccion_archivo = '/' + value;
        }
    });
    form.on('end', function () {
        res.status(201).json({ url: direccion_archivo_BD });
    });
    form.on('error', function(err) {
        console.error('Error en form on error', err);
    });
}

exports.download = (req, res) => {
    let fileName = 'userFiles/' + req.query.file_name;
    fs.readFile(fileName, (err, fileData) => {
        if (err) {
            res.json({
                result: 'failed',
                message: 'Cannot read image. Error is: ${err}'
            });
            return;
        }

        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.end(fileData);
    });
}