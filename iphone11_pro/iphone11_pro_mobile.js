document.addEventListener("DOMContentLoaded", function(event) {
    $("#bag-icon-mobile").click(function(event) {
        event.preventDefault()
        $("#bag-dr").toggle()
        event.stopPropagation();

    })

    window.addEventListener("click", function(event) {
        if (!event.target.matches('#bag-link')) {
            var bagShow = document.getElementById("bag-dr")
            if (bagShow.classList.contains('show-bag')) {
                bagShow.classList.remove('show-bag')
            }
        }
    })


    document.getElementById("menu-mobile").addEventListener("click", function(event) {
        document.getElementById("globalnav").classList.toggle("globalnav-click-trans-for")
        document.getElementById("list-menu-mobile").classList.toggle("show-list-menu-mobile")
        document.getElementById("icon-bag-mobile").classList.toggle("hide-bag-mobile")
        document.getElementById("icon-menu-bread-top").classList.toggle("rotate-top-for")
        document.getElementById("icon-menu-bread-bottom").classList.toggle("rotate-bottom-for")
        document.getElementById("crust-top").classList.toggle("crust-trans-top-for")
        document.getElementById("crust-bottom").classList.toggle("crust-trans-bottom-for")
        document.getElementById("search-mobile").classList.toggle("show-search-mobile")

        event.stopPropagation()
    })


    $("#local-nav-toggle").click(function() {
        // document.getElementById("menu-tray").classList.toggle("show-menu-tray")
        var menuTray = $("#menu-tray")
        console.log(menuTray)
        menuTray.toggleClass("show-menu-tray")
            // menuTray.toggle()
        event.stopPropagation()
    })



    var videoHeroDesktop = document.getElementById("hero-video-desktop")

    if (window.matchMedia("(max-width: 736px").matches) {
        videoHeroDesktop.remove()
    }

})