import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { ConnexionService } from 'src/app/services/connexion.service';
import { globalVars, globalImagesSize } from 'src/app/services/globalVars';

declare var $: any;

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  providers: [ConnexionService],
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  selectedFile: File[] = [];
  scaledImage: Blob[] = [];
  thumbImage: Blob[] = [];
  datosImagen: any[] = [];
  porcentajeUpload: string = '0';
  nombreFile: string = '';
  countFiles: number = 0;
  reader: FileReader = new FileReader();
  upload: boolean;

  public muestraUP: string = 'muestra';
  public muestraMIDDLE: string = 'noMuestra';
  public muestraDOWN: string = 'noMuestra';
  lang: string;

  @Input('path') path_server: string;
  @Input('mostrar') mostrar: boolean;
  @Input('title') title_upload: string;
  @Input('name') file_name: string;
  @Output('') desdeElHijo = new EventEmitter();

  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {
    this.upload = false;
  }

  sizeCanva(canva: any, widthImg: number, heightImg: number, widthScale: number, heightScale: number) {
    if (widthImg > heightImg) {
      const scaleFactorWidth = widthScale / widthImg;
      canva.width = widthScale;
      canva.height = heightImg * scaleFactorWidth;
    } else {
      const scaleFactorHeight = heightScale / heightImg;
      canva.width = widthImg * scaleFactorHeight;
      canva.height = heightScale;
    }
    return canva;
  }

  newtoBlob() {
    Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
      value: function (callback, type?, quality?) {
        var dataURL = this.toDataURL(type, quality).split(',')[1];
        setTimeout(function () {
          let binStr = atob(dataURL);
          let len = binStr.length;
          let arr = new Uint8Array(len);
          for (var i = 0; i < len; i++) {
            arr[i] = binStr.charCodeAt(i);
          }
          callback(new Blob([arr], { type: type || 'image/jpeg' }));
        });
      }
    });
  }

  onFileSelected(event) {
    console.log('this.path_serve',this.path_server);
    var myFiles = event.target.files;

    if (this.upload == true) {
      this.upload = false;
      this.onCancel();
    }

    for (var i = 0, f; f = myFiles[i]; i++) {
      this.selectedFile.push(f);
      this.reader = new FileReader();
      var self = this;
      this.reader.onload = (function (theFile) {
        return function (e) {
          const miImg = new Image();
          miImg.src = (e.target as any).result;
          (miImg.onload = () => {
            var canvaScale = document.createElement('canvas');
            var canvaThumb = document.createElement('canvas');

            var crc2dScale = <CanvasRenderingContext2D>canvaScale.getContext('2d');
            var crc2dThumb = <CanvasRenderingContext2D>canvaThumb.getContext('2d');

            canvaScale = self.sizeCanva(canvaScale, miImg.width, miImg.height, globalImagesSize.widthScale, globalImagesSize.heightScale);
            canvaThumb = self.sizeCanva(canvaThumb, miImg.width, miImg.height, globalImagesSize.thumbWidth, globalImagesSize.thumbHeight);
            if (miImg.width > miImg.height) {
              crc2dScale.drawImage(miImg, 0, 0, globalImagesSize.widthScale, canvaScale.height);
              crc2dThumb.drawImage(miImg, 0, 0, globalImagesSize.thumbWidth, canvaThumb.height);
            } else {
              crc2dScale.drawImage(miImg, 0, 0, canvaScale.width, globalImagesSize.heightScale);
              crc2dThumb.drawImage(miImg, 0, 0, canvaThumb.width, globalImagesSize.thumbHeight);
            }
            var nuevaSRC = crc2dThumb.canvas.toDataURL('image/jpeg', 1);

            if (!HTMLCanvasElement.prototype.toBlob) {
              self.newtoBlob();
            }
            crc2dScale.canvas.toBlob(function (blob) {
              self.scaledImage.push(blob);
            },
              'image/jpeg',
              1
            );
            crc2dThumb.canvas.toBlob(function (blob) {
              self.thumbImage.push(blob);
            },
              'image/jpeg',
              1
            );
            self.datosImagen.push({ id: 'img' + theFile.name, src: nuevaSRC, 'dataName': theFile.name });
          });
        }
      })(f);
      
      this.reader.readAsDataURL(f);
    };

    if (myFiles.length > 0) {
      this.muestraUP = 'muestra';
      this.muestraMIDDLE = 'muestra';
      this.muestraDOWN = 'muestra';
    }
  }

  onCancel() {
    for (let i = 0; i < this.selectedFile.length; i++) {
      this.selectedFile.pop();
      this.datosImagen.pop();
    }
    this.datosImagen = [];
    this.selectedFile = [];
    this.reader.abort();
    this.reader.EMPTY;
    this.reader = new FileReader();
    $("#fileUpload").remove();
    this.muestraMIDDLE = 'noMuestra';
    this.muestraDOWN = 'noMuestra';
  }

  deleteFunction($event: any, name: string) {
    $event.preventDefault();

    if (confirm('¿ Está seguro que desea eliminar la imagen seleccionada. ?')) {
      let encuentra = -10;
      for (let i = 0; i < this.selectedFile.length; i++) {
        if (this.selectedFile[i].name == name) {
          encuentra = i;
          if (this.selectedFile.length == 1) {
            this.onCancel();
            return;
          }
        }
      }
      if (encuentra >= 0) {
        this.scaledImage.splice(encuentra, 1);
        this.thumbImage.splice(encuentra, 1);
        this.datosImagen.splice(encuentra, 1);
        this.selectedFile.splice(encuentra, 1);
      }
    }
  }

  onUpload() {
    if (!this.selectedFile) {
      console.log('Archivo Eliminado');
      return;
    }
    var head = new HttpHeaders(
      {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    );
    var dt = new Date();
    
    for (let index = 0; index < this.selectedFile.length; index++) {
      let fdScale = new FormData();
      let nuevoNombre = this.changeName(this.selectedFile[index].name);
      try {
        fdScale.append('file_name', nuevoNombre);
        fdScale.append('file_path', this.path_server);
        fdScale.append('file', this.scaledImage[index], 'Scale' + dt.getUTCMinutes().toString() + dt.getUTCSeconds().toString() + dt.getUTCMilliseconds().toString() + nuevoNombre);

        this.http.post(globalVars.domain + '/api/v1/image/', fdScale, {
          reportProgress: true,
          observe: 'events',
          headers: head
        }).subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.porcentajeUpload = Math.round(event.loaded / event.total * 100) + "%";
            document.getElementById("pbFile" + this.selectedFile[index].name).style.width = this.porcentajeUpload;
            document.getElementById("pbFile" + this.selectedFile[index].name).innerHTML = this.porcentajeUpload;
          }
        });

      } catch (error) {
        console.log('Error: ' + error)
      }
    }

    for (let index = 0; index < this.selectedFile.length; index++) {
      let fdThumb = new FormData();
      let nuevoNombre = this.changeName(this.selectedFile[index].name);
      try {
        fdThumb.append('file_name', nuevoNombre);
        fdThumb.append('file_path', this.path_server + '/thumbnail');
        fdThumb.append('file', this.thumbImage[index], 'Thumb' + dt.getUTCMinutes().toString() + dt.getUTCSeconds().toString() + dt.getUTCMilliseconds().toString() + nuevoNombre);
        this.http.post(globalVars.domain + '/api/v1/image/', fdThumb, {
          observe: 'events',
          headers: head
        }).subscribe(event => {
          if (event.type === HttpEventType.Response) {
            this.desdeElHijo.emit({ upload: event.body });
            this.muestraMIDDLE = 'noMuestra';
            this.muestraDOWN = 'noMuestra';
          }
        });

      } catch (error) {
        console.log('Error: ' + error)
      }
    }
    this.upload = true;
  }

  changeName(nombre: string) {
    let replaceable = ['+', '-', '*', '`', '´', '[', ']', ' ', '{', '}', '(', ')'];
    for (let i = 0; i < replaceable.length; i++) {
      nombre = nombre.replace(replaceable[i], '_');
    }
    return nombre;
  }
}