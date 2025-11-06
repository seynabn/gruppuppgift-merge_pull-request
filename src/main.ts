import './style.css'


class Fruit{
  name:string;
  color: string;

 

constructor(name:string, color:string){
  this.name=name;
  this.color= color;
}};

  const fruit:Fruit[]=[
  new Fruit("Äpple","green"),
  new Fruit("Hallon","red"),
  new Fruit("Apelsin","orange"),
  new Fruit("citron","yellow")
  ];

  


  
  fruit.forEach(fruit => {
    const fruitContainer= document.getElementById("app") as HTMLDivElement;
    const fruitName= document.createElement("h2");
    const fruitColor=document.createElement("p");

    fruitName.textContent=fruit.name;
    fruitColor.textContent=fruit.color;

    fruitContainer?.appendChild(fruitName);
     fruitContainer?.appendChild(fruitName);
    
  });





 






const animalName = document.getElementById('animals') as HTMLDivElement;

const randomName = document.getElementById('para') as HTMLDivElement;

const randomShit = document.createElement('random') as HTMLParagraphElement;

if(animalName) {
  animalName.appendChild(randomShit);
}

randomShit.innerHTML = "Random";

animalName.innerHTML = "Lion";

randomName.innerHTML = "Random text";


