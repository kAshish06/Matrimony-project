import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Tesseract  from 'tesseract.js';

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
  public tesseract: any;
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
  constructor() { 
    this.tesseract = Tesseract.create({
      workerPath: 'http://localhost:4200/assets/tesseract/tesseract.worker.js',
      langPath: 'http://localhost:4200/assets/tesseract/lang/tl-',
      corePath: 'http://localhost:4200/assets/tesseract/tesseract-core.js'
    });
  }

  ngOnInit() {
    console.log(Tesseract);
    console.log(this.tesseract);
  }

  fileSelectionHandler(event) {
    console.log(this.selectedFile);
    console.log(this.select.nativeElement.files);
    // let pdfImage = document.createElement('img');
    let pdfObj = window.URL.createObjectURL(this.select.nativeElement.files[0]);
    this.preview.nativeElement.id = "pdfImage";
    this.preview.nativeElement.src = pdfObj;
    this.preview.nativeElement.width = 300;
    this.preview.nativeElement.height = 500;
    // this.preview.nativeElement.appendChild(pdfImage);
  }

  triggerImageReader() {
    // const pdfImage = document.getElementById('pdfImage');
    this.tesseract.recognize(this.preview.nativeElement, {lang: 'eng'})
      .progress((result) => {
        console.log(result);
      })
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
