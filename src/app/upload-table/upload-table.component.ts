import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";
import { tap, catchError, finalize} from "rxjs";
import { merge, throwError} from "rxjs";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MatFormField } from "@angular/material/form-field";
import { Upload } from "../models/upload";
import {MatTableDataSource} from "@angular/material/table";

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
  tableDataSource = new MatTableDataSource<any>(); //TODO: Avoid constructing just to get type?
  uploadCount = this.uploadsData.length
  displayedColumns: string[] = ['id', 'name', 'type', 'date', 'status'];


  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  // @ts-ignore
  VOForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.VOForm = this.formBuilder.group({
      VORows: this.formBuilder.array(this.uploadsData.map((upload) =>
        this.formBuilder.group({
          id: new FormControl(upload.id),
          name: new FormControl(upload.name),
          type: new FormControl(upload.type),
          date: new FormControl(upload.date),
          status: new FormControl(upload.status),
        })
      )) // end of formBuilder.array
    });
    const formArray = this.VOForm.get('VORows') as FormArray;
    this.tableDataSource = new MatTableDataSource(formArray.controls);
   //  this.loadUploadsPage();
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadUploadsPage())
      ).subscribe()
  }


  private loadUploadsPage() {
    const pageIndex = this.paginator ? this.paginator.pageIndex : 0;
    const pageSize = this.paginator ? this.paginator.pageSize : 5;
    console.table( {pageIndex: pageIndex, pageSize: pageSize});
    this.uploads =
      this.uploadsData.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
  }
}
