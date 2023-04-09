import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 7 first project';
  // declared array of months.
  todaydate=new Date();

  jsonval={name:'Rox',age:'25',address:{a1:'Mumbai',a2:'Karnataka'}};

  months = ["January", "February", "March", "April", "May",
    "June", "July", "August", "September",
    "October", "November", "December"];
    
  isavailable = false; //variable is set to true

  myClickFunction() {
    //just added console.log which will display the event details in browser on 
    //click of the button.
    this.isavailable=!this.isavailable;//variable toggle false true
    alert("Button is clicked");
    console.log();
  }

  changemonths(){
    console.log("Changed month from the dropdown");
    alert("kisi ne month change kia")
    console.log();
  }


}



// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'my-dream-app......';
//   //declaring array of months.

//   months=["January","March","May","June","July",
//   "September","Decemeber"];
//   isavailable=false;

//   myEventFunctionv(event){
//     alert("Button is clicked");
//     console.log(event);
//   }
// }
