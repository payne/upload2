// Trying to follow https://www.bezkoder.com/angular-11-multiple-file-upload/
import {Component, OnInit} from '@angular/core';
import { HttpEventType, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { UploadFilesService } from "../upload-files.service";

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss']
})
export class UploadFilesComponent implements  OnInit {
  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];
  fileInfos?: Observable<any>;

  constructor(private uploadService: UploadFilesService) { }

  selectFiles(event: any): void {
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
    this.message = [];
  }

  uploadFiles(): void {
    this.message = [];
    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
  }

  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };

    this.uploadService.upload(file).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          // @ts-ignore
          this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message.push(event.body.message);
        }
      },
      err => {
        this.progressInfos[idx].value = 0;
        this.message.push('Could not upload the file:' + file.name);
      });
  }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
  }

}
