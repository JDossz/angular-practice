import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  constructor(private us:UserService) {
    us.access();
  }

  list$: Observable<any> = this.us.read();
  title = 'Final Exam Index Page';

  ngOnInit() {
  }

}
