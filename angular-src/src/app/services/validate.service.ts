import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user){
    if(user.name == undefined || user.email == undefined ||
      user.username == undefined || user.password == undefined) {
        return false;
    }
    else {return true;}  
  }

  validateEmail(email){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
  }

  validateDog(dog) {
    console.log(dog);
    if(dog.name == undefined || dog.age == undefined || 
        dog.owner == undefined || dog.caredays == undefined ||
        dog.number == undefined) {
      return false;
    }
    else {return true;}
  }

}
