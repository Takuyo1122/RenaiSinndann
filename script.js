// 質問データ (12問)
const questions = [
    {
        question: "知らない人が多いパーティーに誘われたら？",
        options: [
            { text: "喜んで参加する", traits: { social: 3, romantic: 0, stable: -1, independent: 1 } },
            { text: "友人と一緒なら行く", traits: { social: 1, romantic: 0, stable: 0, independent: 0 } },
            { text: "親しい人とだけ過ごしたい", traits: { social: -1, romantic: 1, stable: 1, independent: 0 } },
            { text: "一人で過ごす方を選ぶ", traits: { social: -2, romantic: 0, stable: 0, independent: 2 } }
        ]
    },
    {
        question: "理想のデートは？",
        options: [
            { text: "大人数で賑やかに", traits: { social: 2, romantic: -1, stable: -1, independent: 0 } },
            { text: "サプライズがいっぱい", traits: { social: 0, romantic: 2, stable: -1, independent: 0 } },
            { text: "定番のデートコース", traits: { social: 0, romantic: 0, stable: 2, independent: 0 } },
            { text: "それぞれ好きなことをしてたまに合う", traits: { social: -1, romantic: -1, stable: 0, independent: 2 } }
        ]
    },
    {
        question: "恋人との喧嘩の後どうする？",
        options: [
            { text: "みんなの前で仲直り", traits: { social: 2, romantic: 1, stable: 0, independent: -1 } },
            { text: "特別な方法で謝る", traits: { social: 0, romantic: 2, stable: 0, independent: 0 } },
            { text: "きちんと話し合う", traits: { social: 0, romantic: 0, stable: 2, independent: 0 } },
            { text: "時間を置いて自然に", traits: { social: -1, romantic: -1, stable: 0, independent: 2 } }
        ]
    },
    {
        question: "バレンタインの過ごし方は？",
        options: [
            { text: "友人とグループで交換", traits: { social: 2, romantic: 0, stable: 0, independent: -1 } },
            { text: "特別なサプライズを準備", traits: { social: 0, romantic: 3, stable: -1, independent: 0 } },
            { text: "毎年同じようにチョコを渡す", traits: { social: 0, romantic: 0, stable: 2, independent: 0 } },
            { text: "特に何もしない", traits: { social: -1, romantic: -2, stable: 0, independent: 2 } }
        ]
    },
    {
        question: "恋人との連絡頻度は？",
        options: [
            { text: "毎日欠かさず連絡する", traits: { social: 1, romantic: 1, stable: 2, independent: -2 } },
            { text: "気が向いた時にたくさん連絡する", traits: { social: 1, romantic: 1, stable: -1, independent: 0 } },
            { text: "相手から連絡が来たら返す", traits: { social: -1, romantic: 0, stable: 0, independent: 1 } },
            { text: "必要最低限でいい", traits: { social: -2, romantic: -1, stable: 0, independent: 2 } }
        ]
    },
    {
        question: "記念日はどう過ごしたい？",
        options: [
            { text: "盛大に祝う", traits: { social: 2, romantic: 1, stable: 0, independent: -1 } },
            { text: "サプライズを仕掛ける", traits: { social: 0, romantic: 2, stable: -1, independent: 0 } },
            { text: "毎年同じように祝う", traits: { social: 0, romantic: 0, stable: 2, independent: 0 } },
            { text: "特に気にしない", traits: { social: -1, romantic: -2, stable: 0, independent: 2 } }
        ]
    },
    {
        question: "旅行の計画は？",
        options: [
            { text: "友人グループと一緒に行く", traits: { social: 2, romantic: 0, stable: 0, independent: -1 } },
            { text: "恋人と二人きりの特別な旅", traits: { social: -1, romantic: 2, stable: 0, independent: -1 } },
            { text: "定番の観光コースを巡る", traits: { social: 0, romantic: 0, stable: 2, independent: 0 } },
            { text: "自由気ままに一人旅", traits: { social: -2, romantic: -1, stable: -1, independent: 3 } }
        ]
    },
    {
        question: "恋人に求める最も重要な要素は？",
        options: [
            { text: "社交的で友達が多い", traits: { social: 2, romantic: 0, stable: 0, independent: -1 } },
            { text: "ロマンチックで愛情表現が豊か", traits: { social: 0, romantic: 2, stable: 0, independent: -1 } },
            { text: "安定していて信頼できる", traits: { social: 0, romantic: 0, stable: 2, independent: 0 } },
            { text: "自立していて個人の時間を尊重する", traits: { social: -1, romantic: -1, stable: 0, independent: 2 } }
        ]
    },
    {
        question: "理想のプロポーズは？",
        options: [
            { text: "友人たちの前でサプライズ", traits: { social: 2, romantic: 1, stable: -1, independent: -1 } },
            { text: "ロマンチックな演出たっぷり", traits: { social: 0, romantic: 3, stable: -1, independent: 0 } },
            { text: "落ち着いた場所で真剣に", traits: { social: -1, romantic: 0, stable: 2, independent: 0 } },
            { text: "自然な流れで特に形式ばらない", traits: { social: -1, romantic: -2, stable: 0, independent: 2 } }
        ]
    },
    {
        question: "週末の過ごし方は？",
        options: [
            { text: "友人や恋人と賑やかに", traits: { social: 2, romantic: 0, stable: 0, independent: -1 } },
            { text: "恋人と特別なデート", traits: { social: -1, romantic: 2, stable: 0, independent: -1 } },
            { text: "決まったルーティンをこなす", traits: { social: 0, romantic: 0, stable: 2, independent: 0 } },
            { text: "自分の好きなことを一人で", traits: { social: -2, romantic: -1, stable: 0, independent: 2 } }
        ]
    },
    {
        question: "恋人との写真は？",
        options: [
            { text: "SNSにたくさん投稿する", traits: { social: 2, romantic: 1, stable: 0, independent: -1 } },
            { text: "アルバムを作って大切に保管", traits: { social: 0, romantic: 2, stable: 1, independent: 0 } },
            { text: "たまに撮るが特にこだわらない", traits: { social: 0, romantic: 0, stable: 0, independent: 1 } },
            { text: "ほとんど撮らない", traits: { social: -1, romantic: -2, stable: 0, independent: 2 } }
        ]
    },
    {
        question: "恋人との将来についてどう考える？",
        options: [
            { text: "友人たちとも関わる将来像", traits: { social: 2, romantic: 0, stable: 1, independent: -1 } },
            { text: "ロマンチックな未来像", traits: { social: 0, romantic: 2, stable: 0, independent: -1 } },
            { text: "現実的で安定した計画", traits: { social: 0, romantic: 0, stable: 2, independent: 0 } },
            { text: "お互いの自由を尊重した将来", traits: { social: -1, romantic: -1, stable: 0, independent: 2 } }
        ]
    }
];

