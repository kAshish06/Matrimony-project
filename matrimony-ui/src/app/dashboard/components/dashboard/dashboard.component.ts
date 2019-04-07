import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Tesseract } from 'tesseract.js/dist/tesseract';

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
  @ViewChild('preview', {read: ElementRef}) preview: ElementRef;
  constructor() { }

  ngOnInit() {
    console.log(Tesseract);
  }

  fileSelectionHandler(event) {
    console.log(this.selectedFile);
    console.log(this.select.nativeElement.files);
    let pdfImage = document.createElement('embed');
    let pdfObj = window.URL.createObjectURL(this.select.nativeElement.files[0]);
    pdfImage.src = pdfObj;
    pdfImage.width = '300px';
    pdfImage.height = '500px';
    this.preview.nativeElement.appendChild(pdfImage);
    Tesseract.recognise(pdfObj)
      .then((result) => {
        console.log(result);
      })
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
    //added comment in dropzonedrop on ry-another-rebase
  }

  handlePdf(files: any[]) {
    //added comment in hadlefiles on master
  }
}
