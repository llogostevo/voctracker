firebase.auth().onAuthStateChanged(function(user) {
    
    const login = document.querySelector("#login-section");
    const logout = document.querySelector("#logout-section");
  
    if (user) {
      // User is signed in.
      login.style.display = "none";
      logout.style.display = "block";

      if (user != null){

        let email_id = user.email
    //   TEST HERE
        window.alert(email_id);
        document.querySelector("h1").innerHTML = "Welcome User: " + email_id;
        document.location.href = 'http://www.bbc.co.uk';
      }

    } else {
      // No user is signed in.

      login.style.display = "block";
      logout.style.display = "none";
    //   TEST HERE
      window.alert("notlogged in");
    }
  });

    //   THIS BELOW IS NOT WORKING< THE USER IS NOT BEING LOGGED IN

  document.querySelector("#btnLogin").addEventListener("click", function () {
    const userEmail = document.querySelector("#userEmail").value;
    const userPassword = document.querySelector("#userPassword").value;
    
    window.alert(userEmail);
    window.alert(userPassword);

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        window.alert("Error: " + errorMessage);
      });
  });