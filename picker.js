<script>
(function(){
  var T=[
    {id:'cable',name:'Кабель и связь',tool:'Ковш 20 см',kind:'ковш',w:26,label:'20 см',
     why:'Самая узкая траншея: вскрываем минимум грунта, потом дешевле засыпать и восстанавливать покрытие.',
     w2:'20 см',d:'до 0,8 м',use:'кабель, связь, полив',note:'минимум вскрытия',
     cap:'Ширина траншеи под ковш 20 см — самая узкая из линейки.'},
    {id:'water',name:'Вода и канализация',tool:'Ковш 30–40 см',kind:'ковш',w:52,label:'30–40 см',
     why:'Под трубу нужен запас под песчаную подушку и уклон. Ковш 30 см берут под воду, 40 см — под канализацию.',
     w2:'30–40 см',d:'по проекту',use:'вода, канализация, дренаж',note:'запас под подушку',
     cap:'Траншея под воду и канализацию: шире ковша 20 см, чтобы влезла подушка.'},
    {id:'gas',name:'Газ',tool:'Ковш 30 см',kind:'ковш',w:39,label:'30 см',
     why:'Под газовую трубу обычно достаточно 30 см. Работаем аккуратно рядом с существующими вводами.',
     w2:'30 см',d:'по проекту',use:'газ, вода',note:'аккуратно у вводов',
     cap:'Траншея под газовую трубу — ковш 30 см.'},
    {id:'found',name:'Фундамент',tool:'Ковш 40–60 см',kind:'ковш',w:78,label:'40–60 см',
     why:'Под ленту нужна ширина с запасом под опалубку. Дно зачищаем планировочным ковшом, чтобы не добирать вручную.',
     w2:'40–60 см',d:'по проекту',use:'лента, пристройка',note:'дно под зачистку',
     cap:'Траншея под ленту фундамента — ковш 40–60 см.'},
    {id:'fence',name:'Забор и столбы',tool:'Гидробур 200–300 мм',kind:'бур',w:52,label:'200–300 мм',
     why:'Бур делает точечные ямы под столбы вместо сплошной траншеи: двор остаётся целым, грунта в разы меньше.',
     w2:'200–300 мм',d:'до 2,4 м',use:'столбы забора, опоры навеса, сваи',note:'без траншеи',
     cap:'Яма под столб гидробуром: точечно, без разрытой площадки.'},
    {id:'plan',name:'Выемка и планировка',tool:'Ковш 100 см',kind:'ковш',w:130,label:'100 см',
     why:'Планировочный ковш снимает и разравнивает большие площади: зачистка дна, засыпка пазух, выравнивание участка.',
     w2:'100 см',d:'по проекту',use:'планировка, засыпка',note:'большие объёмы',
     cap:'Планировочный ковш 100 см: выравнивание и засыпка.'}
  ];
  var cur=T[0];
  var chips=document.getElementById('tchips');
  var tr=document.getElementById('tr'), wDim=document.getElementById('wDim'), wTickL=document.getElementById('wTickL'),
      wTickR=document.getElementById('wTickR'), wTex=document.getElementById('wTex');
  var rTool=document.getElementById('rTool'), rKind=document.getElementById('rKind'), rWhy=document.getElementById('rWhy'),
      rW=document.getElementById('rW'), rD=document.getElementById('rD'), rUse=document.getElementById('rUse'),
      rNote=document.getElementById('rNote'), cutCap=document.getElementById('cutCap');
  if(!chips||!tr) return;
  chips.innerHTML=T.map(function(t,i){
    return '<button class="tchip" type="button" data-i="'+i+'" aria-pressed="'+(i===0)+'">'+t.name+'</button>';
  }).join('');
  function draw(t){
    var cx=210, w=t.w, x=Math.round(cx-w/2);
    tr.setAttribute('x',x); tr.setAttribute('width',w);
    wDim.setAttribute('d','M'+x+' 78h'+w);
    wTickL.setAttribute('d','M'+x+' 72v12');
    wTickR.setAttribute('d','M'+(x+w)+' 72v12');
    wTex.textContent=t.label;
    wTex.setAttribute('x',cx);
    rTool.textContent=t.tool; rKind.textContent=t.kind; rWhy.textContent=t.why;
    rW.textContent=t.w2; rD.textContent=t.d; rUse.textContent=t.use; rNote.textContent=t.note;
    cutCap.textContent=t.cap;
  }
  chips.addEventListener('click',function(e){
    var b=e.target.closest('.tchip'); if(!b) return;
    cur=T[+b.dataset.i];
    chips.querySelectorAll('.tchip').forEach(function(x){x.setAttribute('aria-pressed',String(x===b))});
    draw(cur);
  });
  draw(cur);
  window.__pick={data:T,get:function(){return cur}};
})();
</script>
