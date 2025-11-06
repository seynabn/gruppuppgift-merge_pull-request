import './style.css'

class Fruit {
  fruit:string;
  color: string;

 
constructor(fruit:string, colors:string){
  this.fruit=fruit;
  this.color= colors;
}};

  const fruits:Fruit[]=[
  new Fruit("Äpple","green"),
  new Fruit("Hallon","red"),
  new Fruit("Apelsin","orange"),
  new Fruit("citron","yellow")
  ];


  






 






const animalName = document.getElementById('animals') as HTMLDivElement;

const randomName = document.getElementById('para') as HTMLDivElement;

animalName.innerHTML = "Lion";

randomName.innerHTML = "Random text";

