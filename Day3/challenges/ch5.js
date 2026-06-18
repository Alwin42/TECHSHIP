const prompt=require("prompt-sync")();

const books = [];

const add = (bookname) => {
    books.push(bookname);
};

const search = (bookname) => {
    
    if (books.includes(bookname)) {
        console.log(`${bookname} is available in the library.`);
    } else {
        console.log(`${bookname} is not found.`);
    }
};

const display = () => {
    if (books.length === 0) {
        console.log("The library is empty.");
    } else {
        console.log("Books in library:", books);
    }
};

const count = () => {
    console.log(`Total number of books: ${books.length}`);
};
while(1){
    const num=prompt("enter a no 1.add 2.search 3.display 4.count 5.exit");
if (num==1){
    const bookname=prompt(`enter bookname`);
    add(bookname)
    console.log(`book-added`);
}
else if(num==2){
    const bookname=prompt(`enter bookname`);
    search(bookname);
}
else if(num==3){
    display();
}
else if(num==4){
    count();
}
else if(num==5){
    break;
}
else{
console.log("give a valid no.");
}}