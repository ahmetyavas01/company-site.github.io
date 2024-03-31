window.addEventListener("DOMContentLoaded", event => {
    var navbarMobile=function(){
        const nCollapsible=document.body.querySelector("#mainNavbar");
        if(!nCollapsible){
            return;
        }
        if(window.scrollY === 0){
            nCollapsible.classList.remove("navbar-mobile");
        }else{
            nCollapsible.classList.add("navbar-mobile");
        }
    };
    navbarMobile();
    document.addEventListener("scroll",navbarMobile);
    const myNavbar=document.body.querySelector("#mainNavbar");
    if(myNavbar){
        new bootstrap.ScrollSpy(document.body,{
            target:"#mainNavbar",
            offset:74,
        });
    }
});

    document.addEventListener("DOMContentLoaded", function () {
        const navbarToggler = document.querySelector(".navbar-toggler");
        const offcanvas = document.querySelector(".offcanvas");
        const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

        // Hamburger menüyü açma/kapatma
        navbarToggler.addEventListener("click", function () {
            offcanvas.classList.toggle("show");
        });

        // Menü öğelerine tıklama olayını dinleme
        navLinks.forEach(function (navLink) {
            navLink.addEventListener("click", function () {
                offcanvas.classList.remove("show");
            });
        });
    });
    document.addEventListener("DOMContentLoaded", function() {
        const imgElements = document.querySelectorAll("img");
    
        function handleImgAnimation() {
            imgElements.forEach(img => {
                if (isElementInViewport(img)) {
                    img.classList.add("img-visible");
                }
            });
        }
    
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
    
        window.addEventListener("scroll", handleImgAnimation);
        handleImgAnimation(); // Initial check
    });
    
