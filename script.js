const words = [
    { word: "bow", translation: "v. 鞠躬；弯腰", pos: "v" },
    { word: "laser", translation: "n. 激光", pos: "n" },
    { word: "robe", translation: "n. 长袍；礼服 v. 穿；披", pos: "n,v" },
    { word: "loyalty", translation: "n. 忠诚；忠心；归属感", pos: "n" },
    { word: "melon", translation: "n. 瓜", pos: "n" },
    { word: "intimate", translation: "adj. 亲密的；密切的 n. 密友", pos: "adj,n" },
    { word: "velocity", translation: "n. 速度；快速", pos: "n" },
    { word: "plug", translation: "v. 插入；接通；堵塞；宣传", pos: "v" },
    { word: "backward", translation: "adv. 向后地 adj. 落后的；后退的", pos: "adv,adj" },
    { word: "brush", translation: "n. 刷子；画笔 v. 刷；抹；涂；写；拭去", pos: "n,v" },
    { word: "cream", translation: "n. 膏体", pos: "n" },
    { word: "domestic", translation: "adj. 国产的；国内的；家用的；驯养的", pos: "adj" },
    { word: "disguise", translation: "n. 伪装物 v. 伪装；掩盖；假扮", pos: "n,v" },
    { word: "sword", translation: "n. 剑；刀", pos: "n" },
    { word: "vehicle", translation: "n. 车辆；交通工具", pos: "n" },
    { word: "beast", translation: "n. 野兽", pos: "n" },
    { word: "collision", translation: "n. 碰撞；冲突", pos: "n" },
    { word: "guide", translation: "n. 导游；指南 v. 引导；带领", pos: "n,v" },
    { word: "dirt", translation: "n. 灰尘；污垢；丑事", pos: "n" },
    { word: "cotton", translation: "n. 棉花 v. 理解；亲近", pos: "n,v" },
    { word: "dry", translation: "adj. 干的 v. 弄干", pos: "adj,v" },
    { word: "chew", translation: "v. 咀嚼", pos: "v" },
    { word: "hatch", translation: "v. 孵出；策划；密谋", pos: "v" },
    { word: "collection", translation: "n. 收藏；收集；系；组；作品集", pos: "n" },
    { word: "snowstorm", translation: "n. 暴风雪", pos: "n" },
    { word: "flight", translation: "n. 航班", pos: "n" },
    { word: "tube", translation: "n. 水管；管子；隧道；电视", pos: "n" },
    { word: "hide", translation: "v. 躲藏；隐瞒", pos: "v" },
    { word: "puzzle", translation: "v. 使困惑 n. 谜", pos: "v,n" },
    { word: "chair", translation: "n. 椅子", pos: "n" },
    { word: "mysterious", translation: "adj. 神秘的；难以理解的", pos: "adj" },
    { word: "himself", translation: "他自己", pos: "pron" },
    { word: "pot", translation: "n. 锅；壶", pos: "n" },
    { word: "bull", translation: "n. 公牛", pos: "n" },
    { word: "good", translation: "adj. 令人满意的；熟练的；好的", pos: "adj" },
    { word: "apply", translation: "v. 申请；应用", pos: "v" },
    { word: "germ", translation: "n. 细菌", pos: "n" },
    { word: "ice-cream", translation: "n. 冰淇淋", pos: "n" },
    { word: "book", translation: "n. 书；v. 预定；预约；登记", pos: "n,v" },
    { word: "fork", translation: "n. 叉；分叉；岔路", pos: "n" }
];

let currentPage = 1;
const wordsPerPage = 10;
let currentWords = [...words];
let currentSort = 'none';
let currentLetter = 'all';
let currentPOS = 'all';

function displayWords(wordArray) {
    const wordList = document.getElementById('wordList');
    wordList.innerHTML = '';
    const start = (currentPage - 1) * wordsPerPage;
    const end = start + wordsPerPage;
    const paginatedWords = wordArray.slice(start, end);

    paginatedWords.forEach(wordObj => {
        const wordCard = document.createElement('div');
        wordCard.className = 'word-card';
        wordCard.innerHTML = `
            <h3>${wordObj.word}</h3>
            <p>${wordObj.translation}</p>
        `;
        wordList.appendChild(wordCard);
    });

    updatePagination(wordArray);
    updateWordStats();
}

function updatePagination(wordArray) {
    const totalPages = Math.ceil(wordArray.length / wordsPerPage);
    document.getElementById('pageInfo').textContent = `第 ${currentPage} 页 / 共 ${totalPages} 页`;
    document.getElementById('prevButton').disabled = currentPage === 1;
    document.getElementById('nextButton').disabled = currentPage === totalPages;
    document.getElementById('pageInput').max = totalPages;
}

function updateWordStats() {
    document.getElementById('totalWords').textContent = `总单词数: ${words.length}`;
    document.getElementById('filteredWords').textContent = `当前显示: ${currentWords.length}`;
}

function showRandomWord() {
    const randomWordDiv = document.getElementById('randomWord');
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex].word;
    randomWordDiv.innerHTML = `
        <div class="random-word-card">
            <h3>${randomWord}</h3>
        </div>
    `;
}

function searchWords() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    currentWords = words.filter(wordObj =>
        wordObj.word.toLowerCase().includes(searchTerm) ||
        wordObj.translation.toLowerCase().includes(searchTerm)
    );
    currentPage = 1;
    applyFiltersAndSort();
}

function filterByLetter(letter) {
    currentLetter = letter;
    currentPage = 1;
    applyFiltersAndSort();
}

function filterByPOS(pos) {
    currentPOS = pos;
    currentPage = 1;
    applyFiltersAndSort();
}

function sortWords(order) {
    currentSort = order;
    applyFiltersAndSort();
}

function applyFiltersAndSort() {
    let filteredWords = [...words];

    if (currentLetter !== 'all') {
        filteredWords = filteredWords.filter(wordObj =>
            wordObj.word.toLowerCase().startsWith(currentLetter.toLowerCase())
        );
    }

    if (currentPOS !== 'all') {
        filteredWords = filteredWords.filter(wordObj =>
            wordObj.pos.includes(currentPOS)
        );
    }

    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (searchTerm) {
        filteredWords = filteredWords.filter(wordObj =>
            wordObj.word.toLowerCase().includes(searchTerm) ||
            wordObj.translation.toLowerCase().includes(searchTerm)
        );
    }

    if (currentSort === 'asc') {
        filteredWords.sort((a, b) => a.word.localeCompare(b.word));
    } else if (currentSort === 'desc') {
        filteredWords.sort((a, b) => b.word.localeCompare(a.word));
    }

    currentWords = filteredWords;
    displayWords(currentWords);
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayWords(currentWords);
    }
}

function nextPage() {
    const totalPages = Math.ceil(currentWords.length / wordsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayWords(currentWords);
    }
}

function jumpToPage() {
    const pageInput = document.getElementById('pageInput').value;
    const totalPages = Math.ceil(currentWords.length / wordsPerPage);
    const page = parseInt(pageInput);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        displayWords(currentWords);
    } else {
        alert(`请输入有效的页码（1-${totalPages}）`);
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
}

document.getElementById('searchInput').addEventListener('input', searchWords);

document.addEventListener('DOMContentLoaded', () => {
    displayWords(words);
    updateWordStats();
});