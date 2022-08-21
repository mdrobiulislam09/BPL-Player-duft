document.getElementById('afif').addEventListener('click', function(){
    const name = document.getElementById('afif-hossain') ;
    const list = document.getElementById('list') ;
    const li = document.createElement('li') ;
    li.innerText = name.innerText ;
    list.appendChild(li) ;
    const button = document.getElementById('afif') ;
    button.disabled = true ;
    
})