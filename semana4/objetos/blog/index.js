//EXERCÍCIOS:
const pressButton = () => {

const titleField =  document.getElementById("title-post")
const authorField = document.getElementById("author-post")   //---> exercício 2
const contentField = document.getElementById("content-post")

const post = {
    title: titleField.value,
    author: authorField.value,
    content: contentField.value
}

let arrayObjects = []  
arrayObjects.push(post)  //---> exercício 3
console.log(arrayObjects)

titleField.value = ""
authorField.value = ""
contentField.value = ""

const container = document.getElementById('container-de-posts') 
container.innerHTML += "<h1>" + post.title + "</h1>" //---> exercício 4 e 5
container.innerHTML += "<h3>" + post.author + "</h3>"
container.innerHTML += "<p>" + post.content + "</p>"
    
}






