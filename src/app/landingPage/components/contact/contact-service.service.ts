import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  public firstNameAndLastNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  public isValidField(form: FormGroup,field: string): boolean | null{
    return form.controls[field].errors && form.controls[field].touched; 
}
}
