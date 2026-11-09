/* BIZ STORY LP（v7）: 事例のデータ・制作実績のタブ・一覧（もっと見る）・見る窓・お問い合わせ画面。
   このドメインからは共用 WordPress を読めないので、事例はこのファイルの中のデータで表示する（外へは何も送らない）。
   - マンガ: images/manga/<slug>/01.webp〜（PDF から書き出したページ画像）
   - 動画: YouTube の ID を入れると youtube-nocookie で再生する。ID が空のものは「準備中」と表示する（枠だけ）
   事例を足す・差し替えるときは、下の MANGA / ANIME / VIDEO / FEATURE を直す。 */
(function () {
  'use strict';

  /* ---------- 事例のデータ ---------- */

  // pages はページ画像の枚数（01.webp〜）。事例に企業名は載せない（題にも入れない）
  var MANGA = [
    { slug: 'asobi-recruit', title: '総合職の採用マンガ', use: '採用', pages: 9 },
    { slug: 'bizsalesnavi', title: 'マンガでわかるビズセールスナビ', use: '商品紹介', pages: 12 },
    { slug: 'opro-soasc', title: 'マンガでわかる収益管理【AIサービス編】', use: '商品紹介', pages: 8 },
    { slug: 'saigo-no-hoken', title: '最後の保険', use: '集客', pages: 7 },
    { slug: 'gaudia-2', title: '「もうすぐ入学のタクマくん」', use: '営業・集客', pages: 7 }
  ];

  // ビズアニメ（YouTube で公開中の作品）
  var ANIME = [
    { title: 'Good Bye MV', label: 'MV', youtube: 'V9ZC16hTlZI' },
    { title: '炎と紫電の空中戦', label: 'アクション', youtube: '7m2ORgR-PDg' },
    { title: '【MV】目MEめぇ～愛 I eye', label: 'MV', youtube: 'CduBxsawUkQ' },
    { title: '『カミツギ』第一話 "触るな"', label: 'オリジナルIP', youtube: 'W4ALRjhxyKw' },
    { title: '【第一話】勇者だった俺が二度目の転生で魔王になった件', label: 'オリジナルIP', youtube: '0OCEK5ebMPQ' },
    { title: '【オリジナルAIアニメ】ZOO/GAN #01 S-07', label: 'オリジナルIP', youtube: 'AJ_F0ED_Fik' },
    { title: 'AIで生成した存在しないアニメ【式法戦線】OP', label: 'オリジナルIP', youtube: '8AKjnAPoXTI' },
    { title: '【MV】仙人ナイトフィーバー', label: 'MV', youtube: 'd1zRWy4QBTI' }
  ];

  // ビズビデオ（実写動画事例集v2 の37本。サムネイルは images/video/vNN.webp）。youtube が空のものは準備中
  // YouTube の ID は、実写動画事例集v2 の PDF で各サムネイルに付いているリンク（2026-11-05 に入れた）。
  // ただし電車旅・朝・船旅の VLOG 3本は、PDF のリンクと動画の中身が食い違っていたので、中身（YouTube の場面）に合わせた
  var VIDEO_GENRES = ['商品・サービスのCM', 'ブランド・ファッション', '採用・会社紹介・学校PR', 'ストーリー・MV', 'VLOG・SNS動画'];
  var VIDEO = [
    [0, 'スキンローション CM', 'SNS広告・ブランドサイト', '水の揺らぎで、肌に広がる透明感を見せる', '1Z56jr-MXvo'],
    [0, 'シートマスク CM', 'SNS広告・EC商品ページ', '素材のやわらかさを、手元の寄りで伝える', 'fjzGjWXzaek'],
    [0, 'ハンディファン CM', 'SNS広告・EC商品ページ', '目に見えない風を、布の流れで描く', '89pO8vlJ9VE'],
    [0, 'ヘッドホン CM', 'SNS広告・Web CM', '街の景色が組み変わる演出で、音の世界観を表す', 'ic3sZytCtf0'],
    [0, 'おにぎりのタイポグラフィ広告', 'SNS広告・店頭サイネージ', '食材そのものを文字に見立て、短い尺で印象を残す', 'Ew72v4YPAjg'],
    [0, '天然水 CM', 'Web CM・SNS広告', '水中と森を行き来し、水源のイメージを描く', '9BN9wrhIRfI'],
    [0, '清涼飲料水 CM', 'Web CM・SNS広告', '室内から山頂へ、ロケなしで場面を切り替える', 'KVaFYb3UcsA'],
    [0, '果実酒 CM', 'SNS広告・Web CM', '果物が弾けるシズル感をスローで見せる', 'XhJoXpxGSfo'],
    [0, '自動車 CM', 'Web CM・ブランドサイト', '走行シーンと車内の表情を、撮影車両なしで構成', 'Ajgl7IZBZN8'],
    [0, 'オフロード車 CM', 'Web CM・展示会映像', '雪山や荒野など、撮影が難しい環境で走らせる', '4eCx5g9XSYQ'],
    [0, 'ラゲッジブランド イメージ映像', 'ブランドサイト・SNS広告', '砂漠を旅する世界観を、海外ロケなしで描く', '3DdUJ74MhPg'],
    [0, 'スキンケアクリーム CM', 'SNS広告・ブランドサイト', '花と羽根の世界観で、商品の上質さを描く', 'coZmBJIbE4s'],
    [0, 'シャンプー CM', 'Web CM・SNS広告', '泡立ちから街でなびく髪まで、仕上がりを見せる', 'Brci3B7XWgo'],
    [0, '日焼け止め CM', 'SNS広告・Web CM', '日差しから逃げる人々を、コミカルに描く', 'Gx9Oc63eexI'],
    [1, 'アパレル ブランドビジュアル', 'SNS広告・ECトップ', '色と文字を重ね、ブランドの勢いを短尺で伝える', 'DkmWuOSvCEY'],
    [1, 'ファッションショー映像', '新作発表・SNS', '複数のラインを、ランウェイ演出でまとめて紹介', 's1yvOU42Qz8'],
    [1, 'ストリートファッション映像', 'SNS広告・店舗サイネージ', '街のカルチャーを、スタイルの違いで見せ分ける', 'zKvRR8xT_zY'],
    [1, 'ファッションブランド CM', 'SNS広告・新作告知', 'グラフィックと人物を組み合わせたポップな構成', '6laM28f8p2s'],
    [1, 'スポーツ ブランディングムービー', 'ブランドサイト・イベント上映', '夜の街と競技の熱量を、表情の寄りで描く', 'jylWl54vt3M'],
    [1, '現場で働く人のブランドムービー', '企業ブランディング・展示会', '過酷な現場に立つ人の表情に焦点を当てる', 'H30xL1TbTjI'],
    [2, '航空業界の採用動画', '採用サイト・説明会', '整備や空港の仕事を、つながる風景で見せる', 'A1g5Iy9_24g'],
    [2, '建設会社の企業CM', '採用・企業ブランディング', '測量と現場の手仕事に、短いコピーを重ねる', '-EYMIuILm6Y'],
    [2, '美容室の採用動画（前編）', '採用サイト・SNS', 'インタビュー形式で、働く人の声を伝える構成', 'RiSfLvY89Q0'],
    [2, '美容室の採用動画（後編）', '採用サイト・SNS', '前編と続けて見られる、シリーズの作り方', 'UNtYjKDx1ww'],
    [2, '学校・学科紹介PR', '学校サイト・オープンキャンパス', '学科ごとの学びの場面を、短くつないで紹介', 'Dvtm097YYws'],
    [3, '猫が主役のショートドラマ', 'SNS・キャラクター展開', '動物を主役にした、続きが見たくなる短編', 'OYgeXiPByBg'],
    [3, '時代劇「井戸の茶碗」', 'エンタメ・地域PR', '古典落語の題材を、実写の時代劇として再現', 'on-dyaeWNJs'],
    [3, 'ショートフィルム（字幕つき）', 'エンタメ・映像作品', '字幕つきで、海外にも届けやすい物語映像', 'Fv5uMYVKCso'],
    [3, 'ミュージックビデオ「timeline」', 'MV・音楽プロモーション', 'ライブの熱と光の演出で、曲の展開を追う', 'sBZn4m20Qlo'],
    [3, 'ミュージックビデオ「gray」', 'MV・音楽プロモーション', '夜の水辺と人物の表情で、曲の空気をつくる', 'aYhKdbobsNc'],
    [3, 'Take404 ANIMI5', 'MV・IP展開', '5人組の世界観を、近未来のセットで描く', '3qNNNk5kMJg'],
    [3, 'ショートドラマ「OKAGE」', 'SNS・ショートドラマ配信', '日常の何気ない場面から、人のつながりを描く', 'cJ-hgvCJRdc'],
    [3, '夫婦のショートドラマ（縦型）', 'SNS・縦型ショート配信', 'スマホ向けの縦型画面で、夫婦の日常を描く', 'AxDU9IBMvGM'],
    [4, '梨泰院食べ歩きVLOG', '観光PR・飲食店のSNS', '夜の屋台街の食べ歩きを、海外ロケなしで描く', 'w58bmU9wScI'],
    [4, '電車旅のVLOG', '観光PR・SNS', '車窓の田園と横顔で、ローカル線の旅を描く', 'v4-FzIaOYl8'],
    [4, '朝のVLOG', '商品PR・SNS', '目覚ましを止める朝から、等身大の一日を描く', 'QqRlb_JGaHw'],
    [4, '船旅のVLOG', '観光PR・SNS', '船を降りる一歩から、旅の始まりを描く', '5SwbDxLN_4g']
  ];

  // マンガ → アニメの事例（ASOBI SYSTEM）。アニメの動画が決まったら youtube に ID を入れる
  // v7: ASOBI SYSTEM のアニメは自前の動画（videos/asobi-system.mp4）。今はページに置いていない。youtube は空のまま
  var FEATURE = { manga: 'asobi-recruit', animeTitle: 'ASOBI SYSTEM 様のアニメ', youtube: '' };

  /* ---------- ここから表示 ---------- */

  var YT_ID = /^[A-Za-z0-9_-]{6,20}$/;
  // 最初に見せる本数（残りは「もっと見る」で開く）。制作実績が主役なので、多めに見せる
  // マクニカは会議（2026-11-04）で「古い・ふさわしくない事例」とされたので v5 から外した
  var FIRST_SHOWN = { manga: 6, anime: 6, video: 9 };
  var lastFocus = null;

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function el(tag, cls, text) {
    var node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null && text !== '') node.textContent = String(text);
    return node;
  }

  function pad(n) { return n < 10 ? '0' + n : String(n); }
  function mangaPage(slug, n) { return 'images/manga/' + slug + '/' + pad(n) + '.webp'; }
  function findManga(slug) { return MANGA.filter(function (m) { return m.slug === slug; })[0]; }

  /* ---------- サービスのタブ ---------- */
  function selectTab(name, focus) {
    $all('[data-bs-tab]').forEach(function (tab) {
      var on = tab.getAttribute('data-bs-tab') === name;
      tab.setAttribute('aria-selected', on ? 'true' : 'false');
      tab.tabIndex = on ? 0 : -1;
      if (on && focus) tab.focus();
    });
    $all('[data-bs-panel]').forEach(function (panel) {
      panel.hidden = panel.getAttribute('data-bs-panel') !== name;
    });
  }

  function initTabs() {
    var tabs = $all('[data-bs-tab]');
    // ヘッダー・トップの「ビズマンガ」などのリンク: サービスの章へ移り、そのタブを開く
    $all('[data-bs-tab-link]').forEach(function (link) {
      link.addEventListener('click', function () { selectTab(link.getAttribute('data-bs-tab-link'), false); });
    });
    // 別のページ（お問い合わせ）から ?tab=anime#services のように来たら、そのタブを開く
    var want = (location.search.match(/[?&]tab=(manga|anime|video)\b/) || [])[1];
    if (want) selectTab(want, false);
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { selectTab(tab.getAttribute('data-bs-tab'), false); });
      tab.addEventListener('keydown', function (e) {
        var next = null;
        if (e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
        else if (e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
        else if (e.key === 'Home') next = tabs[0];
        else if (e.key === 'End') next = tabs[tabs.length - 1];
        if (!next) return;
        e.preventDefault();
        selectTab(next.getAttribute('data-bs-tab'), true);
      });
    });
  }

  /* ---------- 見る窓 ---------- */
  function openModal(title, body) {
    var modal = $('[data-bs-modal]');
    var holder = $('[data-bs-modal-body]', modal);
    if (modal.hidden) lastFocus = document.activeElement; // 窓の中から別の中身に切り替えるときは、最初に押した所へ戻す
    $('#bs-modal-title').textContent = title;
    holder.textContent = '';
    holder.appendChild(body);
    holder.scrollTop = 0;
    modal.hidden = false;
    document.body.classList.add('bs-modal-open');
    $('.bs-modal__close', modal).focus();
  }

  function closeModal() {
    var modal = $('[data-bs-modal]');
    if (modal.hidden) return;
    modal.hidden = true;
    $('[data-bs-modal-body]', modal).textContent = ''; // 動画を止める
    document.body.classList.remove('bs-modal-open');
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }

  function initModal() {
    var modal = $('[data-bs-modal]');
    $all('[data-bs-close]', modal).forEach(function (btn) { btn.addEventListener('click', closeModal); });
    document.addEventListener('keydown', function (e) {
      if (modal.hidden) return;
      if (e.key === 'Escape') { closeModal(); return; }
      if (e.key !== 'Tab') return;
      var items = $all('button, a[href], iframe, [tabindex]:not([tabindex="-1"])', $('.bs-modal__dialog', modal))
        .filter(function (n) { return n.offsetParent !== null; });
      if (!items.length) return;
      var first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  }

  function videoBody(title, youtube, poster) {
    if (YT_ID.test(youtube || '')) {
      var wrap = el('div', 'bs-video');
      var frame = document.createElement('iframe');
      frame.src = 'https://www.youtube-nocookie.com/embed/' + youtube + '?autoplay=1&rel=0';
      frame.title = title;
      frame.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen';
      frame.allowFullscreen = true;
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      wrap.appendChild(frame);
      return wrap;
    }
    // 動画がまだ無いもの（枠だけ）
    var box = el('div', 'bs-video bs-video--pending');
    if (poster) {
      var img = document.createElement('img');
      img.src = poster;
      img.alt = '';
      box.appendChild(img);
    }
    box.appendChild(el('p', 'bs-placeholder', 'この動画は準備中です'));
    return box;
  }

  /* ---------- マンガを読む窓（ビズマンガのHPのトップと同じ、1ページずつめくる形） ---------- */
  var viewer = { pages: 0, current: 0, lastFocus: null };

  function viewerGo(n) {
    var box = $('[data-bs-viewer]');
    if (n < 0 || n >= viewer.pages) return;
    viewer.current = n;
    $('.bs-viewer__track', box).style.transform = 'translateX(-' + (n * 100) + '%)';
    $all('.bs-viewer__dot', box).forEach(function (d, i) {
      d.classList.toggle('is-active', i === n);
      d.setAttribute('aria-current', i === n ? 'true' : 'false');
    });
    $('.bs-viewer__prev', box).disabled = n === 0;
    $('.bs-viewer__next', box).disabled = n === viewer.pages - 1;
    $('.bs-viewer__count', box).textContent = (n + 1) + ' / ' + viewer.pages;
  }

  function openViewer(m) {
    var box = $('[data-bs-viewer]');
    if (!box || !m) return;
    var track = $('.bs-viewer__track', box);
    var dots = $('.bs-viewer__dots', box);
    var name = m.use + 'のマンガ';
    track.textContent = '';
    dots.textContent = '';
    for (var i = 1; i <= m.pages; i++) {
      var img = document.createElement('img');
      img.src = mangaPage(m.slug, i);
      img.alt = name + '（' + i + 'ページ目）';
      img.loading = i <= 2 ? 'eager' : 'lazy';
      img.decoding = 'async';
      track.appendChild(img);
      var dot = el('button', 'bs-viewer__dot');
      dot.type = 'button';
      dot.setAttribute('aria-label', i + 'ページ目へ');
      dot.addEventListener('click', viewerGo.bind(null, i - 1));
      dots.appendChild(dot);
    }
    $('.bs-viewer__dialog', box).setAttribute('aria-label', name);
    viewer.pages = m.pages;
    viewer.lastFocus = document.activeElement;
    box.hidden = false;
    document.body.classList.add('bs-modal-open');
    viewerGo(0);
    $('.bs-viewer__close', box).focus();
  }

  function closeViewer() {
    var box = $('[data-bs-viewer]');
    if (!box || box.hidden) return;
    box.hidden = true;
    $('.bs-viewer__track', box).textContent = '';
    document.body.classList.remove('bs-modal-open');
    if (viewer.lastFocus && typeof viewer.lastFocus.focus === 'function') viewer.lastFocus.focus();
  }

  function initViewer() {
    var box = $('[data-bs-viewer]');
    if (!box) return;
    $all('[data-bs-viewer-close]', box).forEach(function (b) { b.addEventListener('click', closeViewer); });
    $('.bs-viewer__prev', box).addEventListener('click', function () { viewerGo(viewer.current - 1); });
    $('.bs-viewer__next', box).addEventListener('click', function () { viewerGo(viewer.current + 1); });
    // 指でめくる（左へはらうと次のページ）
    var stage = $('.bs-viewer__stage', box);
    var startX = null, startY = 0;
    stage.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; startY = e.touches[0].clientY; }, { passive: true });
    stage.addEventListener('touchend', function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      var dy = e.changedTouches[0].clientY - startY;
      startX = null;
      if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
      viewerGo(viewer.current + (dx < 0 ? 1 : -1));
    });
    document.addEventListener('keydown', function (e) {
      if (box.hidden) return;
      if (e.key === 'Escape') { closeViewer(); return; }
      if (e.key === 'ArrowRight') { viewerGo(viewer.current + 1); return; }
      if (e.key === 'ArrowLeft') { viewerGo(viewer.current - 1); return; }
      if (e.key !== 'Tab') return;
      var items = $all('button:not([disabled])', box).filter(function (n) { return n.offsetParent !== null; });
      if (!items.length) return;
      var first = items[0], last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    });
  }

  /* ---------- カード ---------- */
  function card(opts) {
    var li = document.createElement('li');
    var btn = el('button', 'bs-card');
    btn.type = 'button';
    btn.setAttribute('aria-haspopup', 'dialog');
    var thumb = el('span', 'bs-card__thumb');
    if (opts.image) {
      var img = document.createElement('img');
      img.src = opts.image;
      img.alt = '';
      img.loading = 'lazy';
      img.decoding = 'async';
      thumb.appendChild(img);
    }
    if (opts.badge) thumb.appendChild(el('span', 'bs-card__badge', opts.badge));
    if (opts.play) thumb.appendChild(el('span', 'bs-card__play'));
    if (opts.pending) thumb.appendChild(el('span', 'bs-card__pending', '準備中'));
    btn.appendChild(thumb);
    var body = el('span', 'bs-card__body');
    if (opts.use) body.appendChild(el('span', 'bs-card__use', opts.use));
    body.appendChild(el('span', 'bs-card__title', opts.title));
    if (opts.meta) body.appendChild(el('span', 'bs-card__meta', opts.meta));
    btn.appendChild(body);
    btn.addEventListener('click', opts.onOpen);
    li.appendChild(btn);
    return li;
  }

  function fillGrid(name, cards) {
    var grid = $('[data-bs-grid="' + name + '"]');
    var more = $('[data-bs-more="' + name + '"]');
    var limit = FIRST_SHOWN[name] || cards.length;
    grid.textContent = '';
    cards.forEach(function (c, i) {
      if (i >= limit) c.hidden = true;
      grid.appendChild(c);
    });
    if (!more) return;
    more.hidden = cards.length <= limit;
    $('button', more).textContent = 'もっと見る（全' + cards.length + '本）';
    $('button', more).onclick = function () {
      var first = null;
      cards.forEach(function (c) { if (c.hidden && !first) first = c; c.hidden = false; });
      more.hidden = true;
      if (first) $('button', first).focus();
    };
  }

  function renderManga() {
    fillGrid('manga', MANGA.map(function (m) {
      return card({
        image: mangaPage(m.slug, 1),
        use: m.use + ' / ' + m.pages + 'P',
        title: m.title,
        onOpen: function () { openViewer(m); }
      });
    }));
  }

  function renderAnime() {
    var list = ANIME.filter(function (a) { return YT_ID.test(a.youtube); });
    fillGrid('anime', list.map(function (a) {
      return card({
        image: 'https://i.ytimg.com/vi/' + a.youtube + '/hqdefault.jpg',
        badge: a.label,
        title: a.title,
        play: true,
        onOpen: function () { openModal(a.title, videoBody(a.title, a.youtube, '')); }
      });
    }));
  }

  function renderVideo() {
    var items = VIDEO.map(function (v, i) {
      return { genre: v[0], title: v[1], use: v[2], text: v[3], youtube: v[4], image: 'images/video/v' + pad(i + 1) + '.webp' };
    });

    function draw(genre) {
      fillGrid('video', items.filter(function (x) { return genre < 0 || x.genre === genre; }).map(function (x) {
        return card({
          image: x.image,
          title: x.title,
          use: x.use,
          meta: x.text,
          pending: !YT_ID.test(x.youtube),
          onOpen: function () { openModal(x.title, videoBody(x.title, x.youtube, '')); }
        });
      }));
    }

    var filter = $('[data-bs-filter="video"]');
    [-1].concat(VIDEO_GENRES.map(function (_, i) { return i; })).forEach(function (g) {
      var b = el('button', '', g < 0 ? 'すべて' : VIDEO_GENRES[g]);
      b.type = 'button';
      b.setAttribute('aria-pressed', g < 0 ? 'true' : 'false');
      b.addEventListener('click', function () {
        $all('button', filter).forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        draw(g);
      });
      filter.appendChild(b);
    });
    filter.hidden = false;
    draw(-1);
  }

  function initFeature() {
    var m = findManga(FEATURE.manga);
    var mangaBtn = $('[data-bs-feature="manga"]');
    var animeBtn = $('[data-bs-feature="anime"]');
    if (m && mangaBtn) mangaBtn.addEventListener('click', function () { openViewer(m); });
    if (animeBtn) {
      if (YT_ID.test(FEATURE.youtube)) {
        animeBtn.textContent = '';
        var img = document.createElement('img');
        img.src = 'https://i.ytimg.com/vi/' + FEATURE.youtube + '/hqdefault.jpg';
        img.alt = '';
        animeBtn.appendChild(img);
        animeBtn.appendChild(el('span', 'bs-card__play'));
      }
      animeBtn.addEventListener('click', function () {
        openModal(FEATURE.animeTitle, videoBody(FEATURE.animeTitle, FEATURE.youtube, ''));
      });
    }
  }

  // 導入事例の「タップして読む」（data-bs-read にマンガの slug）
  function initReadButtons() {
    $all('[data-bs-read]').forEach(function (btn) {
      var m = findManga(btn.getAttribute('data-bs-read'));
      if (m) btn.addEventListener('click', function () { openViewer(m); });
    });
  }

  // 狭い画面のメニュー: 項目を押したら閉じる・Esc で閉じる
  function initMenu() {
    var menu = $('[data-bs-menu]');
    if (!menu) return;
    $all('a', menu).forEach(function (a) { a.addEventListener('click', function () { menu.open = false; }); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.open) { menu.open = false; $('summary', menu).focus(); }
    });
  }

  // お問い合わせ画面（contact.html）。入力を確かめてから、CRM の受信箱へ送る（contact.html の inbound-v1.js。data-auto="false" なのでここから呼ぶ）
  // inbound-v1.js は応答を待たない作りなので、送り出せたら完了と表示する。スクリプトが読めていない・送り出せないときは、完了と出さない
  function initContact() {
    var form = $('[data-bs-contact]');
    if (!form) return;
    var status = $('[data-bs-contact-status]', form);
    if (/[?&]topic=free\b/.test(location.search)) {
      var free = $('input[name="topic"][data-topic="free"]', form);
      if (free) free.checked = true;
    }
    function show(kind, text) {
      status.className = 'bs-form__status bs-form__status--' + kind;
      status.textContent = text;
      status.hidden = false;
      status.focus();
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var bad = $all('input, textarea', form).filter(function (f) { return !f.checkValidity(); });
      $all('[aria-invalid]', form).forEach(function (f) { f.removeAttribute('aria-invalid'); });
      bad.forEach(function (f) { f.setAttribute('aria-invalid', 'true'); });
      if (bad.length) {
        show('error', '入力されていない項目、または形式が正しくない項目があります（' + bad.length + '件）。赤い枠の項目をご確認ください。');
        return;
      }
      var inbound = window.BizcarteInbound;
      var sent = false;
      try { sent = !!(inbound && typeof inbound.sendForm === 'function' && inbound.sendForm(form)); } catch (err) { sent = false; }
      if (!sent) {
        show('error', '送信できませんでした。通信の状態をご確認のうえ、時間をおいてもう一度お試しください。');
        return;
      }
      $all('input, textarea, button', form).forEach(function (f) { f.disabled = true; });
      show('done', 'お問い合わせを送信しました。内容を確認のうえ、担当者よりご連絡いたします。');
    });
  }

  // 導入事例: カードの「詳しく見る」（またはカードの画像）で、窓に 業種・課題・導入・成果・なぜ効いたか と「マンガを読む」を出す
  function initCases() {
    $all('[data-bs-case]').forEach(function (art) {
      var m = findManga(art.getAttribute('data-bs-case'));
      var detail = $('[data-bs-case-detail]', art);
      var client = $('.bs-ccase__client', art).textContent;
      var type = $('.bs-ccase__type', art).textContent;
      function open() {
        var body = el('div', 'bs-case-modal');
        if (m) {
          var img = document.createElement('img');
          img.className = 'bs-case-modal__img';
          img.src = mangaPage(m.slug, 1);
          img.alt = '';
          body.appendChild(img);
        }
        var right = el('div', 'bs-case-modal__body');
        var rows = detail.firstElementChild.cloneNode(true);
        right.appendChild(rows);
        if (m) {
          var read = el('button', 'bs-btn', 'マンガを読む（' + m.pages + 'ページ）');
          read.type = 'button';
          read.addEventListener('click', function () { closeModal(); openViewer(m); });
          var foot = el('div', 'bs-case-modal__foot');
          foot.appendChild(read);
          right.appendChild(foot);
        }
        body.appendChild(right);
        openModal(client + '｜' + type, body);
      }
      $('.bs-ccase__more', art).addEventListener('click', open);
      $('.bs-ccase__img', art).addEventListener('click', open);
    });
  }

  // トップのアニメ（data-bs-play に YouTube の ID、data-bs-title に作品名）
  function initPlayButtons() {
    $all('[data-bs-play]').forEach(function (btn) {
      var id = btn.getAttribute('data-bs-play');
      var title = btn.getAttribute('data-bs-title') || 'ビズアニメ';
      btn.addEventListener('click', function () { openModal(title, videoBody(title, id, '')); });
    });
  }

  function init() {
    initMenu();
    initContact();
    if (!$('[data-bs-modal]')) return; // 事例の無いページ（お問い合わせ）
    initTabs();
    initModal();
    initViewer();
    initCases();
    initReadButtons();
    renderManga();
    renderAnime();
    renderVideo();
    initFeature();
    initPlayButtons();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
