import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { GameUserService } from '../service/game-user.service';
import { User } from '../service/User';
import { LoginRequest } from '../service/LoginRequest';

@Component({
  selector: 'app-game-sign-in',
  templateUrl: './game-sign-in.component.html',
  styleUrl: './game-sign-in.component.scss'
})
export class GameSignInComponent implements OnInit{
  loginError: string = '';
  loginForm = this.formBuilder.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required]]
  })

  constructor(private formBuilder: FormBuilder, 
              private router: Router, 
              private loginService: GameUserService){

  }
  ngOnInit(): void {
    
  }
  get email(){
    return this.loginForm.controls.email;
  }
  get password(){
    return this.loginForm.controls.password;
  }

  login():void{
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (userData) =>{
          console.log(userData);
        },
        error: (errorData) =>{
          console.error(errorData);
        this.loginError = errorData;
        },
        complete: () =>{
          console.info("Login completado");
          this.router.navigateByUrl('/games');
          this.loginForm.reset();
        }

      });
      
    }else{
      this.loginForm.markAllAsTouched();
      this.loginError = "todos los campos son requeridos";
      
    }
  }

}
