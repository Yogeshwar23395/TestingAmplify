import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {


  testimonials: any[] = [
    { title1: 'Our Very', title2: 'Helpful Support', testimonial: 'There are many variations of passages of at Lorem Ipsum that available but the majority the have suffered alteration. at There are many variations of passages of Lorem Ipsum anavailable a but the majority have suffered.', name: 'rakesh', stars: '5' },
    { title1: 'Our Project', title2: 'Successful Project', testimonial: 'There are many variations of passages of at Lorem Ipsum that available but the majority the have suffered alteration. at There are many variations of passages of Lorem Ipsum anavailable a but the majority have suffered', name: 'krishna', stars: '5' },
    { title1: 'Work Very', title2: 'Good Experiences', testimonial: 'There are many variations of passages of at Lorem Ipsum that available but the majority the have suffered alteration. at There are many variations of passages of Lorem Ipsum anavailable a but the majority have suffered', name: 'biswa', stars: '5' },
    { title1: 'work', title2: 'suppoeted', testimonial: 'There are many variations of passages of at Lorem Ipsum that available but the majority the have suffered alteration. at There are many variations of passages of Lorem Ipsum anavailable a but the majority have suffered', name: 'yogi', stars: '5' },
    { title1: 'Title', title2: 'Title 6', testimonial: 'There are many variations of passages of at Lorem Ipsum that available but have suffered alteration. at There are many variations of passages of Lorem Ipsum anavailable a but the majority have suffered ', name: 'dev', stars: '5' },
   
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
        items: 2 
      },
      940: {
        items: 2 
      }
    },
    nav: true
  };

}
