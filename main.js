let Url = document.querySelector('.Url');
let format = document.querySelector('.format');
var Size = document.querySelector('.Size');
var hidden2 = document.querySelector('.hidden2');
 
function Badgesbtn(){
    if(Url.value!=""){
      var youTu = Url.value;
      var down = format.value;
      var bSize = Size.value;
      hidden2.classList.add('active');
      
    document.querySelector('.preview').innerHTML = `
    <h1 class="text">Preview Badge Button</h1>
    <a href='${youTu}'><img alt='Badges Generator' src='${down}'/></a>
 `
    document.querySelector('.result').value = 
      `<a href='${youTu}'><img alt='Badges Generator' src='${down}' style="width:${bSize}px;" /></a>`
   }
   else{
       alert('Enter Your Url');
     }
  }

let result = document.querySelector('.result');
function Clipboard(){
     if(result.value != ""){
        const textarea = document.createElement('textarea');
        const resultE = result.value;
     if (!result) { return; }
        textarea.value = resultE;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        alert('👇👇👇Code Copied to Clipboard👇👇👇\n'+result.value);
      }
      else{
        alert('Enter Your Url');
      }
   }
