import { useState } from "react";

export const useForm = (initialObj = {}) => {
  //hook para cuando se llena el formulario
  const [form, setForm] = useState(initialObj);
  //metodo que resibe un target que a su vez va a recibir un input
  const changed = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
    console.log(target);
  };
  return { form, changed };
};
