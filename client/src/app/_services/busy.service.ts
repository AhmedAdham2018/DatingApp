import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {

  busyReqCount = 0;
  constructor(private spinner : NgxSpinnerService) { }

  busy(){
    this.busyReqCount++;
    this.spinner.show();
  }

  idle(){
    this.busyReqCount--;
    if (this.busyReqCount <= 0) {
      this.busyReqCount = 0;
      this.spinner.hide();
    }
  }
}
