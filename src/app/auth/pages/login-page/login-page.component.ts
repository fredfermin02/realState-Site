import { Component, OnInit, Output, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService)
  private router = inject(Router)
  
  public myForm: FormGroup = this.fb.group({
    email:['fred@google.com',[Validators.required, Validators.email]],
    password:['klkmmg123',[Validators.required, Validators.minLength(6)]],
  })


  private _status = false;
  public status = computed(() => this._status) 

  login(){
    const {email,password}=this.myForm.value;
    this.authService.login(email,password)
      .subscribe({
        next: ()=> this.router.navigateByUrl('/home'),
        error: (Message)=>{
          Swal.fire('Error', Message, 'error')
        }
      })
  }


  constructor() { }

  ngOnInit(): void {
  }

}
