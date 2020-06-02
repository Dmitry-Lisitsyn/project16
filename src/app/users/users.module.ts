import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { TextMaskModule } from 'angular2-text-mask';
import { BrowserModule } from '@angular/platform-browser';
import { MyfilterPipe } from '../shared/pipes/myfilter.pipe';
import {MatTableModule} from '@angular/material/table'
import{ MatSortModule} from '@angular/material/sort';
@NgModule({
  declarations: [UsersComponent, UserEditComponent, UserListComponent, MyfilterPipe],
  imports: [CommonModule, UsersRoutingModule, ReactiveFormsModule, TextMaskModule, FormsModule,MatTableModule,MatSortModule],
})
export class UsersModule {}
