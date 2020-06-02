import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Muser } from 'src/app/shared/models/muser.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { MusersService } from 'src/app/shared/services/musers.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  id: number;
  user: Muser;
  userForm: FormGroup;
  mask = [];
  mask_years = [];
  //emailMask = emailMask;
  //public emailMask = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  constructor(
    private activatedRouter: ActivatedRoute,
    private musersService: MusersService,
    private router: Router
    
  ) {
     this.mask = ['+', /[1-9]/, /[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]
    this.activatedRouter.params.subscribe((param) => {
      this.id = param.id;
    });
  }

  ngOnInit(): void {
    let emailCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let numCheck = /^[+,0-9]+$/;
    this.userForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      years: new FormControl(null, [Validators.required]),
      number: new FormControl(null, [Validators.pattern(numCheck), Validators.required]),
      email: new FormControl(null,[Validators.pattern(emailCheck), Validators.required]),
      patronymic:new FormControl(null,[Validators.required]),
      type: new FormControl(null,[Validators.required])
    });
    this.getData();
  }

  async getData() {
    if (!isNullOrUndefined(this.id)) {
      try {
        let user = this.musersService.getOneById(this.id);
        this.user = await user;
      } catch (err) {
        console.error(err);
      }
      this.userForm.patchValue({
        name: this.user.name,
        surname: this.user.surname,
        years: this.user.years,
        type:this.user.type,
        email:this.user.email,
        patronymic:this.user.patronymic,
        number:this.user.number,
      });
    }
  }

  async onSave() {
    if (!isNullOrUndefined(this.id)) {
      try {
        await this.musersService.putOneById(this.id, this.userForm.value);
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        let res = await this.musersService.postOne(this.userForm.value);
        this.router.navigate([this.router.url, res.id]);
        this.getData();
      } catch (err) {
        console.error(err);
      }
    }
  }
  async onDelete() {
    try {
      //console.log(user)
      await this.musersService.deleteOneById(this.user.id);

    } catch (err) {
      console.error(err);
    }finally{
      this.getData();
    }
  
  }

 
}
