var userController, model;
var storage = storage || {};

view = {
    refrescarNav: function () {
        if (storage.user) {
            $("#linkProfile").css("display", "block");
            $("#linkRoutes").css("display", "block");
            $("#divider").css("display", "block");
            $("#linkOut").css("display", "block");
            $("#login").css("display", "none");
            $("#registrarse").css("display", "none");
        } else {
            $("#linkProfile").css("display", "none");
            $("#linkRoutes").css("display", "none");
            $("#divider").css("display", "none");
            $("#linkOut").css("display", "none");
            $("#login").css("display", "block");
            $("#registrarse").css("display", "block");
        }
        /*$("#linkUser").css("display","block");
         $("#linkDriver").css("display","block");
         $("#linkAdmin").css("display","block");*/
    }
}

$(document).ready(function () {
    userController = new UserController(view);
    //sotrage*******************************************
    storage = Storage.retrieve("UserMetaData");
    if (storage == null) {
        storage = {};
        Storage.store("UserMetaData", storage);
    }
    //sotrage*******************************************
    view.refrescarNav();




    $("#loginModal").on("hide.bs.modal", function () {
       $("#userName").val("");
       $("#userPassword").val("");
    });
    $("#login").on("click", function () {
        $("#loginModal").modal('show');
    });
    $("#log").on("click", function () {
        var userName = $("#userName").val();
        var userPassword = $("#userPassword").val();
        if (userName == "" || userPassword == "")
            alert("ingrese los campos para el login");
        else {
            $("#loginModal").modal('hide');
            $("#userName").val("");
            $("#userPassword").val("");
            userController.login(userName, userPassword);
        }
    });
    $("#out").on("click", function () {
        userController.logOut();
    });

    $("#registrarse").on("click", function () {
        $("#register").modal('show');
    });
    $("#date").datepicker({dateFormat: "dd/mm/yy"});
    $("#formRegistro").on("submit", doValidation);
     function doValidation(event) {
        event.preventDefault();
        var user = new User();
        user.idUsuario = $("#alias").val();
        user.nombre = $("#name").val();
        user.apellido1 = $("#last").val();
        user.apellido2 = $("#final").val();
        user.fechaNacimiento = $("#date").val();
        user.address = $("#address").val();
        user.telefono = $("#phone").val();
        user.correo = $("#email").val();
        user.password = $("#password").val();
        user.esAdministrador = false;
        if ($("#password").val() != $("#password2").val()) {
            alert("check the password");
        } else {
            console.log(user)
            registrar(user);
            $("#register").modal('hide');
        }
    };
    function registrar(user) {
        alert("se enviara el formulario" +"\n" + user);
        userController.registerClient(user);
    };
    $("#register").on("hide.bs.modal", function () {
       document.getElementById("formRegistro").reset();
    });
});


