
// Add color to the grid elements
function addcolor(event){
    if(event.type=="mouseover"){
        if(click){
            this.classList.add("active");
            this.style.cssText=`--c:${hexToRgb(color.value)}`;
            console.log(color.value)
        }
    }
    else if(event.type=="mousedown"){
            this.classList.add("active");
            this.style.cssText=`--c:${hexToRgb(color.value)}`
    }
}

//Create grid and add eventlistener to each square element
function createpad(rows){
    for(let i=1;i<=rows*rows;i++){
        const div=document.createElement("div");
        div.classList.add("item");
        div.addEventListener("mouseover",addcolor)
        div.addEventListener("mousedown",addcolor)
        div.style.cssText="--c: rgb(255,255,255)"
        container.appendChild(div);
    
    }
}

//Clear the grid of all its elements
function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

/*Retrieve the size of the grid from the input erase the last grill and create a new grid with
the updated value */
function getSize(){
    container.style.cssText=`grid-template-rows: repeat(${size.value}, 1fr); grid-template-columns:repeat(${size.value}, 1fr);`
    removeAllChildNodes(container);
    createpad(size.value);
    document.querySelector(".scale").textContent=`Grid size: ${size.value}x${size.value}`;
}

//Clean grid an set its color to the background color value
function cleans(){
    const items=document.querySelectorAll(".item");
    items.forEach(function(element){
        element.classList.remove("active");
        element.style.cssText=`--c:${hexToRgb(backColor.value)}`;
        element.style.backgroundColor=`${hexToRgb(backColor.value)}`})
}

//Determine if the mouse is clicked or not
function drawClick(clicked){
    click=clicked;
}

//Deactivate any other active drawing mode besides the one clicked by the user
function activeButton(name){
    const buttons=document.querySelectorAll(".On");
    buttons.forEach(function (element){
        if(element.className.split(" ")[0]!=name && element.className.split(" ")[0]!="gridlines"){
            element.click();
        }
    })
}

//Tranform rgb value into hex
function hexToRgb(hex){
    const r=parseInt(hex.slice(1,3),16)
    const g=parseInt(hex.slice(3,5),16)
    const b=parseInt(hex.slice(5,7),16)
    return `rgb(${r},${g},${b})`
}

