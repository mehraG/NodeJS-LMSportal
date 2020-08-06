import { Component, OnInit } from '@angular/core';

import { UserService } from './../user.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  public users = [];
  
  constructor(public usrService: UserService) { }

  ngOnInit(): void {
    //this.users=this.usrService.fetchUsers();
    this.usrService.fetchUsers()
      .subscribe(data => {
        this.users = data;
        console.log('this.users', this.users);
      });
    
    console.log('yuhu',this.users);
  }


}
