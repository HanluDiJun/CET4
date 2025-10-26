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
    { word: "himself", translation: "pron. 他自己", pos: "pron" },
    { word: "pot", translation: "n. 锅；壶", pos: "n" },
    { word: "bull", translation: "n. 公牛", pos: "n" },
    { word: "good", translation: "adj. 令人满意的；熟练的；好的", pos: "adj" },
    { word: "apply", translation: "v. 申请；应用", pos: "v" },
    { word: "germ", translation: "n. 细菌", pos: "n" },
    { word: "ice-cream", translation: "n. 冰淇淋", pos: "n" },
    { word: "book", translation: "n. 书；v. 预定；预约；登记", pos: "n,v" },
    { word: "fork", translation: "n. 叉；分叉；岔路", pos: "n" },
    { word: "fall", translation: "v. 下降；发生；适逢；被打败", pos: "v" },
    { word: "bore", translation: "v. 使厌烦", pos: "v" },
    { word: "steel", translation: "n. 钢铁", pos: "n" },
    { word: "reporter", translation: "n. 记者", pos: "n" },
    { word: "eighty", translation: "adj. 八十的", pos: "adj" },
    { word: "booth", translation: "n. 电话亭", pos: "n" },
    { word: "smog", translation: "n. 烟雾", pos: "n" },
    { word: "meal", translation: "n. 一餐", pos: "n" },
    { word: "steal", translation: "v. 偷盗", pos: "v" },
    { word: "save", translation: "v. 节约；救助", pos: "v" },
    { word: "land", translation: "n. 陆地", pos: "n" },
    { word: "tremble", translation: "v. 颤抖", pos: "v" },
    { word: "champion", translation: "n. 冠军；优胜者", pos: "n" },
    { word: "fierce", translation: "adj. 激烈的", pos: "adj" },
    { word: "dull", translation: "adj. 缓和；枯燥的", pos: "adj" },
    { word: "vigorous", translation: "adj. 精力充沛的", pos: "adj" },
    { word: "little", translation: "adj. 小的；微不足道的", pos: "adj" },
    { word: "waterfall", translation: "n. 瀑布", pos: "n" },
    { word: "discard", translation: "v. 丢掉", pos: "v" },
    { word: "inquiry", translation: "n. 调查；打听", pos: "n" },
    { word: "map", translation: "v. 测绘 n. 地图", pos: "v,n" },
    { word: "emerge", translation: "v. 出现；兴起", pos: "v" },
    { word: "deer", translation: "n. 鹿", pos: "n" },
    { word: "barrier", translation: "n. 障碍；界线", pos: "n" },
    { word: "skin", translation: "n. 兽皮", pos: "n" },
    { word: "concentrate", translation: "v. 全神贯注于", pos: "v" },
    { word: "root", translation: "v. 生根；使固定", pos: "v" },
    { word: "aware", translation: "adj. 意识到的", pos: "adj" },
    { word: "state", translation: "v. 说明；陈述；宣布 n. 国；州", pos: "v,n" },
    { word: "dish", translation: "n. 盘子；餐具", pos: "n" },
    { word: "hence", translation: "adv. 因此", pos: "adv" },
    { word: "asleep", translation: "adj. 睡着的", pos: "adj" },
    { word: "evident", translation: "adj. 显然的；明显的", pos: "adj" },
    { word: "aunt", translation: "n. 小姨", pos: "n" },
    { word: "joyful", translation: "adj. 愉快的", pos: "adj" },
    { word: "class", translation: "v. 把…分组；n. 课；班级", pos: "v,n" },
    { word: "altogether", translation: "adv. 完全；总而言之", pos: "adv" },
    { word: "forever", translation: "adv. 永远；总是 n. 极长的一段时间", pos: "adv,n" },
    { word: "extreme", translation: "adj. 极端的", pos: "adj" },
    { word: "job", translation: "n. 工作；职业", pos: "n" },
    { word: "exclaim", translation: "v. 呼叫", pos: "v" },
    { word: "gasp", translation: "v. 喘气；渴望", pos: "v" },
    { word: "dare", translation: "v. 敢于", pos: "v" },
    { word: "balance", translation: "n. 平衡；余额 v. 平衡", pos: "n,v" },
    { word: "understand", translation: "v. 理解；明白", pos: "v" },
    { word: "poverty", translation: "n. 贫困；贫穷", pos: "n" },
    { word: "choke", translation: "v. 呛；噎", pos: "v" },
    { word: "mild", translation: "adj. 温和的；清淡的", pos: "adj" },
    { word: "brief", translation: "adj. 简洁的；短暂的", pos: "adj" },
    { word: "north", translation: "adj. 北方的", pos: "adj" },
    { word: "indifferent", translation: "adj. 不感兴趣的", pos: "adj" },
    { word: "numerous", translation: "adj. 为数众多的", pos: "adj" },
    { word: "switch", translation: "v. 改变；交换 n. 转换器", pos: "v,n" },
    { word: "mountain", translation: "n. 山脉", pos: "n" },
    { word: "dog", translation: "n. 狗 v. 跟踪", pos: "n,v" },
    { word: "pill", translation: "n. 药丸", pos: "n" },
    { word: "support", translation: "n. 支撑物 v. 支持；鼓励", pos: "n,v" },
    { word: "well", translation: "adv. 相当地；好吧", pos: "adv" },
    { word: "rejoice", translation: "v. 感到高兴；感到欣喜", pos: "v" },
    { word: "excessive", translation: "adj. 过多的；过分的；过量的", pos: "adj" },
    { word: "request", translation: "n. 请求；要求 v. 要求", pos: "n,v" },
    { word: "girl", translation: "n. 女孩", pos: "n" },
    { word: "council", translation: "n. 议会", pos: "n" },
    { word: "latter", translation: "n. 后者", pos: "n" },
    { word: "spray", translation: "v. 喷 n. 浪花", pos: "v,n" },
    { word: "hurt", translation: "v. 伤害 adj. 受伤的", pos: "v,adj" },
    { word: "distinguish", translation: "v. 区别；识别", pos: "v" },
    { word: "mayor", translation: "n. 市长", pos: "n" },
    { word: "loan", translation: "v. 贷款", pos: "v" },
    { word: "board", translation: "v. 乘船", pos: "v" },
    { word: "boot", translation: "n. 靴子", pos: "n" },
    { word: "chess", translation: "n. 棋", pos: "n" },
    { word: "blind", translation: "adj. 失明的", pos: "adj" },
    { word: "relevant", translation: "adj. 相关的", pos: "adj" },
    { word: "brood", translation: "n. 一窝", pos: "n" },
    { word: "exhaust", translation: "v. 使精疲力尽", pos: "v" },
    { word: "restless", translation: "adj. 焦虑的", pos: "adj" },
    { word: "language", translation: "n. 语言", pos: "n" },
    { word: "likely", translation: "adj. 有可能的", pos: "adj" },
    { word: "kid", translation: "n. 孩子", pos: "n" },
    { word: "nasty", translation: "adj. 令人讨厌的", pos: "adj" },
    { word: "satisfy", translation: "v. 满足", pos: "v" },
    { word: "size", translation: "v. 估算 n. 大小", pos: "v,n" },
    { word: "thirsty", translation: "adj. 口渴的", pos: "adj" },
    { word: "rational", translation: "adj. 理智的", pos: "adj" },
    { word: "discharge", translation: "v. 卸掉负担；放电", pos: "v" },
    { word: "primitive", translation: "adj. 原始的", pos: "adj" },
    { word: "tailor", translation: "v. 定做", pos: "v" },
    { word: "organic", translation: "adj. 有机的", pos: "adj" },
    { word: "commander", translation: "n. 指挥官", pos: "n" },
    { word: "beyond", translation: "prep. 超出", pos: "prep" },
    { word: "liberal", translation: "n. 自由主义者", pos: "n" },
    { word: "inspection", translation: "n. 检查", pos: "n" },
    { word: "devil", translation: "n. 魔鬼", pos: "n" },
    { word: "swallow", translation: "v. 咽下", pos: "v" }, // 修正拼写错误：swallon -> swallow
    { word: "echo", translation: "n. 回声", pos: "n" },
    { word: "precise", translation: "adj. 精准的", pos: "adj" },
    { word: "restriction", translation: "n. 限制", pos: "n" }, // 修正拼写错误：restiction -> restriction
    { word: "westward", translation: "adj. 向西的", pos: "adj" },
    { word: "shopkeeper", translation: "n. 店主", pos: "n" },
    { word: "exaggerate", translation: "v. 夸大", pos: "v" },
    { word: "meantime", translation: "n. 同时", pos: "n" }
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
        wordObj.word.toLowerCase().startsWith(searchTerm)
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
            wordObj.word.toLowerCase().startsWith(searchTerm)
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
    // 动态插入版本号到页面
    const versionElements = document.querySelectorAll('.version');
    versionElements.forEach(element => {
        element.textContent = VERSION;
    });
    displayWords(words);
    updateWordStats();
});