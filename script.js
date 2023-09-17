var btn = document.getElementById("btnajax");
var select = document.getElementById("breeds");
var getimg=document.getElementById('getimg');
var dogimage=document.getElementById('dog-image');
var next=document.getElementById('next');
let breedtype="";
let url=""
// btn.addEventListener("click", makerequest);
let inhet=""
function makerequest() {
    console.log("button clicked");
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://dog.ceo/api/breeds/list/all",true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status ===200){
                var responsejson=JSON.parse(xhr.responseText)
                console.log(responsejson.message);
                var breeds = Object.keys(responsejson.message);
                console.log( breeds);
                 select.innerHTML = ""; 
                for(let obj of breeds){
                    let element=`<option value="">${obj}</option>`
                    select.innerHTML+=element
                }
                

            }else{
                console.log("problem occured");
            }
        }
    };
    
    xhr.send();
    
}

makerequest();

select.addEventListener("click",()=>{
    var value = select.value;
     var text = select.options[select.selectedIndex].text;
     breedtype=text;
     url="https://dog.ceo/api/breed/"
     url+=breedtype
     url+="/images"
     
})


function image() {
    console.log("button clicked");
    const xhr=new XMLHttpRequest();
    xhr.open("GET",url,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status ===200){
                dogimgcont.innerHTML="";
                inhet="";
                var responsejson=JSON.parse(xhr.responseText)
                 console.log(responsejson);
                 for(item of responsejson.message){
                    console.log(item)
                    inhet+=`<img src=${item}>`;
                 }
                 dogimgcont.innerHTML=inhet;
            
            }else{
                console.log("problem occured");
            }
        }
    };
    
    xhr.send();
    
}

getimg.addEventListener('click',image)


// let url2="https://dog.ceo/api/breeds/list/all";

// let response=fetch(url)

// response.then((v)=>{
//     return v.json();
// }).then((breeds)=>{
//    console.log(breeds)
// })