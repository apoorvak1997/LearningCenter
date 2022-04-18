const urlParams = new URLSearchParams(window.location.search);
const greetingValue = urlParams.get('role');
console.log(greetingValue);
switch(greetingValue){
    case 'cra' : document.getElementById('clinical-research-associate').style.display="block";
    break;

    case 'data-manager': document.getElementById('data-manager').style.display="block";
    break;

    case 'medical-monitor': document.getElementById('medical-monitor').style.display="block";
    break;

    case 'pharmacy-user': document.getElementById('pharmacy-user').style.display="block";
    break;

    case 'clinical-supply-manager': document.getElementById('clinical-supply-manager').style.display="block";
    break;

    case 'study-designer': document.getElementById('study-designer').style.display="block";
    break;

    case 'production-admin': document.getElementById('production-admin').style.display="block";
    break;

    case 'rules-designer': document.getElementById('rules-designer').style.display="block";
    break;

    case 'site-administrator': document.getElementById('site-administrator').style.display="block";
    break;

    case 'site-user': document.getElementById('site-user').style.display="block";
    break;

    case 'statistician': document.getElementById('statistician').style.display="block";
    break;

    case 'study-manager': document.getElementById('study-manager').style.display="block";
    break;

    case 'unblinded-depot-user': document.getElementById('unblinded-depot-user').style.display="block";
    break;

    case 'user-administrator': document.getElementById('user-administrator').style.display="block";
    break;

    case 'view-only-unblinded-support-users': document.getElementById('view-only-unblinded-support-users').style.display="block";
    break;

    case 'site-user': document.getElementById('site-user').style.display="block";
    break;


    default: document.getElementById('clinical-research-associate').style.display="none";
    break;
}

function hover(){
   var svgelem= document.getElementsByClassName('back-svg');
   svgelem[0].style.fill= "#02629f";
   console.log(svgelem[0].style.fill);
   var button = document.getElementsByClassName('back');
   button[0].addEventListener('mouseleave' , e=>{
       svgelem[0].style.fill="black";
   })
}

function searchTrainingCourses() {
    var input, filter,  li, a, i, txtValue;
    input = document.getElementById("searchTraining");
    filter = input.value.toUpperCase();
    li = document.getElementsByClassName("component");
    for (i = 0; i < li.length; i++) {
        a = li[i];
        
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.opacity = "100%";
        } else {
            li[i].style.opacity = "20%";
        }
    }
  }