function bd() {
        let data = [
                        {id:1, nome:"Jonh Wick", login:"wick", senha:"1234", email:"wick@ig.com"},
                        {id:2, nome:"Matheus Molon", login:"Molon", senha:"1234", email:"molon@ig.com"},
                        {id:2, nome:"Lucas Martins", login:"Lucas", senha:"1234", email:"Lucas@ig.com"}
                   ]

        let json = JSON.stringify(data)

        localStorage.setItem("meubanco", json)

        return json
}

function adicionar() {
    let bd = JSON.parse(localStorage.getItem("meubanco"))

    let ids = Date.now()
    let nome = document.querySelector("#nome").value
    let lg = document.querySelector("#login").value
    let sn = document.querySelector("#senha").value
    let mail = document.querySelector("#email").value

    let cad = {id:ids, nome:nome, login:lg, senha:sn, email:mail}

bd.push(cad)

let json = JSON.stringify(bd)

localStorage.setItem("meubanco", json)

}

//const dados = bd()

//console.log(dados)
