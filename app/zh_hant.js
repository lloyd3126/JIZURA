/* Traditional Chinese catalog labels. Project IDs and saved data stay language-neutral. */
(() => {
  'use strict';
  const titles = {
    layout: {
      center:'置中排版', mixed:'大小混排', scatter:'錯落排字', ring:'環形文字', wave:'波形軌跡',
      circle:'圓形視窗', condensed:'直向壓縮', type:'逐字排版', title:'標題卡', interlude:'間奏段落',
      staircase:'階梯排列', zigzag:'鋸齒排列', spiral:'螺旋排版', justified:'網格版面', bubble:'對話泡泡',
      ticker:'跑馬字幕', splitScreen:'上下分割', mirror:'鏡像排版', perspective:'透視排版', filmstrip:'底片框',
      quote:'引文版面', searchBar:'搜尋欄', chat:'聊天訊息', notification:'通知卡片', ticket:'票券版面',
      labels:'標籤拼貼',
      hanging:'懸掛文字', orbit:'環繞排版', tunnel:'隧道文字', wordCloud:'文字雲', elastic:'彈性文字',
      neon:'霓虹字', keycaps:'鍵帽文字', bubbles:'泡泡文字', slotMachine:'拉霸字輪', flipBoard:'翻牌看板',
      zoomRepeat:'連續放大', splitHalves:'上下對開', dotMatrix:'點陣顯示', depthStack:'景深堆疊',
      contents:'目錄', footnote:'註腳', numbered:'編號清單', poster:'海報排版', swissGrid:'瑞士網格',
      dictionary:'字典條目', newspaper:'報紙版面', cassette:'卡帶', polaroid:'拍立得相框', postcard:'明信片',
      letterPaper:'信箋', calendar:'月曆', routeMap:'路線圖', stationSign:'站名牌', warningLabel:'警告標籤',
      priceTag:'價格標籤', nameTag:'名牌', stickyNotes:'便利貼', cube:'立方體', cylinder:'圓柱體',
      accordion:'手風琴摺頁', flag:'旗幟', ribbon:'緞帶', pendulum:'鐘擺', blocks:'積木', magnets:'磁鐵',
      billboard:'看板', crossword:'填字遊戲', puzzle:'拼圖', dominoes:'骨牌', burst:'爆散文字', origami:'摺紙',
      zipper:'拉鍊', glitchGrid:'故障格線', mosaicTiles:'馬賽克拼貼', contour:'等高線', stencil:'模板字',
      pill:'膠囊框', curtain:'布幕排版', equalizer:'等化器排版', tape:'膠帶排版',
      vcols:'直排文字', marquee:'跑馬燈', tile:'文字拼貼', huge:'超大文字', gloss:'註解版面', diag:'斜向色帶',
      stack:'殘影堆疊', lowerThird:'下三分之一字幕', corners:'對角排版', arcTop:'彩虹弧形', gridCells:'網格方格',
      dropCap:'首字放大', frameBox:'相框', subtitleBar:'字幕條', sideways:'側向文字', edgeFrame:'邊框排版',
      hanko:'簽名印章', genkou:'稿紙', panels:'漫畫分格', ruler:'尺寸標線', rain:'文字雨', bounceLine:'彈跳文字',
      crossBands:'交錯色帶', stickerBomb:'貼紙拼貼', credits:'片尾字幕', columnsBig:'大小對比欄', circleWords:'同心圓文字',
      typeSpecimen:'字體樣張', kanjiFocus:'單字聚焦', halfVertical:'直橫混排', magazine:'雜誌跨頁',
      headlineDeck:'標題與副標', proofread:'校稿紙', ema:'繪馬祈願牌', ransom:'剪貼字', vinyl:'黑膠唱片',
      bookSpine:'書背', stampSheet:'郵票版面', chochin:'紙燈籠', noren:'暖簾', tanzaku:'許願短箋', omikuji:'籤詩',
      kakejiku:'掛軸', shoji:'紙拉門', clapper:'場記板', karuta:'歌牌', flipCards:'翻牌', pile:'文字堆疊',
      balloons:'文字氣球', tiles:'文字方塊', bulbs:'跑馬燈燈泡', ledScroll:'LED 跑字', crowdBubbles:'對話泡泡群',
      wordSearch:'文字搜尋', shadowPlay:'皮影戲', kaleido:'萬花筒', fisheye:'魚眼鏡頭', wall:'透視牆面',
      sliceStack:'切片堆疊', maskReveal:'文字窗格', halftoneBig:'超大網點文字'
    },
    enter: {
      cut:'直接切入', slice:'切片滑入', type:'逐字打出', pop:'彈跳進場', drop:'落下進場', stretch:'伸展進場',
      wipe:'擦拭揭示', blur:'模糊淡入', spin:'旋轉進場', flicker:'閃爍顯現', scramble:'亂碼還原', zoom:'縮放進場',
      skewIn:'斜切滑入',
      domino:'骨牌翻入', openFold:'摺頁展開', unroll:'捲軸展開', shutter:'百葉揭示', irisOpen:'光圈開啟',
      checker:'棋盤格揭示', rubber:'彈性拉伸', glitch:'故障顯現', magnet:'磁吸聚合', skew:'斜切扭入', decode:'解碼顯現',
      smear:'墨跡暈開', neonOn:'霓虹亮起', stamp:'蓋章顯現',
      assemble:'碎片組合', riseMask:'由下揭示', dropMask:'由上揭示', slideL:'由左滑入', slideR:'由右滑入',
      slideWhole:'整體滑入', flipX:'垂直翻轉', flipY:'水平翻轉', strokeDraw:'描邊後填色', outlineFill:'描邊轉填色',
      splitJoin:'上下合併', vSlice:'垂直切片', diagWipe:'斜向擦入', randomOrder:'文字隨機依序出現', bounceBig:'大幅彈跳',
      squashDrop:'壓扁落下', echoIn:'殘影匯聚', trackIn:'字距收緊', trackOut:'字距展開', blurStagger:'模糊依序揭示',
      fadeStagger:'逐字淡入', spiralIn:'螺旋組合', zoomOut:'由超大縮回', cursorSweep:'游標掃過', rockSettle:'搖晃後定位',
      snapRail:'吸附對齊', fanOpen:'摺扇展開', stickerPeel:'貼上貼紙', crumple:'揉皺後展開', noteUnfold:'信箋展開',
      tornJoin:'撕片拼合', splitFlap:'翻牌顯示', crtOn:'CRT 開機', odometer:'里程表翻動', matrixRain:'數位雨',
      brushReveal:'筆刷揭示', quarters:'由四方匯入', printRegister:'色版對齊', echoCount:'逐次倒數', liquidFill:'液面上升',
      strokeOrder:'逐筆書寫', shadowFirst:'先現出陰影', tokoroten:'擠出字條'
    },
    hold: {
      jitter:'抖動', drift:'漂移', wave:'波浪擺動',
      still:'靜止', breathe:'呼吸', glitchtick:'故障閃動', colorRun:'流動色彩', trackBreathe:'字距呼吸',
      beatHop:'隨節拍跳動', hWave:'水平波動', orbitSmall:'小幅環繞', scanBand:'掃描光帶', noiseDrift:'雜訊飄移',
      zoomSlow:'緩慢推近', stretchPulse:'隨節拍伸縮', glitchJump:'偶發故障跳動', echoTrail:'殘影軌跡', glowFlicker:'光暈閃爍',
      windGust:'風吹效果', eqBounce:'音量條跳動', flashBox:'隨節拍反相', glintSweep:'高光掃過', flipSwap:'偶發翻轉',
      shadowSway:'陰影搖曳', typeRattle:'打字機震動', focusRack:'焦點轉移', pluckString:'撥弦震動'
    },
    exit: {
      cut:'直接切出', explode:'爆裂散開', fall:'崩落', drift:'霧化散去', slice:'切片退場', wipe:'擦拭離場',
      shrink:'縮小消失', blur:'模糊淡出', stretch:'拉伸離場', scatter:'四散飛出', glitch:'故障消失',
      popBurst:'彈裂散開', popOut:'彈散離場', burst:'爆散離場',
      sinkMask:'向下消失', riseOut:'向上離場', slideOutL:'向左滑出', slideOutR:'向右滑出',
      flipOutX:'雙門闔上', flipOutY:'向下翻落', trackOutWide:'字距擴散', collapse:'向內收縮', zoomThrough:'放大穿越',
      zoomFar:'遠離消失', spinOut:'旋轉離場', blurOutStagger:'文字依序模糊', undraw:'退回描邊', outlineOut:'填色淡出成描邊',
      irisClose:'光圈閉合', splitApart:'上下分離', vSliceDrop:'垂直切片落下', dissolve:'碎裂消散', scrambleOut:'變成符號',
      glitchDissolve:'故障成方塊', gravity:'受重力落下', burn:'燃燒消失', sweepCover:'色帶覆蓋', shatterLite:'碎成四片',
      peelOff:'貼紙剝落', crumpleOut:'揉皺拋出', tearOut:'撕裂離場', scorchOut:'焦痕消散', overexposeOut:'過曝成白',
      scanOut:'掃描線抹除', halftoneOut:'化為網點', eraserOut:'黑板擦除', vacuumOut:'吸入一點', sandOut:'化沙散落',
      hingeOut:'鉸鏈鬆脫', rocketOff:'火箭飛離', balloonOff:'像氣球飄走', deflateOut:'洩氣飛走', glassBreak:'玻璃碎裂',
      clapShut:'向中央闔上', lampOff:'燈光熄滅', matrixOut:'數位雨消失', tornadoOut:'龍捲風捲走', snakeOut:'排成一列離場',
      flutterOut:'飄落', fanClose:'摺扇收合', rgbSplitOut:'分離成 RGB', shockOut:'衝擊波', floodOut:'淹沒',
      slashOut:'一分為二', scribbleOut:'塗鴉抹去', candleOut:'吹熄'
    },
    decor: {
      brackets:'角落標記', rings:'座標圓環', dots:'點狀圓環', leaders:'指示線', blobs:'墨漬', bars:'粗糙色帶',
      counter:'大型數字', cropMarks:'裁切標記', indexNum:'序號', dateStamp:'拍攝日期戳', qrBlock:'QR 風格方塊',
      guides:'輔助線', checkerStrip:'棋盤格色帶', beatRing:'節拍圓環', speedCorner:'速度線', risingParticles:'上升粒子',
      brushStroke:'筆刷筆觸', tapePieces:'紙膠帶', scribbleUnder:'手繪底線', crossOut:'編輯標記', watermarkKanji:'大型浮水印字',
      verticalStrip:'直排文字條', romajiLine:'羅馬字行', bracketsJP:'日式括號', seal:'朱紅印章', kamon:'家徽', petals:'櫻花花瓣',
      seigaiha:'青海波紋', asanoha:'麻葉紋', hanabi:'煙火', chochin:'紙燈籠', shimenawa:'注連繩', sensu:'摺扇',
      tsukiKumo:'明月與雲', momiji:'楓葉', namiGashira:'浪花', kasumi:'薄霧', registration:'套印標記',
      ruledLines:'筆記本橫線', indexTabs:'索引標籤', moonPhases:'月相', dandelion:'蒲公英種子', tally:'計數刻痕',
      windowChrome:'視窗框', notifBell:'通知鈴鐺', likeCounter:'按讚數', mediaControls:'播放控制列'
    },
    treat: {
      none:'無', outline:'空心字', outlineFill:'文字描邊', doubleOutline:'雙層描邊', extrude:'立體字', marker:'螢光筆標記',
      strike:'刪除線', boxed:'文字框', gradientV:'垂直漸層', splitColor:'雙色切分', halftone:'網點', dotted:'點狀描邊',
      alternate:'交替配色', wide:'寬體字', tall:'高體字', echoOutline:'描邊殘影', emphasisDots:'強調點', neonOutline:'霓虹燈管',
      glitchSplit:'色彩錯位', stencilGap:'鏤空字', sizeWave:'字級律動', rotateAlt:'角度交替', baselineShift:'基線錯落',
      fauxBold:'加粗', circled:'文字加圈', bracketsQuote:'引號裝飾', reflection:'倒影', sticker:'貼紙描邊',
      kerningWide:'加寬字距', monoGrid:'方格稿紙', outlineOffset:'位移描邊', toneShadow:'網點陰影', fadeChars:'文字漸淡',
      cutShift:'切片位移', focusPull:'焦點變化', spotChar:'單字醒目', ransom:'剪貼字'
    },
    bg: {
      none:'純色', seigaiha:'青海波', asanoha:'麻葉紋', topoLines:'等高線', ridgePlot:'山脈線條', nightMoon:'月夜',
      filmStrip:'底片', vhsBand:'VHS 雜訊帶', godRays:'光束', vignettePulse:'脈動暗角', paperCut:'剪紙', bigChar:'超大文字',
      splitV:'垂直雙色', splitH:'水平雙色', splitDiag:'斜向雙色', tvBars:'電視色條', speedLines:'速度線', bokehBg:'散景',
      particlesBg:'浮動粒子', eqBars:'等化器音柱', letterbox:'電影黑邊', noiseField:'流動雜訊'
    },
    cam: {
      push:'緩慢推近', rackFocus:'焦點轉移', floatNoise:'浮動鏡頭', vertigo:'希區考克變焦', spiralIn:'螺旋縮放',
      jelly:'彈性搖晃', pullOut:'拉遠', panL:'向左搖攝', panR:'向右搖攝', dutch:'荷蘭式傾斜', beatPunch:'隨節拍推近',
      driftDiag:'斜向漂移', shakeHard:'強烈震動', stepZoom:'階梯式縮放'
    },
    fx: {
      chroma:'色彩跳動', slice:'切片故障', block:'方塊故障', zoom:'縮放模糊', radialChroma:'放射色差', bulge:'魚眼扭曲',
      macroBlock:'壓縮方塊', ditherBit:'單色抖動', rotateSnap:'角度跳轉', echoFrames:'影格殘影', kaleido:'萬花筒',
      bandInvert:'反相色帶', anamorphic:'變形鏡頭光斑', tvStatic:'電視雪花', dustScratches:'底片刮痕', filmAdvance:'底片推進',
      perspectiveTilt:'透視傾斜', focusLines:'對焦線', starGlint:'星芒', negativeRing:'反相光環', shatter:'玻璃碎裂',
      defocus:'失焦', rgbSplit:'RGB 分離', vhsRoll:'VHS 捲動', trackingNoise:'磁帶追蹤雜訊', posterize:'色調分離',
      filmBurn:'底片燒灼', crtOff:'CRT 關機'
    },
    trans: {
      wipe:'邊緣擦拭', diagonalWipe:'斜帶擦拭', irisOpen:'光圈開啟', pushSlide:'推入', doorsOpen:'雙門開啟',
      checker:'棋盤格轉場', blockDissolve:'方塊溶解', inkBlob:'墨漬擴散', shatterTiles:'碎片轉場', sliceShift:'色帶滑動',
      cubeTurn:'立方體翻轉', flashCross:'閃光切換', pixelate:'像素化轉場'
    }
  };
  for (const group of J.GROUP_KEYS) {
    for (const key of J.order(group)) {
      const item = J.registry(group)[key];
      if (item && titles[group] && titles[group][key]) item.name = titles[group][key];
    }
  }
  const styles = {
    noir:['黑白色差','黑白畫面搭配青色與琥珀色偏移'], crimson:['深紅訊號','深紅底色、單色文字與資料故障'],
    caution:['警示黃','黃、紅、藍配色與儀表圖形'], magenta:['流行桃紅','亮粉色、圓潤粗體與標註線'],
    paper:['紙與墨','紙張質感、靛藍、洋紅與明朝殘影'], hud:['暗色 HUD','炭灰底、細框、橘色點綴與蝕影'],
    mint:['薄荷終端','黑、藍綠與萊姆色搭配掃描效果'], specimen:['字體標本','墨色背景與明朝註記'],
    transit:['大眾運輸','橄欖綠、黃色、指標與網點'], blueprint:['藍圖','藍、白、黑的圖形拼貼'],
    rouge:['胭脂漸層','淺灰與紅色漸層、膠囊圖形'], mono:['單色 RGB','灰階空間、白色明朝體與 RGB 分離'],
    sakura:['櫻花','柔和櫻粉與梅色，搭配圓體及明朝體'], ocean:['深海','海軍藍、亮青色、氣泡與細黑體'],
    sunset:['日落漸層','橘至紫漸層、粗明朝體與背光'], forest:['森林手帳','苔綠、自然紙張與鉛筆字'],
    vapor:['Vaporwave','粉藍粉紅與 VHS 光暈'], newsprint:['報紙','灰紙、黑紅配色與網點套印'],
    synth80:['Synth 80 年代','黑底、霓虹洋紅與青色、掃描線'], kraft:['牛皮紙','暖色紙張、紅靛色印章與紙膠帶'],
    candy:['糖果','薄荷與水果粉彩、彈跳文字'], acid:['酸性','黑底、螢光綠洋紅與粗糙字體'],
    sumi:['墨與朱','和紙、書法筆觸與朱紅印章'], gold:['金色夜景','深黑、金箔、象牙白明朝體與光芒']
  };
  for (const [key, [name, desc]] of Object.entries(styles)) {
    if (J.STYLES[key]) { J.STYLES[key].name = name; J.STYLES[key].desc = desc; }
  }
  const moods = {glitch:'故障', calm:'沉靜', pop:'流行', graphic:'圖像', editorial:'編輯風', emotional:'情緒', chaos:'百變'};
  for (const [key, name] of Object.entries(moods)) if (J.MOODS[key]) J.MOODS[key].name = name;
  J.LANG_LABEL = {auto:'自動判斷', ja:'日文', 'zh-Hant':'繁體中文', 'zh-Hans':'簡體中文', ko:'韓文', en:'英文'};
  J.SAMPLE_LYRICS = '我仍記得/黎明的顏色\n遠方傳來鬆開的聲音\n你說，現在還來得及嗎？\n*透明*地活著，我不甘於此！';
})();
