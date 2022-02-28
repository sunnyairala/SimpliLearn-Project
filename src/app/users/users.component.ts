import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  user = {
    username: '',
    email: '',
    secret: '',
  };

  submitted = false;

  onSubmit(form: NgForm) {
    // console.log(form.value);
    this.user.username = form.value.username;
    this.user.email = form.value.email;
    this.user.secret = form.value.secret;
    this.submitted = true;
    form.reset();
  }
}
