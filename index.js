// Exercise 1 : Users

document.body.children[1].lastElementChild.innerHTML = "Richard";

let ul_list = document.getElementsByClassName('list');
for (let i of ul_list) {
    i.firstElementChild.innerHTML = "Alon";
}

let lists = document.getElementsByTagName('ul');
let list;
for(list of lists){
    let newLi = document.createElement('li');
    let newLiContent = document.createTextNode('Hey Students!');
    newLi.appendChild(newLiContent);
    list.appendChild(newLi);
}

ul_list[1].removeChild(ul_list[1].children[1]);

for (let i of ul_list) {
    i.classList.add("student_list");
}

ul_list[0].classList.add("university", "attendance")



// Exercise 2 : Users And Style

// Change the background color of the div to lightblue and increase its padding
let myDiv = document.getElementsByTagName('div');
myDiv = myDiv[0];

myDiv.style.backgroundColor = 'lightblue';
myDiv.style.padding = '2em';

//Don’t display the first name (John) and give a border to the second name (Pete)
let names = document.getElementsByTagName('li');
let john = names[0];
let pete = names[1];

john.style.display = 'none';
pete.style.border = '2px solid red';

//Change the font size of the whole HTML
document.body.style.fontSize = '30px';

//Check if the background color of the div is lightblue, if yes alert “Hello x and y” (x and y are the users : John and Pete)
if(myDiv.style.backgroundColor == 'lightblue'){
    alert('Hello ' + john.textContent + ' and ' + pete.textContent);
}


// Exercise 3 : Change The Navbar

let nav = document.getElementById('navBar');
nav.setAttribute('id', 'socialNetworkNavigation');

let new_li = document.createElement('li');
let new_text = document.createTextNode('Logout');
new_li.appendChild(new_text);
document.getElementsByTagName('ul')[0].appendChild(new_li);

let first = document.querySelectorAll('li')[0].firstChild.firstChild;
let last = document.getElementsByTagName('ul')[0].lastChild.firstChild;
console.log(first.nodeValue);
console.log(last.nodeValue);



// Exercise 4 : My Book List

let allBooks = [
    {
        title: 'Harry Potter',
        author: 'JK Rowling',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81gvKPsewML._AC_SL1500_.jpg',
        alreadyRead: true
    }, 
    {
        title: 'Inferno',
        author: 'Dan Brown',
        image: 'https://images-na.ssl-images-amazon.com/images/I/915mr+JhBGL.jpg',
        alreadyRead: false
    }

]

let table = document.createElement('table');
for(let index in allBooks){
    let row = document.createElement('tr');

    for(let i=0; i<3; i++){
        let column = document.createElement('td');
        let text;
        let image;
        if(i == 0){
            text = document.createElement('P');
            text.innerHTML = allBooks[index].title;
            if(allBooks[index].alreadyRead == true){

                text.style.color = 'red';
            }
            column.appendChild(text);

        } else if (i == 1){
            text = document.createElement('P');
            text.innerHTML = 'Written by:' + allBooks[index].author;

            if(allBooks[index].alreadyRead == true){
                text.style.color = 'red';
            }
            column.appendChild(text);
        } else {
            image = document.createElement("img");
            image.setAttribute('src', allBooks[index].image);
            image.setAttribute('width', 100);
            column.appendChild(image);

        }
        row.appendChild(column);
        table.appendChild(row);
    }


}
document.body.appendChild(table);
