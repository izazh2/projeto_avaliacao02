const formulario = []

const formEletronico = document.querySelector ('#form-eletronico')
const divValorTotal = document.querySelector('#div-valor-total')

formEletronico.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const dadosForm = new FormData(formEletronico)

    const formulario = {
        descricao: dadosForm.get('descricao'),
        valor: dadosForm.get('valor'),
        quantidade: dadosForm.get('quantidade'),
    }

    addFormulario()

    formEletronico.reset()
})

const addFormulario = (objFotmulario)=>{
   
    formulario.push(objFotmulario)

    listFormulario()
}

const listFormulario = () => {
   
    divValorTotal.innerHTML = ''
}



/*Valor Total do Produto
Até R$ 3000,00    Isento

Entre R$ 3000,00 até R$ 8.000,00    5%

Entre R$ 8.000,00 até R$ 12.000,00   10%

Entre R$ 12.000,00 até R$ 20.000,00    15%

Acima de R$ 20.000,00    20%
*/

