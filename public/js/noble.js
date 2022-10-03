// NAVIGATION//
const home_click = document.getElementById("home-click")
const gallery_click = document.getElementById("gallery-click")
const rates_click = document.getElementById("rates-click")
const potfoilo_click = document.getElementById("potfoilo-click")
const services_click = document.getElementById("services-click")
const about_click = document.getElementById("about-click")
const home_con = document.getElementsByClassName("home")[0]
const gallery_con = document.getElementsByClassName("gallery")[0]
const rates_con = document.getElementsByClassName("rates")[0]
const potfoilo_con= document.getElementsByClassName("potfoilo")[0]
const service_con = document.getElementsByClassName("service")[0]
const nav_list= document.getElementsByClassName("nav-list")[0]
const bios_word= document.getElementById("bios-word")
const about= document.getElementsByClassName("about")[0]
const servicetext2 = document.getElementsByClassName("servicetext2")[0]
const protfolio_text = document.getElementsByClassName("protfolio-text")[0]

function openhome(){
  home_con.style.display ="block"
  closegallery()
  closerates()
  closepotfoilo()
  closeservices()
  closeabout()
 
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

home_click.addEventListener("click", openhome)
gallery_click.addEventListener("click", opengallery)
rates_click.addEventListener("click", openrates)
potfoilo_click.addEventListener("click", openpotfoilo)
services_click.addEventListener("click", openservices)
about_click.addEventListener("click", openabout)
services_click.addEventListener("mouseover", openservicestext)
services_click.addEventListener("mouseout", closeservicestext)
servicetext2.addEventListener("mouseover", openservicestext)
servicetext2.addEventListener("mouseout", closeservicestext)
potfoilo_click.addEventListener("mouseover", openportfoliotext)
potfoilo_click.addEventListener("mouseout", closeportfoliotext)
protfolio_text.addEventListener("mouseover", openportfoliotext)
protfolio_text.addEventListener("mouseout", closeportfoliotext)

//NAV-HOVER//




//HOME//
const navs = document.getElementsByClassName("nav-list-logo")[0]
const nav_unlist = document.getElementsByClassName("nav-list")[0]
const nav_logo = document.getElementsByClassName("nav-logo")[0]
const nav = document.getElementById("nav")
const nav_down = document.getElementsByClassName("nav-down")[0]
const bios_image_text = document.getElementById("bios-img-text")
const bios_icon = document.getElementsByClassName("bios-icon")[0]
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ( document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    nav_unlist.style.height= "40px";
    nav_logo.style.height= "40px";
    nav.style.backgroundColor = "rgb(26, 26, 26)";
    nav.style.height= "50px";
  } 
  else {
    nav_unlist.style.height = "100px";
    nav_logo.style.height= "100px";
    nav.style.backgroundColor = "unset";
    nav.style.height= "100px";
  }
}

let navcount = 0;
showNavImage();

function showNavImage() {
  let i;
  let navpic = document.getElementsByClassName("nav-images");
  for (i = 0; i < navpic.length; i++) {
    navpic[i].style.display = "none";
  }
  navcount++;
  if (navcount > navpic.length) {navcount = 1}
  navpic[navcount-1].style.display = "block";
  setTimeout(showNavImage, 5000); // Change image every 2 seconds
}

const follow = document.getElementsByClassName("follow")[0]
const follow_list = document.getElementsByClassName("follow-link-info")[0]

function openlink(){
  follow_list.style.opacity="5"
  follow_list.style.transition = "0.5s"
}
function closelink(){
  follow_list.style. opacity="0"
  follow_list.style.transition = "0.5s"
}
follow.addEventListener("mouseover", openlink)
follow.addEventListener("mouseout", closelink)

function openbioGallery(){
  gallery_con.style.display="block"
  home_con.style.display="none"
}

