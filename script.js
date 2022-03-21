/* +-----------------------+ */
/* |     Awal Bagian 1     | */
/* +-----------------------+ */

// Variable
const counts = document.getElementById('counts');
const precounter = counts.querySelectorAll('.precounter');
let dataPrecounter = {
    start: [],
    end: [],
    conditions: [],
};
for(let counter = 0; counter < precounter.length; counter++){
    let valueStart = precounter[counter].getAttribute("data-precounter-start");
    let valueEnd = precounter[counter].getAttribute("data-precounter-end");
    let condition = precounter[counter].getAttribute("precounter");
    dataPrecounter.start.push(valueStart);
    dataPrecounter.end.push(valueEnd);
    dataPrecounter.conditions.push(condition);
}
const navShow = document.getElementById('mobile-nav');
const toggleNav = document.getElementById('toggle-nav');
const navLink = document.querySelectorAll('.nav-link');
const textLoading = document.getElementById('text-loading');
const btnToTop = document.getElementById('button-totop');
const text = "A28";



// Event Listener

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

window.onscroll = ()=> {
    headerEffect();
    document.getElementById('help').innerHTML = document.documentElement.scrollTop;
    countsEffect();
    if (window.innerWidth > 992){
        if (document.body.scrollTop > 5821 || document.documentElement.scrollTop > 5821) {
            navbarEffectDesktop(navLink[7]);
        }else if (document.body.scrollTop > 5120 || document.documentElement.scrollTop > 5120) {
            navbarEffectDesktop(navLink[6]);
        }else if (document.body.scrollTop > 3945 || document.documentElement.scrollTop > 3945) {
            navbarEffectDesktop(navLink[5]);
        }else if (document.body.scrollTop > 2501 || document.documentElement.scrollTop > 2501) {
            navbarEffectDesktop(navLink[4]);
        }else if (document.body.scrollTop > 1624 || document.documentElement.scrollTop > 1624) {
            navbarEffectDesktop(navLink[3]);
        }else if (document.body.scrollTop > 919 || document.documentElement.scrollTop > 919) {
            navbarEffectDesktop(navLink[2]);
        }else {
            navbarEffectDesktop(navLink[1]);
        }
    }
};

toggleNav.addEventListener('click', ()=>{
    navShow.classList.toggle('nav-mobile');
    if (navShow.classList.contains('nav-mobile')){
        changeIconNavMobile('active');
    }else {
        changeIconNavMobile('inactive');
    }
})

for (let link = 0; link < navLink.length; link++) {
    navLink[link].addEventListener("click", function() {
        var current = navShow.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        if (window.innerWidth < 992){
            navShow.classList.remove('nav-mobile');
            changeIconNavMobile('inactive');
        }
    });
}

// Function Navbar

function headerEffect() {
    const header = document.getElementById('header');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.style.boxShadow = '0px 2px 15px rgba(18, 66, 101, .2)';
        header.style.borderColor = '#FFF';
        btnToTop.style.display = 'block';
    }else {
        header.style.borderColor = '#e6f2fb';
        header.style.boxShadow = 'none';
        btnToTop.style.display = 'none';
        btnToTop.style.animationName = 'none';
    }
}

function scrollToTop(){
    btnToTop.style.animationName = 'melayangKeAtas';
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function changeIconNavMobile(arg){
    if (arg == 'active'){
        toggleNav.classList.remove('bx-menu');
        toggleNav.classList.add('bx-x');
    }else if (arg == 'inactive') {
        toggleNav.classList.remove('bx-x');
        toggleNav.classList.add('bx-menu');
    }
}

function countsEffect(){
    
    if (window.innerWidth > 992){
        subCountEffect(725);
    }else if (window.innerWidth < 992){
        subCountEffect(1050);
    }else if (window.innerWidth < 576){
        subCountEffect(1750);
    }
}

function subCountEffect(width){
    if (document.documentElement.scrollTop > width && !dataPrecounter.conditions.includes('false')){
        for (let z = 0; z < precounter.length; z++){
            let angka = dataPrecounter.start[z];
            setInterval(()=>{
                precounter[z].innerHTML = angka;
                if (angka == dataPrecounter.end[z]){
                    clearInterval();
                }else{
                    angka++;
                }
            }, 75);
            dataPrecounter.conditions[z] = 'false';
        }
    }
}

function navbarEffectDesktop(nav){
    for (let link = 0; link < navLink.length; link++) {
        var current = navShow.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        nav.className += " active";
    }
}

    
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
