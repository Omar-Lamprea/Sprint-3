async function ventasR(database){
  
    try{
      //lectura de datos
      const response = await database.collection('ventas').get()
      const ventaListr = document.getElementById('ventar-list')
      const ventasRowr = []
      const ventaIdr = []
      showData()
      //pintar en el browser
      function showData(){
        response.forEach(ventasr => {
          ventaIdr.push(ventasr.id)
          const ventar = ventasr.data()
          const ventatabler = `
            <tr>
              <td>${ventar.idventa}</td>
              <td>${ventar.idcliente}</td>
              <td>${ventar.nombrecliente}</td>
              <td>${ventar.nombremesero}</td>
              <td>${ventar.productos}</td>
              <td>${ventar.cantidades}</td>
              <td>${ventar.preciototal}</td>
            </tr>`
          ventaListr.innerHTML += ventatabler
          ventasRowr.push(ventar)
        });
      }
  
    }catch(error){
      console.error(error)
    }
  }