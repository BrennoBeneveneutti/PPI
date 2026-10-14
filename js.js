const MIN = 0;
const MAX = 100;
const BONUS_TIME_MS = 10000;
const BONUS_BUTTON_LIFETIME_MS = 1500;

const resultadoInput = document.getElementById('resultado');
const botaoGerar = document.getElementById('gerar');
const contador = document.getElementById('contador');
const plusFloat = document.getElementById('plus-float');
const bonusButton = document.getElementById('bonus-button');
const bonusScoreElement = document.getElementById('bonus-score');

let cliqueTotal = 0;
let bonusScore = 0;
let bonusAtivo = false;
let bonusTimer = null;
let bonusSpawnTimer = null;
let bonusHideTimer = null;

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarCorAleatoria() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 80%, 55%)`;
}

function mostrarFloatNoMouse(event, texto = '+1') {
    if (!plusFloat) return;

    const cor = gerarCorAleatoria();
    plusFloat.textContent = texto;
    plusFloat.style.color = cor;
    plusFloat.style.left = `${event.clientX}px`;
    plusFloat.style.top = `${event.clientY}px`;
    plusFloat.style.opacity = '1';
    plusFloat.style.transform = 'translate(-50%, -120%)';

    setTimeout(() => {
        plusFloat.style.opacity = '0';
        plusFloat.style.transform = 'translate(-50%, -150%)';
    }, 220);
}

function ativarBonus() {
    bonusAtivo = true;
    document.body.classList.add('rgb-active');

    if (bonusTimer) {
        clearTimeout(bonusTimer);
    }

    bonusTimer = setTimeout(() => {
        bonusAtivo = false;
        document.body.classList.remove('rgb-active');
    }, BONUS_TIME_MS);
}

function esconderBonusButton() {
    if (!bonusButton) return;

    bonusButton.style.opacity = '0';
    bonusButton.style.transform = 'scale(0.8)';

    if (bonusHideTimer) {
        clearTimeout(bonusHideTimer);
    }

    bonusHideTimer = setTimeout(() => {
        bonusButton.style.display = 'none';
    }, 300);
}

function mostrarBonusButton() {
    if (!bonusButton) return;

    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);

    bonusButton.style.left = `${x}px`;
    bonusButton.style.top = `${y}px`;
    bonusButton.style.display = 'flex';
    bonusButton.style.opacity = '1';
    bonusButton.style.transform = 'scale(1)';

    if (bonusHideTimer) {
        clearTimeout(bonusHideTimer);
    }

    bonusHideTimer = setTimeout(() => {
        esconderBonusButton();
    }, BONUS_BUTTON_LIFETIME_MS);
}

function agendarBonusAleatorio() {
    const tempoAleatorio = 1000 + Math.random() * 19000;

    if (bonusSpawnTimer) {
        clearTimeout(bonusSpawnTimer);
    }

    bonusSpawnTimer = setTimeout(() => {
        mostrarBonusButton();
        agendarBonusAleatorio();
    }, tempoAleatorio);
}

if (botaoGerar && resultadoInput) {
    botaoGerar.addEventListener('click', (event) => {
        const numeroAleatorio = gerarNumeroAleatorio(MIN, MAX);
        resultadoInput.value = numeroAleatorio;

        cliqueTotal += 1;
        if (contador) {
            contador.textContent = cliqueTotal;
        }

        mostrarFloatNoMouse(event, '+1');
    });
}

document.addEventListener('click', (event) => {
    const alvo = event.target;

    if (alvo === botaoGerar) {
        return;
    }

    if (alvo === bonusButton) {
        event.stopPropagation();
        return;
    }

    if (alvo.closest('#bonus-button')) {
        event.stopPropagation();
        return;
    }

    cliqueTotal += 1;
    if (contador) {
        contador.textContent = cliqueTotal;
    }
    mostrarFloatNoMouse(event, '+1');
});

if (bonusButton) {
    bonusButton.addEventListener('click', (event) => {
        event.stopPropagation();
        bonusScore += 10;
        if (bonusScoreElement) {
            bonusScoreElement.textContent = bonusScore;
        }

        ativarBonus();
        esconderBonusButton();
        mostrarFloatNoMouse(event, '+10');
    });
}

agendarBonusAleatorio();