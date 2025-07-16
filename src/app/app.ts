import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  /*count=0

  handleinc(){
  this.count=this.count+1;
  }
  handledec(){
    this.count=this.count-1;
  }
  handlereset(){
    this.count=0;
  }
   clickdata(event:Event){
    console.log("Button clicked",event.type);
    console.log("Button called", (event.target as Element).className);
    console.log("value",(event.target as HTMLInputElement).value);
  
}*/



//get value
/*name =" "
displayName="";
email = " ";
getname(event: Event){
  const val=(event.target as HTMLInputElement).value;
this.name= val;
  
}
getName(){
  this.displayName=this.name;
}

//set value
setName(){
  this.name="Pooja";
}

getEmail(val :string){
  console.log(val);
  this.email=val;
}
setEmail(){
  this.email = "Pooja@1210";
}

*/



// display = true;
// togglediv= false;
// x=10

// hide(){
//   this.display=false;
// }
// show(){
//   this.display= true;
// }
// toggle(){
//   this.display=!this.display;
// }
// toggle2(){
//   this.togglediv=!this.togglediv;

// }
// color = 2;



// handleColor( val: number){
//   this.color=val;
// }
// handleInput(event:Event){
//   this.color = parseInt((event.target as HTMLInputElement).value);
// }

// color = 'blue'
// handleColor(val:string){
//    this.color= val;
// }

// changecolor(event:Event){
//   this.color=(event.target as HTMLInputElement).value
// }



// users = ['anil','sam','jojo','raj','bruce'];
// students=[
//   { name: 'Pooja', age: 21, city: 'Delhi' },
//   { name: 'Anil', age: 22, city: 'Mumbai' },    
//   { name: 'Sam', age: 23, city: 'Bangalore' },
//   { name: 'Jojo', age: 24, city: 'Chennai' },
//   { name: 'Raj', age: 25, city: 'Kolkata' },
//   { name: 'Bruce', age: 26, city: 'Hyderabad' }
// ]
// getName(val: string) {
//   console.log(val);
//   this.users.push(val); 


// count = signal(10);
// x =20;

// constructor(){
//   effect(()=>{
//     console.log(this.count());
//   })
// }
// updateValue(val :string){
//  //this.count.set (this.count()+1);
//  // this.x=this.x+1;

//  if(val== 'inc'){
//   this.count.set (this.count()+1);
//  }
//  else{
//   this.count.set (this.count()-1);
//  }
// }

//
// data : WritableSignal < string |number> = signal(10);

// //read only 
// count:Signal<number>=computed(()=>10);

// updateSignal(){
// // this.data.set("hello");
// // this.data.update((val))=> val + 1);

// x =signal(10);
// y =signal(20);
// z = computed(() => this.x() + this.y());

// showValue(){
//   console.log("Updated X value is ", this.z);
//   this.x.set(30);
//   console.log("Updated X value is ", this.z());
//   this.y.set(40); 

// }

username =signal("Pooja")
count = signal(0);
display = false

constructor() {
  effect(() => {
    if(this.count()==1){
      this.display = true;
    }else{
      this.display = false; 
    }
  });
}
toggleValue() {

  this.count.set(this.count() + 1);
}
}
