document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  const inputDarkMode = document.getElementById('input-dark-mode')
      
  inputDarkMode.addEventListener('change', () => {
      if(inputDarkMode.checked){
         html.classList.add("dark")
      }else{
          html.classList.remove("dark")
      }
  })
})