import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.css']
})
export class PostlistitemComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() DisloveIts: number;
  @Input() created_at: string;
  constructor() { }

  ngOnInit(): void {
  }
  onDontLoveIt() {
    this.DisloveIts++;
  }

  resetLike() {
    this.loveIts=0
  }

  resetDislike() {
    this.DisloveIts=0
  }

  onLoveIt() {
    this.loveIts++;
  }

}
