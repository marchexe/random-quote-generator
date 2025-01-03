const veritasQuotes = [
    "В Veritas инновации — это не выбор, а ответственность за создание будущего. - Veritas Tech Group",
    "Veritas Tech Group: Мы создаём технологии, которые меняют завтрашний день уже сегодня.",
    "Сердце Veritas — это решение реальных проблем с непревзойдённой точностью.",
    "Veritas Tech Group превращает амбициозные идеи в революционные реальности.",
    "Данные управляют решениями, а Veritas превращает данные в новые возможности. - Veritas Tech Group",
    "В Veritas каждая задача — это шанс для инноваций и совершенства.",
    "Veritas Tech Group: Мы строим будущее шаг за шагом через инновации.",
    "В мире технологий скорость важна, но в Veritas успех определяется точностью.",
    "Наследие Veritas — это инновации, а её будущее не имеет границ. - Veritas Tech Group",
    "Великие компании не только адаптируются, но и переопределяют правила. Veritas делает и то, и другое.",
    "Veritas: Там, где технологии встречаются с человеческой изобретательностью.",
    "В Veritas Tech Group инновации рождаются на стыке креативности и инженерного мастерства.",
    "Veritas не просто создаёт решения — она создаёт трансформационные возможности.",
    "Миссия Veritas ясна: предоставить миру передовые технологии.",
    "Veritas Tech Group ежедневно превращает возможности в реальность.",
    "Veritas: Мы превращаем данные в действия для лучшего будущего.",
    "Veritas Tech Group — это не просто название, а обязательство быть лидером в технологиях.",
    "Инновации — это суть Veritas, где невозможное становится реальностью.",
    "Будущее — это не то, что случается; Veritas создаёт его сегодня. - Veritas Tech Group",
    "В Veritas мы верим в создание решений, которые не просто работают, а вдохновляют.",
];

const quoteElement = document.getElementById("quote");
const usedIndexes = new Set();

function getQuote() {
    if (usedIndexes.size >= veritasQuotes.length) usedIndexes.clear();

    while (true) {
        const randomIdx = Math.floor(Math.random() * veritasQuotes.length);
        if (usedIndexes.has(randomIdx)) continue;
        
        quoteElement.textContent = veritasQuotes[randomIdx];
        break;
    }
}
