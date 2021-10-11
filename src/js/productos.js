function productos(database){

  const agregarProducto = document.getElementById('form-agregar');
  console.log(agregarProducto);
  const data = []
  const idProducto = document.getElementById('IdProducto');
  const producto = document.getElementById('producto');
  const descripcion = document.getElementById('descripcion');
  const precio = document.getElementById('precio');

    const botonagregar = document.getElementById('btn-guardar');
    botonagregar.addEventListener('click', e => {
    e.preventDefault();
    console.log(e);
    data.push(idProducto.value, producto.value, descripcion.value, precio.value)
    console.log(data);

  })

  
  
}
