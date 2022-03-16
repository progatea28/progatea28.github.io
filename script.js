/* +-----------------------+ */
/* |     Awal Bagian 1     | */
/* +-----------------------+ */

const textLoading = document.getElementById('text-loading');
const text = "A28";
let i = 1;
let maju = true;
const load = setInterval(()=>{
    if (i == 3){
        maju = false;
    }else if (i == 0){
        maju = true;
    }
    textLoading.innerHTML = text.substr(0, i);
    if (maju){
        i++;
    }else {
        i--;
    }
}, 250);

var navWrapper = document.getElementById("mobile-nav");
var btns = navWrapper.getElementsByClassName("nav-item");
for (var j = 0; j < btns.length; j++) {
    btns[j].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
}

window.onscroll = ()=> {
    headerEffect();
};

function headerEffect() {
    const header = document.getElementById('header');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.style.boxShadow = '0px 2px 15px rgb(18 66 101 / 8%)';
        header.style.borderColor = '#FFF';
    }else {
        header.style.borderColor = '#e6f2fb';
        header.style.boxShadow = 'none';
    }
}

const navShow = document.getElementById('mobile-nav');
const toggleNav = document.getElementById('toggle-nav');
toggleNav.addEventListener('click', ()=>{
    navShow.classList.toggle('nav-mobile');
    if (navShow.classList.contains('nav-mobile')){
        toggleNav.classList.remove('bx-menu');
        toggleNav.classList.add('bx-x');
    }else {
        toggleNav.classList.remove('bx-x');
        toggleNav.classList.add('bx-menu');
    }
})


/* +-----------------------+ */
/* |    Akhir Bagian 1     | */
/* +-----------------------+ */




/* +-----------------------+ */
/* |     Awal Bagian 2     | */
/* +-----------------------+ */


/* +-----------------------+ */
/* |    Akhir Bagian 2     | */
/* +-----------------------+ */



/* +-----------------------+ */
/* |     Awal Bagian 3     | */
/* +-----------------------+ */


/* +-----------------------+ */
/* |    Akhir Bagian 3     | */
/* +-----------------------+ */



/* +-----------------------+ */
/* |     Awal Bagian 4     | */
/* +-----------------------+ */


/* +-----------------------+ */
/* |    Akhir Bagian 4     | */
/* +-----------------------+ */



/* +-----------------------+ */
/* |     Awal Bagian 5     | */
/* +-----------------------+ */


/* +-----------------------+ */
/* |    Akhir Bagian 5     | */
/* +-----------------------+ */
