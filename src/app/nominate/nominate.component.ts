import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-nominate',
  templateUrl: './nominate.component.html',
  styleUrls: ['./nominate.component.css']
})
export class NominateComponent implements OnDestroy {
  check = false;
  save = false;
  submit = false;
  mobileQuery: MediaQueryList;
  panelOpenState: boolean = false;
  selectedValue: string;
  onclick() {
    this.check = true;
  }
  savee() {
    this.save = true;
  }
  submitt() {
    this.submit = true;
  }
  employee = [
    { value: 'employee', viewValue: 'ABC' },
  ];
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
