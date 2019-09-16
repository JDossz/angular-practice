import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private us:UserService) {
    us.access();
  }

  title = 'Final Exam Users Page';
  users$: Observable<any> = this.us.read();

  ngOnInit() {
  }

}
