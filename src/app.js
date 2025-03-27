const ids = ["CVC-#"
  , "Card-#",
  "Amount",
  "First-Name",
  "Last-Name",
  "City",
  "State",
  "Mensaje",
  "Postal_code"];

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  validar()

})

function validar() {
  let todosLlenos = ids.every(id => document.getElementById(id).value.trim() !== "");
  let metDePagoMarcado = document.querySelector('input[name="Payment"]:checked')
  let estado = document.getElementById("State").value
  console.log(todosLlenos, metDePagoMarcado, estado)

  if (!todosLlenos || metDePagoMarcado === null) {
    
    let alert = document.getElementById("alert")   //listooooo
    alert.classList.add("alert", "alert-danger");  //listooooo
    alert.innerHTML = "Some fields are missing"     //listooooo

    let vacios = ids.filter(id => {
      let ele = document.getElementById(id);
      return !ele || ele.value.trim() === "" || estado === "Pick a state";
    });
    for (const id of vacios) {
      document.getElementById(id).classList.add("alert", "alert-danger");
      if (metDePagoMarcado === null){
        document.getElementById("metodosDePago").classList.add("alert", "alert-danger");

      }
    }
    
  }

}
