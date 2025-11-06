import './style.css'

const animalName = document.getElementById('animals') as HTMLDivElement | null;
const randomName = document.getElementById('para') as HTMLDivElement | null;

if (animalName && randomName) {
  const randomParagraph = document.createElement('p');
  randomParagraph.textContent = "Random";

  animalName.textContent = "Lion: ";
  animalName.appendChild(randomParagraph);

  randomName.textContent = "Random text";
}



