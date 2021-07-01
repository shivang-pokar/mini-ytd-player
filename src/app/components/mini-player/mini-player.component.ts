import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'mini-player',
  templateUrl: './mini-player.component.html',
  styleUrls: ['./mini-player.component.scss']
})
export class MiniPlayerComponent implements OnInit, OnChanges {

  @Input() currentTime;
  @Input() source;

  updatedCurrentTime: number;

  @Output() playBigVideo = new EventEmitter<any>();
  @ViewChild('smallVideo') smallVideo: ElementRef
  constructor() { }

  ngOnInit(): void {


  }

  ngOnChanges() {

    if (this.source) {
      setTimeout(() => {
        this.setCurrentTimeMini(this.currentTime)
      }, 50)
    }
  }

  setCurrentTimeMini(seconds) {
    try {
      this.smallVideo.nativeElement.currentTime = seconds;
      this.smallVideo.nativeElement.play()
    } catch (e) {
      console.log(e);
    }
  }

  minCurrentTime(data) {
    this.updatedCurrentTime = data.target.currentTime;
  }

  stopMini() {
    this.smallVideo.nativeElement.pause()
    this.playBigVideo.emit({
      currentTime: this.updatedCurrentTime
    })
  }

}
