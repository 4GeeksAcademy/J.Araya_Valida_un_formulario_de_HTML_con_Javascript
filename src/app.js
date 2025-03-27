const ids = ["CVC-#"
  , "Card-#",
  "Amount",
  "First-Name",
  "Last-Name",
  "City",
  "Mensaje",
  "Postal_code"];

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  validar()

})

function validar() {
  let todosLlenos = ids.every(id => document.getElementById(id).value.trim() !== "");
  let metDePagoMarcado = document.querySelector('input[name="Payment"]:checked')
  let estado = document.getElementById("State")
 
  //--------------------------LIMPIAR CASILLAS----------------------------------------------
  for (const id of ids) {
    document.getElementById(id).classList.remove("alert", "alert-danger")
    document.getElementById("metodosDePago").classList.remove("alert", "alert-danger");
  }

  estado.classList.remove("is-invalid")


  let alert = document.getElementById("alert")   //listooooo
  alert.classList.remove("alert", "alert-danger");  //listooooo
  alert.innerHTML = ""     //listooooo

  //----------------------FIN LIMPIAR CASILLAS----------------------------------------------



  if (!todosLlenos || metDePagoMarcado === null || estado.value === "Pick a state") {

    let alert = document.getElementById("alert")   //listooooo
    alert.classList.add("alert", "alert-danger");  //listooooo
    alert.innerHTML = "Some fields are missing"     //listooooo

    let vacios = ids.filter(id => {
      let ele = document.getElementById(id);
      return !ele || ele.value.trim() === "";
    });
    for (const id of vacios) {
      document.getElementById(id).classList.add("alert", "alert-danger");
    }
    if (metDePagoMarcado === null){
      document.getElementById("metodosDePago").classList.add("alert", "alert-danger");
    }
    if (estado.value === "Pick a state") {
      estado.classList.add("is-invalid");
    }
  }
}
