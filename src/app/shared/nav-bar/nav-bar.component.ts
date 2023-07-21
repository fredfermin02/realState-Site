import { Component, OnInit, computed, inject } from '@angular/core';
import { AuthStatus } from 'src/app/auth/interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User } from '../../auth/interface/register-responce.interface';



@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToComponent(componentId: string): void {
    const element = document.getElementById(componentId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
  private authService = inject(AuthService);
  public authStatus = computed(()=>this.authService.authStatus());
  public User = computed(()=>this.authService.currenUser()?.name);
  isAuthenticated = AuthStatus.authenticated;

  onLogout(){
    this.authService.logout();
    console.log(this.authService.authStatus())
  }
  

}
