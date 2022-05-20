let d = new Date();

const banner = document.getElementById("banner");
if (d.getDay() === 1 || d === 2){
    banner.style.display = "block";
} else {
    banner.style.display = "none"
}
const close = document.querySelector("#close")
close.addEventListener("click" , () => {
    banner.style.display = "none";
});
