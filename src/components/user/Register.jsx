import { Global } from "../../helpers/Global";
import { useForm } from "../../hooks/useForm";

export const Register = () => {
  // Usamos el hook personalizado useForm para cargar los datos del formulario
  const { form, changed } = useForm({});

  //guardar en la base de datos

  const saveUser = (e) => {
    //para que se actualize el formulario
    e.preventDefault();
    //Obtine los datos del formulario
    let newUser = form;

    //guardar usuario en la base de datos del api rest
    const request = fetch(Global.url + "user/register", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <>
      <header className="content__header content__header--public">
        <h1 className="content__title">Registro</h1>
      </header>

      {/* Formulario de Registro*/}
      <div className="content__posts">
        <form className="register-form" onChange={saveUser}>
          <div className="form-group">
            <label htmlFor="name">Nombres</label>
            <input type="text" name="name" required onChange={changed} />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Apellidos</label>
            <input type="text" name="last_name" required onChange={changed} />
          </div>
          <div className="form-group">
            <label htmlFor="nick">Nick</label>
            <input type="text" name="nick" required onChange={changed} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" name="email" required onChange={changed} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              required
              onChange={changed}
            />
          </div>

          <input type="submit" value="Regístrate" className="btn btn-success" />
        </form>
      </div>
    </>
  );
};
