
//custom method

setInterval(() => {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();    
    var format = date.getHours() <12 ? 'am':'pm';

    document.getElementById('class').innerHTML=`${h} :${m} :${s} ${format}`;
}, 1000);


//built-in method

setInterval(()=>{
    var date = new Date();
 var time = date.toLocaleTimeString();
 document.getElementById('class').innerHTML =time;
},1000);