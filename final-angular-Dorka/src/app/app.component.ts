import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private us:UserService) {
    us.access();
  }

  list$: Observable<any> = this.us.read();
  title = 'Final Exam Index Page';

}
