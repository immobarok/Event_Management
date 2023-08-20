document.getElementById('seemore-btn').addEventListener('click',function(){
    document.getElementById('nomore').style.display='block';
    document.getElementById('see-btn2').style.display='block'
    document.getElementById('see-btn1').style.display='none';
})

document.getElementById('seeless-btn').addEventListener('click',function(){
    document.getElementById('nomore').style.display='none';
    document.getElementById('see-btn1').style.display='block';
    document.getElementById('see-btn2').style.display='none';
    
})

