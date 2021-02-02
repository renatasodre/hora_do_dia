function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} hora(s) e ${min} minuto(s).`
    if (hora >= 7 && hora < 12) {
        img.src = "manha.png"
        document.body.style.background = "#76c4fa"
        msg.innerHTML = `Agora são ${hora} hora(s) e ${min} minuto(s). </br> Bom dia! Vamos varrer a calçada? `
    } else if (hora >= 12 && hora <= 18) {
        img.src = "tarde.png"
        document.body.style.background = "#da8654"
        msg.innerHTML = `Agora são ${hora} hora(s) e ${min} minuto(s). </br> Boa tarde! É hora de chá com bolinhos.`
    } else if (hora > 18 && hora < 24) {
        img.src = "noite.png"
        document.body.style.background = "#6f4e6b"
        msg.innerHTML = `Agora são ${hora} hora(s) e ${min} minuto(s). </br> Boa noite! Vamos ler um bom livro?`
    } else {
        img.src = "madrugada.png"
        document.body.style.background = "#755c22"
        msg.innerHTML = `Agora são ${hora} hora(s) e ${min} minuto(s). </br> Boa noite, coruja!`
    }
}