function nameValue(nameId, selectID) {
    const name = document.getElementById(nameId) ;
    const list = document.getElementById('list') ;
    const li = document.createElement('li') ;
    li.innerText = name.innerText ;
    list.appendChild(li) ;
    const button = document.getElementById(selectID) ;
    button.disabled = true ;
}


document.getElementById('afif').addEventListener('click', function(){
    nameValue('afif-hossain', 'afif')
})
document.getElementById('liton').addEventListener('click', function(){
    nameValue('liton-das', 'liton')
})
document.getElementById('fizz').addEventListener('click', function(){
    nameValue('mustafizzur-rahaman', 'fizz')
})
document.getElementById('riad').addEventListener('click', function(){
    nameValue('mahmudullah-riad', 'riad')
})
document.getElementById('sakib').addEventListener('click', function(){
    nameValue('sakib-al-hasan', 'sakib')
})
document.getElementById('saif').addEventListener('click', function(){
    nameValue('saif-uddin', 'saif')
})


function Value(cost) {
    const taka = document.getElementById(cost) ;
    const takaSting = taka.value ;
    const costTaka = parseFloat(takaSting) ;
    if(isNaN(costTaka)) {
        alert ('type a valid number') ;
        return 0 ;
    }
    return costTaka ;
}

document.getElementById('calculate').addEventListener('click', function(){
    const playerValue = Value('per-player') ;
    const playerCost = document.getElementById('player-cost') ;
    playerCost.innerText = playerValue ;   
})
document.getElementById('calculate-total').addEventListener('click', function(){
    const playerCost = document.getElementById('player-cost') ;
    const playerCostSting = playerCost.innerText ;

    const tottalCost = parseFloat(playerCostSting) + Value('manager') + Value('coach') ;
    const tottal = document.getElementById('tottalCost')
    tottal.innerText =tottalCost ;
})