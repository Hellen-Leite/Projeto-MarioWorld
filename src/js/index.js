const botaoTrailer= document.querySelector(".botao")
const modal= document.querySelector(".modal")
const fecharModal= document.querySelector(".fechar-modal")
const video= document.getElementById("video")
const linkDoVideo= video.src

function alternarModal(){
    modal.classList.toggle("aberto")
}

botaoTrailer.addEventListener("click", ()=>{
    alternarModal()
    video.setAttribute("src", linkDoVideo)

})


fecharModal.addEventListener("click",()=>{
    alternarModal()
    video.setAttribute("src","")
})