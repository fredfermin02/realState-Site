import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService)
  private router = inject(Router)
  
  public registrationForm: FormGroup = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required, Validators.minLength(6)]],
    username:['',[Validators.required]]
  })


  register(){
    const {email,username,password}=this.registrationForm.value;
    this.authService.register(email,username,password)
      .subscribe({
        next: ()=> this.router.navigateByUrl('/login'),
        error: (Message)=>{
          Swal.fire('Error', Message, 'error')
        }
      })
  }



  constructor() { }

  ngOnInit(): void {
  }

}
