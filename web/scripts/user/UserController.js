var storage = {};

function UserController(view) {
    this.UserController(view);
};

UserController.prototype = {
    UserController: function (view) {
        this.view = view;
    },
    login: function (userName, password) {
        Proxy.login(userName, password, this.storageUser);
    },
    storageUser: function (user) {
        
        //sotrage*******************************************
        storage = Storage.retrieve("UserMetaData");
        if (storage == null) {
            storage = {};
            Storage.store("UserMetaData", storage);
        }
        //sotrage*******************************************
        storage['user']=user;
        Storage.store("UserMetaData", storage);
        
        console.log("se almaceno el usuario correctamente en el localStorage");
        console.log(user);
        
        this.view.refrescarNav();
    },
    logOut: function(){
        //sotrage*******************************************
        storage = Storage.retrieve("UserMetaData");
        if (storage == null) {
            storage = {};
            Storage.store("UserMetaData", storage);
        }
        //sotrage*******************************************
        delete storage.user;
        Storage.store("UserMetaData", storage);
        
        this.view.refrescarNav();
        alert("la session ha caducado!!!")
        window.location.href="index.jsp";
    },
    registerClient:function(user){
        Proxy.registrarCliente(user,alert);
    }
};
