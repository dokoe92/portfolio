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
    
}
