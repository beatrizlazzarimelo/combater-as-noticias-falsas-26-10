const story = document.getElementById("story");
const choices = document.getElementById("choices");
const status = document.getElementById("status");

const scenes = {
    inicio: {
        text: `RACCOON CITY — 02:17 AM

A chuva cai sobre os prédios abandonados. As sirenes ecoam pelas ruas enquanto os sobreviventes se escondem em casas e estações subterrâneas.

Você é Alex, um agente enviado para investigar o desaparecimento de vários jornalistas e pesquisadores ligados à antiga Umbrella Corporation.

Seu rádio chia.

"Agente, temos uma situação crítica. Uma mensagem está circulando pela cidade dizendo que a água foi contaminada por um novo vírus. Milhares de pessoas estão fugindo, hospitais estão lotados e os serviços de emergência entraram em colapso."

Você encontra um computador ligado em uma sala de segurança. Na tela, uma mensagem anônima revela que alguém está fabricando notícias falsas para provocar o caos e esconder experimentos ilegais.

Um arquivo contém quatro possíveis pistas. Você tem pouco tempo.

O que fará?`,

        choices: [
            ["1. Investigar os arquivos do laboratório.", "laboratorio"],
            ["2. Compartilhar o alerta para avisar a cidade.", "gameover1"],
            ["3. Seguir as coordenadas enviadas por um desconhecido.", "gameover2"],
            ["4. Procurar sobreviventes e confirmar a informação.", "sobreviventes"]
        ]
    },

    laboratorio: {
        text: `LABORATÓRIO SUBTERRÂNEO — SETOR B

Você desce por uma escadaria enferrujada. O cheiro de produtos químicos permanece no ar, e as luzes piscam como se o prédio estivesse prestes a morrer.

No terminal central, você encontra relatórios sobre o Projeto ORÁCULO. A Umbrella desenvolveu um sistema capaz de produzir milhares de notícias falsas, imitando autoridades, médicos e jornalistas.

O objetivo era simples: provocar medo suficiente para que ninguém percebesse o transporte clandestino de amostras biológicas.

Você encontra três documentos. Um deles contém dados sem assinatura; outro foi publicado por um hospital; o terceiro apresenta uma gravação original de um pesquisador.

Uma criatura se move no corredor.

Você precisa decidir rapidamente como confirmar a informação antes de transmitir qualquer coisa.`,

        choices: [
            ["Comparar os documentos com os registros oficiais.", "provas"],
            ["Publicar imediatamente o primeiro arquivo encontrado.", "gameover3"]
        ]
    },

    sobreviventes: {
        text: `ESTAÇÃO DE METRÔ — ABRIGO TEMPORÁRIO

Você encontra dezenas de moradores escondidos atrás de barricadas. Todos estão assustados. Um homem afirma que viu pessoas adoecendo depois de beber água; uma mulher diz que recebeu uma mensagem garantindo que a água era segura.

As duas mensagens foram compartilhadas milhares de vezes, mas nenhuma apresenta provas verificáveis.

Uma médica voluntária entrega a você uma lista de comunicados oficiais e explica que ainda não existe confirmação de contaminação da água.

Subitamente, o sistema de som anuncia uma evacuação urgente. A gravação parece oficial, mas a médica percebe uma inconsistência: o número do protocolo não corresponde ao padrão utilizado pela prefeitura.

Você pode ajudar as pessoas, mas precisa descobrir se o anúncio é verdadeiro.`,

        choices: [
            ["Verificar o protocolo com as autoridades.", "provas"],
            ["Mandar todos evacuarem imediatamente.", "gameover4"]
        ]
    },

    provas: {
        text: `CENTRAL DE COMUNICAÇÕES — 03:46 AM

Você compara os registros oficiais, a gravação original e os documentos encontrados. A mensagem sobre a água foi manipulada: o vídeo utiliza imagens antigas e o áudio foi editado para parecer um comunicado recente.

Você também descobre que a falsa ordem de evacuação foi criada para esvaziar o abrigo e facilitar o transporte de material biológico.

No entanto, você não pode simplesmente publicar suas descobertas. Uma informação correta, divulgada sem contexto ou sem provas, também pode gerar confusão.

Você reúne as evidências, verifica sua origem e estabelece contato com uma jornalista independente que ainda está transmitindo pela rede de emergência.

Ela pergunta como vocês devem agir.`,

        choices: [
            ["Enviar as provas verificadas e explicar o contexto.", "finalbom"],
            ["Divulgar apenas os trechos mais assustadores.", "gameover5"]
        ]
    },

    finalbom: {
        text: `FINAL: A VERDADE SOBREVIVE

A jornalista transmite os documentos originais, explica como reconhecer a manipulação e divulga os comunicados confirmados pelas autoridades.

Em poucas horas, os abrigos recebem informações corretas. Os moradores deixam de compartilhar mensagens sem fonte, e equipes de emergência conseguem organizar a evacuação com segurança.

A localização do laboratório é revelada. As autoridades iniciam uma investigação contra os responsáveis pelo Projeto ORÁCULO.

Antes do amanhecer, você recebe uma última mensagem:

"Agente, a cidade ainda está de pé. Lembre-se: o medo se espalha rápido, mas a verdade precisa de provas."

Você observa o sol nascer sobre Raccoon City. A ameaça biológica ainda não foi totalmente eliminada, mas a epidemia de desinformação foi interrompida.

MISSÃO CONCLUÍDA.`,
        ending: "success"
    },

    gameover1: {
        text: `GAME OVER — PÂNICO GENERALIZADO

Você compartilha o alerta sem verificar a origem. Em minutos, a mensagem é replicada milhares de vezes e recebe detalhes inventados por outros usuários.

Hospitais ficam sobrecarregados, estradas são bloqueadas e equipes de emergência são desviadas para ocorrências falsas.

O verdadeiro transporte clandestino passa despercebido.

Você percebe tarde demais que alertar a população sem confirmar os fatos pode transformar uma suspeita em uma crise real.`,
        ending: "gameover"
    },

    gameover2: {
        text: `GAME OVER — A ARMADILHA

As coordenadas levam você a um prédio abandonado. O local está vazio, exceto por um terminal que exibe dezenas de perfis falsos e mensagens programadas.

A localização foi criada para afastar investigadores do laboratório verdadeiro.

A porta se fecha atrás de você. O rádio perde o sinal e a última mensagem aparece na tela:

"Obrigado por seguir a pista errada."

A desinformação venceu porque você confiou em uma fonte anônima sem verificar suas intenções.`,
        ending: "gameover"
    },

    gameover3: {
        text: `GAME OVER — PROVA INSUFICIENTE

Você publica o primeiro arquivo encontrado. Ele contém informações verdadeiras misturadas a dados manipulados.

A publicação perde credibilidade, e os responsáveis pelo projeto usam os erros para desacreditar todas as denúncias.

Mesmo as evidências legítimas passam a ser tratadas como falsas.

Você entende que encontrar um documento não basta: é necessário verificar sua autenticidade, sua origem e seu contexto.`,
        ending: "gameover"
    },

    gameover4: {
        text: `GAME OVER — EVACUAÇÃO FALSA

Você ordena que todos abandonem o abrigo. As pessoas correm para as ruas, separando famílias e bloqueando as equipes de resgate.

O anúncio era falso. A evacuação desorganizada deixa centenas de moradores sem proteção.

A médica tenta avisar que o protocolo não foi confirmado, mas o aviso chega tarde demais.

Uma mensagem fabricada conseguiu controlar suas decisões porque você agiu antes de verificar os fatos.`,
        ending: "gameover"
    },

    gameover5: {
        text: `GAME OVER — A MEIA-VERDADE

Você divulga somente os trechos mais assustadores. A publicação viraliza, mas o contexto desaparece.

As pessoas interpretam as evidências de maneira errada, e rumores começam a se espalhar novamente. A jornalista interrompe a transmissão porque não consegue confirmar as afirmações divulgadas.

Você tinha provas importantes, mas escolheu sensacionalismo em vez de responsabilidade.

Na luta contra a desinformação, até uma verdade pode ser usada para enganar quando é apresentada de forma distorcida.`,
        ending: "gameover"
    }
};

function loadScene(name) {
    const scene = scenes[name];

    story.textContent = scene.text;
    choices.innerHTML = "";

    if (scene.ending === "gameover") {
        story.classList.add("gameover");
        status.textContent = "MISSÃO FALHOU";
        addRestartButton();
        return;
    }

    story.classList.remove("gameover");

    if (scene.ending === "success") {
        story.classList.add("success");
        status.textContent = "MISSÃO CONCLUÍDA";
        addRestartButton();
        return;
    }

    status.textContent = "MISSÃO: INVESTIGAR E SOBREVIVER";

    scene.choices.forEach(([label, nextScene]) => {
        const button = document.createElement("button");
        button.textContent = label;
        button.onclick = () => loadScene(nextScene);
        choices.appendChild(button);
    });
}

function addRestartButton() {
    const button = document.createElement("button");
    button.textContent = "↻ Reiniciar missão";
    button.onclick = () => {
        story.classList.remove("gameover", "success");
        loadScene("inicio");
    };
    choices.appendChild(button);
}

loadScene("inicio");