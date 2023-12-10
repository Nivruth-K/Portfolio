import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  isCollapsed = true;
  keyFeaturesCollapsed: any;
  technologiesCollapsed: any;
  Github1Collapsed: any;
  keyFeatures2Collapsed: any;
  technologies2Collapsed: any;

  constructor() {}

  toggleCollapse(section: string) {
    switch (section) {
      case 'Technologies1':
        this.technologiesCollapsed = !this.technologiesCollapsed;
        break;
      case 'KeyFeatures1':
        this.keyFeaturesCollapsed = !this.keyFeaturesCollapsed;
        break;
      case 'Technologies2':
        this.technologies2Collapsed = !this.technologies2Collapsed;
        break;
      case 'KeyFeatures2':
        this.keyFeatures2Collapsed = !this.keyFeatures2Collapsed;
        break;

      default:
        break;
    }
  }
}
