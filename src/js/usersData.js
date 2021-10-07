async function usersData(database){

  const datas = {
    nombre: 'Omar Lamprea',
    cedula: 3131232,
    email: 'lampreaomar@gmail.com',
    telefono: 321382731,
    ciudad: 'Armenia',
    estado: {
      activo:['Disponible'],
      inactivo : ['Pendiente', 'Aprobado']
    },
    rol:{
      activo: ['Administrador'],
      inactivo:['Vendedor']
    }
  }
  
  try{
    const response = await database.collection('usuarios').get()
    const userList = document.getElementById('user-list')
    
    response.forEach(user => {
      const usertable = `
        <tr>
          <td>${user.data().nombre}</td>
          <td>${user.data().rol.activo}</td>
        </tr>`
      userList.innerHTML += usertable
    });
  }catch(error){
    console.error(error)
  }

}