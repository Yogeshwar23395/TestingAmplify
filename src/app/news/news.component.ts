import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NEWSComponent {
  

  activePanel: number = -1;
  panels: any[] = [
    { title: 'Factory Press Distinctively synergize methods ', content: "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in that some form by injected humour or randomised words which  don't look even as slightly believable dummy now. " },
    { title: 'Competently streamline progressive scenarios', content: "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in that some form by injected humour or  randomised words which don't look even as slightly believable dummy now." },
    { title: 'Completely facilitate revolution in processing', content: "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in that some form by injected humour or randomised words which don't look even as slightly believable dummy now." },
    { title: 'How Factory continues and expand, increasing?', content:"There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in that some form by injected humour or randomised words which don't look even as slightly believable dummy now." }
  ];

  togglePanel(index: number) {
    this.activePanel = (this.activePanel === index) ? -1 : index;
  }
}