//Generate a randomrgb 
function randomrgb(){
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`

}

//Change the color of the selected grid elements back to the background color
function removeColor(event){
    if(event.type=="mouseover"){
        if(click){
            this.classList.remove("active");
            this.style.cssText=`--c:${hexToRgb(backColor.value)}`;
            this.style.backgroundColor=`${hexToRgb(backColor.value)}`
        }
    }
    else if(event.type=="mousedown"){
        this.classList.remove("active");
        this.style.cssText=`--c:${hexToRgb(backColor.value)}`;
        this.style.backgroundColor=`${hexToRgb(backColor.value)}`
    }
}

//Change the draw color to a rainbow painting each cell with a random color
function setRandomColor(event){
    if(event.type=="mouseover"){
        if(click){
            this.classList.add("active");
            this.style.cssText=`--c:${randomrgb()}`;
        }
    }
    else if(event.type=="mousedown"){
        this.classList.add("active");
        this.style.cssText=`--c:${randomrgb()}`;
    }
}

//Remove the draw function and add a new function to each grid element depending on the mode selected
function SetAll(funct,e){
    activeButton(e.className.split(" ")[0]);
    const items=document.querySelectorAll(".item");
    items.forEach(function(element){
        if(e.classList.contains("On")){
            element.addEventListener("mouseover",addcolor)
            element.addEventListener("mousedown",addcolor)
            element.removeEventListener("mouseover",funct);
            element.removeEventListener("mousedown",funct);}
        else{
            element.addEventListener("mouseover", funct);
            element.addEventListener("mousedown", funct);
            element.removeEventListener("mouseover",addcolor)   
            element.removeEventListener("mousedown",addcolor)}
    })
    e.classList.toggle("On");
}

//Add 25 to the rgb value of an element to lighten each one and if it reaches the maximun value do nothing
function lighten(event){
    if(event.type=="mouseover"){

        if(click){
            let rgb=getComputedStyle(this).getPropertyValue("--c");
            console.log(rgb.substring(4).split(")")[0].split(","));
            rgb=rgb.substring(4).split(")")[0].split(",");
            let r, g, b;
            if(+rgb[0]+25>255){
                r=255;
            }
            else{
                r=+rgb[0]+25;
            }

            if(+rgb[1]+25>255){
                g=255;
            }
            else{
                g=+rgb[1]+25;
            }

            if(+rgb[2]+25>255){
                b=255;
            }
            else{
                b=+rgb[2]+25;
            }
            this.classList.add("active");
            this.style.cssText=`--c:rgb(${r},${g},${b})`;
            console.log(this.style.cssText)
         
        }  
    }
    else if(event.type=="mousedown"){
        let rgb=getComputedStyle(this).getPropertyValue("--c");
        console.log(rgb.substring(4).split(")")[0].split(","));
        rgb=rgb.substring(4).split(")")[0].split(",");
        let r, g, b;
        if(+rgb[0]+25>255){
            r=255;
        }
        else{
            r=+rgb[0]+25;
        }

        if(+rgb[1]+25>255){
            g=255;
        }
        else{
            g=+rgb[1]+25;
        }

        if(+rgb[2]+25>255){
            b=255;
        }
        else{
            b=+rgb[2]+25;
        }
        this.classList.add("active");
        this.style.cssText=`--c:rgb(${r},${g},${b})`;
    }
}

//Substract 25 to the rgb value of an element to shade each one and if it reaches the minimum value do nothing
function shading(event){
    if(event.type=="mouseover"){

        if(click){
            let rgb=getComputedStyle(this).getPropertyValue("--c");
            console.log(rgb.substring(4).split(")")[0].split(","));
            rgb=rgb.substring(4).split(")")[0].split(",");
            let r, g, b;
            if(+rgb[0]-25<0){
                r=0;
            }
            else{
                r=+rgb[0]-25;
            }

            if(+rgb[1]-25<0){
                g=0;
            }
            else{
                g=+rgb[1]-25;
            }

            if(+rgb[2]-25<0){
                b=0;
            }
            else{
                b=+rgb[2]-25;
            }
            this.classList.add("active");
            this.style.cssText=`--c:rgb(${r},${g},${b})`;
         
        }  
    }
    else if(event.type=="mousedown"){
        let rgb=getComputedStyle(this).getPropertyValue("--c");
        console.log(rgb.substring(4).split(")")[0].split(","));
        rgb=rgb.substring(4).split(")")[0].split(",");
        let r, g, b;
        if(+rgb[0]-25<0){
            r=0;
        }
        else{
            r=+rgb[0]-25;
        }

        if(+rgb[1]-25<0){
            g=0;
        }
        else{
            g=+rgb[1]-25;
        }

        if(+rgb[2]-25<0){
            b=0;
        }
        else{
            b=+rgb[2]-25;
        }
        this.classList.add("active");
        this.style.cssText=`--c:rgb(${r},${g},${b})`;
    }
}

//Toggle the grid elements border
function togglegrid(){ 
    const items=document.querySelectorAll(".item");
    items.forEach(function(element){
        element.classList.toggle("background")
    })
    this.classList.toggle("On");
}

//Update the background color for each unactive element in the grid
function changeBackground(){
    const items=document.querySelectorAll(".item");
    items.forEach(function(element){
        if(!element.classList.contains("active")){
            element.style.cssText=`--c:${hexToRgb(backColor.value)}`;
            element.style.backgroundColor=`${hexToRgb(backColor.value)}`
        }
    })
}

//Add click animation to the option buttons
function clickbutton(){
    const options=document.querySelectorAll(".option");
    options.forEach(function(element){
        element.addEventListener("mousedown",function(){
            this.classList.add("On")
        })
        window.addEventListener("mouseup",function(){
            element.classList.remove("On")
        })
    })
}

//grab the color of a grid element tranform it to hex and asign it as the new draw color
function getColor(){
    let rgbvalues=this.style.cssText.split(" ")[1].split(");")[0].split("(")[1].split(",");

    let r=(+rgbvalues[0]).toString(16)
    let g=(+rgbvalues[1]).toString(16)
    let b=(+rgbvalues[2]).toString(16)

    if(r.length==1){
        r="0"+r;
    }

    if(g.length==1){
        g="0"+g;
    }

    if(b.length==1){
        b="0"+b;
    }

    color.value="#"+r+g+b;

}

function setAllClick(){
    const button=this
    activeButton(button.className.split(" ")[0]);
    const items=document.querySelectorAll(".item");
    items.forEach(function(element){
        if(button.classList.contains("On")){
            element.addEventListener("mouseover",addcolor)
            element.addEventListener("mousedown",addcolor)
            element.removeEventListener("click",getColor);
        }
        else{
            element.addEventListener("click", getColor);
            element.removeEventListener("mouseover",addcolor)   
            element.removeEventListener("mousedown",addcolor)}
    })
    button.classList.toggle("On");
}

function mobileOrDesktopGRid(){
    if(window.innerWidth<500){
        size.setAttribute("max","60")
      }
      else
      size.setAttribute("max","100")
}

//Create all the variable needded for the page
let click;
let getcanvas;
const container=document.querySelector(".container");
const size=document.querySelector(".size");
const erase=document.querySelector(".eraser");
const clean=document.querySelector(".clean");
const color=document.querySelector(".color");
const rand=document.querySelector(".random");
const shadeDown=document.querySelector(".shadedown");
const Shading=document.querySelector(".Shading");
const gridlines=document.querySelector(".gridlines")
const backColor=document.querySelector(".backgroundcolor")
const save=document.querySelector(".save")
const grabColor=document.querySelector(".grabcolor")

//Add event listeners to each element to give them interactivity
container.addEventListener("mousedown", () => {drawClick(true)});
window.addEventListener("mouseup",() => {drawClick(false)});
gridlines.addEventListener("click", togglegrid)
size.addEventListener("change",getSize);
erase.addEventListener("click",function (){SetAll(removeColor,this)});
clean.addEventListener("click",cleans);
rand.addEventListener("click",function (){SetAll(setRandomColor,this)})
shadeDown.addEventListener("click",function(){SetAll(lighten, this)})
Shading.addEventListener("click",function(){SetAll(shading, this)})
grabColor.addEventListener("click", setAllClick)
backColor.addEventListener("change", changeBackground)
container.ondragstart = () => {return false;};

//Create a 16*16 grid 
createpad(16);

//Save the drawing in a jpg format
clickbutton();
save.addEventListener("click",function() { 
    html2canvas(container).then(function(canvas) {
        canvas.toBlob(function(blob) {
            saveAs(blob, "Canvas.png"); 
        });

    })
    
})

//adapt the grid max size depending on the screen size
mobileOrDesktopGRid();
window.addEventListener("resize",mobileOrDesktopGRid)