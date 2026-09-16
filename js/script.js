/* ---------------- product data ----------------
   Rows are [name, price] or [name, price, description].
   Everything below is addable to the cart. Prices are transcribed
   from the shop's menu boards; taxes are additional.               */

const classicBagelFlavors = ["Plain","Sesame","Cinnamon Raisin","Poppy","Everything","Onion","Garlic","Egg Onion","Egg","Whole Wheat Plain","Whole Wheat Everything","Whole Wheat Sesame","Rolls","Pumpernickel","Rainbow","Salt","Rye","Sunflower","Bialys"];
const flatFlavors = ["Plain","Everything","Poppy","Sesame","Whole Wheat Plain","Whole Wheat Sesame","Sunflower","Whole Wheat Everything"];

/* ----- Bagels: Top It Off (bagels with spreads) ----- */
const spreadsData = [
  ["Bagel w/ Butter",3.25,"Fresh bagel with real dairy butter, melted in."],
  ["Bagel w/ Cream Cheese",4.39,"A thick, hand-spread schmear of plain cream cheese."],
  ["Bagel w/ Vegetable Cream Cheese",4.75,"Cream cheese loaded with fresh garden vegetables."],
  ["Bagel w/ Scallion Cream Cheese",4.75,"Cream cheese whipped with fresh-chopped scallions."],
  ["Bagel w/ Walnut Raisin Cream Cheese",4.75,"Sweet cream cheese folded with walnuts and raisins."],
  ["Bagel w/ Lox Spread",5.75,"Whipped cream cheese blended with smoked salmon."],
  ["Sliced Nova & Cream Cheese",11.99,"Hand-sliced Nova lox stacked over cream cheese."]
];
const twistData = [
  ["Bagel Twist, Plain",2.00,"Our hand-twisted bagel, fresh and plain."],
  ["Bagel Twist w/ Butter",3.75,"Hand-twisted bagel with real butter."],
  ["Bagel Twist w/ Cream Cheese",4.50,"Hand-twisted bagel with a full schmear."],
  ["Bagel Twist w/ Flavored Cream Cheese",4.50,"Twist with your choice of flavored cream cheese."],
  ["Bagel Twist w/ Lox Spread",5.50,"Twist with our house-whipped lox spread."]
];
const miniData = [
  ["Mini Bagel",0.90,"Same recipe, bite-sized."],
  ["Mini w/ Butter",1.99,"Mini bagel with real butter."],
  ["Mini w/ Cream Cheese",2.25,"Mini bagel with a schmear of plain cream cheese."],
  ["Mini w/ Flavored Cream Cheese",2.50,"Mini bagel with any flavored cream cheese."],
  ["Mini w/ Lox Spread",2.50,"Mini bagel with our house lox spread."],
  ["6 Minis",5.40,"Half dozen mini bagels."],
  ["1 Dozen Minis",10.80,"A full dozen mini bagels."]
];
const extrasData = [
  ["Croissant",2.00,"Flaky, buttery, baked fresh daily."],
  ["Croissant w/ Butter",3.50,"Warm croissant with real butter."],
  ["Croissant w/ Cream Cheese",4.50,"Croissant with a schmear of cream cheese."],
  ["Muffin",3.75,"Baked-fresh muffin — ask for today's flavor."],
  ["Muffin w/ Butter",3.99,"Muffin, warmed with butter."],
  ["Muffin w/ Jelly",3.99,"Muffin with butter and jelly."]
];
/* ----- Flats, dressed (same dough, pressed flat) ----- */
const flatSpreadData = [
  ["Flat w/ Butter",3.69,"Fresh flat with real dairy butter."],
  ["Flat w/ Cream Cheese",4.99,"Flat with a thick schmear of cream cheese."],
  ["Flat w/ Flavored Cream Cheese",5.39,"Flat with your choice of flavored cream cheese."],
  ["Flat w/ Lox Spread",5.39,"Flat with our house-whipped lox spread."],
  ["Add Jelly",0.50,"Add a side of jelly to any flat."]
];

/* ----- Breakfast: Omelettes (3-egg, served with a bagel or bread) ----- */
const omeletteData = [
  ["Western Omelette",11.99,"Ham, peppers, onions & pepper jack cheese. Served with a side bagel or bread."],
  ["All American Omelette",12.99,"Bacon, sausage, ham & American cheese. Served with a side bagel or bread."],
  ["Garden Fresh Omelette",11.99,"Spinach, onions, peppers, mushrooms, tomatoes & swiss or feta cheese. Served with a side bagel or bread."],
  ["Healthy Doctor Omelette",11.99,"White eggs, turkey, spinach & swiss or feta cheese. Served with a side bagel or bread."],
  ["Cheesesteak Omelette",12.99,"Roasted beef or pastrami, onions, peppers & mozzarella cheese. Served with a side bagel or bread."],
  ["L.E.O. Omelette",11.99,"Nova lox, three eggs & onions. Served with a side bagel or bread."]
];

/* ----- Breakfast: Griddle Favorites (egg sandwiches now use the builder) ----- */
const breakfastData = [
  ["Hungry Man Special",11.75,"Three eggs with bacon, ham, sausage & cheese on a roll or bagel."],
  ["Home Fries — Small",2.99,"A small side of seasoned home fries."],
  ["Home Fries — Large",5.99,"A large side of seasoned home fries."],
  ["Side of Hash Browns",1.25,"Crispy golden hash browns on the side."],
  ["Side of Bacon",3.50,"A side of crispy bacon."],
  ["Buttered Roll or Bagel",2.25,"Fresh roll or bagel with real butter."]
];
const breakfastSpecialData = [
  ["Monday Special — Scallion Cream Cheese",6.59,"Bagel or roll with scallion cream cheese + a 12 oz. hot beverage."],
  ["Tuesday Special — Vegetable Cream Cheese",6.59,"Bagel or roll with vegetable cream cheese + a 12 oz. hot beverage."],
  ["Wednesday Special — Chef's Choice",6.59,"Bagel or roll with the spread of the day + a 12 oz. hot beverage."],
  ["Thursday Special — Walnut Raisin",6.59,"Bagel or roll with walnut raisin cream cheese + a 12 oz. hot beverage."],
  ["Friday Special — Lox Spread",6.59,"Bagel or roll with lox spread + a 12 oz. hot beverage."]
];

/* ----- Lunch: cold sandwiches (come with a side + pickle) ----- */
const saladData = [
  ["Tuna Salad (Solid White)",8.99,"House-made with solid white albacore tuna."],
  ["Vegetable Tuna Salad",8.99,"Tuna salad folded with crunchy fresh vegetables."],
  ["Low Fat Tuna",7.99,"Lighter tuna salad — same great flavor."],
  ["Chicken Salad",7.99,"Tender chicken in a creamy house dressing."],
  ["Egg Salad",7.99,"Classic creamy egg salad."],
  ["Whitefish Salad",9.99,"Smoked whitefish, whipped smooth."],
  ["Baked Salmon Salad",10.99,"Flaked baked salmon in a light salad."],
  ["B.L.T.",8.99,"Crispy bacon, lettuce, tomato & mayonnaise."]
];
const meatData = [
  ["Turkey Breast",9.99,"Sliced roasted turkey breast."],
  ["Oven Gold Turkey",9.99,"Boar's Head oven gold turkey."],
  ["Honey Maple Turkey",9.99,"Sweet Boar's Head honey maple turkey."],
  ["Cracked Peppermill Turkey",9.99,"Peppercorn-crusted Boar's Head turkey."],
  ["Boar's Head Ham",9.99,"Premium Boar's Head ham."],
  ["Boar's Head Bologna",7.99,"Classic Boar's Head bologna."],
  ["Genoa Salami",8.99,"Cured Italian Genoa salami."],
  ["Roast Beef",9.99,"Slow-roasted beef, sliced thin."],
  ["Grilled Chicken",9.99,"Griddled grilled chicken breast."],
  ["Chicken Cutlet",9.99,"Breaded, fried chicken cutlet."]
];
/* hot sandwiches — [name, description, {label: price, ...}] */
const hotSandwichData = [
  ["Philly Cheesesteak","Griddled steak, onions and peppers with melted mozzarella cheese.",{"On Roll":10.99,"On Hero":13.99}],
  ["Pastrami Sandwich","Sliced pastrami with spicy mustard and Swiss cheese.",{"On Roll":10.99,"On Hero":13.99}],
  ["Turkey Club Sandwich","Home-roasted turkey, lettuce, tomato, mayonnaise and spicy crispy bacon.",{"On Roll":11.99,"On Hero":14.99}]
];
const lunchSpecialData = [
  ["Monday Special — Tuna Salad (Solid White)",8.49,"On a bagel or roll with a 1/4 lb. side & a pickle."],
  ["Tuesday Special — Egg Salad",6.99,"On a bagel or roll with a 1/4 lb. side & a pickle."],
  ["Wednesday Special — Turkey (Boar's Head)",8.49,"On a bagel or roll with a 1/4 lb. side & a pickle."],
  ["Thursday Special — Whitefish or Baked Salmon",9.99,"On a bagel or roll with a 1/4 lb. side & a pickle."],
  ["Friday Special — Chicken Salad",8.49,"On a bagel or roll with a 1/4 lb. side & a pickle."]
];

