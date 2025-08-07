    //more-icon
const more = document.querySelector(".more-svg");
const invMore = document.querySelector(".inverse-more-svg");
const moreContainer = document.querySelector("#more-container");
more.addEventListener("click", function(){
  more.style.display = "none";
  invMore.style.display = "inline";
  moreContainer.style.display = "inline";
  invMore.addEventListener("click", function(){
    more.style.display = "inline";
    invMore.style.display = "none";
    moreContainer.style.display = "none";
  }) 
})
    //setting-icon
const settings = document.querySelector(".setting");
const settingContainer = document.querySelector("#setting-container");
let count = 1;
settings.addEventListener("click", function(e){
  count ++;
  if(count%2==0){
    settingContainer.style.display = "inline";
  }else if(e.target){
    moreContainer.style.display = "none";
    settingContainer.style.display = "none";
  }
})
    //dark-mode
const darkMode = document.querySelector(".dark-mode");
darkMode.addEventListener("click", function(){
  const home = document.querySelector("#home-container");
  if(navigator.onLine){
    home.classList.toggle("light");
  }else{
    window.location.href = "err.html";
  }
})
    //log-out
const log = document.querySelector(".log");
log.addEventListener("click", function(){
  if(navigator.onLine){
    window.location.href = "consigno.html";
  }else{
    setTimeout(function(){
      window.alert("Unexpected_err_occured \n ID: W5jLnkPQ");
    },1500)
    setTimeout(function(){
      window.location.href = "err.html";
    },1500)
  }
})
