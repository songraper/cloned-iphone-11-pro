document.addEventListener("DOMContentLoaded", function (event) {

  document.getElementById("bag-link").addEventListener("click", function (event) {
    event.preventDefault()
    document.getElementById("bag-dr").classList.toggle("show-bag")
    event.stopPropagation()
  })

  document.getElementById("search-listen").addEventListener("click", function (event) {
    event.preventDefault()
    document.getElementById("search-dr").classList.add("search-show")
    document.getElementById("search-dr").classList.remove("hide-content")
    document.getElementById("search-close").classList.add("show-icon-close")
    document.getElementById("search-form").classList.add("search-form-slide")
    document.getElementById("search-close").classList.remove("hide-content")

    console.log(document.getElementsByClassName("search-results-item"))
    var searchResultSlide = document.getElementsByClassName("search-results-item")

    for (let k = 0; k < searchResultSlide.length; k++) {
      searchResultSlide[k].classList.add("search-result-slide")
    }

    var listHide = document.getElementsByClassName("item-nav-desktop")
    for (var i = 1; i < listHide.length; i++) {

      listHide[i].classList.add("hide-list")
      listHide[i].classList.remove("display-list")
    }
    event.stopPropagation()
  })


  window.addEventListener("click", function (event) {
    if (!event.target.matches('#bag-link')) {
      var bagShow = document.getElementById("bag-dr")
      if (bagShow.classList.contains('show-bag')) {
        bagShow.classList.remove('show-bag')
      }
    }
  })


  document.getElementById("search-close").addEventListener("click", function (event) {
    if (!event.target.matches('#search-listen')) {
      var searchShow = document.getElementById("search-dr")
      if (searchShow.classList.contains('search-show')) {
        searchShow.classList.remove('search-show')
        searchShow.classList.add('hide-content')

      }
      var hideClose = document.getElementById("search-close")
      if (hideClose.classList.contains("show-icon-close")) {
        hideClose.classList.remove("show-icon-close")
        hideClose.classList.add("hide-content")
      }

      var formSlide = document.getElementById("search-form")
      if (formSlide.classList.contains("search-form-slide")) {
        formSlide.classList.remove("search-form-slide")
      }

      var searchResultSlide = document.getElementsByClassName("search-results-item")
      for (let k = 0; k < searchResultSlide.length; k++) {
        if (searchResultSlide[k].classList.contains("search-result-slide")) {
          searchResultSlide[k].classList.remove("search-result-slide")
        }
      }


      var listHide = document.getElementsByClassName("item-nav-desktop")
      for (let j = 1; j < listHide.length; j++) {
        if (listHide[j].classList.contains("hide-list")) {
          listHide[j].classList.remove("hide-list")
          listHide[j].classList.add("display-list")
        }
      }
    }

  })


  $(window).scroll(function (event) {
    // window.addEventListener("scroll", function (event) {
    var currentScroll = window.scrollY;
    console.log(currentScroll)

    var heightTripX, tripTychTrans, transformLeft, transformMiddle, transformRight

    if (currentScroll > 638 && currentScroll < 1749) { //bieu thuc tinh transform theo scroll
      heightTripX = currentScroll - 638 // khoang cach ma scroll da chay duoc
      tripTychTrans = heightTripX / 5 // khoang cach ma tranform da chay duoc tai thoi diem currentScroll (5 la ty le: scroll cứ tăng lên 5 thì transform giảm đi 1)
      transformLeft = (120 - tripTychTrans).toString() // find location of currentTransform
      document.getElementById("triptych-image-left").style.transform = 'translateY(' + transformLeft + 'px)'

      transformMiddle = (160 - tripTychTrans).toString()
      document.getElementById("triptych-image-middle").style.transform = 'translateY(' + transformMiddle + 'px)'

      transformRight = (80 - tripTychTrans).toString()
      document.getElementById("triptych-image-right").style.transform = 'translateY(' + transformRight + 'px)'

      //  console.log(transformRight)
    }

    if (currentScroll > 1802 && currentScroll < 2332) {
      scrollControlGalerry = currentScroll - 1802
      transControlGalerry = (1 - (scrollControlGalerry / 454)).toString() // 454 la ty le (scroll tăng lên 50 thì opacity giảm đi 0.11)
      document.getElementById("gallery-control-content").style.opacity = transControlGalerry
      // console.log(transControlGalerry);
    }

    if (currentScroll > 1808 && currentScroll < 3133) {
      scrollLensContainer = currentScroll - 1808
      scaleLens = (0.965926 + (scrollLensContainer / 10000)).toString()
      skewOneLens = (-0.258819 + (scrollLensContainer / 2500)).toString()
      skewTwoLens = (0.258819 - (scrollLensContainer / 2500)).toString()

      document.getElementById("lens-top-container").style.transform = "matrix(" + scaleLens + ", " + skewOneLens + ", " + skewTwoLens + ", " + scaleLens + ", " + "0" + ", " + "0)"

      // document.getElementById("img-lens-top").style.transform = "matrix(" + scaleLens + ", " + skewTwoLens + ", " + skewOneLens + ", " + scaleLens + ", " + "0" + ", " + "0)"

      document.getElementById("lens-middle-container").style.transform = "matrix(" + scaleLens + ", " + skewOneLens + ", " + skewTwoLens + ", " + scaleLens + ", " + "0" + ", " + "0)"

      // document.getElementById("img-lens-middle").style.transform = "matrix(" + scaleLens + ", " + skewTwoLens + ", " + skewOneLens + ", " + scaleLens + ", " + "0" + ", " + "0)"

      document.getElementById("lens-bottom-container").style.transform = "matrix(" + scaleLens + ", " + skewOneLens + ", " + skewTwoLens + ", " + scaleLens + ", " + "0" + ", " + "0)"

      // document.getElementById("img-lens-bot").style.transform = "matrix(" + scaleLens + ", " + skewTwoens + ", " + skewOneLens + ", " + scaleLens + ", " + "0" + ", " + "0)"

    }









  })


})
