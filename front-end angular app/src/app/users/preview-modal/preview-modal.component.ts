import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { UserService } from './../user.service';

@Component({
  selector: 'app-preview-modal',
  templateUrl: './preview-modal.component.html',
  styleUrls: ['./preview-modal.component.css']
})
export class PreviewModalComponent implements OnInit {

  @Input() fromParent;

  constructor(private router:Router, public activeModal:NgbActiveModal, public usrService: UserService) { }

  ngOnInit(): void {
    if(this.fromParent.photo64==='')this.fromParent.filename='';
  }

  closeModal(sendData) {
    this.activeModal.close(sendData);
    if(sendData=='Data Saved!') {
      this.usrService.storeUsers(this.fromParent); // storing user data via service
      this.router.navigate(['/users/view']); // redirecting to view tab
    }
  }

}
