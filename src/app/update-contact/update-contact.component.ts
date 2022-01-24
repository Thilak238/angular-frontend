import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  id!:number;
  contact: Contact = new Contact();
  constructor(private contactService : ContactService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.contactService.getContactById(this.id).subscribe(data => {
      this.contact = data;
    },
    error => console.log(error));
  }

  onSubmit() {
    this.contactService.updateContact(this.id,this.contact).subscribe(data => {
      this.gotoContactList();
    },
    error => console.log(error));
  }
  gotoContactList() {
    this.router.navigate(['/contacts']);
  }
}
