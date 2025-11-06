import './style.css'

class Fruit {
  fruit:string;
  color: string;

 
constructor(fruit:string, color:string){
  this.fruit=fruit;
  this.color= color;
}};

  const fruits:Fruit[]=[
  new Fruit("Äpple","green"),
  new Fruit("Hallon","red"),
  new Fruit("Apelsin","orange"),
  new Fruit("citron","yellow")
  ]; 


  






 





const fruitContainer= document.getElementById("app") as HTMLDivElement;
