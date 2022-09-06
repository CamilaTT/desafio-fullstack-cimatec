import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../auth/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user$ = this.userService.returnUser();

  constructor(private userService: UserService, private router: Router) { }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
}
