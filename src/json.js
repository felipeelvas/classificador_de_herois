//JSON  -  JavaScript Object Notation
// chave e valor com o obejtivo de transferir dados
let invoice = {
    nome : "Felipe",
    idade : 38,
    products : {  
        0: ["mouse 2xm",  29.90],
        1: ["Teclado mecânico",  129.99],
        2: ["Monitor 4k", 899.99]
    }
}



generateInvoice(invoice)

function generateInvoice(invoice) {
    console.log(`Comprador: ${invoice.nome}`)
    console.log(`Idade: ${invoice.idade} anos`)
    console.log("----------------")
//    console.log(`Produtos são: ${Object.values(invoice.products)}`) // ou console.log(`Produtos são: ${invoice.products}`)
    for ( let index in invoice.products ) {
        let [productName, productPrice] = invoice.products[index]
        console.log(`Produto: ${productName} - Preço: R$ ${productPrice.toFixed(2)}`)
    }
    console.log("----------------")
}