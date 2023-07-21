import {CanActivateFn, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interface';

// Est gurad deja pasar al usuario si esta identificado si no pues no lo deja pasar.
export const isNotAuthenticatedGuard: CanActivateFn = (route, state)=>{
    
    //Direccion a donde se quiere dirigir
    // const url = state.url;
    // localStorage.setItem('url', url)
    
    const authService = inject(AuthService);
    const router = inject(Router);

   if(authService.authStatus() === AuthStatus.authenticated) {
    router.navigateByUrl('/dashboard')
    return false;
   }
    
    
    return true;
};