const formulario = []

const formEletronico = document.querySelector('#form-eletronico')
const divValorTotal = document.querySelector('#div-valor-total')

formEletronico.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const dadosForm = new FormData(formEletronico)

    const objFormulario = {
        descricao: dadosForm.get('descricao'),
        valor: parseFloat(dadosForm.get('valor')),
        quantidade: parseInt(dadosForm.get('quantidade'))
    }

    addFormulario(objFormulario)

    formEletronico.reset()
})

const addFormulario = (objFormulario) => {
    formulario.push(objFormulario)
    listFormulario()
}

const calcularAdicional = (valorTotal) => {
    if (valorTotal <= 3000) {
        return { percentual: 0, label: 'Isento' }
    } else if (valorTotal <= 8000) {
        return { percentual: 0.05, label: '5%' }
    } else if (valorTotal <= 12000) {
        return { percentual: 0.10, label: '10%' }
    } else if (valorTotal <= 20000) {
        return { percentual: 0.15, label: '15%' }
    } else {
        return { percentual: 0.20, label: '20%' }
    }
}

const listFormulario = () => {
    divValorTotal.innerHTML = ''

    for (let i = 0; i < formulario.length; i++) {
        const item = formulario[i]
        const valorTotal = item.valor * item.quantidade
        const adicional = calcularAdicional(valorTotal)
        const valorAdicional = valorTotal * adicional.percentual
        const totalFinal = valorTotal + valorAdicional

        divValorTotal.innerHTML += `
            <p>Descrição: ${item.descricao}</p>
            <p>Valor Unitário: R$ ${item.valor.toFixed(2)}</p>
            <p>Quantidade: ${item.quantidade}</p>
            <p>Valor Total: R$ ${valorTotal.toFixed(2)}</p>
            <p>Valor Adicional: ${adicional.label}</p>
            <p>Total com Adicional: R$ ${totalFinal.toFixed(2)}</p>
            <hr>
        `
    }
}
