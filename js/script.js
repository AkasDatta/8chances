let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = Math.cell(Math.random() * 3600);

spinBtn.onclick = function(){
    wheel.style.transform = "rotate(" + value + "deg)";
    value += Math.cell(Math.random)
}