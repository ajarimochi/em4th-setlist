// =========================================
// 曲目リストデータ（songList.js）
// =========================================
const songList = [
   
        { name: "JUMP!", kana: "ジャンプ", artist: "平山笑美" },
    { name: "for the Future", kana: "フォーザフューチャー", artist: "平山笑美" },
    { name: "Dead or ふたりきり♪", kana: "デッドオアフタリキリ", artist: "平山笑美" },
    { name: "フライング・ハイ！", kana: "フライングハイ", artist: "平山笑美" },
    { name: "Maybe Maybe Maybe", kana: "メイビーメイビーメイビー", artist: "平山笑美" },
    { name: "約束の空", kana: "ヤクソクノソラ", artist: "平山笑美" },
    { name: "Secrets make shapes of the life", kana: "シークレッツメイクシェイプスオブザライフ", artist: "平山笑美" },
    { name: "たどり着く未来へ", kana: "タドリツクミライヘ", artist: "平山笑美" },
    { name: "アゲハ", kana: "アゲハ", artist: "平山笑美" },
    { name: "Perfect Place", kana: "パーフェクトプレイス", artist: "平山笑美" },
    { name: "サインポスト", kana: "サインポスト", artist: "平山笑美" },
    { name: "真夏のエモーション", kana: "マナツノエモーション", artist: "平山笑美" },
    { name: "スターサファイア", kana: "スターサファイア", artist: "平山笑美" },
    { name: "Star trail", kana: "スタートレイル", artist: "平山笑美" },
    { name: "Dead or ふたりきり♪ - Dolce Accordo -", kana: "デッドオアフタリキリドルチェアッコルド", artist: "平山笑美" },
    { name: "Endless Dreamer", kana: "エンドレスドリーマー", artist: "平山笑美" },
    { name: "Happy End Valentine", kana: "ハッピーエンドバレンタイン", artist: "平山笑美" },
    { name: "#BFF", kana: "ハッシュタグビーエフエフ", artist: "平山笑美" },
    { name: "fly over the sky", kana: "フライオーバーザスカイ", artist: "平山笑美" },
    { name: "エンジェルラダーと青と蒼", kana: "エンジェルラダートアオトアオ", artist: "平山笑美" },
    { name: "Detritus", kana: "デトリタス", artist: "平山笑美" },
    { name: "STARRY REPORT", kana: "スターリーレポート", artist: "平山笑美" },
    { name: "夏空のDiary", kana: "ナツゾラノダイアリー", artist: "平山笑美" },
    { name: "echo", kana: "エコー", artist: "平山笑美" },
    { name: "夜を歩く猫", kana: "ヨルヲアルクネコ", artist: "平山笑美" },
    { name: "星の彼方", kana: "ホシノカナタ", artist: "平山笑美" },
    { name: "君が望む世界 〜stay true〜", kana: "キミガノゾムセカイステイトゥルー", artist: "平山笑美" },
    { name: "New Anniversary！", kana: "ニューアニバーサリー", artist: "平山笑美" },
    { name: "PARADIGM CHANGE", kana: "パラダイムチェンジ", artist: "平山笑美" },
    { name: "ホシキミ。", kana: "ホシキミ", artist: "平山笑美" },
    { name: "kanau", kana: "カナウ", artist: "平山笑美" },
    { name: "飛び出せば世界色づいて", kana: "トビダセバセカイイロヅイテ", artist: "平山笑美" },
    { name: "SACRED WINGS", kana: "セイクリッドウィングス", artist: "平山笑美" },
    { name: "十六夜祭歌", kana: "イザヨイマツリウタ", artist: "平山笑美" },


    //愛内里菜
    { name: "JOY", kana: "ジョイ", taibanFlag: true, artist: "愛内里菜" },
    { name: "+INSPIRE", kana: "プラスインスパイア", taibanFlag: true, artist: "愛内里菜" },
    { name: "Rough Bloom", kana: "ラフブルーム", taibanFlag: true, artist: "愛内里菜" },
    { name: "Let me fly", kana: "レットミーフライ", taibanFlag: true, artist: "愛内里菜" },
    { name: "RIDE THE WAVE", kana: "ライドザウェーブ", taibanFlag: true, artist: "愛内里菜" },
    { name: "Brilliant Queen", kana: "ブリリアントクイーン", taibanFlag: true, artist: "愛内里菜" },
    { name: "Holy Cake", kana: "ホーリーケーキ", taibanFlag: true, artist: "愛内里菜" },
    { name: "Very Merry Christmas", kana: "ベリーメリークリスマス", taibanFlag: true, artist: "愛内里菜" },
    { name: "手紙", kana: "テガミ", taibanFlag: true, artist: "愛内里菜" },
    { name: "EVER JOYFUL", kana: "エバージョイフル", taibanFlag: true, artist: "愛内里菜" },
        { name: "恋はスリル、ショック、サスペンス", kana: "コイハスリルショックサスペンス", taibanFlag: true, artist: "愛内里菜" },
    { name: "I can't stop my love for you", kana: "アイキャントストップマイラブフォーユー", taibanFlag: true, artist: "愛内里菜" },
    { name: "Close To Your Heart", kana: "クローズトゥユアハート", taibanFlag: true, artist: "愛内里菜" },
    { name: "NAVY BLUE", kana: "ネイビーブルー", taibanFlag: true, artist: "愛内里菜" },
    { name: "START", kana: "スタート", taibanFlag: true, artist: "愛内里菜" },
    { name: "MAGIC", kana: "マジック", taibanFlag: true, artist: "愛内里菜" },
    { name: "100もの扉", kana: "ヒャクモノトビラ", taibanFlag: true, artist: "愛内里菜" },




];