function hoverbiosText(){
  bios_icon.style.opacity="5"
  bios_icon.style.transition="0.5s"
}
function unhoverbiosText(){
  bios_icon.style.opacity="0"
  bios_icon.style.transition="0.5s"
}
bios_image_text.addEventListener("mouseover", hoverbiosText)
bios_image_text.addEventListener("mouseout", unhoverbiosText)
bios_image_text.addEventListener("click", openbioGallery)


//GALLARY//
const photography_con = document.getElementsByClassName("photography-con")[0]
const make_up_con = document.getElementsByClassName("make-up-con")[0]
const gallery_text_info = document.getElementsByClassName("gallery-text-info")[0]
const photography = document.getElementById("photography")
const make_up = document.getElementById("make-up")
function opennoble(){
    photography_con.style.display ="block"
    photography_con.style.display ="flex"
    gallery_text_info.style.display ="flex"
    closeklassic()

}
function closenoble(){
  photography_con.style.display ="none"
}
function openklassic(){
  make_up_con.style.display ="block"
  make_up_con.style.display ="flex"
  closenoble()
}
function closeklassic(){
  make_up_con.style.display ="none"
}
photography.addEventListener("click",opennoble)
make_up.addEventListener("click", openklassic)

let galleryIndex = 1;
showSlides(galleryIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(galleryIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(galleryIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mygallery");
  if (n > slides.length) {galleryIndex = 1}
  if (n < 1) {galleryIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[galleryIndex-1].style.display = "block";
}

//POTRAITS//
const potfoilo_list_info= document.getElementsByClassName("potfoilo-list-info")
const potfoilo_list_image_bg= document.getElementsByClassName("potfoilo-list-image-bg")
const potfoilo_list_icon= document.getElementsByClassName("potfoilo-list-icon")
const indoor_image = document.getElementsByClassName("indoor-image")[0]
const outdoor_image = document.getElementsByClassName("outdoor-image")[0]
const potrait_image = document.getElementsByClassName("potrait-image")[0]
const fashion_image = document.getElementsByClassName("fashion-image")[0]
const product_image = document.getElementsByClassName("product-image")[0]
const makeup_image = document.getElementsByClassName("makeup-image")[0]
const indoor_text= document.getElementById("indoor-text")
const outdoor_text= document.getElementById("outdoor-text")
const portrait_text= document.getElementById("portrait-text")
const fashion_text= document.getElementById("fashion-text")
const product_text= document.getElementById("product-text")
const makeup_text= document.getElementById("makeup-text")
const indoor_button= document.getElementsByClassName("potfoilo-list-info")[0]
const outdoor_button= document.getElementsByClassName("potfoilo-list-info")[1]
const portrait_button= document.getElementsByClassName("potfoilo-list-info")[2]
const fashion_button= document.getElementsByClassName("potfoilo-list-info")[3]
const product_button= document.getElementsByClassName("potfoilo-list-info")[4]
const makeup_button= document.getElementsByClassName("potfoilo-list-info")[5]
const potfoilo_info= document.getElementsByClassName("potfoilo-info")[0]

function viewport(){ 

  for (let i of potfoilo_list_image_bg){
    console.log(i)
    if (this.contains(i)){
      i.style.opacity="5"
      i.style.transition="0.5"

    }
  }
  for (let i of potfoilo_list_icon){
    if (this.contains(i)){
     
      i.style.opacity="5"
      i.style.transition="0.5"
    }
  }
   

}
function closeport(){
  for (let i of potfoilo_list_image_bg){
    if (this.contains(i)){

      i.style.opacity="0"
      i.style.transition="0.5"
    }
  }
  for (let i of potfoilo_list_icon){
    if (this.contains(i)){
     
      i.style.opacity="0"
      i.style.transition="0.5"
    }
  }
   
 
}

for (let i of potfoilo_list_info){
  i.addEventListener("mouseover", viewport)
    i.addEventListener("mouseout", closeport)

}

function openindoor(){
  indoor_image.style.display ="block"
  indoor_image.style.display ="flex"
  potfoilo_info.style.display ="none"
  potfoilo_con.style.display ="block"
  closegallery()
  closerates()
  closeservices()
  closehome()
  closeabout()

  closeoutdoor()
  closeportrait()
  closefashion()
  closeproduct()
  closemakeup()
}
function closeindoor(){
  indoor_image.style.display ="none"
}
function openoutdoor(){
  outdoor_image.style.display ="block"
  outdoor_image.style.display ="flex"
  potfoilo_info.style.display ="none"
  potfoilo_con.style.display ="block"
  closegallery()
  closerates()
  closeservices()
  closehome()
  closeabout()

  closeindoor()
  closeportrait()
  closefashion()
  closeproduct()
  closemakeup()
}
function closeoutdoor(){
  outdoor_image.style.display ="none"
  
}
function openportrait(){
  potrait_image.style.display ="block"
  potrait_image.style.display ="flex"
  potfoilo_info.style.display ="none"
  potfoilo_con.style.display ="block"
  closegallery()
  closerates()
  closeservices()
  closehome()
  closeabout()

  closeindoor()
  closeoutdoor()
  closefashion()
  closeproduct()
  closemakeup()
}
function closeportrait(){
  potrait_image.style.display ="none"
}
function openfashion(){
  fashion_image.style.display ="block"
  fashion_image.style.display ="flex"
  potfoilo_info.style.display ="none"
  potfoilo_con.style.display ="block"
  closegallery()
  closerates()
  closeservices()
  closehome()
  closeabout()

  closeindoor()
  closeoutdoor()
  closeportrait()
  closeproduct()
  closemakeup()
}
function closefashion(){
  fashion_image.style.display ="none"
}
function openproduct(){
  product_image.style.display ="block"
  product_image.style.display ="flex"
  potfoilo_info.style.display ="none"
  potfoilo_con.style.display ="block"
  closegallery()
  closerates()
  closeservices()
  closehome()
  closeabout()

  closeindoor()
  closeoutdoor()
  closeportrait()
  closefashion()
  closemakeup()
}
function closeproduct(){
  product_image.style.display ="none"
}
function openmakeup(){
  makeup_image.style.display ="block"
  makeup_image.style.display ="flex"
  potfoilo_info.style.display ="none"
  potfoilo_con.style.display ="block"
  closegallery()
  closerates()
  closeservices()
  closehome()
  closeabout()

  closeindoor()
  closeoutdoor()
  closeportrait()
  closefashion()
  closeproduct()
}
function closemakeup(){
  makeup_image.style.display ="none"
}

indoor_text.addEventListener("click", openindoor)
outdoor_text.addEventListener("click", openoutdoor)
portrait_text.addEventListener("click", openportrait)
fashion_text.addEventListener("click", openfashion)
product_text.addEventListener("click", openproduct)
makeup_text.addEventListener("click", openmakeup)

indoor_button.addEventListener("click", openindoor)
outdoor_button.addEventListener("click", openoutdoor)
portrait_button.addEventListener("click", openportrait)
fashion_button.addEventListener("click", openfashion)
product_button.addEventListener("click", openproduct)
makeup_button.addEventListener("click", openmakeup)




// SERVICE//
const booking_click= document.getElementsByClassName("booking-click")[0]
const booking_click1= document.getElementsByClassName("booking-click")[1]
const booking= document.getElementsByClassName("booking")[0]
const training_click= document.getElementsByClassName("training-click")[0]
const training_click1= document.getElementsByClassName("training-click")[1]
const training= document.getElementsByClassName("training")[0]


function openbooking(){
  service_con.style.display="block"
  booking.style.display="block"
  booking.style.display="flex"
  closetraining()
  closegallery()
  closerates()
  closepotfoilo()
  closehome()
  closeabout()
  closepackage()
}
function closebooking(){
  booking.style.display="none"
}
function opentraining(){
  training.style.display="block"
  training.style.display="flex"
  service_con.style.display="block"
  service_con.style.display ="block"
  closebooking()
  closegallery()
  closerates()
  closepotfoilo()
  closehome()
  closeabout()
}
function closetraining(){
  training.style.display="none"
}

booking_click.addEventListener("click", openbooking)
training_click.addEventListener("click", opentraining)
booking_click1.addEventListener("click", openbooking)
training_click1.addEventListener("click", opentraining)


//SERVICE-BOOKING//
const right= document.getElementsByClassName("right")[0]
const down= document.getElementsByClassName("down")[0]
const session_text_info = document.getElementsByClassName("session-text-info")[0]
const package = document.getElementsByClassName("package")[0]
const studio_package = document.getElementsByClassName("studio-package")[0]
const outdoor_package = document.getElementsByClassName("outdoor-package")[0]
const studio_click = document.getElementById("studio-click")
const outdoor_click = document.getElementById("outdoor-click")
const click1 = document.getElementsByClassName("click1")[0]
const click2 = document.getElementsByClassName("click2")[0]
const select1 = document.getElementsByClassName("session-select")[0]
const select2 = document.getElementsByClassName("session-select")[1]
const select3 = document.getElementsByClassName("session-select")[2]
const select4 = document.getElementsByClassName("session-select")[3]
const square1 = document.getElementsByClassName("square")[0]
const square2 = document.getElementsByClassName("square")[1]
const square3 = document.getElementsByClassName("square")[2]
const square4 = document.getElementsByClassName("square")[3]
const screen = document.getElementById("screen")
const cancel = document.getElementsByClassName("cancel")[0]
const booking_profile = document.getElementsByClassName("booking-profile")[0]
const select_submit = document.getElementsByClassName("select-submit")[0]


function openpackage(){
  right.style.display ="none"
  down.style.display ="flex"
  session_text_info.style.display ="block"
}
function closepackage(){
  right.style.display ="flex"
  down.style.display ="none"
  session_text_info.style.display ="none"
  package.style.display = "none"
  click1.style.display = "none"
  click2.style.display = "none"
  screen.style.display ="block"
}
function opensession(){
  click1.style.display = "block"
  click2.style.display = "none"
  package.style.display = "block"
  studio_package.style.display = "block"
  studio_package.style.display = "flex"
  outdoor_package.style.display = "none"
  square1.style.display ="none"
  square2.style.display ="none"
  square4.style.display ="none"
  square3.style.display ="none"
  screen.style.display ="block"
} 
function openoutdoor(){
  click1.style.display = "none"
  click2.style.display = "block"
  package.style.display = "block"
  studio_package.style.display = "none"
  outdoor_package.style.display = "block"
  outdoor_package.style.display = "flex"
  square1.style.display ="none"
  square2.style.display ="none"
  square4.style.display ="none"
  square3.style.display ="none"
  screen.style.display ="block"
}
function selectsession1(){
  square1.style.display ="block"
  square2.style.display ="none"
  screen.style.display ="none"
}
function selectsession2(){
  square2.style.display ="block"
  square1.style.display ="none"
  screen.style.display ="none"
}
function selectsession3(){
  square3.style.display ="block" 
  square4.style.display ="none"
  screen.style.display ="none"
}
function selectsession4(){
  square4.style.display ="block"
  square3.style.display ="none"
  screen.style.display ="none"
}
function openprofile(){
  booking_profile.style.display ="block"
  booking_profile.style.display ="flex"
}
function closeprofile(){
  booking_profile.style.display ="none"
}

right.addEventListener("click",openpackage )
down.addEventListener("click",closepackage )
studio_click.addEventListener("click",opensession)
outdoor_click.addEventListener("click", openoutdoor)
select1.addEventListener("click",selectsession1)
select2.addEventListener("click",selectsession2)
select3.addEventListener("click",selectsession3)
select4.addEventListener("click",selectsession4)
select_submit.addEventListener("click",openprofile)
cancel.addEventListener("click",closeprofile)

// about //


