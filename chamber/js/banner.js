let date = new Date();

const banner = document.getElementById("banner");

if (date.getDay() === 1 || date.getDay() === 2){
    banner.style.display = "block";
} 
else {
    banner.style.display = "none"
}
const close = document.querySelector("#close")
close.addEventListener("click" , () => {
    banner.style.display = "none";
});
