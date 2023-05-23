import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { ValidateService } from 'app/services/validate.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dogs: Object;
  name: String;
  age: String;
  owner: String;
  caredays: String;
  number: String;

  newname: String;
  newowner: String;

  rname: String;
  rage: String;
  rowner: String;
  rcaredays: String;
  rnumber: String;

  constructor(private validateService: ValidateService,
              private flashMessage: FlashMessagesService,
              private authService: AuthService,
              private router:Router
    ) {}


  ngOnInit() {
  }

  onRegisterDogSubmit() {
    const dog = {
      name: this.name,
      age: this.age,
      owner: this.owner,
      caredays: this.caredays,
      number: this.number

    }

    if(!this.validateService.validateDog(dog)){
      this.flashMessage.show('please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    this.authService.registerDog(dog).subscribe(data => {
      if(data.success){
        this.flashMessage.show('The dog has been registered', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/dashboard']);
      }
      else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/dashboard']);
      }
    });

  }
  onSearchSubmit() {
    const dog = {
      name: this.newname,
      owner: this.newowner
    }

    this.authService.getDog(dog).subscribe(data => {
      if(data.name == undefined) {
        this.flashMessage.show('No dog found', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/dashboard']);
      }
      else {
        this.rname = data.name;
        this.rage = data.age;
        this.rowner = data.owner;
        this.rcaredays = data.caredays;
        this.rnumber = data.number;
      }
    })


  }
}

