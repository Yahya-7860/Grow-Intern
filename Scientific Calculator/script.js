"use strict";
const buttons=Array.from(document.querySelectorAll(".buttons"));
const text=document.querySelector(".text");
const one_clear=document.querySelector(".one_clear");
const clear=document.querySelector(".clear");
const solve=document.querySelector(".solve");
let cal_string='';

if(text.innerHTML===' ')
{
    text.innerHTML='0';
}

buttons.forEach((element)=>{
    element.addEventListener("click",(e)=>{
        if(e.target.tagName==='BUTTON')
        {
            if(e.target.innerText!=='CE' && e.target.innerText!=='AC' && e.target.innerText!=='=')
            {
                if(e.target.innerText=='÷')
                    cal_string+='/';
                else if(e.target.innerText=='x')
                    cal_string+='*';
                else
                    cal_string+=e.target.innerText;

                if(text.innerHTML=='0')
                    text.innerHTML=e.target.innerText;
                else
                    text.innerHTML+=e.target.innerText;
            }            
        }   
        
        if(e.target.tagName=='INPUT')
        {
            if(e.target.value=='X!')
            {
                let num=parseInt(cal_string);
                let i;
                let result=1;
                for(i=num;i>1;i--)
                {
                    result*=i;
                }
                text.innerHTML=result;
                cal_string=result;
            }
            if(e.target.value=='x^2')
            {
                let num=parseInt(cal_string);
                text.innerHTML=num*num;
                cal_string=num*num;
            }
            if(e.target.value=='√')
            {
                let num=parseInt(cal_string);
                text.innerHTML=Math.sqrt(num);
                cal_string=Math.sqrt(num);
            }
            if(e.target.value=='π')
            {
                text.innerHTML='3.1415926535897932384626433832';
                cal_string='3.1415926535897932384626433832';
            }
            if(e.target.value=='log')
            {
                let num=parseInt(cal_string);
                text.innerHTML=Math.log(num);
                cal_string=Math.log(num);
            }
            if(e.target.value=='sin')
            {
                let deg=text.innerHTML*(Math.PI / 180);
                text.innerHTML=Math.sin(deg);
                cal_string=Math.sin(deg);
            }
            if(e.target.value=='cos')
            {
                let deg=text.innerHTML*(Math.PI / 180);
                text.innerHTML=Math.cos(deg);
                cal_string=Math.cos(deg);
            }
            if(e.target.value=='tan')
            {
                let deg=text.innerHTML*(Math.PI / 180);
                text.innerHTML=Math.ceil(Math.tan(deg));
                cal_string=Math.ceil(Math.tan(deg));
            }
        }
    })
})

one_clear.addEventListener("click",()=>{
    let str = text.innerHTML;
    
    if (str.length > 1) {
        text.innerHTML = str.slice(0, -1);
        cal_string=str.slice(0,-1);
    } else {
        text.innerHTML = '0';
        cal_string='';
    }
})

clear.addEventListener("click",()=>{
    text.innerHTML = '0';
    cal_string='';
})

solve.addEventListener("click",()=>{
    // console.log(cal_string);
    text.innerHTML=eval(cal_string);
    console.log(Math.sin(30));

    //!can i use sqrt in js chatgpt
})