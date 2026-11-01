import { Component, inject, isWritableSignal, Signal, signal } from '@angular/core';
import { UserServise } from '../../servises/user';
import { Router } from '@angular/router';
import { Form, FormsModule } from '@angular/forms';
import { form, FormField, minLength, required, FormRoot } from '@angular/forms/signals';

@Component({
  imports: [FormField, FormRoot],
  selector: 'app-login-page',
  styleUrl: './login-page.scss',
  templateUrl: './login-page.html',
})
export class LoginPage {
  usersevise = inject(UserServise)
  router = inject(Router)
  check(){
    const result= this.usersevise.singin(this.model().username, this.model().pasword)
    if(result) {
      this.router.navigateByUrl('panel')
    }
    else{
      this.message='Invalid username and password'
    }
  }
  message=''
  model = signal<Model>({
    username: '',
    pasword: '',
    keepMe: false
  })
  modelForm = form(this.model,(d)=>{
    required(d.username,{message:'Username is required'})
    minLength(d.username,3,{message:'Username minimum length is 3 letter'})
    required(d.pasword,{message:'Password is required'})
    minLength(d.pasword,4,{message:'Password minimum length is 4 letter'})
  }
  )
}
export interface Model {
  username: string
  pasword: string
  keepMe: boolean

}