// 診断結果の説明
const traitDescriptions = {
    social: {
        name: "社交性",
        high: {
            title: "社交的",
            description: "あなたは人と関わるのが好きで、新しい出会いを積極的に求めるタイプです。恋人と一緒に社交の場に出ることも楽しめるでしょう。",
            strength: "初対面でも打ち解けるのが早く、場を盛り上げるのが得意。恋人との関係を周囲と共有するのが好き。",
            weakness: "深い関係を築く前に次の関係を求めてしまうことがある。恋人と二人きりの時間を十分に取れない可能性も。"
        },
        low: {
            title: "内向的",
            description: "あなたは少数の深い関係を好み、大きな社交の場は苦手な傾向があります。恋人と二人きりで過ごす時間を大切にするでしょう。",
            strength: "親しい人との深い絆を大切にできる。恋人と集中して向き合える。",
            weakness: "新しい出会いの機会を逃しがち。恋人の社交的な友人と打ち解けるのに時間がかかるかも。"
        }
    },
    romantic: {
        name: "ロマンチック度",
        high: {
            title: "ロマンチスト",
            description: "あなたは愛情表現が豊かで、特別な瞬間を大切にするタイプです。恋人にサプライズをしたり、ロマンチックな演出を考えるのが好きでしょう。",
            strength: "相手を特別な気分にさせられる。関係に彩りと興奮をもたらす。",
            weakness: "現実的な関係の維持に苦労することがある。期待が高すぎて失望しやすい面も。"
        },
        low: {
            title: "現実主義",
            description: "あなたは実用的な愛情表現を好み、過度なロマンスを求めないタイプです。地に足のついた堅実な関係を築くでしょう。",
            strength: "堅実で安定した関係を築ける。現実的な問題に対処するのが得意。",
            weakness: "相手がロマンスを求めていると物足りなさを感じさせることがある。特別な日を軽視しすぎる傾向も。"
        }
    },
    stable: {
        name: "安定志向",
        high: {
            title: "安定重視",
            description: "あなたは変化より継続を重視し、予測可能な関係を好むタイプです。ルーティンや伝統を大切にするでしょう。",
            strength: "信頼性が高く、長期的な関係を維持できる。約束を守り、責任感が強い。",
            weakness: "マンネリ化しやすい。新しいことに挑戦するのが苦手かも。"
        },
        low: {
            title: "変化追求",
            description: "あなたは決まりきったルーティンより、新しい体験を求めるタイプです。関係に常に新鮮さと刺激をもたらすでしょう。",
            strength: "関係に刺激と新鮮さをもたらせる。冒険心があり、新しいことにオープン。",
            weakness: "一貫性に欠けると見られることがある。長期的な計画を立てるのが苦手かも。"
        }
    },
    independent: {
        name: "自立心",
        high: {
            title: "自立型",
            description: "あなたは自分の時間と空間を大切にし、束縛を嫌うタイプです。恋人にも同じ自由を与え、健康的な距離感を保つでしょう。",
            strength: "相手にも同じ自由を与え、プレッシャーをかけない。自己確立ができている。",
            weakness: "コミットメントに消極的と思われることがある。恋人と十分な時間を共有しない傾向も。"
        },
        low: {
            title: "相互依存",
            description: "あなたは恋人と多くの時間を共有することを好むタイプです。深い絆と親密さを重視するでしょう。",
            strength: "相手に多くの愛情と注意を注げる。献身的で協力的。",
            weakness: "相手に依存しすぎる傾向がある。自分のアイデンティティを見失う可能性も。"
        }
    }
};

