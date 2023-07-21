import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers:[MessageService]
})
export class ContactComponent {
  
  constructor(private fb: FormBuilder,
              private validatorsService: ContactService,
              private messageService: MessageService) { }
  
  public contactForm: FormGroup = this.fb.group({
    name:['',[Validators.required, Validators.minLength(3),Validators.pattern(this.validatorsService.firstNameAndLastNamePattern)]],
    email:['',[Validators.required,Validators.pattern(this.validatorsService.emailPattern)]],
    phone:['',[Validators.required]]
  })

  

  isValidField( field: string ) {
    return this.validatorsService.isValidField( this.contactForm, field );
  }




  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'We will contact you in the next 24 hours' });
  }

  onSubmit() {
    if(this.contactForm.valid){
      this.show();
      this.contactForm.reset();
      return;
    }
    this.contactForm.markAllAsTouched();

    
    
    
  }
}
