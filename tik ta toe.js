let button=document.querySelectorAll(".newbutton");
let mb=document.querySelector("#i1");
let mmb=document.querySelector("#mmb");
let mesg = document.querySelector("#mesg");
let mesgcont=document.querySelector(".messagecontainer");
let flag=true;
mesgcont.classList.remove("hide");
let count=0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  const reset =()=>{
    count=0;
    flag=true;
    mesgcont.classList.add("hide");
    enablebox();

  };
  button.forEach((newbutton) => {
    newbutton.addEventListener("click",()=>{
        if(flag)
        {
            newbutton.innerText="0";
            flag=false;
            newbutton.style.color='#15F5BA'
        }
        else
        {
            newbutton.innerText="X";
            flag=true;
            newbutton.style.color='#211951';
        }
        newbutton.disabled=true;
        count++;
        let iswinner=checkwinner();
        if(count==9 && !iswinner ){
            gamedraw();
        }

    });
});
const gamedraw=()=>{
    mesg.innerText=`Game Draw`;
    mesgcont.classList.remove("hide");
    disablebox();
  };
  const disablebox=()=>{
    for( let box of button){
        box.disabled=true;

    }
};
const enablebox=()=>{
    for( let box of button){
        box.disabled=false;
box.innerText="";
    } 

  };

  const showwiner=(winner)=>{
    mesg.innerText=`Congratulation winner is ${winner} side`;
    console.log("win");
    mesgcont.classList.remove("hide");
    disablebox();

};
  
 
  
  



const checkwinner=()=>{
    for(pattern of winPatterns){
        let pos1=button[pattern[0]].innerText;
        let pos2=button[pattern[1]].innerText;
        let pos3=button[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1===pos2 && pos2===pos3){
                showwiner(pos1);
                return true;
            }
        }

    }

};
mb.addEventListener("click",reset);
mmb.addEventListener("click",reset);