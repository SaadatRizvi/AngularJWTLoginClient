import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {User} from './user.model';
import {UserService} from '../app.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns = ['Username', 'Roles', 'email', 'active', 'name'];
  dataSource = new MatTableDataSource();
  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    console.log('In ngOnInit start');
    this.userService.getUsers().subscribe(
      data => {
        console.log('In ngOnInit mid');

        console.log(data);
        this.dataSource.data = data;
      }
    );
  }
}
