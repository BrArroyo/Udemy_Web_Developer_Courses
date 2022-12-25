import { Component, OnInit,EventEmitter, Input, Output  } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-form-first',
  templateUrl: './form-first.component.html',
  styleUrls: ['./form-first.component.css']
})
export class FormFirstComponent {
  status = "Form not submitted"
  defaultName = "Bruno"
  user = ""
  displayPassword = false
  lightStatus = "PEPE"
  names = ["Bruno", "Arroyo", "Pepe", "Pepa"]

  courses = [{}]
  errorMessage = ""

  @Input() parentDataToChild: any

  @Output() childEvent = new EventEmitter();

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    //this.courses = this.courseService.getCourses()
    this.courseService.getCourses().subscribe(data=>this.courses=data,
                                              error=> this.errorMessage = error)
    
  }

  onSendForm(email: any){
    console.log(this.courses)
    console.log(email.value)
    this.status = "Form submitted"
  } 

  onDefaultForm(){
    this.defaultName = "Arroyo"
  }

  onSendEvent(){
    this.childEvent.emit('Enviado evento desde hijo hasta padre')
  }
  
}
