import { Component, OnInit } from '@angular/core';

import { UserService } from './../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public users = [];

  constructor(private router:Router, public usrService: UserService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    //this.users=this.usrService.fetchUsers();
    this.usrService.fetchUsers()
      .subscribe(data => {
        this.users = data;
        console.log('this.users', this.users);
      });

    console.log('yuhu', this.users);
  }

  delRow(_id) {
    this.usrService.deleteUsers(_id)
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/users/view']);
    }); // this is used to refresh page
  }

}
