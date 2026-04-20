document.addEventListener("DOMContentLoaded", function(){

    setActiveNav();

});

    function setActiveNav(){
        const current = window.location.pathname.split("/").pop() || "index.html";
        const links = document.querySelectorAll(".bottom-nav-link");
        links.forEach(function (link){
        const href = link.getAttribute("href");

        if (!href) return;
        if (href === current){

            link.classList.add("active");

        }else{

            link.classList.remove("active");

            }

        });

    }

/* Optional shared helpers you can use in any page */
    function saveJSON(key, value){
        localStorage.setItem(key, JSON.stringify(value));
    }

    function loadJSON(key, fallback){
        try{

            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : fallback;

        }catch (e){

    return fallback;

        }
}
