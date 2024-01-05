const clock=document.querySelector('#clock')
const banner= document.querySelector('#banner')
banner.addEventListener('click',function(){

    setInterval(function(){
        let date= new Date();
        clock.innerHTML=date.toLocaleTimeString();
    },1000)
})

/*setInterval(function(){
    let date= new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000)*/