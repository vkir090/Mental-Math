(function(){ 
  try{ 

  }catch(e){ 
    var box=document.createElement('div'); 
    box.style.position='fixed'; box.style.left='10px'; box.style.right='10px'; box.style.bottom='10px'; 
    box.style.background='#300'; box.style.color='#fff'; box.style.padding='12px'; box.style.zIndex='99999'; 
    box.style.border='1px solid #a44'; box.style.borderRadius='8px'; box.style.fontFamily='monospace';
    box.textContent='Boot error: '+e.message; 
    document.body.appendChild(box); 
    console.error(e); 
  } 
})();