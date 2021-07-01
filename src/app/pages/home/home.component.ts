import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentTime: number = 0;
  source: string = "../../../assets/video.mp4";
  sourceLink;
  minplayer: boolean = false;
  @ViewChild('myVideo') myVideo: ElementRef

  constructor() { }

  ngOnInit(): void {
    /* this.setCurrentTimeMini(5) */
  }

  ngAfterViewInit() {
    this.myVideo.nativeElement.onloadeddata = (event) => {
      this.myVideo.nativeElement.play();
    };


  }

  setCurrentTime(data) {
    this.currentTime = data.target.currentTime;
  }

  openMiniPlayer() {
    this.myVideo.nativeElement.pause();
    this.sourceLink = this.source;
    this.minplayer = true
  }

  playBigVideo(event) {
    this.minplayer = false;
    this.sourceLink = undefined;
    this.setBigVideo(event.currentTime)
  }

  setBigVideo(seconds) {
    try {
      this.myVideo.nativeElement.currentTime = seconds;
      this.myVideo.nativeElement.play()
    } catch (e) {
      console.log(e);
    }
  }

}
