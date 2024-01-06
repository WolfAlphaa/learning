const countvalue=document.querySelector('#counter');
function decreament(){
    let value=parseInt(countvalue.innerText);
    value=value-1;
    countvalue.innerText=value;
};

function increament(){
    let value=parseInt(countvalue.innerText);
    value=value+1;
    countvalue.innerText=value;
};