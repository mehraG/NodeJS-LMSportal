import { Component } from '@angular/core';
import { FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { PreviewModalComponent } from '../preview-modal/preview-modal.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  get name() { return this.userForm.get('name'); }
  get email() { return this.userForm.get('email'); }
  get phone() { return this.userForm.get('phone'); }
  get gender() { return this.userForm.get('gender'); }
  get category() { return this.userForm.get('category'); }
  get tech() { return this.userForm.get('tech'); }
  get filename() { return this.userForm.get('filename'); }

  techList: Array<any> = ['C', 'C++', 'Java', 'Python', 'Javascript'];
  url:string = ''; // stores image in Base64 format
  checkedTechList: Array<any> = []; // Array of all technology which are check marked
  isTechListEmpty: boolean = this.checkedTechList.length == 0; // To check checkedTechList array is empty or not

  constructor(private fb: FormBuilder, private modalService: NgbModal) { }

  userForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern('[\s]*[a-zA-Z][a-zA-Z ]*')]],
    email: ['', [Validators.required, Validators.pattern('\\S+@\\S+\\.\\S+')]],
    phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    gender: ['', Validators.required],
    category: ['', Validators.required],
    tech: new FormArray([]),
    filename: [''],
    photo64: [this.url]
  });

  onCheckChange(event) {
    const formArray: FormArray = this.userForm.get('tech') as FormArray;

    /* Selected */
    if (event.target.checked) {
      // Add a new control in the arrayForm
      formArray.push(new FormControl(event.target.value));
    }
    /* unselected */
    else {
      // find the unselected element
      let i: number = 0;

      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    this.checkedTechList = this.tech.value;
    this.isTechListEmpty = this.checkedTechList.length == 0;
  }

  openModal() {
    const modalRef = this.modalService.open(PreviewModalComponent);

    let data = this.userForm.value;

    modalRef.componentInstance.fromParent = data;
    modalRef.result.then(
      (result) => { result == 'Data Saved!' ? console.log(result) : null; },
      (reason) => { }
    );
  }
  
  onselectFile(e){
    if(e.target.files){
      console.log(e)
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      if(e.target.files[0].size>46080){ // if size more than 45 KB 
        alert("Image size should be smaller than 45 KB");
        e.target.value='';
      }
      else reader.onload=(event:any)=>{
        this.url=event.target.result;
        this.userForm.patchValue({photo64:this.url});
        // console.log('das',this.userForm.value.photo64);
      }
    }
  }

}