// 全角清音カナから半角カナへのマッピング辞書
const halfKanaMap = {
    'ア': 'ｱ', 'イ': 'ｲ', 'ウ': 'ｳ', 'エ': 'ｴ', 'オ': 'ｵ',
    'カ': 'ｶ', 'キ': 'ｷ', 'ク': 'ｸ', 'ケ': 'ｹ', 'コ': 'ｺ',
    'サ': 'ｻ', 'シ': 'ｼ', 'ス': 'ｽ', 'セ': 'ｾ', 'ソ': 'ｿ',
    'タ': 'ﾀ', 'チ': 'ﾁ', 'ツ': 'ﾂ', 'テ': 'ﾃ', 'ト': 'ﾄ',
    'ナ': 'ﾅ', 'ニ': 'ﾆ', 'ヌ': 'ﾇ', 'ネ': 'ﾈ', 'ノ': 'ﾉ',
    'ハ': 'ﾊ', 'ヒ': 'ﾋ', 'フ': 'ﾌ', 'ヘ': 'ﾍ', 'ホ': 'ﾎ',
    'マ': 'ﾏ', 'ミ': 'ﾐ', 'ム': 'ﾑ', 'メ': 'ﾒ', 'モ': 'ﾓ',
    'ヤ': 'ﾔ', 'ユ': 'ﾕ', 'ヨ': 'ﾖ',
    'ラ': 'ﾗ', 'リ': 'ﾘ', 'ル': 'ﾙ', 'レ': 'ﾚ', 'ロ': 'ﾛ',
    'ワ': 'ﾜ', 'ヲ': 'ｦ', 'ン': 'ﾝ'
};

// 全曲データに対して firstKana を追加する処理
songList.forEach(song => {
    if (song.kana) {
        // 1. NFD正規化で濁点・半濁点を分離し、最初の1文字（清音）だけを取得
        const clearChar = song.kana.normalize('NFD').charAt(0);
        
        // 2. マップを使って半角カナに変換（マップにない場合は元の文字を維持）
        song.firstKana = halfKanaMap[clearChar] || clearChar;
    } else {
        song.firstKana = "";
    }
});

// 五十音順にソートする処理
songList.sort((a, b) => a.kana.localeCompare(b.kana, 'ja'));