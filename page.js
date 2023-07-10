const meuArrayDoencas = []

class DoencaRara {
    constructor (cid, nome, criticidade, temTratamento){
        this.cid = cid;
        this.nome = nome;
        this.criticidade = criticidade;
        this.temTratamento = temTratamento;
    }
}

let usuario = prompt("Usuario:")
localStorage.setItem("userAcess",usuario)
let userLogado = localStorage.getItem(usuario)

const ordemCriticidadeAsc = (a,b) => a.criticidade - b.criticidade

meuArrayDoencas.push(new DoencaRara("1122" , "Lupus" , 2 , true))
meuArrayDoencas.push(new DoencaRara("2233" , "Angioedema" , 3 , true))
meuArrayDoencas.push(new DoencaRara("6644", "Esclerose Lateral Amiotrófica" , 1 , false))
meuArrayDoencas.push(new DoencaRara("884544", "HPTEC" , 1 , false))

function incluirDoenca(){
    let resposta = "Doença Incluída!"
    let novaDoenca = {
        cid: document.getElementById("cid_number").value,
        nome: document.getElementById("id_desease").value,
        criticidade: Number(document.getElementById("id_criticidade").value),
        temTratamento: document.getElementById("id_tratamento").value
    }

    let validacao = true
    if (novaDoenca.temTratamento == "Sim") {
        validacao = true
    } else {
        validacao = false
    }
    let newDoenca = new DoencaRara(novaDoenca.cid , novaDoenca.nome, novaDoenca.criticidade , validacao)
    
    meuArrayDoencas.push(newDoenca)

    return console.log(resposta)
}

function listarDoencas (){
    if (userLogado != ""){
        for (const doenca in meuArrayDoencas){
            let listagem = document.getElementById("id_listaDoenca")

            listagem.innerHTML += `<p> Nome: ${doenca.nome}</p>`
            
            
        }
    }

} 


/* const meuBotao = document.createElement("button");
meuBotao.innerHTML = "Incluir Doença";
meuBotao.addEventListener("click", () => {
    incluirDoenca();
    console.log(meuArrayDoencas.sort(ordemCriticidadeAsc))
});
document.body.appendChild(meuBotao);*/


console.log(meuArrayDoencas.sort(ordemCriticidadeAsc))