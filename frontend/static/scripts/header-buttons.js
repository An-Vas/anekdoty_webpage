window.addEventListener("load",function(event) {
    showButtons();
});


async function showButtons(){
    const user = await isUser();
    const forNotUser = document.getElementById('for-not-authorized');
    const forUser= document.getElementById('for-authorized');

    if (user){
        forUser.style.visibility='visible'
        forNotUser.style.visibility='hidden'
    } else {
        forNotUser.style.visibility='visible'
        forUser.style.visibility='hidden'
    }
}