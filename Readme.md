目的：今後 TypeScript や React にスケールする為の準備段階

使用技術： JavaScript/CSS/HTML

<h3>コードの全体像</h3>

このコードは、ウェブページ上に画像スライダーを作成するためのものです。

画像スライダーとは、複数の画像やコンテンツが自動的、または手動で切り替わって表示される部分のことです。

このスライダーは、HTML、CSS、JavaScript の 3 つのファイルを使って作られています。

- HTML: スライダーの骨組み（構造）を作ります。画像やボタンなど、表示されるコンテンツを定義します。

- CSS: スライダーの見た目（デザイン）を整えます。色、サイズ、配置などを決めます。

- JavaScript: スライダーの動き（機能）を実装します。「次へ」や「前へ」ボタンをクリックしたときにスライドが切り替わるようにします。

<h1>HTML の解説</h1>
HTML ファイルは、ウェブページに表示される内容を記述しています。

<h3>headタグの中</h3>

<h3>meta charset="UTF-8"</h3> 文字化けを防ぐために、日本語（UTF-8）で表示するための設定です。

<h3>meta name="viewport" ...</h3> スマートフォンなど、デバイスの画面サイズに合わせて表示を調整するための設定です。

<h3>title</h3> ブラウザのタブに表示されるページのタイトルです。

<h3>link rel="stylesheet" href="style.css"</h3> style.css という名前のCSSファイルを読み込んで、見た目を適用します。

<h3>bodyタグの中</h3>

<h3>div class="box"</h3> スライダーの上に表示されるシンプルなメニューのような要素です。

<h3>div class="slider-container"</h3> スライダー全体を囲む最も外側の箱です。この中にスライドとボタンが入ります。

<h3>div class="slider-wrapper"</h3> 複数のスライドを横一列に並べておくための箱です。これが動くことでスライドが切り替わります。

<h3>div class="slide"</h3> これが1枚のスライドです。

<h3>img src="img/Tasty_Cake2025.png" alt="Slide 1"</h3> 表示する画像のファイルパスと、画像が表示されない場合に代わりに表示されるテキスト（代替テキスト）を指定しています。

<h3>スライド1のコンテンツです。</h3> 画像の下に表示されるテキストです。

    - 他の<div class="slide">も同様に、2 枚目、3 枚目のスライドを表します。

<h3>button class="prev-button">前へ</h3> 「前へ」ボタンです。クリックすると前のスライドに戻ります。

<h3>button class="next-button">次へ</h3> 「次へ」ボタンです。クリックすると次のスライドに進みます。

<h3>script src="script.js"</h3> script.js という名前のJavaScriptファイルを読み込んで、スライダーの動きを制御します。HTMLの最後に記述することで、ページの内容がすべて読み込まれてからJavaScriptが実行されるようになります。

<h1>CSS の解説</h1>

CSS は、HTML で作った要素の見た目を設定します。

<h3>body セレクタ</h3>

- font-family: ウェブページ全体のフォントを設定します。

- display: flex; flex-direction: column; justify-content: center; align-items: center;: ページ全体の中央にコンテンツを配置するために Flexbox という表示方法を使っています。

- min-height: 100vh;: ページの高さが画面の高さ全体になるように設定します。

- background-color: 背景色を設定します。

<h3>.slider-container</h3>

- position: relative;: この要素を基準にして、中の要素（ボタンなど）の位置を決めるために必要です。

- width: 600px; height: 400px;: スライダーが表示される領域の幅と高さを設定します。

- overflow: hidden;: この領域からはみ出た内容（隠れているスライド）は表示しないようにします。これがスライドショーの肝です。

- border, box-shadow, border-radius, background-color: スライダーの見た目に関する装飾です。

<h3>.slider-wrapper</h3>

- display: flex;: 中にあるスライドを横並びに配置します。

- width: 100%; height: 100%;: 親要素の slider-container と同じサイズになります。

- transition: transform 0.5s ease-in-out;: スライドが切り替わる際に、0.5 秒かけて滑らかに動くようにする設定です。

<h3>.slide</h3>

- min-width: 100%;: 各スライドが slider-container の幅全体を占めるようにします。これにより、横に並んだスライドのうち 1 枚だけが見えるようになります。

- height: 100%;: スライドの高さを slider-container と同じにします。