/* ----- Drinks ----- */
const coffeeData = [
  ["Coffee — Small",2.50,"Fresh-brewed, poured all day."],
  ["Coffee — Medium",2.99,"Fresh-brewed, poured all day."],
  ["Coffee — Large",3.25,"Fresh-brewed, poured all day."]
];
/* ----- Beverage Bar (hot drinks) ----- */
const beverageData = [
  ["Hot Tea — Small",2.50,"Hot brewed tea."],
  ["Hot Tea — Medium",2.99,"Hot brewed tea."],
  ["Hot Tea — Large",3.25,"Hot brewed tea."],
  ["Flavored Coffee — Small",2.50,"Fresh-brewed flavored coffee."],
  ["Flavored Coffee — Medium",2.99,"Fresh-brewed flavored coffee."],
  ["Flavored Coffee — Large",3.25,"Fresh-brewed flavored coffee."],
  ["Herbal Tea — Small",2.50,"Caffeine-free herbal tea."],
  ["Herbal Tea — Medium",2.99,"Caffeine-free herbal tea."],
  ["Herbal Tea — Large",3.25,"Caffeine-free herbal tea."],
  ["Hot Chocolate — Small",2.50,"Rich hot chocolate."],
  ["Hot Chocolate — Medium",2.99,"Rich hot chocolate."],
  ["Hot Chocolate — Large",3.25,"Rich hot chocolate."]
];
const comboData = [
  ["Buttered Bagel + 12 oz. Hot Beverage",5.50,"Doctor on the Run — Mon–Fri until 11 AM."],
  ["Cream Cheese Bagel + 12 oz. Hot Beverage",6.50,"Doctor on the Run — Mon–Fri until 11 AM."]
];

/* ----- By the Pound (deli counter) ----- */
const poundSaladData = [
  ["Tuna Salad",13.99],["Vegi Tuna",13.99],["Low Fat Tuna",11.99],
  ["Chicken Salad",11.99],["Egg Salad",8.99],["Mac Salad",5.99],
  ["Coleslaw",5.99],["Potato Salad",5.99],["Baked Salmon Salad",15.99],
  ["White Fish",15.99]
];
const poundSpreadData = [
  ["Cream Cheese",9.99],["Low Fat Cream Cheese",9.99],["Scallion Cream Cheese",11.99],
  ["Vegetable Cream Cheese",11.99],["Walnut Raisin Cream Cheese",11.99],["Lox Spread",11.99],
  ["Sun Dried Tomato Cream Cheese",11.99],["Scallion with Bacon Cream Cheese",11.99],["Jalapeno Cream Cheese",11.99]
];
const poundMeatData = [
  ["Oven Gold Turkey",13.99],["Honey Maple Turkey",13.99],["Peppermill Turkey",11.99],
  ["House Turkey",11.99],["Salsalito Turkey",11.99],["Boar's Head Ham",8.99],
  ["Boar's Head Salami",8.99],["Boar's Head Bologna",8.99],["Roast Beef",13.99],
  ["Pastrami",13.99],["Lox",38.99]
];
const poundCheeseData = [
  ["American Cheese",8.99],["Swiss Cheese",8.99],["Provolone",8.99],
  ["Muenster Jack",8.99],["Mozzarella",8.99]
];

function money(n){ return '$' + n.toFixed(2); }
function esc(s){ return String(s).replace(/"/g,'&quot;'); }

function buildChips(container, list, unitPrice, suffix){
  if(!container) return;
  container.innerHTML = list.map(name =>
    `<button class="chip" data-name="${esc(name + suffix)}" data-price="${unitPrice}">${name}</button>`
  ).join('');
}
/* optional "make it your way" note field shown under an item */
function noteFieldHTML(){
  return `<div class="row-note-wrap"><input class="row-note" type="text" maxlength="140" placeholder="Make it your way — e.g. extra crispy, no peppers, on the side"></div>`;
}
function buildRows(container, list, opts={}){
  if(!container) return;
  container.innerHTML = list.map(([name, price, desc]) => `
    <div class="menu-item">
      <div class="row">
        <span class="name">${name}${desc ? `<span class="desc">${desc}</span>` : ''}</span>
        <span class="row-right">
          <span class="price">${money(price)}</span>
          <button class="add-btn" data-name="${esc(name)}" data-price="${price}" aria-label="Add ${esc(name)} to cart">+</button>
        </span>
      </div>
      ${opts.note ? noteFieldHTML() : ''}
    </div>`).join('');
}
/* hot sandwiches get one add-button per style (On Roll / On Hero) */
function buildHot(container, list, opts={}){
  if(!container) return;
  container.innerHTML = list.map(([name, desc, options]) => `
    <div class="menu-item">
      <div class="row row-hot">
        <span class="name">${name}<span class="desc">${desc}</span></span>
        <span class="row-right hot-options">
          ${Object.entries(options).map(([label, price]) => `
            <button class="opt-btn" data-name="${esc(name + ' — ' + label)}" data-price="${price}">
              ${label} <b>${money(price)}</b>
            </button>`).join('')}
        </span>
      </div>
      ${opts.note ? noteFieldHTML() : ''}
    </div>`).join('');
}

buildChips(document.getElementById('classicBagels'), classicBagelFlavors, 1.75, ' Bagel');
buildChips(document.getElementById('flatBagels'), flatFlavors, 2.00, ' Flat');
buildRows(document.getElementById('spreadsRows'), spreadsData);
buildRows(document.getElementById('twistRows'), twistData);
buildRows(document.getElementById('miniRows'), miniData);
buildRows(document.getElementById('extraRows'), extrasData);
buildRows(document.getElementById('flatSpreadRows'), flatSpreadData);
buildRows(document.getElementById('omeletteRows'), omeletteData, {note:true});
buildRows(document.getElementById('breakfastRows'), breakfastData, {note:true});
buildRows(document.getElementById('breakfastSpecialRows'), breakfastSpecialData);
buildRows(document.getElementById('saladRows'), saladData, {note:true});
buildRows(document.getElementById('meatRows'), meatData, {note:true});
buildHot(document.getElementById('hotRows'), hotSandwichData, {note:true});
buildRows(document.getElementById('lunchSpecialRows'), lunchSpecialData, {note:true});
buildRows(document.getElementById('coffeeRows'), coffeeData);
buildRows(document.getElementById('beverageRows'), beverageData);
buildRows(document.getElementById('comboRows'), comboData);
/* ----- By the Pound: choose ¼ / ½ / 1 lb of any item ----- */
let poundFrac = 1;
const POUND_GROUPS = [
  ['poundSaladRows', poundSaladData],
  ['poundSpreadRows', poundSpreadData],
  ['poundMeatRows', poundMeatData],
  ['poundCheeseRows', poundCheeseData]
];
function fracLabel(f){ return f === 0.25 ? '¼ lb' : f === 0.5 ? '½ lb' : '1 lb'; }
function buildPound(container, list, frac){
  if(!container) return;
  container.innerHTML = list.map(([name, base]) => {
    const price = Math.round(base * frac * 100) / 100;
    const label = fracLabel(frac);
    return `
    <div class="row">
      <span class="name">${name}<span class="desc">${money(base)} / lb</span></span>
      <span class="row-right">
        <span class="price">${money(price)}<small class="per">/ ${label}</small></span>
        <button class="add-btn" data-name="${esc(name + ' — ' + label)}" data-price="${price}" aria-label="Add ${label} of ${esc(name)} to cart">+</button>
      </span>
    </div>`;
  }).join('');
}
function renderPound(){
  POUND_GROUPS.forEach(([id, data]) => buildPound(document.getElementById(id), data, poundFrac));
}
renderPound();

document.querySelectorAll('.portion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.portion-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    poundFrac = parseFloat(btn.dataset.frac);
    renderPound();
  });
});

