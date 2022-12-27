// the description retrieval
const Str:String = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus totam omnis unde voluptatem? Saepe enim illum ab. Delectus, quaerat veritatis.";
let doc:String = "";

for (let i = 0; i < Str.length; i++) {
    if (i == 79) {
        doc += "<strong> ...</strong>";
        break;
    }
    doc += Str[i];
}

const y = document.querySelectorAll(".cook-desc");
y.forEach((value) => value.innerHTML = `${doc}`);

// onclick the nav-bar
const bgLayout = document.querySelector(".bg-layout")!  as HTMLDivElement;
const navBtn = document.querySelectorAll(".nav-btn")!;
const section = document.querySelector("section")! as HTMLElement;
const menuList = document.querySelector(".nav-menuList")!;
const btnt = document.querySelector(".first-btnNav")! as HTMLDivElement;
const btnt2 = document.querySelector(".second-btnNav")! as HTMLDivElement;
const btnMenu = document.querySelector(".nav-btn-menu")! as HTMLDivElement;
const headerHead = document.querySelector(".header-head")! as HTMLDivElement;
const bookingNow = document.querySelector(".booking-now")! as HTMLDivElement;
let samp:number = 0;

// if (window.scrollY >= 10) {
//     headerStyle();
// }
// function headerStyle() {
//     if (window.scrollY >= 10) {
//         headerHead.style.backgroundColor = "#fff";
//         headerHead.style.boxShadow = "0px 1px 2px 2px rgba(0, 0, 0, 0.44)";
//         headerHead.style.height = "7em";
//         bookingNow.style.backgroundColor = "#fcaf3d";
//         return;
//     }
//     headerHead.style.backgroundColor = "transparent";
//     headerHead.style.boxShadow = "none";
//     headerHead.style.height = "auto";
//     bookingNow.style.backgroundColor = "#ffffff";
// }
window.addEventListener("scroll", ()=> {
    // header sticky styling
    if (window.scrollY >= 10) {
        headerHead.style.backgroundColor = "#ffffff";
        headerHead.style.boxShadow = "0px 1px 5px rgba(0, 0, 0, 0.44)";
        // headerHead.style.boxShadow = "0px 1px 2px 2px rgba(0, 0, 0, 0.44)";
        headerHead.style.height = "7em";
        bookingNow.style.backgroundColor = "#fcaf3d";
        return;
    }
    headerHead.style.backgroundColor = "transparent";
    headerHead.style.boxShadow = "none";
    headerHead.style.height = "auto";
    bookingNow.style.backgroundColor = "#ffffff";

})
navBtn.forEach((element) => {
    element.addEventListener("click", btnClicks);
});

function btnClicks() {
    if (samp == 0) {
        window.addEventListener("scroll", () => {
            btnt.classList.add("fixRelBtn");
            btnt2.classList.add("fixRelBtn");
            if (window.scrollY >= 40) {
                btnMenu.style.position = "fixed";
            } else if (window.scrollY < 40) {
                btnMenu.style.position = "relative";
            }
        });
        setTimeout(() => {
            console.log(navBtn[samp]);
            console.log(samp);
            bgLayout.style.display = "flex";
            section.style.zIndex = "1";
            samp += 1;
        }, 300);
        return;
    }
    // cancellation of bgLayout
    console.log(navBtn[samp]);
    console.log(samp);
    bgLayout.style.display = "none";
    section.style.zIndex = "2";
    samp -= 1;
}

bgLayout.addEventListener("click", () => {
    bgLayout.style.display = "none";
    samp = 0;
    return;
});

const contactsCont = document.querySelector(".contacts-container")! as HTMLDivElement;
const contentCont = document.querySelector(".content-container")! as HTMLDivElement;
const contactPull = document.querySelector(".contact-pull")! as HTMLDivElement;
const contactPullAlias = document.querySelector(".contact-pullAlias")! as HTMLDivElement;
const contactPush = document.querySelector(".contact-push")! as HTMLDivElement;
const contactPushAlias = document.querySelector(".contact-pushAlias")! as HTMLDivElement;
const pushBtn = document.querySelector(".push-svg")! as HTMLDivElement;

