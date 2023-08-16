
// Add color to the grid elements
function addcolor(event){
    if(event.type=="mouseover"){
        if(click){
            this.classList.add("active");
            this.style.cssText=`--c:${hexToRgb(color.value)}`
        }
    }
    else if(event.type=="mousedown"){
            this.classList.add("active");
            this.style.cssText=`--c:${hexToRgb(color.value)}`
    }
}

//Create grid and add eventlistener to each scuare element
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

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function getSize(){
    container.style.cssText=`grid-template-rows: repeat(${size.value}, 1fr); grid-template-columns:repeat(${size.value}, 1fr);`
    removeAllChildNodes(container);
    createpad(size.value);
    document.querySelector(".scale").textContent=`Grid size: ${size.value}x${size.value}`;
}

function cleans(){
    const items=document.querySelectorAll(".item");
    items.forEach(function(element){
        element.classList.remove("active");
        element.style.cssText=`--c:${hexToRgb(backColor.value)}`;
        element.style.backgroundColor=`${hexToRgb(backColor.value)}`})
}

function drawClick(clicked){
    click=clicked;
}

function activeButton(name){
    const buttons=document.querySelectorAll(".On");
    buttons.forEach(function (element){
        if(element.className.split(" ")[0]!=name && element.className.split(" ")[0]!="gridlines"){
            element.click();
        }
    })
}

function hexToRgb(hex){
    const r=parseInt(hex.slice(1,3),16)
    const g=parseInt(hex.slice(3,5),16)
    const b=parseInt(hex.slice(5,7),16)
    return `rgb(${r},${g},${b})`
}

function randomrgb(){
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`

}

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

function togglegrid(){ 
    const items=document.querySelectorAll(".item");
    items.forEach(function(element){
        element.classList.toggle("background")
    })
    this.classList.toggle("On");
}

function changeBackground(){
    const items=document.querySelectorAll(".item");
    items.forEach(function(element){
        if(!element.classList.contains("active")){
            element.style.cssText=`--c:${hexToRgb(backColor.value)}`;
            element.style.backgroundColor=`${hexToRgb(backColor.value)}`
        }
    })
}

let click;
let getcanvas;
const container=document.querySelector(".container");
container.addEventListener("mousedown", () => {drawClick(true)});
window.addEventListener("mouseup",() => {drawClick(false)});
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
createpad(16);
gridlines.addEventListener("click", togglegrid)
size.addEventListener("change",getSize);
erase.addEventListener("click",function (){SetAll(removeColor,this)});
clean.addEventListener("click",cleans);
rand.addEventListener("click",function (){SetAll(setRandomColor,this)})
shadeDown.addEventListener("click",function(){SetAll(lighten, this)})
Shading.addEventListener("click",function(){SetAll(shading, this)})
backColor.addEventListener("change", changeBackground)
container.ondragstart = () => {return false;};
save.addEventListener("click",function() { 
    html2canvas(container).then(function(canvas) {
        console.log(canvas.toDataURL("image/jpeg", 0.9));
        canvas.toBlob(function(blob) {
            saveAs(blob, "Canvas.png"); 
        });

    })
    
})