/* ---------------- Build Your Egg Sandwich ---------------- */
(function(){
  const builder = document.getElementById('eggBuilder');
  if(!builder) return;

  const BASES = [
    { id:'1egg',    title:'1 Egg',                  price:3.50, meat:false, cheese:false, eggs:1 },
    { id:'2egg',    title:'2 Eggs',                 price:4.50, meat:false, cheese:false, eggs:2 },
    { id:'2meat',   title:'2 Eggs + Meat',          price:6.99, meat:true,  cheese:false, eggs:2 },
    { id:'2meatch', title:'2 Eggs + Meat + Cheese', price:7.99, meat:true,  cheese:true,  eggs:2 }
  ];
  const MEATS   = ['Turkey','Ham','Pastrami','Bacon','Sausage','Roast Beef','Beef Bacon','Turkey Bacon'];
  const EXTRA_MEATS   = ['Turkey','Ham','Pastrami','Bacon','Sausage','Roast Beef','Beef Bacon','Turkey Bacon'];
  /* premium meats that add $1 whether chosen as the base meat or as extra meat */
  const SURCHARGE_MEATS = new Set(['Turkey Bacon','Beef Bacon']);
  const MEAT_SURCHARGE = 1.00;
  const EXTRA_CHEESES = ['Mozzarella','Pepperjack','American','Swiss','Muenster','Cheddar','Provolone'];
  const BAGEL_FLAVORS = classicBagelFlavors.filter(f => f !== 'Rolls'); // full bagel lineup
  const FIXINGS = ['Salt','Pepper','Hot Sauce','Ketchup','Chipotle Mayo','Butter'];
  const ADDONS  = [
    { id:'egg',     label:'Extra Egg',    price:1.00, qty:true,  max:3 },
    { id:'cheese',  label:'Extra Cheese', price:1.00, qty:true,  max:3, pick:EXTRA_CHEESES, pickKey:'cheeseType' },
    { id:'meat',    label:'Extra Meat',   price:2.50, qty:true,  max:3, pick:EXTRA_MEATS,   pickKey:'meatType' },
    { id:'hash',    label:'Hash Browns',  price:1.25, qty:false },
    { id:'avocado', label:'Avocado',      price:2.00, qty:false }
  ];
  const VEGGIES = ['Tomato','Onion','Peppers','Lettuce','Jalapeños','Spinach'];

  const st = {
    base:'2meatch', meat:'Turkey', breadType:'Roll', bagelFlavor:'Plain',
    fixings:new Set(['Salt','Pepper']),
    addons:{ egg:0, cheese:0, meat:0, hash:false, avocado:false },
    meatType:'Turkey', cheeseType:'Mozzarella',
    veggies:new Set()
  };
  const $ = id => document.getElementById(id);
  const baseObj = () => BASES.find(b => b.id === st.base);
  const breadLabel = () => st.breadType === 'Roll' ? 'Roll' : `${st.bagelFlavor} Bagel`;

  function total(){
    let t = baseObj().price;
    // premium meat (turkey bacon / beef bacon) surcharge on the sandwich's base meat
    if(baseObj().meat && SURCHARGE_MEATS.has(st.meat)) t += MEAT_SURCHARGE;
    t += st.addons.egg*1.00 + st.addons.cheese*1.00 + st.addons.meat*2.50;
    // same surcharge on each extra meat of a premium type
    if(st.addons.meat > 0 && SURCHARGE_MEATS.has(st.meatType)) t += st.addons.meat*MEAT_SURCHARGE;
    if(st.addons.hash) t += 1.25;
    if(st.addons.avocado) t += 2.00;
    t += st.veggies.size*0.50;
    return Math.round(t*100)/100;
  }

  function renderBase(){
    $('eggBaseGrid').innerHTML = BASES.map(b => `
      <button type="button" class="opt-card ${st.base===b.id?'sel':''}" data-kind="base" data-id="${b.id}">
        <span class="oc-title">${b.title}</span>
        <span class="oc-price">${money(b.price)}</span>
      </button>`).join('');
  }
  function renderMeat(){
    const step = $('eggMeatStep');
    if(!baseObj().meat){ step.style.display='none'; return; }
    step.style.display='';
    $('eggMeatGrid').innerHTML = MEATS.map(m => `
      <button type="button" class="pick ${st.meat===m?'sel':''}" data-kind="meat" data-id="${esc(m)}">${m}${SURCHARGE_MEATS.has(m)?' <b>+$1</b>':''}</button>`).join('');
  }
  function renderBread(){
    $('eggBreadGrid').innerHTML = ['Roll','Bagel'].map(b => `
      <button type="button" class="pick ${st.breadType===b?'sel':''}" data-kind="breadtype" data-id="${b}">On a ${b}</button>`).join('');
    const picker = $('eggBagelPicker');
    if(st.breadType !== 'Bagel'){ picker.innerHTML = ''; return; }
    picker.innerHTML = `
      <div class="bagel-dd">
        <button type="button" class="bagel-dd-btn" data-kind="bagel-toggle" aria-haspopup="listbox">
          <span class="bagel-dd-emoji">🥯</span>
          <span class="bagel-dd-label">${st.bagelFlavor} Bagel</span>
          <span class="bagel-dd-caret">▾</span>
        </button>
        <div class="bagel-dd-menu" role="listbox">
          ${BAGEL_FLAVORS.map(f => `
            <button type="button" class="bagel-dd-opt ${f===st.bagelFlavor?'sel':''}" data-kind="bagel-pick" data-id="${esc(f)}" role="option">
              <span class="bd-dot">🥯</span>${f}
            </button>`).join('')}
        </div>
      </div>`;
  }
  function renderFix(){
    $('eggFixGrid').innerHTML = FIXINGS.map(f => `
      <button type="button" class="pick multi ${st.fixings.has(f)?'sel':''}" data-kind="fix" data-id="${esc(f)}">${f}</button>`).join('');
  }
  function renderVeg(){
    $('eggVegGrid').innerHTML = VEGGIES.map(v => `
      <button type="button" class="pick multi ${st.veggies.has(v)?'sel':''}" data-kind="veg" data-id="${esc(v)}">${v} <b>+$0.50</b></button>`).join('');
  }
  function renderAddons(){
    $('eggAddonList').innerHTML = ADDONS.map(a => {
      if(a.qty){
        const n = st.addons[a.id];
        const picker = a.pick ? `
          <select class="addon-pick" data-kind="addon-pick" data-id="${a.pickKey}" aria-label="Choose ${a.label}">
            ${a.pick.map(o => `<option value="${esc(o)}" ${st[a.pickKey]===o?'selected':''}>${o}${a.pickKey==='meatType' && SURCHARGE_MEATS.has(o)?' (+$1)':''}</option>`).join('')}
          </select>` : '';
        return `<div class="addon ${n>0?'on':''}">
          <span class="addon-name">${a.label} <em>+${money(a.price)}</em></span>
          <span class="addon-controls">
            ${picker}
            <span class="stepper">
              <button type="button" data-kind="addon-dec" data-id="${a.id}" aria-label="Fewer ${a.label}">−</button>
              <span class="stepper-n">${n}</span>
              <button type="button" data-kind="addon-inc" data-id="${a.id}" aria-label="More ${a.label}">+</button>
            </span>
          </span>
        </div>`;
      }
      const on = st.addons[a.id];
      return `<div class="addon ${on?'on':''}">
        <span class="addon-name">${a.label} <em>+${money(a.price)}</em></span>
        <button type="button" class="addon-toggle ${on?'sel':''}" data-kind="addon-toggle" data-id="${a.id}">${on?'Added ✓':'Add'}</button>
      </div>`;
    }).join('');
  }

  function summaryText(){
    const b = baseObj();
    let core = `${b.eggs} Egg${b.eggs>1?'s':''}`;
    if(b.meat) core += ` + ${st.meat}`;
    if(b.cheese) core += ` + Cheese`;
    core += ` on ${breadLabel()}`;
    return core;
  }
  function cartName(){
    const parts = [];
    if(st.addons.egg)     parts.push(`+${st.addons.egg} Egg`);
    if(st.addons.cheese)  parts.push(`+${st.addons.cheese} ${st.cheeseType} Cheese`);
    if(st.addons.meat)    parts.push(`+${st.addons.meat} ${st.meatType}`);
    if(st.addons.hash)    parts.push('+Hash Browns');
    if(st.addons.avocado) parts.push('+Avocado');
    st.veggies.forEach(v => parts.push('+'+v));
    let name = 'Egg Sandwich · ' + summaryText();
    if(parts.length) name += ' · ' + parts.join(', ');
    if(st.fixings.size) name += ' (' + Array.from(st.fixings).join(', ') + ')';
    const noteEl = document.getElementById('eggNote');
    const note = noteEl && noteEl.value.trim();
    if(note) name += ' — “' + note + '”';
    return name;
  }

  function update(){
    renderBase(); renderMeat(); renderBread(); renderFix(); renderVeg(); renderAddons();
    $('eggSummary').textContent = summaryText();
    $('eggAddBtn').textContent = 'Add to Cart · ' + money(total());
  }

  builder.addEventListener('click', (e) => {
    const el = e.target.closest('[data-kind]');
    if(!el) return;
    const k = el.dataset.kind, id = el.dataset.id;
    if(k==='bagel-toggle'){ e.stopPropagation(); el.closest('.bagel-dd').classList.toggle('open'); return; }
    if(k==='base')             st.base = id;
    else if(k==='meat')        st.meat = id;
    else if(k==='breadtype')   st.breadType = id;
    else if(k==='bagel-pick')  st.bagelFlavor = id;
    else if(k==='fix')         st.fixings.has(id) ? st.fixings.delete(id) : st.fixings.add(id);
    else if(k==='veg')         st.veggies.has(id) ? st.veggies.delete(id) : st.veggies.add(id);
    else if(k==='addon-inc'){  const a = ADDONS.find(x=>x.id===id); st.addons[id] = Math.min(a.max, st.addons[id]+1); }
    else if(k==='addon-dec')   st.addons[id] = Math.max(0, st.addons[id]-1);
    else if(k==='addon-toggle') st.addons[id] = !st.addons[id];
    else return;
    update();
  });

  // extra meat / extra cheese "which one?" dropdowns
  builder.addEventListener('change', (e) => {
    const sel = e.target.closest('select[data-kind="addon-pick"]');
    if(!sel) return;
    st[sel.dataset.id] = sel.value;
    update();
  });

  // close the bagel dropdown when clicking outside it
  document.addEventListener('click', (e) => {
    if(!e.target.closest('.bagel-dd')){
      builder.querySelectorAll('.bagel-dd.open').forEach(d => d.classList.remove('open'));
    }
  });

  $('eggAddBtn').addEventListener('click', () => {
    addToCart(cartName(), total());
    if(typeof flyToCart === 'function') flyToCart($('eggAddBtn'));
  });

  update();

  // promo card in Hot Sandwiches jumps to the builder
  const promo = document.getElementById('eggPromo');
  if(promo){
    promo.addEventListener('click', () => {
      switchTab('breakfast');
      requestAnimationFrame(() => {
        builder.scrollIntoView({ behavior:'smooth', block:'start' });
        builder.classList.remove('flash'); void builder.offsetWidth; builder.classList.add('flash');
      });
    });
  }
})();

