const data = [
{letter:"A", word:"Apple", image:"image/Apple.jpg"},
{letter:"B", word:"Banana", image:"image/Banana.jpg"},
{letter:"C", word:"Cat", image:"image/Cat.jpg"},
{letter:"D", word:"Dog", image:"image/Dog.jpg"},
{letter:"E", word:"Egg", image:"image/Egg.jpg"},
{letter:"F", word:"Fish", image:"image/Fish.jpg"},
{letter:"G", word:"Gems", image:"image/Gems.jpg"},
{letter:"H", word:"Hen", image:"image/Hen.jpg"},
{letter:"I", word:"Ice Cream", image:"image/Ice Cream.jpg"},
{letter:"J", word:"Jar", image:"image/Jar.jpg"},
{letter:"K", word:"Knife", image:"image/Knife.jpg"},
{letter:"L", word:"Lemon", image:"image/Lemon.jpg"},
{letter:"M", word:"Mango", image:"image/Mango.jpg"},
{letter:"N", word:"Nuts", image:"image/Nuts.jpg"},
{letter:"O", word:"Orange", image:"image/Orange.jpg"},
{letter:"P", word:"Pencil", image:"image/Pencil.jpg"},
{letter:"Q", word:"Queen", image:"image/Queen.png"},
{letter:"R", word:"Road", image:"image/Road.jpg"},
{letter:"S", word:"Sun", image:"image/Sun.jpg"},
{letter:"T", word:"Tea", image:"image/Tea.jpg"},
{letter:"U", word:"Umbrella", image:"image/Umbrella.jpg"},
{letter:"V", word:"Van", image:"image/Van.png"},
{letter:"W", word:"Watch", image:"image/Watch.jpg"},
{letter:"X", word:"X-ray", image:"image/X-ray.jpg"},
{letter:"Y", word:"Yak", image:"image/Yak.jpg"},
{letter:"Z", word:"Zebra", image:"image/Zebra.jpg"}
];

let i = 0;

function nextLetter(){
i = (i + 1) % data.length;

document.getElementById("letter").innerText = data[i].letter;
document.getElementById("word").innerText = data[i].word;
document.getElementById("image").src = data[i].image;
}