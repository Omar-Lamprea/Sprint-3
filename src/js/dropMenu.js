function dropMenu(){
  const btnMenu = document.getElementById('btn-drop-menu')
  const menu = document.getElementById('menu')
  const content = document.getElementById('content')
  // console.log(content);

  btnMenu.addEventListener('click', e =>{
    menu.classList.toggle('animations-menu')
    menu.classList.toggle('menu-animations-outside')
    
    if(menu.classList.contains('animations-menu')){
      content.classList.add('animations-content')
      content.classList.remove('content-animations-outside')
    }else{
      content.classList.remove('animations-content')
      content.classList.add('content-animations-outside')
    }

  })
}