/* ---------------- tabs ---------------- */
const navBtns = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.panel');
function switchTab(tabName){
  navBtns.forEach(b=> b.classList.toggle('active', b.dataset.tab === tabName));
  panels.forEach(p=> p.classList.toggle('active', p.id === tabName));
  document.body.dataset.tab = tabName;
  if(tabName === 'orders' && typeof renderMyOrders === 'function') renderMyOrders();
  // safety net: never leave a freshly-shown panel's blocks stuck hidden
  const active = document.getElementById(tabName);
  if(active){
    requestAnimationFrame(()=> active.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in')));
  }
}
function goToTab(tabName){
  const go = ()=>{
    switchTab(tabName);
    // jump to the top so each tab reads as its own page (the big
    // landing hero only shows on the Bagels/home tab)
    window.scrollTo({ top:0, left:0, behavior:'smooth' });
  };
  if(document.startViewTransition){ document.startViewTransition(go); } else { go(); }
}
navBtns.forEach(btn=>{
  btn.addEventListener('click', ()=> goToTab(btn.dataset.tab));
});
// clicking the header logo or a footer menu link switches tabs
document.querySelectorAll('.brandmark[data-tab], .foot-link[data-tab]').forEach(el=>{
  el.addEventListener('click', (e)=>{ e.preventDefault(); goToTab(el.dataset.tab); });
});

// footer: current year + newsletter signup
const footYear = document.getElementById('footYear');
if(footYear) footYear.textContent = new Date().getFullYear();
const footSignup = document.getElementById('footSignup');
if(footSignup){
  footSignup.addEventListener('submit', (e)=>{
    e.preventDefault();
    footSignup.reset();
    showToast("🥯 You're on the list!");
  });
}
document.getElementById('viewMenuBtn').addEventListener('click', ()=>{
  document.querySelector('.tabline').scrollIntoView({behavior:'smooth', block:'start'});
});

/* ---------------- hero montage ---------------- */
(function(){
  const slides = Array.from(document.querySelectorAll('.montage-slide'));
  const capEl = document.getElementById('montageCaption');
  if(slides.length < 2) return;
  const captions = ["Mixing the dough","Hand-rolling every bagel","Into the boiling kettle","Seeds & everything","Baked golden brown","Fresh from the oven"];
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; // keep first slide static
  let i = 0;
  setInterval(()=>{
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
    if(capEl) capEl.textContent = captions[i % captions.length];
  }, 3400);
})();

/* ---------------- dynamic scroll reveal ----------------
   Each panel's top-level blocks rise into view as they enter the
   viewport. Gated behind reduced-motion + IntersectionObserver support;
   if either is missing we simply never add .reveal, so content shows. */
(function(){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if(!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold:0.06, rootMargin:'0px 0px -6% 0px' });
  document.querySelectorAll('.panel').forEach(panel=>{
    Array.from(panel.children).forEach(el=>{ el.classList.add('reveal'); io.observe(el); });
  });
})();

