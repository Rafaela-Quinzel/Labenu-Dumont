//EXERCÍCIOS:
const pressButton = () => {

    const titleField =  document.getElementById("title-post")
    const authorField = document.getElementById("author-post")   //---> exercício 2
    const contentField = document.getElementById("content-post")
    const imageField = document.getElementById("image-post")


    const post = {
        title: titleField.value,
        author: authorField.value,
        content: contentField.value,
        image: imageField.value
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
        container.innerHTML += `<img class="img" src="${imageField.value}">`


    //---> DESAFIO 1 - adicionar imagem
    if(imageField.value.includes("http")){
        imageField.value = ""  
    } else{
        window.alert("Favor inserir o link da imagem.")
    }

}

//---> DESAFIO 2 - Está no arquivo responsive.css











