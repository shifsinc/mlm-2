import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from "./toast/toast.component";
import { ToastService } from "../services/toast.service";
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [ToastComponent, UploadComponent],
  imports: [
    CommonModule
  ],
  providers: [ToastService],
  exports: [
    ToastComponent, UploadComponent
  ]
})
export class ModulesModule { }
