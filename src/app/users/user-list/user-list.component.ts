import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Muser } from 'src/app/shared/models/muser.model';
import { MusersService } from 'src/app/shared/services/musers.service';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {Tablesort}   from 'src/app/shared/models//tablesort';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],

})
export class UserListComponent implements OnInit, AfterViewInit {


user;

  users: Muser[];
  userData;

  //userData = new MatTableDataSource();

  displayedColumns = ['#', 'Name', 'Surname', 'Age', 'Type','Actions']

  searchName = "";


 // @ViewChild(MatSort) sort: MatSort;

  constructor(private musersService: MusersService, private router: Router) {
   
  }

  ngAfterViewInit(): void{

  //this.userData.sort = this.sort;

}
 

 ngOnInit() {
    
 // new Tablesort(document.getElementById('table'));
    this.getData();
  
    new Tablesort(document.getElementById('table'));
 
  }

  async getData() {
    
    try {

      let users = this.musersService.getAll();
      this.users = isNullOrUndefined(await users) ? [] : await users;
      // this.userData = new MatTableDataSource(this.users);
      // this.userData.sort = this.users.sort();

    
      let now = new Date();

      for (let i = 0; i < this.users.length; i++) {

        let x = (this.users[i].years).split("-");

        if ((now.getFullYear() > parseInt(x[0])) && (now.getMonth() + 1 > parseInt(x[1]))) {

          this.users[i].years = (now.getFullYear() - parseInt(x[0])).toString();

        } else if ((now.getFullYear() > parseInt(x[0])) && (now.getMonth() + 1 == parseInt(x[1]))) {

          if (now.getDate() < parseInt(x[2])) {

            this.users[i].years = ((now.getFullYear() - parseInt(x[0])) - 1).toString();

          } else if (now.getDate() > parseInt(x[2])) {

            this.users[i].years = ((now.getFullYear() - parseInt(x[0]))).toString();

          } else if (now.getDate() == parseInt(x[2])) {

            this.users[i].years = ((now.getFullYear() - parseInt(x[0]))).toString();
          }

        } else if ((now.getFullYear() > parseInt(x[0])) && (now.getMonth() + 1 < parseInt(x[1]))) {

          this.users[i].years = ((now.getFullYear() - parseInt(x[0]) - 1)).toString();

        }

      }
    
     
    } catch (err) {
     
      console.error(err);
    
    }


  }



  onLinkProfile(id: number) {
    this.router.navigate([this.router.url, 'profile', id]);
  }

  onAddProfile() {
    this.router.navigate([this.router.url, 'profile']);
  }

  async onDelete(user) {
    try {
      //console.log(user)
      await this.musersService.deleteOneById(user.id);

    } catch (err) {
      console.error(err);
    } finally {
      this.getData();

    }

  }
  // applyFilter(filterValue: string) {
   
  //   this.userData.filter = filterValue.trim().toLowerCase();
  // }




}
