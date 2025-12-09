// Importação da biblioteca prompt-sync
const prompt = require('prompt-sync')();

// Desafio Classificador de NÍVEL DE HERÓI
console.log("=== CLASSIFICADOR DE NÍVEL DE HERÓI ===\n");

// Função para classificar o nível do herói
function classificarNivel(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp <= 2000) {
        return "Bronze";
    } else if (xp <= 5000) {
        return "Prata";
    } else if (xp <= 7000) {
        return "Ouro";
    } else if (xp <= 8000) {
        return "Platina";
    } else if (xp <= 9000) {
        return "Ascendente";
    } else if (xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

// Função para calcular XP necessário para próximo nível
function calcularProximoNivel(xp) {
    const niveis = [
        { nome: "Bronze", minXp: 1001 },
        { nome: "Prata", minXp: 2001 },
        { nome: "Ouro", minXp: 5001 },
        { nome: "Platina", minXp: 7001 },
        { nome: "Ascendente", minXp: 8001 },
        { nome: "Imortal", minXp: 9001 },
        { nome: "Radiante", minXp: 10001 }
    ];

    for (let nivel of niveis) {
        if (xp < nivel.minXp) {
            return {
                proximoNivel: nivel.nome,
                xpNecessario: nivel.minXp - xp
            };
        }
    }
    return null; // Já está no nível máximo
}

// Entrada de dados
let heroiNome = prompt("Digite o nome do herói: ");
let heroiExperiencia;

// Loop de validação para XP
do {
    let input = prompt("Digite a quantidade de XP do herói: ");
    heroiExperiencia = parseInt(input);
    
    if (isNaN(heroiExperiencia) || heroiExperiencia < 0) {
        console.log("❌ Erro: Digite um valor numérico válido e positivo!\n");
    }
} while (isNaN(heroiExperiencia) || heroiExperiencia < 0);

// Classificação do nível
let heroiNivel = classificarNivel(heroiExperiencia);
let proximoNivel = calcularProximoNivel(heroiExperiencia);

// Saída formatada
console.log("\n" + "=".repeat(50));
console.log(`🏆 O Herói de nome ${heroiNome} está no nível ${heroiNivel}`);
console.log(`⚡ XP atual: ${heroiExperiencia.toLocaleString()}`);

if (proximoNivel) {
    console.log(`🎯 Próximo nível: ${proximoNivel.proximoNivel}`);
    console.log(`📈 XP necessário: ${proximoNivel.xpNecessario.toLocaleString()}`);
} else {
    console.log(`👑 Parabéns! Você alcançou o nível máximo!`);
}
console.log("=".repeat(50));

// Função de teste automático (opcional)
function testarClassificador() {
    console.log("\n🧪 EXECUTANDO TESTES AUTOMÁTICOS:\n");
    
    const testCases = [
        { xp: 500, esperado: "Ferro" },
        { xp: 1500, esperado: "Bronze" },
        { xp: 3500, esperado: "Prata" },
        { xp: 6000, esperado: "Ouro" },
        { xp: 7500, esperado: "Platina" },
        { xp: 8500, esperado: "Ascendente" },
        { xp: 9500, esperado: "Imortal" },
        { xp: 15000, esperado: "Radiante" }
    ];

    testCases.forEach((teste, index) => {
        let resultado = classificarNivel(teste.xp);
        let status = resultado === teste.esperado ? "✅ PASSOU" : "❌ FALHOU";
        console.log(`Teste ${index + 1}: XP ${teste.xp} = ${resultado} ${status}`);
    });
}

// Pergunta se deseja executar testes
let executarTestes = prompt("\nDeseja executar testes automáticos? (s/n): ");
if (executarTestes.toLowerCase() === 's' || executarTestes.toLowerCase() === 'sim') {
    testarClassificador();
}