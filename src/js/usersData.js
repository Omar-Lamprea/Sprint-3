async function usersData(database){

  //plantilla 
  const datas = {
    nombre: 'Omar Lamprea',
    cedula: 3131232,
    email: 'lampreaomar@gmail.com',
    telefono: 321382731,
    ciudad: 'Armenia',
    estado: 'Pendiente',
    rol: 'Vendedor'
  }
  
  try{
    //lectura de datos
    const response = await database.collection('usuarios').get()
    const userList = document.getElementById('user-list')
    const usersRow = []
    showData()
    //pintar en el browser
    function showData(){
      response.forEach(users => {
        const user = users.data()
        const usertable = `
          <tr>
            <td id="${user.cedula}" style= "cursor: pointer">${user.nombre}</td>
            <td>${user.rol}</td>
          </tr>`
        userList.innerHTML += usertable
        usersRow.push(user)
      });
    }

    document.addEventListener('click', e =>{
      for (let i = 0; i < usersRow.length; i++) {
        const btnUser = document.getElementById(`${usersRow[i].cedula}`)
        if(e.target.id === btnUser.id){
          userDetails(usersRow[i])
        }
      }
    })

    function userDetails(userData){
      const usersTable = document.getElementById('user-details')
      const title = document.getElementById('user-name')
      const imgDetails = document.getElementById('img-details')
      const btnSave = document.getElementById('btn-save-data')
      const details = `
        <tr>
          <th>Nombre</th>
          <td>${userData.nombre}</td>
        </tr>
        <tr>
          <th>Cédula</th>
          <td>${userData.cedula}</td>
        </tr>
        <tr>
          <th>Email</th>
          <td>${userData.email}</td>
        </tr>
        <tr>
          <th>Tel</th>
          <td>${userData.telefono}</td>
        </tr>
        <tr>
          <th>Ciudad</th>
          <td>${userData.ciudad}</td>
        </tr>
        <tr>
          <th>Estado</th>
          <td>
            <select name="estado" id="estado">
              <option value="Pendiente">Pendiente</option>
              <option value="Disponible">Disponible</option>
              <option value="Aprobado">Aprobado</option>
            </select>
          </td>
        </tr>
        <tr>
          <th>Rol</th>
          <td>
            <select name="rol" id="rol">
              <option value="Administrador">Administrador</option>
              <option value="Vendedor">Vendedor</option>
            </select>
          </td>
        </tr>`

      //pintar tabla de detalles
      title.innerHTML = userData.nombre
      imgDetails.style.display = 'none'
      usersTable.classList.remove('d-none')
      btnSave.classList.remove('d-none')
      usersTable.innerHTML = details

      //asignar valores de estado y rol de la bd a los select de la tabla
      const estado = document.getElementById('estado')
      const rol = document.getElementById('rol')

      for (let i = 0; i < estado.children.length; i++) {
        if(userData.estado === estado.children[i].value){
          // console.log(estado.children[i].value);
          estado.children[i].setAttribute('selected', '')
        }
      }

      for (let i = 0; i < rol.children.length; i++) {
        if(userData.rol === rol.children[i].value){
          // console.log(rol.children[i].value);
          rol.children[i].setAttribute('selected', '')
        }
      }

      //listener para peticion de actualizar rol y estado
      btnSave.addEventListener('click', updateData)

      async function updateData(){
        console.log(rol.value, estado.value)
        const docID = await database.collection('usuarios').doc(userData.id)
        await docID.update({rol: rol.value})
        await docID.update({estado: estado.value})
        window.location.reload()
      }
    }


    //agregar usuario
    const addUserForm = document.querySelectorAll('input[name]')
    const sendUser = document.getElementById('send-user')
    sendUser.addEventListener('click', e =>{
      console.log(addUserForm)
    })

  }catch(error){
    console.error(error)
  }
}