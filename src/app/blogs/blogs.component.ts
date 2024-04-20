import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {

  blogs: any[] = [
    { name: 'By Clifford Donley', date: '2024-03-19', title: 'Volkswagen Car Towers at Autostadt in Wolfsburg, Germany', description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in that some dummy', readMoreLink: '#', commentsCount: 10 },
    { name: 'By Clifford Donley', date: '2024-03-18', title: 'Within the construction industry as your their overdraft dummy', description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in that some dummy', readMoreLink: '#', commentsCount: 8 },
    { name: 'By Clifford Donley', date: '2024-03-17', title: 'Materials & Manufacturing Service Our Engineers Team.', description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in that some dummy', readMoreLink: '#', commentsCount: 12 },
    { name: 'By Clifford Donley', date: '2024-03-19', title: 'Volkswagen Car Towers at Autostadt in Wolfsburg, Germany', description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in that some dummy', readMoreLink: '#', commentsCount: 10 },
    { name: 'By Clifford Donley', date: '2024-03-18', title: 'Within the construction industry as your their overdraft dummy', description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in that some dummy', readMoreLink: '#', commentsCount: 8 },
    { name: 'By Clifford Donley', date: '2024-03-17', title: 'Materials & Manufacturing Service Our Engineers Team.', description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in that some dummy', readMoreLink: '#', commentsCount: 12 },
  ];

  loginImageUrls: string[] = [
    '../../assets/image/logo1.png',
    '../../assets/image/logo2.png',
    '../../assets/image/logo3.png',
    '../../assets/image/logo4.png',
    '../../assets/image/logo5.png',
  ];

  customOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3 // Display 3 items at a time on screens wider than 740px
      },
      940: {
        items: 3 // Display 3 items at a time on screens wider than 940px
      }
    },
    nav: true
  };


  loginImagesOptions: any = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000, // Adjust autoplay speed as needed
    responsive: {
      0: {
        items: 2 // Display 2 items at a time on screens less than 600px wide
      },
      600: {
        items: 3 // Display 4 items at a time on screens wider than 600px
      },
      1000: {
        items: 6 // Display 6 items at a time on screens wider than 1000px
      }
    }
  };





}
