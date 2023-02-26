import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { tap, catchError, finalize} from "rxjs";
import { merge, throwError} from "rxjs";
import { Upload } from "../models/upload";

@Component({
  selector: 'app-upload-table',
  templateUrl: './upload-table.component.html',
  styleUrls: ['./upload-table.component.scss']
})
export class UploadTableComponent implements OnInit, AfterViewInit {

  uploads: Upload[] = [];
  uploadsData: Upload[] = [
    {id: 1, name: 'upload1', type: 'dogs', date: '2020-01-01', status: 'published'},
    {id: 2, name: 'upload2', type: 'solo', date: '2020-01-02', status: 'published'},
    {id: 3, name: 'upload3', type: 'dogs', date: '2020-01-03', status: 'pending'},
    {id: 4, name: 'upload4', type: 'Yahtzee', date: '2020-01-04', status: 'published'},
    {id: 5, name: 'upload5', type: 'Poppy', date: '2020-01-05', status: 'published'},
    {id: 6, name: 'upload6', type: 'solo', date: '2020-01-06', status: 'published'},
    {id: 7, name: 'upload7', type: 'Poppy', date: '2020-01-07', status: 'published'},
    {id: 8, name: 'upload8', type: 'Poppy', date: '2020-01-08', status: 'published'},
    ];

  uploadCount = this.uploadsData.length
  displayedColumns: string[] = ['id', 'name', 'type', 'date', 'status'];


  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadUploadsPage())
      ).subscribe()
  }


  private loadUploadsPage() {
    this.uploads =
      this.uploadsData.slice(this.paginator.pageIndex * this.paginator.pageSize, (this.paginator.pageIndex + 1) * this.paginator.pageSize);
  }
}
