    // Add active class to the current button (highlight it)
    var info = document.getElementsByClassName("detail-story");
    
    function closeVideo(){
        info[0].style.display ="none";
    }
    function openifo(){
        info[0].style.display = "inherit"
    }


function scrollfn(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
}
