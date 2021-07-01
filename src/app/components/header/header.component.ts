import { FixedSizeVirtualScrollStrategy, VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

export class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {
  constructor() {
    super(50, 250, 500);
  }
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: VIRTUAL_SCROLL_STRATEGY, useClass: CustomVirtualScrollStrategy }]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
