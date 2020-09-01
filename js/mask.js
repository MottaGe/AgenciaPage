/*var maskTel = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
  },
  options = {onKeyPress: function(val, e, field, options) {
          field.mask(maskTel.apply({}, arguments), options);
      }
  };
  
  $('#tel').mask(maskTel, options);
*/



$(document).ready(function(){
    
    
           $('#tel').mask('(00) 00000-0009');
  
});
  
/*
const telDigitado = $("#tel").text();
$(document).ready(function(){
    
    var Ntel = telDigitado.split(" ").length;
    let textoAjustado;
        if(Ntel) {
           $('#tel').mask('(00) 00000-0009');
        } else {
            $('#tel').mask('(00) 0000-0000')
        }
    telDigitado = textoAjustado;
 
    ;
});
*/