/* ---------------- sticky header lifts on scroll ---------------- */
(function(){
  const bar = document.querySelector('.stickybar');
  if(!bar) return;
  const onScroll = ()=> bar.classList.toggle('scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive:true });
})();

const subBtns = document.querySelectorAll('.sub-btn');
const subPanels = document.querySelectorAll('.sub-panel');
subBtns.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    subBtns.forEach(b=>b.classList.remove('active'));
    subPanels.forEach(p=>p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.sub).classList.add('active');
  });
});

/* ---------------- cart state ---------------- */
let cart = []; // { name, price, qty }
const DELIVERY_FEE = 4.99;
const TAX_RATE = 0.0875; // 8.75% sales tax on all orders
let fulfillment = 'pickup';

function taxOn(amount){ return Math.round(amount * TAX_RATE * 100) / 100; }

function addToCart(name, price){
  const existing = cart.find(i => i.name === name && i.price === price);
  if(existing){ existing.qty += 1; } else { cart.push({name, price, qty:1}); }
  renderCart();
  bumpCart();
  showToast(`Added ${name} to cart`);
}
function changeQty(index, delta){
  cart[index].qty += delta;
  if(cart[index].qty <= 0){ cart.splice(index,1); }
  renderCart();
}
function removeItem(index){ cart.splice(index,1); renderCart(); }
function cartSubtotal(){ return cart.reduce((s,i)=> s + i.price*i.qty, 0); }
function cartCount(){ return cart.reduce((s,i)=> s + i.qty, 0); }

function renderCart(){
  const body = document.getElementById('drawerBody');
  const countEl = document.getElementById('cartCount');
  const subEl = document.getElementById('cartSubtotal');
  const count = cartCount();
  countEl.textContent = count;
  countEl.dataset.empty = count === 0 ? 'true' : 'false';
  subEl.textContent = money(cartSubtotal());

  if(cart.length === 0){
    body.innerHTML = `<div class="cart-empty">Your cart is empty — add a bagel, a sandwich, or a coffee to get started.</div>`;
    return;
  }
  body.innerHTML = cart.map((item, idx) => `
    <div class="cart-line">
      <div>
        <div class="l-name">${item.name}</div>
        <div class="l-price">${money(item.price)} each</div>
        <div class="qty-ctrl">
          <button data-action="dec" data-idx="${idx}" aria-label="Decrease quantity">−</button>
          <span class="qty-num">${item.qty}</span>
          <button data-action="inc" data-idx="${idx}" aria-label="Increase quantity">+</button>
        </div>
      </div>
      <div class="l-right">
        <div class="l-total">${money(item.price*item.qty)}</div>
        <button class="l-remove" data-action="remove" data-idx="${idx}">Remove</button>
      </div>
    </div>`).join('');
}

document.getElementById('drawerBody').addEventListener('click', (e)=>{
  const btn = e.target.closest('button[data-action]');
  if(!btn) return;
  const idx = Number(btn.dataset.idx);
  if(btn.dataset.action === 'inc') changeQty(idx, 1);
  if(btn.dataset.action === 'dec') changeQty(idx, -1);
  if(btn.dataset.action === 'remove') removeItem(idx);
});

/* ---------------- playful interactions ---------------- */
const REDUCE_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* material-style ripple from the pointer position */
function makeRipple(el, x, y){
  if(REDUCE_MOTION) return;
  const rect = el.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 1.5;
  const span = document.createElement('span');
  span.className = 'ripple';
  span.style.width = span.style.height = size + 'px';
  span.style.left = (x - rect.left - size/2) + 'px';
  span.style.top  = (y - rect.top  - size/2) + 'px';
  el.appendChild(span);
  span.addEventListener('animationend', ()=> span.remove());
}

/* a bagel that arcs from the tapped item into the cart button */
function flyToCart(sourceEl){
  const cartBtn = document.getElementById('cartOpenBtn');
  if(!cartBtn || REDUCE_MOTION) return;
  const s = sourceEl.getBoundingClientRect();
  const c = cartBtn.getBoundingClientRect();
  const startX = s.left + s.width/2,  startY = s.top + s.height/2;
  const endX   = c.left + c.width/2,  endY   = c.top + c.height/2;
  const dx = endX - startX, dy = endY - startY;
  const fly = document.createElement('div');
  fly.className = 'fly-bagel';
  fly.textContent = '🥯';
  fly.style.left = startX + 'px';
  fly.style.top  = startY + 'px';
  document.body.appendChild(fly);
  fly.animate([
    { transform:'translate(-50%,-50%) scale(1) rotate(0deg)', opacity:1, offset:0 },
    { transform:`translate(calc(-50% + ${dx*0.2}px), calc(-50% + ${dy*0.5 - 70}px)) scale(1.35) rotate(120deg)`, opacity:1, offset:0.45 },
    { transform:`translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0.2) rotate(300deg)`, opacity:0.35, offset:1 }
  ], { duration:720, easing:'cubic-bezier(.5,-0.15,.75,1)' }).onfinish = ()=>{ fly.remove(); };
}

/* bounce the cart + pop its count badge */
function bumpCart(){
  const cartBtn = document.getElementById('cartOpenBtn');
  const badge = document.getElementById('cartCount');
  if(cartBtn && !REDUCE_MOTION){ cartBtn.classList.remove('bump'); void cartBtn.offsetWidth; cartBtn.classList.add('bump'); }
  if(badge){ badge.classList.remove('pop'); void badge.offsetWidth; badge.classList.add('pop'); }
}

/* a "+1" that floats up from the tapped item */
function floatPlusOne(el){
  if(REDUCE_MOTION) return;
  const r = el.getBoundingClientRect();
  const t = document.createElement('div');
  t.className = 'plus-one';
  t.textContent = '+1';
  t.style.left = (r.left + r.width/2) + 'px';
  t.style.top  = r.top + 'px';
  document.body.appendChild(t);
  t.addEventListener('animationend', ()=> t.remove());
}

/* celebratory confetti burst (used on order confirmation) */
function celebrate(){
  if(REDUCE_MOTION) return;
  const colors = ['#b5432a','#3f6f52','#c99a3a','#8f2d1e','#e9c46a'];
  const cx = window.innerWidth/2, cy = window.innerHeight/2 - 40;
  for(let i=0;i<30;i++){
    const p = document.createElement('div');
    p.className = 'confetti';
    p.style.background = colors[i % colors.length];
    p.style.left = cx + 'px';
    p.style.top  = cy + 'px';
    document.body.appendChild(p);
    const ang = Math.random()*Math.PI*2;
    const dist = 130 + Math.random()*190;
    const dx = Math.cos(ang)*dist, dy = Math.sin(ang)*dist + 90;
    p.animate([
      { transform:'translate(-50%,-50%) rotate(0deg) scale(1)', opacity:1 },
      { transform:`translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) rotate(${Math.random()*720-360}deg) scale(.85)`, opacity:0 }
    ], { duration:900 + Math.random()*600, easing:'cubic-bezier(.2,.6,.3,1)' }).onfinish = ()=> p.remove();
  }
}

/* ripple on any interactive control */
document.addEventListener('pointerdown', (e)=>{
  const rp = e.target.closest('.btn-hero, .btn-hero-ghost, .btn-primary, .btn-ghost, .tab-btn, .sub-btn, .add-btn, .opt-btn, .chip, .cart-btn, .icon-btn, .fulfill-toggle button, .qty-ctrl button');
  if(rp) makeRipple(rp, e.clientX, e.clientY);
});

