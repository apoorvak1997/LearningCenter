
function searchRole() {
  var input, filter,  li, a, i, txtValue;
  input = document.getElementById("searchRole");
  filter = input.value.toUpperCase();
  li = document.getElementsByClassName("role");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("h5")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}

function filterDropDown() {

  var input, filter,  tr, td, i;
  input = document.getElementById("filter");
  filter = input.value.toUpperCase();
  tr = document.getElementsByClassName("role");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("h5")[0];
    if (td && filter!=='all roles') {
       if (td.classList.contains(filter.toLowerCase())) {
        tr[i].style.display = "";
      } 
      else {
        console.log(filter.toLowerCase());
        if(filter.toLowerCase()==='all roles'){
         for(let j=0;j<tr.length;j++){
           tr[j].style.display="";
         }
        }
        tr[i].style.display = "none";
      }
    }
    else if(filter==='all roles'){
      td.style.display="";
    }
    else{
      return;
    }       
  }
}

document.querySelector('#cra').addEventListener('click', function(e) {
  window.location.href = 'roleDetail.html?role=cra';
}, false);

document.querySelector('#dm').addEventListener('click', function(e) {
  window.location.href = 'roleDetail.html?role=data-manager';
}, false);

document.querySelector('#mm').addEventListener('click', function(e) {
  window.location.href = 'roleDetail.html?role=medical-monitor';
}, false);

document.querySelector('#pu').addEventListener('click', function(e) {
  window.location.href = 'roleDetail.html?role=pharmacy-user';
}, false);

document.querySelector('#csm').addEventListener('click', function(e) {
  window.location.href = 'roleDetail.html?role=clinical-supply-manager';
}, false);

document.querySelector('#sd').addEventListener('click', function(e) {
  window.location.href = 'roleDetail.html?role=study-designer';
}, false);
document.querySelector('#su').addEventListener('click', function(e) {
  window.location.href = 'roleDetail.html?role=site-user';
}, false);
document.querySelector('#pa').addEventListener('click', function(e) {
  window.location.href = 'roleDetail.html?role=production-admin';
}, false);
document.querySelector('#rd').addEventListener('click', function(e) {
  window.location.href = 'roleDetail.html?role=rules-designer';
}, false);
document.querySelector('#sa').addEventListener('click', function(e) {
  window.location.href = 'roleDetail.html?role=site-administrator';
}, false);
document.querySelector('#sa').addEventListener('click', function(e) {
  window.location.href = 'roleDetail.html?role=site-administrator';
}, false);
document.querySelector('#st').addEventListener('click', function(e) {
  window.location.href = 'roleDetail.html?role=statistician';
}, false);
document.querySelector('#sm').addEventListener('click', function(e) {
  window.location.href = 'roleDetail.html?role=study-manager';
}, false);
document.querySelector('#ubu').addEventListener('click', function(e) {
  window.location.href = 'roleDetail.html?role=unblinded-depot-user';
}, false);
document.querySelector('#ua').addEventListener('click', function(e) {
  window.location.href = 'roleDetail.html?role=user-administrator';
}, false);
document.querySelector('#vo').addEventListener('click', function(e) {
  window.location.href = 'roleDetail.html?role=view-only-unblinded-support-users';
}, false);
document.querySelector('#vsr').addEventListener('click', function(e) {
  window.location.href = 'roleDetail.html?role=view-only-unblinded-support-users';
}, false);

function download() {
  var iframe = document.getElementById('invisible');
  iframe.src = "Training_Video_Index_v1.pdf";
}

function navigate(role){
  switch(role){
    case 'clinical-research-associate' : 
    window.location.href = 'roleDetail.html';
    document.getElementById('clinical-research-associate').style.display="";
    break;

    default: 
    console.log("here");
    window.location.href = 'roleDetail.html';
    console.log(document.getElementById('clinical-research-associate'));
    console.log("here1");
    break;
  }
}

function downloadFile(filePath){
  var link=document.createElement('a');
  link.href = filePath;
  link.download = filePath.substr(filePath.lastIndexOf('/') + 1);
  link.click();
}


// When the user clicks the button, open modal with the same id
modalOpenBtn.onclick = function() {
  let currentID = modalOpenBtn.getAttribute('id');
  openModal(currentID);
}

// When the user clicks anywhere outside of the modal or the X, close

function buttonclicker(butt){
  document.getElementById(butt).click();
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// document.getElementById("defaultOpen").click();


//Accordion Function
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function accord() {
    this.classList.toggle("active1");
    var panel = this.nextElementSibling;
    // var beat = this.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.firstElementChild.scrollHeight;
    // console.log(beat);
    console.log("panel is ", panel);
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight*10 + "px";
    } 
  });
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

//sticky nav bar
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}





