async function ventasData(database){
  
    try{
      //lectura de datos
      const response = await database.collection('ventas').get()
      const ventaList = document.getElementById('venta-list')
      const ventasRow = []
      const ventaId = []
      showData()
      //pintar en el browser
      function showData(){
        response.forEach(ventas => {
          ventaId.push(ventas.id)
          const venta = ventas.data()
          const ventatable = `
            <tr>
              <td id="${venta.idcliente}" style= "cursor: pointer">${venta.idventa}</td>
              <td>${venta.nombrecliente}</td>
            </tr>`
          ventaList.innerHTML += ventatable
          ventasRow.push(venta)
        });
      }
  
      document.addEventListener('click', e =>{
        for (let i = 0; i < ventasRow.length; i++) {
          const btnVenta = document.getElementById(`${ventasRow[i].idcliente}`)
          if(e.target.id === btnVenta.id){
            ventaDetails(ventasRow[i])
          }
        }
      })
  
      function ventaDetails(ventaData){
        const ventasTable = document.getElementById('venta-details')
        const title = document.getElementById('venta-name')
        const imgDetails = document.getElementById('img-details')
        const btnModify = document.getElementById('btn-modify-data')
        const btnDelete = document.getElementById('btn-delete-data')
        const details = `
          <tr>
            <th>Id Venta</th>
            <td>${ventaData.idventa}</td>
          </tr>
          <tr>
            <th>Id Cliente</th>
            <td>${ventaData.idcliente}</td>
          </tr>
          <tr>
            <th>Nombre Cliente</th>
            <td>${ventaData.nombrecliente}</td>
          </tr>
          <tr>
            <th>Nombre Mesero</th>
            <td>${ventaData.nombremesero}</td>
          </tr>
          <tr>
            <th>Productos</th>
            <td>${ventaData.productos}</td>
          </tr>
          <tr>
            <th>Cantidades</th>
            <td>${ventaData.cantidades}</td>
          </tr>
          <tr>
            <th>Precio Total</th>
            <td>${ventaData.preciototal}</td>
          </tr>
          </tr>`
  
        //pintar tabla de detalles
        title.innerHTML = ventaData.idventa
        imgDetails.style.display = 'none'
        ventasTable.classList.remove('d-none')
        btnModify.classList.remove('d-none')
        btnDelete.classList.remove('d-none')
        ventasTable.innerHTML = details


        //listener para peticion de actualizar venta
        btnModify.addEventListener('click')
  
        async function updateData(){
          console.log(rol.value, estado.value)
          const docID = await database.collection('ventas').doc(ventaData.id)
          await docID.update({rol: rol.value})
          await docID.update({estado: estado.value})
          window.location.reload()
        }
      }
  
  
      //agregar usuario
      const addVentaForm = document.querySelectorAll('input[required]')
      const btnSendVenta = document.getElementById('send-venta')
  
      //plantilla 
      const plantilla = {
        idventa: '',
        idcliente: '',
        nombrecliente: '',
        nombremesero: '',
        productos: '',
        cantidades: '',
        preciototal: '',
        id: ''
      }
  
      const data = []
  
      // console.log(data);
  
      btnSendVenta.addEventListener('click', e =>{
        e.preventDefault()
        //recorro inputs
        for (let i = 0; i < addVentaForm.length; i++) {
          data.push(addVentaForm[i].value)
        }
  
        //asigno data a la plantilla
        plantilla.idventa = data[0]
        plantilla.idcliente = data[1]
        plantilla.nombrecliente = data[2]
        plantilla.nombremesero = data[3]
        plantilla.productos = data[4]
        plantilla.cantidades = data[5]
        plantilla.preciototal = data[6]
        // plantilla.id = (usersRow.length + 1).toString()
        // plantilla.id = userId[userId.length]
        plantilla.id = (ventasRow.length + 1).toString()
  
        // console.log(plantilla.id)
  
        guardarVenta(plantilla)
  
      })
      
      async function guardarVenta(plantilla){
        const newVenta = await database.collection('ventas').doc(plantilla.id).set(plantilla)
        window.location.reload()
      }
  
    }catch(error){
      console.error(error)
    }
  }