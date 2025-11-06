import './style.css'

class Fruit {
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
    const fruitCard = document.createElement("div");
    fruitCard.classList.add("fruit-card");
    fruitCard.style.backgroundColor = fruit.color;
    const fruitContainer= document.getElementById("app") as HTMLDivElement;
    const fruitName= document.createElement("h2");
    const fruitColor=document.createElement("p");

    fruitName.textContent=fruit.name;
    fruitColor.textContent=fruit.color;

      fruitContainer.appendChild(fruitCard);
      fruitContainer?.appendChild(fruitName);
      fruitContainer?.appendChild(fruitColor);
    
  });





 