- display: flex; flex-direction: column; justify-content: center; align-items: center;: スライド内の画像やテキストを中央に配置します。

- padding: スライド内のコンテンツと枠の間に余白を作ります。

<h3>.slide img</h3>

- max-width: 90%; max-height: 70%;: 画像がスライドの幅・高さの 90%・70%を超えないようにします。

- object-fit: contain;: 画像のアスペクト比（縦横比）を保ちながら、指定された領域に収まるようにします。

- margin-bottom, border-radius, box-shadow: 画像の見た目に関する装飾です。

<h3>.prev-button, .next-button</h3>

- position: absolute;: 親要素である slider-container を基準に、自由に位置を決められるようにします。

- top: 50%; transform: translateY(-50%);: ボタンを垂直方向の中央に配置するためのテクニックです。

- padding, background-color, color, border, border-radius, cursor, font-size: ボタンの見た目を設定します。

- z-index: 10;: スライドの上にボタンが表示されるように、重なり順を設定します。

- transition: background-color 0.3s ease;: ホバー（マウスオーバー）したときに背景色が滑らかに変わるようにします。

<h3>.prev-button, .next-button</h3>

- left: 10px; / right: 10px;: スライダーの左右の端から 10px のところにボタンを配置します。

- .prev-button:hover, .next-button:hover: マウスがボタンの上に乗ったときの背景色を設定します。

<h1>JavaScriptの解説</h1>

JavaScript は、スライダーを動かすための命令を記述しています。

<h3> * 要素の取得</h3>

HTML から特定のクラス名を持つ要素を見つけ出し、JavaScript で操作できるように変数に保存しています。

- sliderWrapper: スライド全体を包む要素です。これを動かすことでスライドが切り替わります。

- slides: すべてのスライド（1 枚 1 枚のコンテンツ）の要素です。

- prevButton: 「前へ」ボタンの要素です。

- nextButton: 「次へ」ボタンの要素です。

- 変数の初期化:

  - currentIndex: 現在表示されているスライドが何番目か（0 から始まる数字）を記録する変数です。最初は 0、つまり最初のスライドが表示されています。

  - totalSlides: スライドの合計枚数を記録する変数です。

<h3> * updateSliderPosition()関数の定義</h3>

この関数は、現在表示すべきスライドに合わせて、sliderWrapper を左右に動かす役割をします。

- translateX()は、要素を水平方向に移動させる CSS の機能です。

- -${currentIndex \* 100}% は、「現在のスライドの番号 × 100%」分、左に移動させることを意味します。

  - 例えば、currentIndex が 0（1 枚目）の時は移動しません。

  - currentIndex が 1（2 枚目）の時は、-100%、つまりスライド 1 枚分左に移動します。これにより、2 枚目のスライドが見えるようになります。

  - currentIndex が 2（3 枚目）の時は、-200%、つまりスライド 2 枚分左に移動します。

<h3>「次へ」ボタンのイベントリスナー</h3>

- nextButton.addEventListener("click", ...): 「次へ」ボタンがクリックされたときに、{}の中の処理を実行するように設定しています。

- currentIndex++;: currentIndex を 1 増やします（次のスライドへ）。

- if (currentIndex >= totalSlides) { currentIndex = 0; }: もし最後のスライドまで行ったら、currentIndex を 0 に戻し、最初のスライドに戻るようにします（ループ再生）。

- updateSliderPosition();: スライドの位置を更新して、新しいスライドが表示されるようにします。

 <h3>「前へ」ボタンのイベントリスナー</h3>

- prevButton.addEventListener("click", ...): 「前へ」ボタンがクリックされたときに、{}の中の処理を実行するように設定しています。

- currentIndex--;: currentIndex を 1 減らします（前のスライドへ）。

- if (currentIndex < 0) { currentIndex = totalSlides - 1; }: もし最初のスライドで「前へ」を押したら、currentIndex を最後のスライドの番号に戻し、最後のスライドに戻るようにします（ループ再生）。

- updateSliderPosition();: スライドの位置を更新して、新しいスライドが表示されるようにします。

<h3>初期表示</h3>

ページが読み込まれたときに、まず最初のスライド（currentIndex が 0 の状態）が表示されるように、updateSliderPosition()関数を一度実行しています。
