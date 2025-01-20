

let id=document.getElementById('colour1')

const hexGenerator=()=>{

let hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
let hash='#'

for(let i=0;i<6;i++){

let random=Math.floor(Math.random()*hex.length)

hash+=hex[random];
}

return hash

}


const colorPaletteGenerator=()=>{
const colorPalette=[];
for(let i=0;i<4;i++){
colorPalette.push(hexGenerator());
}
return colorPalette;
};



const renderColorPalette=()=>{
liv=document.getElementById('col1');
liv.innerHTML = "";
// const content = element.innerHTML;

const colorPalette=colorPaletteGenerator();

colorPalette.forEach((colour,e)=>{
const color=document.createElement('div')
liv=document.getElementById('col1');
color.id=`colour${e+1}`
color.style.background=colour
color.className='li'
Tag=document.createElement('p')
Tag.id=`colour${e+1}Tag`;
Tag.innerHTML=colour;
Tag.className='colTag';


color.appendChild(Tag)
liv.appendChild(color)

console.log(color);

console.log('hogya');
});







const copytoClipBoard=(id)=>{
    const el=document.getElementById(id);

    navigator.clipboard
    .writeText(el.innerText)
    .then(()=>{
        alert('copied');
    }).catch((err)=>{
        alert('could not');
    });
};

const colTag=document.querySelectorAll('.colTag');
colTag.forEach((tag,e)=>{
    tag.addEventListener('click',()=>
    copytoClipBoard(`colour${e+1}Tag`));
});
};

renderColorPalette();
document.getElementById('button').addEventListener('click',renderColorPalette);



