import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private frauth :AngularFireAuth,) { }
    Login(username:any , password:any ){
    this.frauth.signInWithEmailAndPassword(username,password).then( ()=>{
    localStorage.setItem('token','true');
    console.log('work')
    },err =>{
alert('Login failed');
    }
    )
  }

}
