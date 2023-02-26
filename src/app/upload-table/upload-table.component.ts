import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: 'app-upload-table',
  templateUrl: './upload-table.component.html',
  styleUrls: ['./upload-table.component.scss']
})
export class UploadTableComponent implements OnInit, AfterViewInit {

  uploads = [
    {id: 1, name: 'upload1', type: 'dogs', date: '2020-01-01', status: 'published'},
    {id: 2, name: 'upload2', type: 'solo', date: '2020-01-02', status: 'published'},
    {id: 3, name: 'upload3', type: 'dogs', date: '2020-01-03', status: 'pending'},
    {id: 4, name: 'upload4', type: 'Yahtzee', date: '2020-01-04', status: 'published'},
    ];

  displayedColumns: string[] = ['id', 'name', 'type', 'date', 'status'];


  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
  }



}
