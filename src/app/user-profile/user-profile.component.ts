import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user!: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const userId = Number(params['id']);
      this.loadUser(userId);
    });
  }

  loadUser(userId: number) {
    this.userService.getUserById(userId).subscribe(
      (user: User) => {
        this.user = user;
      },
      (error) => {
        console.error('Error loading user profile:', error);
      }
    );
  }
}
