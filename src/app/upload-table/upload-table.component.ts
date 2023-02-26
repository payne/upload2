import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-table',
  templateUrl: './upload-table.component.html',
  styleUrls: ['./upload-table.component.scss']
})
export class UploadTableComponent {

  uploads = [
    {id: 1, name: 'upload1', type: 'dogs', date: '2020-01-01', status: 'published'},
    {id: 2, name: 'upload2', type: 'solo', date: '2020-01-02', status: 'published'},
    {id: 3, name: 'upload3', type: 'dogs', date: '2020-01-03', status: 'pending'},
    {id: 4, name: 'upload4', type: 'Yahtzee', date: '2020-01-04', status: 'published'},
    ];



}
