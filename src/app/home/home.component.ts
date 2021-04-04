import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //TODO: user null olabilir diye ünlem ekledim

  user!: firebase.default.User;

  constructor(private auth: AuthService, 
    private router: Router) { }

  ngOnInit() {
    this.auth.getUserState()
      .subscribe( user => {
        //TODO: user null olabilir diye ünlem ekledim
        this.user = user!;
      })
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.auth.logout();
  }

  register() {
    this.router.navigate(['/register']);
  }

  openPage(pageName: any){
    this.router.navigate([pageName]);
  }
}