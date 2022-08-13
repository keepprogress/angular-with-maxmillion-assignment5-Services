import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class SwitchCountService {
  activeToInactiveCount = 0;
  inactiveToActiveCount = 0;

  activeToInactiveCountReset = new EventEmitter<number>();
  inactiveToActiveCountReset = new EventEmitter<number>();

  countActiveToInactive() {
    this.activeToInactiveCount++;
    this.activeToInactiveCountReset.emit(this.activeToInactiveCount);
  }

  countInactiveToActive() {
    this.inactiveToActiveCount++;
    this.inactiveToActiveCountReset.emit(this.inactiveToActiveCount);
  }
}