// DOM要素
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.querySelector('.options');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const resultContent = document.getElementById('result-content');

// 変数
let currentQuestion = 0;
let scores = { social: 0, romantic: 0, stable: 0, independent: 0 };

// イベントリスナー
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', restartQuiz);
shareBtn.addEventListener('click', shareResult);

// クイズを開始する関数
function startQuiz() {
    startScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
    showQuestion();
}

// 質問を表示する関数
function showQuestion() {
    if (currentQuestion >= questions.length) {
        showResult();
        return;
    }
    
    const question = questions[currentQuestion];
    questionText.textContent = question.question;
    
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.text;
        button.addEventListener('click', () => selectOption(option.traits));
        optionsContainer.appendChild(button);
    });
    
    // 進捗を更新
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `質問${currentQuestion + 1}/${questions.length}`;
}

// 選択肢を選んだ時の処理
function selectOption(traits) {
    // スコアを加算
    for (const trait in traits) {
        scores[trait] += traits[trait];
    }
    
    currentQuestion++;
    showQuestion();
}

// スコア計算
function calculateResults(scores) {
    const results = {};
    const maxPossibleScore = 24; // 各特性の最大スコア（3点×8問）
    
    for (const trait in scores) {
        const percentage = Math.round(((scores[trait] + maxPossibleScore) / (maxPossibleScore * 2)) * 100);
        results[trait] = {
            score: scores[trait],
            percentage: percentage,
            level: percentage >= 70 ? 'high' : percentage <= 30 ? 'low' : 'neutral'
        };
    }
    
    return results;
}

// 結果を表示する関数
function showResult() {
    questionScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    const traitResults = calculateResults(scores);
    let resultHTML = '';
    
    // 各特性の結果を表示
    for (const trait in traitResults) {
        const result = traitResults[trait];
        const desc = traitDescriptions[trait];
        
        resultHTML += `
            <div class="trait-result">
                <div class="trait-header">
                    <span class="trait-name">${desc.name}</span>
                    <span class="trait-level ${result.level}">${
                        result.level === 'high' ? desc.high.title : 
                        result.level === 'low' ? desc.low.title : 'バランス型'
                    }</span>
                </div>
                
                <div class="trait-bar-container">
                    <div class="trait-bar" style="width: ${result.percentage}%"></div>
                </div>
                
                <p class="trait-description">${
                    result.level === 'high' ? desc.high.description : 
                    result.level === 'low' ? desc.low.description : 
                    `あなたの${desc.name}は平均的で、バランスの取れた傾向があります`
                }</p>
                
                <div class="trait-details">
                    <div class="strength"><strong>強み:</strong> ${
                        result.level === 'high' ? desc.high.strength : 
                        result.level === 'low' ? desc.low.strength : 
                        `${desc.name}に関して特に偏りはありません`
                    }</div>
                    <div class="weakness"><strong>弱み:</strong> ${
                        result.level === 'high' ? desc.high.weakness : 
                        result.level === 'low' ? desc.low.weakness : 
                        `${desc.name}に関して特に問題はありません`
                    }</div>
                </div>
            </div>
        `;
    }
    
    // 総合アドバイス
    resultHTML += `
        <div class="final-advice">
            <h3>あなたにぴったりの恋愛スタイル</h3>
            <p>${getFinalAdvice(traitResults)}</p>
        </div>
    `;
    
    resultContent.innerHTML = resultHTML;
}

