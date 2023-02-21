let textArea=document.querySelector('#text-area');
let charcount=document.querySelector('#char-count');
textArea.addEventListener('keyup',function(){
  let textlength=textArea.value.length;
  charcount.innerText=textlength;
});