
function User(id, name, last, final, date, address, phone, email, password, tipo) {
    this.User(id, name, last, final, date, address, phone, email, password, tipo);
}
User.prototype = {
    User: function (id, name, last, final, date, address, phone, email, password, tipo){
        this.idUsuario=id;
        this.nombre = name;
        this.apellido1 = last;
        this.apellido2 = final;
        this.fechaNacimiento = date;
        this.telefono = phone;
        this.correo = email;
        this.password = password;
        this.esAdministrador = (tipo==0)? true : false;
    },
    toString: function () {
       return "user name: "+this.idUsuario+
               "\nnombre: "+this.nombre+" "+this.apellido1+" "+this.apellido2+
               "\nfecha de nacimiento: "+this.fechaNacimiento+
               "\ncorreo: "+this.correo+"\n"+
               ((this.esAdministrador==0)?"administrador"
                                         :(this.esAdministrador==1)?"cliente"
                                                                   :"undefined");
    }
};

