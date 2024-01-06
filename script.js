
function plus(){
    
    let currentvalue=parseInt(document.getElementById('count').innerText);
    
    currentvalue=currentvalue+1;
    document.getElementById('count').innerText=currentvalue;
}
function minus(){
  
    let currentvalue=parseInt(document.getElementById('count').innerText);
   
    currentvalue=currentvalue-1;
    document.getElementById('count').innerText=currentvalue;
}