var purple = "rgb(120,81,169)";
var red = "rgb(255,0,0)";
var orange = "rgb(255,165,0)";
var yellow = "rgb(255,255,0)";
var green = "rgb(0,128,0)";
var indigo = "rgb(75,0,130)";
var violet = "rgb(238,130,238)"; 
var colorPal = [purple,red,orange,yellow,green,indigo,violet];
var emptyColor;
var colorDiv;
var smallDiv;



for(i=0; i<1995; i++){
  smallDiv = document.createElement('div');
  document.getElementsByTagName('body')[0].appendChild(smallDiv);
  smallDiv.style.width = "1%";
  smallDiv.style.paddingBottom = "1%";
  smallDiv.style.float = "left";
  smallDiv.style.border = "1px black solid";
  // smallDiv.style.borderCollapse="collapse";
  smallDiv.style.margin = "1px";
  


  smallDiv.addEventListener('click', function(){
    this.style.backgroundColor = emptyColor;
    // smallDiv.style.backgroundColor
    
  });
}

  
for(i=0; i<7; i++){
  colorDiv = document.createElement('div');
  document.getElementsByTagName('body')[0].appendChild(colorDiv);
  // style to be smaller
  colorDiv.style.backgroundColor = colorPal[i];
  colorDiv.style.width = "2%";
  colorDiv.style.paddingBottom = "1%";
  colorDiv.style.float = "left";
  colorDiv.style.border = "1px black solid";
  // colorDiv.style.borderCollapse="collapse";

  colorDiv.addEventListener('click',callback);

   function callback(){
    // var divGetter = document.getElementsByTagName('div')[0];
    emptyColor = this.style.backgroundColor;  
   }
}

  // // add event listener to set  color
  // function colorListener(){
    
  // }