async function productos(database) {

  // lectura de datos IdProducto
  const response = await database.collection("productos").get();
  console.log(response);
  const productosList = document.getElementById('listar-productos')

  const productosRow = []
  const productoId = []
  showData()
  //mostrar datos en pantalla 
  function showData(){
    response.forEach(productos => {
      productoId.push(productos.IdProducto)
      const producto = productos.data()
      const productotable = `
        <tr>
          <td>${producto.IdProducto}</td>
          <td>${producto.producto}</td>
          <td>${producto.descripcion}</td>
          <td>${producto.precio}</td>
        </tr>`
        productosList.innerHTML += productotable
      productosRow.push(producto)
    });
  }

  const agregarProducto = document.getElementById("form-agregar");
  console.log(agregarProducto);

  const data = [];
  const idProducto = document.getElementById("IdProducto");
  const producto = document.getElementById("producto");
  const descripcion = document.getElementById("descripcion");
  const precio = document.getElementById("precio");

  const botonagregar = document.getElementById("btn-guardar");
  botonagregar.addEventListener("click", (e) => {
    e.preventDefault();
    data.push(
      idProducto.value,
      producto.value,
      descripcion.value,
      precio.value
    );
    console.log(data);
  });
}

function openModalAgregarProducto() {
  $(document).ready(function () {
    $("#modalBotonAgregar").click(function () {
      $("#modalAgregar").modal("show");
    });
  });
}
