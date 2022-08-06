function myFunc(){
    const name = document.getElementById('Name').value;
    localStorage.setItem("Name",name);
    return;

}


// Trying to get the name from the form to pass it to the Home.html where it will show Hello, <Name got from signin page>  //  TODO-sign in html form input send to home.html form input
