document.getElementById('afif').addEventListener('click', function(){
    const name = document.getElementById('afif-hossain') ;
    const list = document.getElementById('list') ;
    const olList = list.innerHTML = `<li></Li>` ;
    list.appendChild(olList)
    console.log(list) ;
})