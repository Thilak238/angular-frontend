import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

  contact: Contact = new Contact();
  constructor(private contactService : ContactService, private router:Router) { }

  ngOnInit(): void {
  }
  
  saveEmployee(){
    this.contactService.createContact(this.contact).subscribe(data => {
      console.log(data);
      this.gotoContactList();
    },
    error => console.log(error)
    );
  }
  gotoContactList() {
    this.router.navigate(['/contacts']);
  }

  onSubmit() {
    console.log(this.contact);
    this.saveEmployee();
  }

}
