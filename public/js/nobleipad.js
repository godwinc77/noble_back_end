//HOME//
const home_mobile_click = document.getElementById("home-mobile-click")
const gallery_mobile_click = document.getElementById("gallery-mobile-click")
const rates_mobile_click = document.getElementById("rates-mobile-click")
const potfoilo_mobile_click = document.getElementById("potfoilo-mobile-click")
const services_mobile_click = document.getElementById("services-mobile-click")
const about_mobile_click = document.getElementById("about-mobile-click")

function openhome(){
    home_con.style.display ="block"
    closegallery()
    closerates()
    closepotfoilo()
    closeservices()
    closeabout()
    closenav()
   
}
function closehome(){
    home_con.style.display ="none"
}
  
  function opengallery(){
    gallery_con.style.display ="block"
    photography_con.style.display ="block"
    photography_con.style.display ="flex"
    make_up_con.style.display ="none"
    closerates()
    closepotfoilo()
    closeservices()
    closehome()
    closeabout()
    closenav()
  }
  function closegallery(){
    gallery_con.style.display ="none"
  }
  function openrates(){
    rates_con.style.display ="block"
    rates_con.style.display ="flex"
    closegallery()
    closepotfoilo()
    closeservices()
    closehome()
    closeabout()
    closenav()
  }
  function closerates(){
    rates_con.style.display ="none"
  }
  
  function openpotfoilo(){
    potfoilo_con.style.display ="block"
    potfoilo_info.style.display ="block"
    closegallery()
    closerates()
    closeservices()
    closehome()
    closeabout()
    closenav()
  
    closeindoor()
    closeoutdoor()
    closeportrait()
    closefashion()
    closeproduct()
    closemakeup()
  }
  function closepotfoilo(){
    potfoilo_con.style.display ="none"
  }
  function openservices(){
    service_con.style.display ="block"
    service_con.style.display ="flex"
    booking.style.display="block"
    booking.style.display="flex"
    closetraining()
    closegallery()
    closerates()
    closepotfoilo()
    closehome()
    closeabout()
    closenav()
  }
  function closeservices(){
    service_con.style.display ="none"
  }
  
  function openabout(){
    about.style.display ="block"
  
    closegallery()
    closerates()
    closepotfoilo()
    closehome()
    closeservices()
    closenav()
  }
  function closeabout(){
    about.style.display ="none"
  }
  
  function openservicestext(){
    servicetext2.style.display = "block"
    servicetext2.style.display = "flex"
    services_click.style.height ="100px"
  }
  function closeservicestext(){
    servicetext2.style.display = "none"
    services_click.style.height ="30px"
  }
  function openportfoliotext(){
    protfolio_text.style.display = "block"
    protfolio_text.style.display = "flex"
    protfolio_text.style.transition = "1.5s"
    potfoilo_click.style.height ="100px"
    
  }
  function closeportfoliotext(){
    protfolio_text.style.display = "none"
    protfolio_text.style.transition = "1.5s"
    potfoilo_click.style.height ="30px"
  
  }

home_mobile_click.addEventListener("click", openhome)
gallery_mobile_click.addEventListener("click", opengallery)
rates_mobile_click.addEventListener("click", openrates)
potfoilo_mobile_click.addEventListener("click", openpotfoilo)
services_mobile_click.addEventListener("click", openservices)
about_mobile_click.addEventListener("click", openabout)

const remove= document.getElementsByClassName("cancel")[0]
const menu= document.getElementsByClassName("menu")[0]
const nav_mobile_list= document.getElementsByClassName("mobile-nav-list")[0]
const nav_h3= document.getElementsByClassName("nav-h3")[0]
const nav_icon = document.getElementsByClassName("nav-icon")[0]

function opennav(){
    nav_h3.style.opacity="5"
    nav_h3.style.transition="2.5s"
    nav_mobile_list.style.height="500px"
    nav_mobile_list.style.transition="0.5s"
    
    menu.style.display="none"
   remove.style.display="block"
   nav_icon.style.display="flex"
}
function closenav(){
  nav_h3.style.opacity="0"
  nav_h3.style.transition="0.5s"
    nav_mobile_list.style.height="0px"
    nav_mobile_list.style.transition="0.5s"
    menu.style.display="block"
    remove.style.display="none"
}

menu.addEventListener("click", opennav)
remove.addEventListener("click", closenav)