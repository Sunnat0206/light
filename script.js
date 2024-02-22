function chiroqFunksiya (energiya){
    let chiroq = document.getElementsByClassName("chiroq") [0]

    if(energiya == 'on'){
        chiroq.src = 'on.jpg'
    }
    else {
        chiroq.src = 'off.jpg'
    }
}
chiroqFunksiya()