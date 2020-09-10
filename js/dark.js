document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  const modal = document.getElementById('moni')
  const inputDarkMode = document.getElementById('input-dark-mode')
      
  inputDarkMode.addEventListener('change', () => {
      if(inputDarkMode.checked){
         html.classList.add("dark") 
      }else{
          html.classList.remove("dark") || modal.classList.add("dark")
      }
  })

  inputDarkMode.addEventListener('change', () => {
    if(inputDarkMode.checked){
       modal.classList.add("dark") 
    }else{
        modal.classList.remove("dark")
    }
  })
})