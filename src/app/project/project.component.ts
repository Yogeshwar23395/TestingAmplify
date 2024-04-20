import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  tabData = [

    {
      label: 'Agriculture',
      images: [
        { imagePath: 'assets/image/png image/pt1.png', overlayText: 'Text for image 1' },
        { imagePath: 'assets/image/png image/pt1.png', overlayText: 'Text for image 3' },
        { imagePath: 'https://material.angular.io/assets/img/examples/shiba2.jpg', overlayText: 'Text for image 5' },
        { imagePath: 'assets/image/png image/pt1.png', overlayText: 'Text for image 6' }
    ]
    },
    {
      label: 'Chemical',
      images: [
        { imagePath: 'assets/image/png image/pt1.png', overlayText: 'Text for image 1' },
        { imagePath: 'https://material.angular.io/assets/img/examples/shiba2.jpg', overlayText: 'Text for image 2' },
        { imagePath: 'assets/image/png image/pt1.png', overlayText: 'Text for image 3' },
      ]
    },
    {
      label: 'Materials',
      images: [
        { imagePath: 'assets/image/png image/pt1.png', overlayText: 'Text for image 1' },
        { imagePath: 'https://material.angular.io/assets/img/examples/shiba2.jpg', overlayText: 'Text for image 2' },
        { imagePath: 'assets/image/png image/pt1.png', overlayText: 'Text for image 3' },
        { imagePath: 'assets/image/png image/pt1.png', overlayText: 'Text for image 6' }
    ]
    },
    {
      label: 'Mechanical',
      images: [
        { imagePath: 'assets/image/png image/pt1.png', overlayText: 'Text for image 1' },
        { imagePath: 'https://material.angular.io/assets/img/examples/shiba2.jpg', overlayText: 'Text for image 2' },
        { imagePath: 'assets/image/png image/pt1.png', overlayText: 'Text for image 4' },
        { imagePath: 'https://material.angular.io/assets/img/examples/shiba2.jpg', overlayText: 'Text for image 5' },
        { imagePath: 'assets/image/png image/pt1.png', overlayText: 'Text for image 6' }
    ]
    },
    {
      label: 'Power & Energy',
      images: [
        { imagePath: 'assets/image/png image/pt1.png', overlayText: 'Text for image 1' },
        { imagePath: 'https://material.angular.io/assets/img/examples/shiba2.jpg', overlayText: 'Text for image 2' },
        { imagePath: 'assets/image/png image/pt1.png', overlayText: 'Text for image 3' },
        { imagePath: 'https://material.angular.io/assets/img/examples/shiba2.jpg', overlayText: 'Text for image 5' },
        { imagePath: 'assets/image/png image/pt1.png', overlayText: 'Text for image 6' }
    ]
    },
  ]


}
