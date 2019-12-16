import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: any[];
  userId;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userId = params.id;
      console.log(params.id);
      this.listUser(this.userId)
    });
  }

  listUser(userId) {
    this.userService.listUser(userId).then(data => {
      this.user = data;
    }
    );
  }

}
