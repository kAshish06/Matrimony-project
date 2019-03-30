import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface userTabs {
  label: string;
  icon: string;
}
@Component({
  selector: 'matr-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public selectedFile: any;
  public tabs: userTabs[] = [
    {
      label: 'Dashboard',
      icon: 'fas fa-desktop'
    },
    {
      label: 'Profile',
      icon: 'fa fa-user'
    },
    {
      label: 'Messages',
      icon: 'far fa-envelope'
    },
    {
      label: 'Privacy',
      icon: 'fas fa-user-secret'
    },
    {
      label: 'Payments',
      icon: 'far fa-credit-card'
    }
  ]
  @ViewChild('select', {read: ElementRef}) select: ElementRef;
  @ViewChild('dropzone', {read: ElementRef}) dropzone: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  fileSelectionHandler(event) {
    console.log(this.selectedFile);
    console.log(this.select.nativeElement.files);
  }

  dropZoneEnter(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  dropZoneOver(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  dropZoneDrop(event) {
    event.stopPropagation();
    event.preventDefault();
    let dt = event.dataTransfer;
    let files = dt.files
    console.log(event.dataTransfer);
    this.handlePdf(event.dataTransfer.files);
    // this is test rebase 
  }

  handlePdf(files: any[]) {
    //this is operation on selected files will go. 
    //either use ceateObjectUrl or something else 
  }
}
