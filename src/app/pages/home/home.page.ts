import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  segment = 'chats';

  constructor() { }
  ngOnInit() { }

  logout() {

  }

  onSegmentChanged(event: any) {
    this.segment = event.detail.value;
    console.log(event);
  }

  newChat() {
    
  }
}
