/*
function modalMoni(modalM){
  const modal = document.getElementById(modalM);
  modal.addEventListener('click', function(){
    console.log("to aqui")
    
  });
};

const mm = document.querySelector('.btnModal');
mm.addEventListener('click', function(){ 
  modalMoni('modal-moni')
});
*/

document.addEventListener('DOMContentLoaded', () => {
  const Modal = document.getElementById('modal-moni');
  const Active = document.getElementById('ModalM');
  const close = document.getElementById('close')
  
  Active.addEventListener('click', () => {
          Modal.classList.add("show");
  });
  
  close.addEventListener('click', () =>{
    Modal.classList.remove("show");
  });

});

document.addEventListener('DOMContentLoaded', () => {
  const Modal = document.getElementById('modal-atelie');
  const Active = document.getElementById('ModalA');
  const close = document.getElementById('Fechar')
  
  Active.addEventListener('click', () => {
          Modal.classList.add("show");
  });
  
  close.addEventListener('click', () =>{
    Modal.classList.remove("show");
  });
  
});