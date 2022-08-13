import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import {SwitchCountService} from './switchCount.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers = [];
  inactiveUsers = [];

  activeToInactiveCount = 0;
  inactiveToActiveCount = 0;

  constructor(private switchCountService: SwitchCountService,
              private usersService: UsersService) {
    this.switchCountService.activeToInactiveCountReset.subscribe(
      (count: number) => this.activeToInactiveCount = count
    );
    this.switchCountService.inactiveToActiveCountReset.subscribe(
      (count: number) => this.inactiveToActiveCount = count
    );
  }

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
