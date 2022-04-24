let profilePicture = document.getElementById("profilePicture");

function toggleProfileImg(){
    let profileImgSrc = profilePicture.getAttribute("src");
    if(profileImgSrc === "./resources/images/profile normal.jpg")
        {
            profilePicture.setAttribute("src", "./resources/images/profile grin.jpg" );
            console.log("test");

        }
        else
        {
            profilePicture.setAttribute("src", "./resources/images/profile normal.jpg");
        }
    
};

function dropdown(){
    document.getElementById("myDropdown").classList.toggle("show");
};


window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }