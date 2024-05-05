const navBar = document.querySelector(".nav__bar"),
      menuBtns = document.querySelectorAll(".nav__bar-menu-icon"),
      overlay = document.querySelector(".nav__bar-overlay"),
      headerShow = document.querySelector('.header__show'),
      logocontainer = document.querySelector('.logo-container');

// nav__bar overlay

menuBtns.forEach((menuBtn) => {
    menuBtn.addEventListener("click", () => {
        navBar.classList.toggle("open");
    });
});

overlay.addEventListener("click", () => {
    navBar.classList.remove("open");
});

// header__show
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navBar.style.top = "-70px";
        headerShow.style.top = "-70px";
        logocontainer.style.top = "-70px";
    } else {
        navBar.style.top = "0";
        headerShow.style.top = "0";
        logocontainer.style.top = "0";
    }
    lastScrollTop = scrollTop;
});


//User comments
document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username-input').value;
    var comment = document.getElementById('comment-input').value;
    var ratings = document.getElementsByName('rating');
    var selectedRating = [...ratings].find(r => r.checked)?.value || "No rating";

    if (username.trim() !== "" && comment.trim() !== "") {
        var commentList = document.getElementById('comment-list');
        var commentElement = document.createElement('div');
        commentElement.classList.add('comment-item');

        var imgElement = document.createElement('img');
        imgElement.src = './resources/images/user-profile.jpg'; //user profile picture for all comments
        imgElement.alt = "User Profile Picture";
        imgElement.classList.add('profile-pic');
        commentElement.appendChild(imgElement);

        var textElement = document.createElement('span');
        textElement.textContent = username + ": " + comment + " - " + selectedRating + " star(s)";
        commentElement.appendChild(textElement);

        commentList.prepend(commentElement);  
        document.getElementById('comment-input').value = "";
        document.getElementById('username-input').value = ""; 
        ratings.forEach(r => r.checked = false); 
    }
});