document.addEventListener('click', (e)=>{
  const target = e.target.closest('.chip, .add-btn, .opt-btn');
  if(!target) return;
  target.classList.remove('added'); void target.offsetWidth; target.classList.add('added');
  floatPlusOne(target);
  flyToCart(target);
  // fold in this item's "make it your way" note, if the customer typed one
  let name = target.dataset.name;
  const item = target.closest('.menu-item');
  const noteEl = item && item.querySelector('.row-note');
  const note = noteEl && noteEl.value.trim();
  if(note) name += ' — “' + note + '”';
  addToCart(name, parseFloat(target.dataset.price));
});

/* highlight a note field once it has text */
document.addEventListener('input', (e)=>{
  const n = e.target.closest && e.target.closest('.row-note');
  if(!n) return;
  n.classList.toggle('has-value', n.value.trim().length > 0);
});

/* ---------------- toast ---------------- */
let toastTimer;
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> t.classList.remove('show'), 1700);
}

/* ---------------- drawer open/close ---------------- */
const overlayBg = document.getElementById('overlayBg');
const drawer = document.getElementById('cartDrawer');
function openDrawer(){ drawer.classList.add('show'); overlayBg.classList.add('show'); }
function closeDrawer(){ drawer.classList.remove('show'); overlayBg.classList.remove('show'); }
document.getElementById('cartOpenBtn').addEventListener('click', openDrawer);
document.getElementById('viewCartHero').addEventListener('click', openDrawer);
document.getElementById('closeDrawerBtn').addEventListener('click', closeDrawer);
overlayBg.addEventListener('click', ()=>{ closeDrawer(); closeModal(); });

/* ---------------- checkout modal ---------------- */
const modal = document.getElementById('checkoutModal');
const modalCard = document.getElementById('modalCard');

function openModal(){ renderCheckoutForm(); modal.classList.add('show'); overlayBg.classList.add('show'); closeDrawer(); }
function closeModal(){ modal.classList.remove('show'); overlayBg.classList.remove('show'); }

document.getElementById('checkoutBtn').addEventListener('click', ()=>{
  if(cart.length === 0){ showToast('Your cart is empty'); return; }
  openModal();
});

function recapHTML(){
  const sub = cartSubtotal();
  const fee = fulfillment === 'delivery' ? DELIVERY_FEE : 0;
  const tax = taxOn(sub + fee);
  const total = sub + fee + tax;
  return `
    <div class="order-recap">
      ${cart.map(i=>`<div class="recap-line"><span>${i.qty} × ${i.name}</span><span>${money(i.price*i.qty)}</span></div>`).join('')}
      <div class="recap-line"><span>Subtotal</span><span>${money(sub)}</span></div>
      ${fulfillment === 'delivery' ? `<div class="recap-line"><span>Delivery fee</span><span>${money(fee)}</span></div>` : ''}
      <div class="recap-line"><span>Tax (8.75%)</span><span>${money(tax)}</span></div>
      <div class="recap-line total"><span>Total</span><span>${money(total)}</span></div>
    </div>`;
}

function renderCheckoutForm(){
  modalCard.innerHTML = `
    <button class="icon-btn modal-close" id="modalCloseBtn" aria-label="Close checkout">
      <svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    </button>
    <h3>Checkout</h3>
    <p class="sub">Review your order and tell us how to get it to you.</p>

    ${recapHTML()}

    <div class="fulfill-toggle">
      <button type="button" data-f="pickup" class="${fulfillment==='pickup'?'active':''}">Pickup</button>
      <button type="button" data-f="delivery" class="${fulfillment==='delivery'?'active':''}">Delivery</button>
    </div>

    <form id="checkoutForm">
      <div class="field-row">
        <div class="field"><label for="cName">Full name</label><input id="cName" value="${esc(getProfile().name)}" required></div>
        <div class="field"><label for="cPhone">Phone</label><input id="cPhone" type="tel" value="${esc(getProfile().phone)}" required></div>
      </div>
      <div class="field"><label for="cEmail">Email (for your receipt)</label><input id="cEmail" type="email" value="${esc(getProfile().email)}" required></div>

      <div id="fulfillFields"></div>

      <div class="field"><label for="cNotes">Order notes (optional)</label><textarea id="cNotes" placeholder="Toast the bagel, extra napkins, ring the bell twice…"></textarea></div>

      <div class="demo-note">
        <span>🛈</span>
        <span><b>Demo checkout</b> — no real payment is processed yet. Once a payment provider is connected, this step will collect payment securely and the order will be sent straight to the shop.</span>
      </div>

      <button type="submit" class="btn-primary btn-block">Place Demo Order — ${money((()=>{ const s=cartSubtotal(), f=fulfillment==='delivery'?DELIVERY_FEE:0; return s+f+taxOn(s+f); })())}</button>
    </form>
  `;
  renderFulfillFields();

  document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
  modalCard.querySelectorAll('.fulfill-toggle button').forEach(b=>{
    b.addEventListener('click', ()=>{ fulfillment = b.dataset.f; renderCheckoutForm(); });
  });
  document.getElementById('checkoutForm').addEventListener('submit', onSubmitOrder);
}

function renderFulfillFields(){
  const wrap = document.getElementById('fulfillFields');
  if(fulfillment === 'pickup'){
    wrap.innerHTML = `
      <div class="field">
        <label for="cTime">Pickup time</label>
        <select id="cTime" required>
          <option value="">Select a time</option>
          <option>ASAP (15–20 min)</option>
          <option>12:00 PM</option>
          <option>12:30 PM</option>
          <option>1:00 PM</option>
          <option>1:30 PM</option>
        </select>
      </div>
      <p class="field-hint">Pickup at the counter — 289 N Broadway, Jericho, NY 11753.</p>`;
  } else {
    wrap.innerHTML = `
      <div class="field"><label for="cAddress">Delivery address</label><input id="cAddress" value="${esc(getProfile().address)}" required placeholder="Street, apartment, city, ZIP"></div>
      <div class="field">
        <label for="cTime">Delivery window</label>
        <select id="cTime" required>
          <option value="">Select a window</option>
          <option>ASAP (30–40 min)</option>
          <option>12:00 – 12:30 PM</option>
          <option>12:30 – 1:00 PM</option>
          <option>1:00 – 1:30 PM</option>
        </select>
      </div>
      <p class="field-hint">A $4.99 delivery fee applies.</p>`;
  }
}

function onSubmitOrder(e){
  e.preventDefault();
  const name = document.getElementById('cName').value.trim();
  const phone = document.getElementById('cPhone').value.trim();
  const email = (document.getElementById('cEmail')||{}).value.trim() || '';
  const when = (document.getElementById('cTime')||{}).value || '';
  const notes = (document.getElementById('cNotes')||{}).value.trim() || '';
  const address = fulfillment==='delivery'
    ? ((document.getElementById('cAddress')||{}).value || '').trim()
    : PICKUP_ADDRESS;
  const sub = cartSubtotal();
  const fee = fulfillment==='delivery' ? DELIVERY_FEE : 0;
  const tax = taxOn(sub + fee);
  const total = sub + fee + tax;
  const orderNum = 'BD-' + Math.floor(1000 + Math.random()*9000);

  // remember this customer for next time
  saveProfile({ name, phone, email, address: fulfillment==='delivery' ? address : getProfile().address });

  // save the order so it shows in My Orders and the admin dashboard
  const order = {
    id: 'ord_' + Date.now() + '_' + Math.floor(Math.random()*1000),
    number: orderNum, ts: Date.now(),
    items: cart.map(i => ({ name:i.name, price:i.price, qty:i.qty })),
    subtotal: sub, fee, tax, total,
    fulfillment, when, address, notes,
    customer: { name, phone, email },
    status: 'New'
  };
  const orders = getOrders(); orders.unshift(order); saveOrders(orders);

  modalCard.innerHTML = `
    <button class="icon-btn modal-close" id="modalCloseBtn2" aria-label="Close">
      <svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    </button>
    <div class="confirm-view">
      <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.6"/><path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <h3>Thanks, ${name || 'friend'}!</h3>
      <p>Your order <span class="order-num">${orderNum}</span> is in — the kitchen has it now.</p>
      <p>${fulfillment === 'pickup' ? 'We\'ll have it ready for pickup at ' + PICKUP_ADDRESS + '.' : 'It\'s on its way to your delivery address.'}</p>
      <p>Total: <strong>${money(total)}</strong> · Track its status any time under <b>My Orders</b>.</p>
      <div class="confirm-actions">
        <button class="btn-primary" id="viewMyOrdersBtn" type="button">View My Orders</button>
        <button class="btn-ghost" id="newOrderBtn" type="button">Start a New Order</button>
      </div>
    </div>
  `;
  celebrate();
  document.getElementById('modalCloseBtn2').addEventListener('click', ()=>{ cart=[]; fulfillment='pickup'; renderCart(); closeModal(); });
  document.getElementById('newOrderBtn').addEventListener('click', ()=>{
    cart = []; fulfillment = 'pickup'; renderCart(); closeModal();
  });
  document.getElementById('viewMyOrdersBtn').addEventListener('click', ()=>{
    cart = []; fulfillment = 'pickup'; renderCart(); closeModal(); goToTab('orders');
  });
}

