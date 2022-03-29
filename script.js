
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
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } 
      else {
        tr[i].style.display = "none";
      }
    }
    else{
      console.log("entering hereee");
      return;
    }       
  }
}

document.querySelector('#cra').addEventListener('click', function(e) {
  window.location.href = 'roleDetail.html';
}, false);



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





