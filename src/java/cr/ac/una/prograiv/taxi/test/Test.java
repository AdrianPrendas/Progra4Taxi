package cr.ac.una.prograiv.taxi.test;

import cr.ac.una.prograiv.taxi.domain.Usuario;
import cr.ac.una.prograiv.taxi.bl.*;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 *
 * @author Adrian A simple class to Test DB
 */
public class Test {

    public static void main(String[] args) {
        UsuarioBL uBL = new UsuarioBL();
        Usuario u = new Usuario();

        try {
            u.setIdUsuario("604140420");
            u.setNombre("Adrian");
            u.setApellido1("Prendas");
            u.setApellido2("Araya");
            //u.setFechaNacimiento(new Date(1994,01,22));
            SimpleDateFormat dateformat = new SimpleDateFormat("dd/mm/yyyy");
            Date date = dateformat.parse("22/01/1994");
            u.setFechaNacimiento(date);
            u.setCorreo("a6r1an@hotmail.com");
            u.setTelefono(87950618);
            u.setPassword("abcd");
            u.setEsAdministrador(true);

            //uBL.delete(u);
            uBL.save(u);
            System.out.println("Se almaceno el Usuario correctamente");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
