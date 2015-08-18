for(i=0; i<64; i++){
  var smallDiv = document.createElement('div');
  document.getElementsByTagName('body')[0].appendChild(smallDiv);
  smallDiv.style.width = "11.1%";
  smallDiv.style.paddingBottom = "11.1%";
  smallDiv.style.float = "left";
  smallDiv.style.border = "1px black solid";
  smallDiv.style.borderCollapse="collapse";
  smallDiv.style.margin = "1px";
  
  // for(i=0; i<7; i++){
  //   var colorDiv = document.createElement('div');
  //   document.getElementsByTagName('body')[0].appendChild(colorDiv);
  //   smallDiv.style.width = "11.1%";
  //   smallDiv.style.paddingBottom = "11.1%";
  //   smallDiv.style.float = "left";
  //   smallDiv.style.border = "1px black solid";
  //   smallDiv.style.borderCollapse="collapse";
  // }

  smallDiv.addEventListener('click', function(){
    this.style.backgroundColor = "red";
    // add color palete
  //   if (true) {};
  // });
  });
}



// var purple = "rgb(120,81,169)";
// var red = "rgb(255,0,0)";
// var orange = "rgb(255,165,0)";
// var yellow = "rgb(255,255,0)";
// var green = "rgb(0,128,0)";
// var indigo = "rgb(75,0,130)";
// var violet = "rgb(238,130,238)";
// var color = " ";