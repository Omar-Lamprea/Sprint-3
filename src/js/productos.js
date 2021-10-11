function productos(database){
  debugger;
  const agregarProducto = document.getElementById('form-agregar');
console.log(database);
  agregarProducto.addEventListener('submit', e => {
    e.preventDefault();
    console.log(e);
    const idProducto = form-agregar['IdProducto'].value;
    const producto = form-agregar['producto'].value;
    const descripcion = form-agregar['descripcion'].value;
    const precio = form-agregar['precio'].value;
  
    console.log(idProducto, producto, descripcion, precio)
  })
}
