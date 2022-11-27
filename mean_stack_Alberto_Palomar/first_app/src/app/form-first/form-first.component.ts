import { Component  } from '@angular/core';

@Component({
  selector: 'app-form-first',
  templateUrl: './form-first.component.html',
  styleUrls: ['./form-first.component.css']
})
export class FormFirstComponent {
  status = "Form not submitted"
  defaultName = "Bruno"
  user = ""

  constructor() { }

  onSendForm(email: any){
    console.log(email.value)
    this.status = "Form submitted"
  } 

  onDefaultForm(){
    this.defaultName = "Arroyo"
  }
  
}