renderCart();

/* ======================================================================
   ACCOUNT · MY ORDERS · ADMIN
   Persistence is localStorage (this is a front-end demo). For a real,
   multi-device deployment these reads/writes would hit a backend + DB,
   and the admin passcode below would be replaced by real server auth.
   ====================================================================== */
const PROFILE_KEY = 'bd_profile';
const ORDERS_KEY  = 'bd_orders';
const ADMIN_PASSCODE = 'bagel2026';                     // demo only — NOT real security
const PICKUP_ADDRESS = '289 N Broadway, Jericho, NY 11753';
const ORDER_FLOW = ['New','Preparing','Ready','Completed'];

function lsGet(k, d){ try { const v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch { return d; } }
function lsSet(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
function getProfile(){ return Object.assign({ name:'', phone:'', email:'', address:'' }, lsGet(PROFILE_KEY, {})); }
function saveProfile(p){ lsSet(PROFILE_KEY, Object.assign(getProfile(), p)); }
function getOrders(){ return lsGet(ORDERS_KEY, []); }
function saveOrders(o){ lsSet(ORDERS_KEY, o); }
function statusClass(s){ return 's-' + s.toLowerCase(); }
function fmtDate(ts){
  const d = new Date(ts);
  return d.toLocaleDateString(undefined,{month:'short',day:'numeric'}) + ' · ' +
         d.toLocaleTimeString(undefined,{hour:'numeric',minute:'2-digit'});
}

/* ---------------- Customer: My Orders tab ---------------- */
function renderMyOrders(){
  const wrap = document.getElementById('ordersList');
  if(!wrap) return;
  const orders = getOrders();
  if(!orders.length){
    wrap.innerHTML = `<div class="board empty-orders">
      <div class="empty-emoji">🥯</div>
      <h3>No orders yet</h3>
      <p>Once you place an order it shows up here so you can track its status and reorder in a tap.</p>
      <button class="btn-primary" data-goto="bagels" type="button">Start an order</button>
    </div>`;
    return;
  }
  wrap.innerHTML = orders.map(myOrderCardHTML).join('');
}
function myOrderCardHTML(o){
  const cancelled = o.status === 'Cancelled';
  const stepIdx = ORDER_FLOW.indexOf(o.status);
  const track = cancelled ? `<div class="order-cancelled">This order was cancelled.</div>` : `
    <div class="order-track">
      ${ORDER_FLOW.map((s,i)=>`<span class="ot-step ${i<=stepIdx?'on':''}">${s}</span>`).join('')}
    </div>`;
  return `<div class="order-card">
    <div class="order-card-head">
      <div><span class="order-num-lg">${o.number}</span><span class="order-date">${fmtDate(o.ts)}</span></div>
      <span class="status-badge ${statusClass(o.status)}">${o.status}</span>
    </div>
    ${track}
    <div class="order-items">
      ${o.items.map(i=>`<div class="oi-line"><span>${i.qty} × ${i.name}</span><span>${money(i.price*i.qty)}</span></div>`).join('')}
    </div>
    <div class="order-card-foot">
      <span class="order-meta">${o.fulfillment==='delivery'?'🚗 Delivery':'🏪 Pickup'}${o.when?' · '+o.when:''}</span>
      <span class="order-total">${money(o.total)}</span>
    </div>
    <div class="order-actions"><button class="btn-ghost sm" data-reorder="${o.id}" type="button">Reorder</button></div>
  </div>`;
}
document.getElementById('ordersList').addEventListener('click', (e)=>{
  const go = e.target.closest('[data-goto]');
  if(go){ goToTab(go.dataset.goto); return; }
  const re = e.target.closest('[data-reorder]');
  if(re){
    const o = getOrders().find(x => x.id === re.dataset.reorder);
    if(o){
      o.items.forEach(it=>{
        const ex = cart.find(c => c.name===it.name && c.price===it.price);
        if(ex) ex.qty += it.qty; else cart.push({ name:it.name, price:it.price, qty:it.qty });
      });
      renderCart(); bumpCart(); openDrawer(); showToast('Reorder added to cart');
    }
  }
});

/* ---------------- Customer: Profile modal ---------------- */
const profileModal = document.getElementById('profileModal');
const profileCard = document.getElementById('profileCard');
function openProfile(){ renderProfile(); profileModal.classList.add('show'); overlayBg.classList.add('show'); closeDrawer(); }
function closeProfile(){ profileModal.classList.remove('show'); if(!modal.classList.contains('show')) overlayBg.classList.remove('show'); }
function renderProfile(){
  const p = getProfile();
  const orders = getOrders();
  const initial = (p.name.trim()[0] || '🥯').toUpperCase();
  profileCard.innerHTML = `
    <button class="icon-btn modal-close" id="profileCloseBtn" aria-label="Close">
      <svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    </button>
    <div class="profile-head">
      <div class="profile-avatar">${initial}</div>
      <div>
        <h3>${p.name ? 'Hi, ' + p.name.split(' ')[0] + '!' : 'Your Account'}</h3>
        <p class="sub">${orders.length} order${orders.length===1?'':'s'} · neighborhood regular</p>
      </div>
    </div>
    <form id="profileForm">
      <div class="field-row">
        <div class="field"><label for="pName">Full name</label><input id="pName" value="${esc(p.name)}" placeholder="Your name"></div>
        <div class="field"><label for="pPhone">Phone</label><input id="pPhone" type="tel" value="${esc(p.phone)}" placeholder="(555) 555-5555"></div>
      </div>
      <div class="field"><label for="pEmail">Email</label><input id="pEmail" type="email" value="${esc(p.email)}" placeholder="you@email.com"></div>
      <div class="field"><label for="pAddress">Default delivery address</label><input id="pAddress" value="${esc(p.address)}" placeholder="Street, apt, city, ZIP"></div>
      <button type="submit" class="btn-primary btn-block">Save Profile</button>
    </form>
    <button class="btn-ghost btn-block" id="viewOrdersBtn" type="button" style="margin-top:10px;">View My Orders</button>
  `;
  document.getElementById('profileCloseBtn').addEventListener('click', closeProfile);
  document.getElementById('profileForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    saveProfile({
      name: document.getElementById('pName').value.trim(),
      phone: document.getElementById('pPhone').value.trim(),
      email: document.getElementById('pEmail').value.trim(),
      address: document.getElementById('pAddress').value.trim()
    });
    closeProfile(); showToast('✓ Profile saved');
  });
  document.getElementById('viewOrdersBtn').addEventListener('click', ()=>{ closeProfile(); goToTab('orders'); });
}
document.getElementById('profileBtn').addEventListener('click', openProfile);
overlayBg.addEventListener('click', closeProfile);

