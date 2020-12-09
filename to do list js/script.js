let addToDoButton =document.getElementById("addToDo");
let container =document.getElementById("toContainer");
let inputField = document.getElementById("inputField");

addToDoButton.addEventListener("click",function(){
    var paragraph = document.createElement("p"); // burada yeni bir p tag oluşturuluyor ama eklemesei aşağıda yapılacak
    paragraph.classList.add('paragraph-styling'); // css ile oluşturduğumuz boş değerlerin ataması .class adı ile  
    paragraph.innerText = inputField.value ; // burada input içine yazılan deperin aşağıda çıktısı olabilmesi için 
    toContainer.appendChild(paragraph); // burada baştaki toContainer tagı içine eklenecek değişken(paragragh) appendChild formulü ile eklendi 
    // içeriğe yazı yazana kadar eklenmiyor p tagı 
    inputField.value = ""
    paragraph.addEventListener("click",function(){
        paragraph.style.textDecoration = "line-through";
    });
    paragraph.addEventListener("dblclick",function(){
        toContainer.removeChild(paragraph);
    })
})
