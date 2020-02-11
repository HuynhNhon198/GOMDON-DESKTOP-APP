

var firebaseConfig = {
    apiKey: "AIzaSyCyJuvREmfO8uzrAncN67vdh5DWZRX04EI",
    authDomain: "gomdon-74d1a.firebaseapp.com",
    databaseURL: "https://gomdon-74d1a.firebaseio.com",
    projectId: "gomdon-74d1a",
    storageBucket: "gomdon-74d1a.appspot.com",
    messagingSenderId: "190650726823",
    appId: "1:190650726823:web:bcf775286ba97206d25e82",
    measurementId: "G-BRB0GB8CP6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const getToken = () => {
    return auth.currentUser.getIdToken(true)
}

auth.onAuthStateChanged(async (user) => {
    console.log(user);
    if (user !== null) {
        console.log(await getToken());
        render(true, user)
    } else {
        render(false)
    }
})

const showHide = (content, login) => {
    $('#login').css('display', login);
    $('#content').css('display', content);
}

const render = (logged, user) => {
    if (logged) {
        console.log(user);
        document.getElementById("avatar").src = user.photoURL;
        $('#username').text(user.displayName)
        showHide('block', 'none')
        $.getScript("content.js");
    } else {
        showHide('none', 'block')
    }
}

$('#logout').click(() => {
    auth.signOut()
})


$('#btn-login').click(async () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        console.log(user);
        console.log(token);

        // ...
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
})