/* ---------------- Admin dashboard (hidden unless authorized) ---------------- */
const adminPanel = document.getElementById('adminPanel');
let adminFilter = 'all';
const isAdmin = () => sessionStorage.getItem('bd_admin') === '1';

function openAdmin(){
  if(!isAdmin()){ renderAdminLogin(); }
  else { renderAdmin(); showAdminFab(); }
  adminPanel.classList.add('show'); adminPanel.setAttribute('aria-hidden','false');
}
function closeAdmin(){ adminPanel.classList.remove('show'); adminPanel.setAttribute('aria-hidden','true'); }

function renderAdminLogin(){
  adminPanel.innerHTML = `
    <div class="admin-login">
      <div class="admin-login-card">
        <div class="admin-lock">🔒</div>
        <h2>Staff Login</h2>
        <p>Enter the staff passcode to open the order dashboard.</p>
        <form id="adminLoginForm">
          <input id="adminPass" type="password" placeholder="Passcode" autocomplete="off" autofocus>
          <div class="admin-err" id="adminLoginErr"></div>
          <button type="submit" class="btn-primary btn-block">Enter Dashboard</button>
        </form>
        <button class="admin-back" id="adminExitBtn" type="button">← Back to store</button>
      </div>
    </div>`;
  document.getElementById('adminLoginForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    if(document.getElementById('adminPass').value === ADMIN_PASSCODE){
      sessionStorage.setItem('bd_admin','1');
      renderAdmin(); showAdminFab();
    } else {
      document.getElementById('adminLoginErr').textContent = 'Incorrect passcode. Try again.';
    }
  });
  document.getElementById('adminExitBtn').addEventListener('click', ()=>{ closeAdmin(); clearAdminHash(); });
}

function renderAdmin(){
  const orders = getOrders();
  const counts = ORDER_FLOW.reduce((a,s)=>{ a[s] = orders.filter(o=>o.status===s).length; return a; }, {});
  const filtered = adminFilter === 'all' ? orders : orders.filter(o => o.status === adminFilter);
  adminPanel.innerHTML = `
    <div class="admin-bar">
      <div class="admin-brand">🥯 Bagel Doctor · <b>Order Dashboard</b></div>
      <div class="admin-bar-actions">
        <button class="admin-ghost" id="adminStoreBtn" type="button">View store ↗</button>
        <button class="admin-ghost" id="adminLogoutBtn" type="button">Log out</button>
      </div>
    </div>
    <div class="admin-body">
      <div class="admin-stats">
        <div class="astat"><b>${orders.length}</b><span>Total</span></div>
        <div class="astat s-new"><b>${counts.New||0}</b><span>New</span></div>
        <div class="astat s-preparing"><b>${counts.Preparing||0}</b><span>Preparing</span></div>
        <div class="astat s-ready"><b>${counts.Ready||0}</b><span>Ready</span></div>
        <div class="astat s-completed"><b>${counts.Completed||0}</b><span>Done</span></div>
      </div>
      <div class="admin-filters">
        ${['all',...ORDER_FLOW,'Cancelled'].map(f=>`<button class="afilter ${adminFilter===f?'on':''}" data-filter="${f}" type="button">${f==='all'?'All':f}</button>`).join('')}
      </div>
      <div class="admin-orders">
        ${filtered.length ? filtered.map(adminOrderHTML).join('') : '<div class="admin-empty">No orders in this view yet.</div>'}
      </div>
    </div>`;
  document.getElementById('adminStoreBtn').addEventListener('click', closeAdmin);
  document.getElementById('adminLogoutBtn').addEventListener('click', ()=>{
    sessionStorage.removeItem('bd_admin'); hideAdminFab(); closeAdmin(); clearAdminHash();
  });
  adminPanel.querySelectorAll('[data-filter]').forEach(b => b.addEventListener('click', ()=>{ adminFilter = b.dataset.filter; renderAdmin(); }));
  adminPanel.querySelectorAll('[data-set]').forEach(b => b.addEventListener('click', ()=> setOrderStatus(b.dataset.id, b.dataset.set)));
}
function adminBtn(id, set, label, kind){ return `<button class="ao-btn ${kind}" data-id="${id}" data-set="${set}" type="button">${label}</button>`; }
function adminOrderHTML(o){
  const acts = [];
  if(o.status==='New')       acts.push(adminBtn(o.id,'Preparing','▶ Start','primary'));
  if(o.status==='Preparing') acts.push(adminBtn(o.id,'Ready','✓ Mark Ready','primary'));
  if(o.status==='Ready')     acts.push(adminBtn(o.id,'Completed','✓ Complete','primary'));
  if(o.status!=='Completed' && o.status!=='Cancelled') acts.push(adminBtn(o.id,'Cancelled','Cancel','danger'));
  if(o.status==='Completed' || o.status==='Cancelled') acts.push(adminBtn(o.id,'New','↺ Reopen','ghost'));
  const c = o.customer || {};
  const where = o.fulfillment==='delivery' ? ('🚗 Delivery → ' + (o.address||'')) : '🏪 Pickup';
  return `<div class="admin-order ${statusClass(o.status)}">
    <div class="ao-head">
      <div><span class="order-num-lg">${o.number}</span><span class="order-date">${fmtDate(o.ts)}</span></div>
      <span class="status-badge ${statusClass(o.status)}">${o.status}</span>
    </div>
    <div class="ao-cust">${c.name||'Guest'} · ${c.phone||'—'}${c.email?' · '+c.email:''}</div>
    <div class="ao-where">${where}${o.when?' · '+o.when:''}</div>
    <div class="order-items">${o.items.map(i=>`<div class="oi-line"><span>${i.qty} × ${i.name}</span><span>${money(i.price*i.qty)}</span></div>`).join('')}</div>
    ${o.notes?`<div class="ao-notes">📝 ${o.notes}</div>`:''}
    <div class="ao-foot"><span class="order-total">Total ${money(o.total)}</span><div class="ao-actions">${acts.join('')}</div></div>
  </div>`;
}
function setOrderStatus(id, status){
  const orders = getOrders();
  const o = orders.find(x => x.id === id);
  if(!o) return;
  o.status = status;
  saveOrders(orders);
  renderAdmin();
  if(document.body.dataset.tab === 'orders') renderMyOrders();
}

/* floating "Dashboard" button so staff can reopen it after browsing the store */
function showAdminFab(){
  let fab = document.getElementById('adminFab');
  if(!fab){
    fab = document.createElement('button');
    fab.id = 'adminFab'; fab.className = 'admin-fab'; fab.type = 'button';
    fab.innerHTML = '🍳 Dashboard';
    fab.addEventListener('click', openAdmin);
    document.body.appendChild(fab);
  }
  fab.style.display = '';
}
function hideAdminFab(){ const f = document.getElementById('adminFab'); if(f) f.style.display = 'none'; }
function clearAdminHash(){ if(location.hash === '#admin') history.replaceState(null, '', location.pathname + location.search); }

/* entry points — admin is only reachable via #admin or Ctrl/Cmd+Shift+A, never shown to shoppers */
if(location.hash === '#admin') openAdmin();
if(isAdmin()) showAdminFab();
window.addEventListener('hashchange', ()=>{ if(location.hash === '#admin') openAdmin(); });
document.addEventListener('keydown', (e)=>{
  if((e.ctrlKey||e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')){ e.preventDefault(); openAdmin(); }
});
/* keep a customer tab and a staff tab in sync */
window.addEventListener('storage', (e)=>{
  if(e.key === ORDERS_KEY){
    if(adminPanel.classList.contains('show') && isAdmin()) renderAdmin();
    if(document.body.dataset.tab === 'orders') renderMyOrders();
  }
});
