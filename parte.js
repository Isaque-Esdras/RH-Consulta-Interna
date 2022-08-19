var inpute1 = document.getElementById('nome')
var inpute2 = document.getElementById('idade')
var selectt = document.getElementById('seletor')
var dive = document.getElementById('resultado')
var array = []

function adicionar() {
    if (praIdade(inpute2.value) && !praLista(inpute2.value, array)) {
        array.push(Number(inpute2.value))
        var name = inpute1.value
        var anexo = document.createElement('option')
        anexo.text = `Idade: ${inpute2.value} anos, nome: ${name}.`
        selectt.appendChild(anexo)
        dive.innerHTML = ``

        inpute1.value = ``
        inpute1.focus()
        inpute2.value = ``
        inpute2.focus()
    }else{

        window.alert("Número inválido ou já encontrado na lista!")
    }
}

function praIdade(n) {
    
    if (Number(n)>=18 && Number(n)<68) {
        return true
    }else{
        return false
    }
}

function praLista(n, l) {
    
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }
}

function finalizar() {
   
    if (array.length == 0) {
        window.alert("Adicione valores antes de finalizar.")
    }else{
   var total = array.length

   var maior = array[0]
   var menor = array[0]

   for (const apos in array) {
    
       if (array[apos] > maior) {
        maior = array[apos]
       }
       if (array[apos] < menor) {
        menor = array[apos]
       }

        }

     
    dive.innerHTML = ``
    dive.innerHTML += `<p> Total de candidatos: ${total}</p>`
    dive.innerHTML += `<p> A maior idade de um dos candidatos é ${maior} anos.</p>`
    dive.innerHTML += `<p> A menor idade de um dos candidatos é ${menor} anos. </p>`
}}