function disappear(num:number) {
    if (window.innerWidth > 666) {
        if (num == 0) {
            if (contactsCont.scrollLeft >= 120) {
                contactPush.style.display = "none";
            } else {
                contactPush.style.display = "flex";
            }
        }
        contentCont.scrollLeft >= 120 ? contactPushAlias.style.display = "none" : contactPushAlias.style.display = "flex";
    } else if (window.innerWidth > 480 && window.innerWidth <= 666) {
        if (num == 0) {
            if (contactsCont.scrollLeft >= 170) {
                contactPush.style.display = "none";
            } else {
                contactPush.style.display = "flex";
            }
        }
        contentCont.scrollLeft >= 170 ? contactPushAlias.style.display = "none" : contactPushAlias.style.display = "flex";
    } else if (window.innerWidth > 280 && window.innerWidth <= 480) {
        if (num == 0) {
            if (contactsCont.scrollLeft >= 150) {
                contactPush.style.display = "none";
            } else {
                contactPush.style.display = "flex";
            }
        }
        contentCont.scrollLeft >= 150 ? contactPushAlias.style.display = "none" : contactPushAlias.style.display = "flex";
    } else if (window.innerWidth <= 280) {
        if (num == 0) {
            if (contactsCont.scrollLeft >= 320) {
                contactPush.style.display = "none";
            } else {
                contactPush.style.display = "flex"
            }
        }
        contentCont.scrollLeft >= 320 ? contactPushAlias.style.display = "none" : contactPushAlias.style.display = "flex";
    }
}
function scrollL(...arg:number[]) {
    if (window.innerWidth > 666) {
        arg[0] != 0 ? contentCont.scrollBy(-30, 0) : contactsCont.scrollBy(-30, 0);
    } else if (window.innerWidth > 480 && window.innerWidth <= 666) {
        arg[0] != 0 ? contentCont.scrollBy(-20, 0) : contactsCont.scrollBy(-20, 0);
    } else if (window.innerWidth > 280 && window.innerWidth <= 480) {
        arg[0] != 0 ? contentCont.scrollBy(-30, 0) : contactsCont.scrollBy(-30, 0);
    } else if (window.innerWidth <= 280) {
        arg[0] != 0 ? contentCont.scrollBy(-50, 0) : contactsCont.scrollBy(-50, 0);
    }
}
function scrollr(...arg:number[]) {
    if (window.innerWidth > 666) {
        if (arg[0] != 0) {
            contentCont.scrollBy(30, 0);
            console.log(contentCont.scrollLeft);
            disappear(1);
        } else {
            contactsCont.scrollBy(30, 0);
            disappear(0);
        }
    } else if (window.innerWidth > 480 && window.innerWidth <= 666) {
        if (arg[0] != 0) {
            contentCont.scrollBy(20, 0);
            disappear(1);
        } else {
            contactsCont.scrollBy(20, 0);
            disappear(0);
        }
    } else if (window.innerWidth > 280 && window.innerWidth <= 480) {
        if (arg[0] != 0) {
            contentCont.scrollBy(30, 0);
            disappear(1);
        } else {
            contactsCont.scrollBy(30, 0);
            disappear(0);
        }
    } else if (window.innerWidth <= 280) {
        if (arg[0] != 0) {
            contentCont.scrollBy(50, 0);
            disappear(1);
        } else {
            contactsCont.scrollBy(50, 0);
            disappear(0);            
        }
    }
}

if (window.innerWidth <= 280) {
    contactsCont.scrollTo(30, 0);
    contentCont.scrollTo(30, 0);
}

window.addEventListener("resize", () => {
    scrollL;
    scrollr;
});

contactsCont.addEventListener("scroll", () => { 
     if (contactsCont.scrollLeft >= 50) {
        contactPull.style.display = "flex";
    } else {
        contactPull.style.display = "none";
    }
    disappear(0);
});
contentCont.addEventListener("scroll", () => { 
     if (contentCont.scrollLeft >= 50) {
        contactPullAlias.style.display = "flex";
    } else {
        contactPullAlias.style.display = "none";
    }
    disappear(1);
});




// window.onscroll = scrollFunct;
//         function scrollFunct() {
//             if (document.body.scrollTop > 3 || document.documentElement.scrollTop > 3) {
//                 console.log("hello");
//                 // } else {
//             //     document.getElementById('scrollin').style.display = 'none';
//             // }
//             }
//         }
        // function scrol() {
        //     let inter = setInterval(scroll, 7);
        //     function scroll() {
        //         if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
        //             document.body.scrollTop -= 30;
        //             document.documentElement.scrollTop -= 30;
        //         } else {
        //             clearInterval(inter);
        //         }
        //     }
        // }