// 総合アドバイス生成
function getFinalAdvice(results) {
    // 最も特徴的な特性を特定
    let mainTrait = null;
    let maxDeviation = 0;
    
    for (const trait in results) {
        const deviation = Math.abs(results[trait].percentage - 50);
        if (deviation > maxDeviation) {
            maxDeviation = deviation;
            mainTrait = trait;
        }
    }
    
    const result = results[mainTrait];
    const desc = traitDescriptions[mainTrait];
    
    if (mainTrait === 'social') {
        return result.level === 'high' ? 
            "あなたは社交的なので、大人数の出会いの場で相性の良いパートナーを見つけられるでしょう。恋人と一緒に社交イベントに参加するのもおすすめです。ただし、二人きりの時間も大切にしてください。" :
            "親しい友人を通じての出会いや、少人数の集まりがあなたに合っています。恋人と深く絆を築くのが得意なので、一対一の関係を大切にしましょう。";
    } else if (mainTrait === 'romantic') {
        return result.level === 'high' ?
            "あなたのロマンチックな姿勢は大きな魅力です。特別な日を大切にし、サプライズを準備するなどして、関係に彩りを加えましょう。ただし、日常的な愛情表現も忘れずに。" :
            "あなたの現実的なアプローチは長期的な関係に役立ちます。堅実な関係を築くのが得意ですが、たまにはロマンチックな演出も取り入れてみましょう。";
    } else if (mainTrait === 'stable') {
        return result.level === 'high' ?
            "安定した関係を築くのが得意です。ルーティンや伝統を大切にし、信頼できるパートナーとしての評価を得られるでしょう。時には新しいことにも挑戦してみてください。" :
            "あなたの柔軟性は関係に新鮮さをもたらします。新しい体験を共有することで、パートナーとの絆を深められるでしょう。時には安定も大切にしてください。";
    } else {
        return result.level === 'high' ?
            "自立心が強いので、健康的な距離感を保った関係がおすすめです。自分の時間を大切にしつつ、パートナーとのバランスを見つけましょう。自由を尊重し合える相手が理想的です。" :
            "深い絆を築く能力があなたの強みです。パートナーと多くの時間を共有することを好むので、同じような価値観を持つ相手と相性が良いでしょう。自分のための時間も確保してください。";
    }
}

// クイズをリスタートする関数
function restartQuiz() {
    // リセット
    currentQuestion = 0;
    scores = { social: 0, romantic: 0, stable: 0, independent: 0 };
    
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

// 結果を共有する関数
function shareResult() {
    if (navigator.share) {
        navigator.share({
            title: '私の恋愛性格診断結果',
            text: '面白い恋愛診断アプリを見つけました！あなたも試してみませんか？',
            url: window.location.href
        }).catch(err => {
            console.log('共有がキャンセルされました:', err);
            fallbackShare();
        });
    } else {
        fallbackShare();
    }
}

// 共有APIが使えない場合の代替方法
function fallbackShare() {
    const text = `私の恋愛性格診断結果:\n\n` +
                `社交性: ${scores.social > 0 ? '高' : scores.social < 0 ? '低' : '普通'}\n` +
                `ロマンチック度: ${scores.romantic > 0 ? '高' : scores.romantic < 0 ? '低' : '普通'}\n` +
                `安定志向: ${scores.stable > 0 ? '高' : scores.stable < 0 ? '低' : '普通'}\n` +
                `自立心: ${scores.independent > 0 ? '高' : scores.independent < 0 ? '低' : '普通'}\n\n` +
                `こちらの診断アプリも試してみてください: ${window.location.href}`;
    
    alert('このリンクをコピーして共有してください:\n\n' + window.location.href);
    // 実際のアプリではクリップボードにコピーする機能を実装すると良い
}