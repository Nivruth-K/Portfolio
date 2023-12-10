import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  downloadfn() {
    const fileUrl = './assets/Nivruth_Res_Upd1.pdf';
    const fileName = 'Nivruth_Resume';
    fetch(fileUrl)
      .then((response) => response.blob())
      .then((blob) => saveAs(blob, fileName))
      .catch((error) => console.error('Error downloading file:', error));
  }
}
