import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  myMail: string = 'nivruthk1337@gmail.com';
  myNumber: number = 9381214470;
  DisplayMail: boolean = false;
  DisplayNumber: boolean = false;
  showMail(): void {
    this.DisplayMail = !this.DisplayMail;
  }
  showMobile(): void {
    this.DisplayNumber = !this.DisplayNumber;
  }
}
