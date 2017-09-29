package cr.ac.una.prograiv.taxi.domain;
// Generated 23-sep-2017 16:46:48 by Hibernate Tools 4.3.1


import java.util.Date;

/**
 * Conductor generated by hbm2java
 */
public class Conductor  implements java.io.Serializable {


     private String usuarioIdUsuario;
     private Usuario usuario;
     private Vehiculo vehiculo;
     private String tipoLicencia;
     private Date fechaVencLic;
     private double puntuacion;
     private int cedula;

    public Conductor() {
    }

    public Conductor(Usuario usuario, Vehiculo vehiculo, String tipoLicencia, Date fechaVencLic, double puntuacion, int cedula) {
       this.usuario = usuario;
       this.vehiculo = vehiculo;
       this.tipoLicencia = tipoLicencia;
       this.fechaVencLic = fechaVencLic;
       this.puntuacion = puntuacion;
       this.cedula = cedula;
    }
   
    public String getUsuarioIdUsuario() {
        return this.usuarioIdUsuario;
    }
    
    public void setUsuarioIdUsuario(String usuarioIdUsuario) {
        this.usuarioIdUsuario = usuarioIdUsuario;
    }
    public Usuario getUsuario() {
        return this.usuario;
    }
    
    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
    public Vehiculo getVehiculo() {
        return this.vehiculo;
    }
    
    public void setVehiculo(Vehiculo vehiculo) {
        this.vehiculo = vehiculo;
    }
    public String getTipoLicencia() {
        return this.tipoLicencia;
    }
    
    public void setTipoLicencia(String tipoLicencia) {
        this.tipoLicencia = tipoLicencia;
    }
    public Date getFechaVencLic() {
        return this.fechaVencLic;
    }
    
    public void setFechaVencLic(Date fechaVencLic) {
        this.fechaVencLic = fechaVencLic;
    }
    public double getPuntuacion() {
        return this.puntuacion;
    }
    
    public void setPuntuacion(double puntuacion) {
        this.puntuacion = puntuacion;
    }
    public int getCedula() {
        return this.cedula;
    }
    
    public void setCedula(int cedula) {
        this.cedula = cedula;
    }




}

