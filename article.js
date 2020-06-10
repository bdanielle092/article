const section = document.querySelector(".article__header")
console.log(section)
section.textContent = "Welcome to Faith's blog"
console.log(section,"test2")

const newClassList = document.querySelectorAll(".article__header")
console.log(newClassList)
for( let i = 0; i < newClassList.length; i++){
        newClassList[i].classList.add("important");    
}
console.log(newClassList, "test3")

const footer = document.querySelector(".article__footer")
console.log(footer)
footer.classList.add("goldenrod")
console.log(footer, "test4")

const aside = document.querySelectorAll(".dashed")
console.log(aside)
// aside.dashed.remove("dashed")
// console.log(aside, "test5")




 