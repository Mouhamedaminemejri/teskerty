import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 username:string = '';
password:string = '';
  constructor( private authe:AuthentificationService) { }

  ngOnInit(): void {
  }
  getuser(){
    console.log(this.username,this.password)
    this.authe.Login(this.username,this.password)
  }
}
