// gh-shop.jsx — Gentle Heritage v2: editorial / magazine aesthetic

const PRODUCTS = [
  { id:1,  name:'Linen Shirt Dress',     price:89,  cat:'Dresses',            cond:'new',        sizes:['XS','S','M'],        note:"Hits at knee on 5'2\" — ideal midi length",           img:'https://images.unsplash.com/photo-0HQzYawVQSY?w=600&q=80&fit=crop&crop=center', g:['#E8D8C2','#C4A87A'] },
  { id:2,  name:'Vintage Denim Jacket',  price:45,  cat:'Outerwear',          cond:'secondhand', sizes:['S','M'],             note:'Cropped fit, great for petite frames',                img:'https://images.unsplash.com/photo-_3Q3tsJ01nc?w=600&q=80&fit=crop&crop=center', g:['#D6CCBE','#A89074'] },
  { id:3,  name:'Ribbed Tank Set',       price:68,  cat:'Sets / co-ords',     cond:'new',        sizes:['XS','S','M','L'],    note:'High-waist trousers elongate the leg',                img:'https://images.unsplash.com/photo-nimElTcTNyY?w=600&q=80&fit=crop&crop=center', g:['#DED0C0','#B8A48C'] },
  { id:4,  name:'Wide Leg Trousers',     price:72,  cat:'Jeans & trousers',   cond:'new',        sizes:['XS','S','M'],        note:'Petite inseam available',                             img:'https://images.unsplash.com/photo-TS--uNw-JqE?w=600&q=80&fit=crop&crop=center', g:['#CEC4B0','#A89880'] },
  { id:5,  name:'Wrap Mini Skirt',       price:38,  cat:'Skirts',             cond:'secondhand', sizes:['XS','S'],            note:'Sits high — flattering on shorter legs',              img:'https://images.unsplash.com/photo-tCInGzGjLFo?w=600&q=80&fit=crop&crop=center', g:['#D4C4B8','#B09488'] },
  { id:6,  name:'Cashmere Crewneck',     price:120, cat:'Tops',               cond:'new',        sizes:['XS','S','M'],        note:'Slightly cropped — perfect proportions',              img:'https://images.unsplash.com/photo-OVS3rqXq9gg?w=600&q=80&fit=crop&crop=center', g:['#E0DAD4','#C4BEB8'] },
  { id:7,  name:'Satin Slip Dress',      price:95,  cat:'Dresses',            cond:'new',        sizes:['XS','S'],            note:"Short length works well at 5'4\" and under",          img:'https://images.unsplash.com/photo-UqT55tGBqzI?w=600&q=80&fit=crop&crop=center', g:['#D4C4C0','#B4A0A0'] },
  { id:8,  name:"Vintage Levi's 501s",   price:55,  cat:'Jeans & trousers',   cond:'secondhand', sizes:["W24","W25","W26"],   note:'Shortened hem — ready to wear',                       img:'https://images.unsplash.com/photo-r5xHI_H44aM?w=600&q=80&fit=crop&crop=center', g:['#D2C8BA','#A48C72'] },
  { id:9,  name:'Boxy Blazer',           price:85,  cat:'Outerwear',          cond:'secondhand', sizes:['XS','S','M'],        note:'Oversized on petite frames is very intentional here',  img:'https://images.unsplash.com/photo-ODxDFR5eSF8?w=600&q=80&fit=crop&crop=center', g:['#C4C0BC','#A4A09C'] },
  { id:10, name:'Broderie Blouse',       price:62,  cat:'Tops',               cond:'new',        sizes:['XS','S','M'],        note:'Cropped hem hits at natural waist',                    img:'https://images.unsplash.com/photo-IXYxqP4zejo?w=600&q=80&fit=crop&crop=center', g:['#E4DDD4','#CCC0B0'] },
  { id:11, name:'Mary Jane Flats',       price:48,  cat:'Shoes & accessories', cond:'new',       sizes:['35','36','37','38'], note:'Low heel adds height subtly',                         img:'https://images.unsplash.com/photo-pIKQbdSzF_k?w=600&q=80&fit=crop&crop=center', g:['#CCC4BC','#ACA49C'] },
  { id:12, name:'Pleated Mini Skirt',    price:44,  cat:'Skirts',             cond:'new',        sizes:['XS','S','M'],        note:"Mini length perfect for 5'4\" and under",             img:'https://images.unsplash.com/photo-dlxLGIy-2VU?w=600&q=80&fit=crop&crop=center', g:['#DEDAD4','#C0BCB4'] },
];

const CATEGORIES = ['All','Dresses','Tops','Outerwear','Jeans & trousers','Skirts','Sets / co-ords','Shoes & accessories'];

function HeartIcon({ filled }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" style={{ display:'block' }}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ display:'block' }}>
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function Nav({ setView, cart, wishlist, setCartOpen }) {
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const lnk = { background:'none', border:'none', cursor:'pointer', fontFamily:'var(--font-body)', fontSize:'0.65rem', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--text-muted)', padding:0 };
  return (
    <nav style={{ position:'fixed', top:0, left:0, right:0, zIndex:100, background:'var(--bg)', borderBottom:'1px solid var(--border-color)', height:'56px', display:'grid', gridTemplateColumns:'1fr auto 1fr', alignItems:'center', padding:'0 clamp(1.25rem,4vw,3.5rem)' }}>
      <div style={{ display:'flex', gap:'2rem', alignItems:'center' }}>
        <button style={lnk} onClick={() => setView('shop')}>Shop</button>
        <button style={lnk} onClick={() => setView('howItWorks')}>How it works</button>
      </div>

      <button onClick={() => setView('home')} style={{ background:'none', border:'none', cursor:'pointer', fontFamily:'var(--font-display)', fontSize:'1.05rem', fontWeight:400, letterSpacing:'0.1em', color:'var(--text)', whiteSpace:'nowrap', textTransform:'uppercase' }}>
        Gentle Heritage<span style={{ fontSize:'1.3em', verticalAlign:'0.05em' }}>。</span>
      </button>

      <div style={{ display:'flex', gap:'1.25rem', alignItems:'center', justifyContent:'flex-end' }}>
        <button onClick={() => setView('wishlist')} style={{ background:'none', border:'none', cursor:'pointer', color: wishlist.length > 0 ? 'var(--accent)' : 'var(--text)', display:'flex', alignItems:'center', gap:'0.3rem' }}>
          <HeartIcon filled={wishlist.length > 0} />
          {wishlist.length > 0 && <span style={{ fontFamily:'var(--font-body)', fontSize:'0.65rem' }}>{wishlist.length}</span>}
        </button>
        <button onClick={() => setCartOpen(true)} style={{ background:'none', border:'none', cursor:'pointer', color:'var(--text)', display:'flex', alignItems:'center', gap:'0.3rem' }}>
          <BagIcon />
          {cartCount > 0 && <span style={{ fontFamily:'var(--font-body)', fontSize:'0.68rem' }}>{cartCount}</span>}
        </button>
      </div>
    </nav>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────

function Hero({ setView, variation }) {
  const base = { paddingTop:'56px' };

  // EDITORIAL — Bodoni Moda, dramatic split type
  if (variation === 'Editorial') {
    return (
      <section style={{ ...base, minHeight:'100vh', display:'grid', gridTemplateRows:'1fr auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:'calc(100vh - 56px)' }}>
          {/* Left: pure type */}
          <div style={{ display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:'clamp(2rem,5vw,5rem) clamp(1.5rem,4vw,4rem) clamp(2rem,5vw,5rem)', borderRight:'1px solid var(--border-color)' }}>
            <p style={{ fontFamily:'var(--font-body)', fontSize:'0.62rem', letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--text-muted)', marginBottom:'3rem' }}>No. 01 — Spring Edit</p>
            <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(4rem,10vw,9rem)', fontWeight:700, lineHeight:0.9, letterSpacing:'-0.01em', color:'var(--text)', margin:'0 0 3rem' }}>
              New<br />&amp;<br />Pre-<br />loved.
            </h1>
            <div style={{ display:'flex', gap:'2.5rem', alignItems:'center' }}>
              <button onClick={() => setView('shop')} style={{ background:'none', border:'none', cursor:'pointer', fontFamily:'var(--font-body)', fontSize:'0.65rem', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--text)', borderBottom:'1px solid var(--text)', paddingBottom:'2px' }}>
                Shop the edit
              </button>
              <button onClick={() => setView('howItWorks')} style={{ background:'none', border:'none', cursor:'pointer', fontFamily:'var(--font-body)', fontSize:'0.65rem', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--text-muted)' }}>
                How it works
              </button>
            </div>
          </div>
          {/* Right: image */}
          <div style={{ background:'linear-gradient(170deg, #E4D4C0 0%, #C0A880 55%, #D0C0A8 100%)', position:'relative' }}>
            <div style={{ position:'absolute', top:'clamp(1.5rem,4vw,3rem)', right:'clamp(1.5rem,4vw,3rem)', textAlign:'right' }}>
              <p style={{ fontFamily:'var(--font-body)', fontSize:'0.6rem', letterSpacing:'0.16em', textTransform:'uppercase', color:'rgba(60,40,20,0.45)', lineHeight:1.8 }}>
                Trend-led<br />Hand-picked<br />XS – M
              </p>
            </div>
            <div style={{ position:'absolute', bottom:'clamp(1.5rem,4vw,3rem)', left:'clamp(1.5rem,4vw,3rem)', fontFamily:'var(--font-display)', fontSize:'clamp(4rem,12vw,10rem)', fontWeight:700, color:'rgba(255,255,255,0.14)', lineHeight:1, letterSpacing:'-0.02em', userSelect:'none' }}>
              GH
            </div>
          </div>
        </div>
      </section>
    );
  }

  // WARM — DM Serif Display, soft and intimate
  if (variation === 'Warm') {
    return (
      <section style={{ ...base, minHeight:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', padding:'calc(56px + 5vw) clamp(1.5rem,8vw,8rem) 5vw' }}>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'0.6rem', letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--text-muted)', marginBottom:'2.5rem' }}>Est. 2024 — Handpicked</p>
        <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(3.5rem,8vw,7.5rem)', fontWeight:400, lineHeight:1.05, letterSpacing:'-0.01em', color:'var(--text)', margin:'0 0 2rem', maxWidth:'14ch' }}>
          Clothing worth<br />coming back to.
        </h1>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'3rem', marginTop:'1rem', borderTop:'1px solid var(--border-color)', paddingTop:'2.5rem' }}>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'0.88rem', color:'var(--text-muted)', lineHeight:1.85, margin:0 }}>
            New season pieces alongside carefully selected second-hand. Every item chosen for quality, trend and the way it actually fits.
          </p>
          <div style={{ display:'flex', flexDirection:'column', gap:'1rem', justifyContent:'flex-end' }}>
            <button onClick={() => setView('shop')} style={{ background:'var(--text)', color:'var(--bg)', border:'none', padding:'0.875rem 0', cursor:'pointer', fontFamily:'var(--font-body)', fontSize:'0.65rem', letterSpacing:'0.16em', textTransform:'uppercase', textAlign:'center' }}>
              Browse the edit
            </button>
            <button onClick={() => setView('howItWorks')} style={{ background:'none', color:'var(--text-muted)', border:'1px solid var(--border-color)', padding:'0.875rem 0', cursor:'pointer', fontFamily:'var(--font-body)', fontSize:'0.65rem', letterSpacing:'0.12em', textTransform:'uppercase', textAlign:'center' }}>
              How it works
            </button>
          </div>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'0.5rem', marginTop:'4vw', height:'28vw', maxHeight:'320px' }}>
          {[['#E8D8C2','#C4A87A'],['#CCC4BC','#ACA49C'],['#D6CCBE','#A89074'],['#E0DAD4','#C4BEB8']].map(([c1,c2],i) => (
            <div key={i} onClick={() => setView('shop')} style={{ background:`linear-gradient(170deg,${c1},${c2})`, cursor:'pointer', position:'relative' }}>
              {i===0 && <span style={{ position:'absolute', bottom:'0.75rem', left:'0.75rem', fontFamily:'var(--font-body)', fontSize:'0.58rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(50,30,15,0.5)' }}>New</span>}
              {i===1 && <span style={{ position:'absolute', bottom:'0.75rem', left:'0.75rem', fontFamily:'var(--font-body)', fontSize:'0.58rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(50,30,15,0.5)' }}>Pre-loved</span>}
            </div>
          ))}
        </div>
      </section>
    );
  }

  // GRAPHIC — Raleway, stark and modern
  return (
    <section style={{ ...base, minHeight:'100vh', display:'flex', alignItems:'stretch' }}>
      <div style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'space-between', padding:'clamp(2rem,5vw,5rem) clamp(1.5rem,5vw,5rem)' }}>
        <div>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'clamp(3rem,8vw,8rem)' }}>
            <p style={{ fontFamily:'var(--font-body)', fontSize:'0.6rem', letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--text-muted)', margin:0 }}>Spring Edit</p>
            <p style={{ fontFamily:'var(--font-body)', fontSize:'0.6rem', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--text-muted)', margin:0 }}>XS – M</p>
          </div>
          <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(4.5rem,13vw,12rem)', fontWeight:800, lineHeight:0.88, letterSpacing:'-0.03em', color:'var(--text)', margin:0, textTransform:'uppercase' }}>
            Gentle<br />Heri-<br />tage
          </h1>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.5rem', alignItems:'end', borderTop:'1px solid var(--border-color)', paddingTop:'2rem' }}>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'0.8rem', color:'var(--text-muted)', lineHeight:1.75, margin:0 }}>
            Hand-picked. New &amp; pre-loved. Always on-trend, always quality.
          </p>
          <div style={{ display:'flex', gap:'1rem', justifyContent:'flex-end', alignItems:'center' }}>
            <button onClick={() => setView('shop')} style={{ background:'var(--text)', color:'var(--bg)', border:'none', padding:'0.8rem 2rem', cursor:'pointer', fontFamily:'var(--font-body)', fontSize:'0.65rem', fontWeight:600, letterSpacing:'0.14em', textTransform:'uppercase' }}>
              Shop →
            </button>
          </div>
        </div>
      </div>
      {/* Right column: stacked image panels */}
      <div style={{ width:'38%', display:'grid', gridTemplateRows:'1fr 1fr', borderLeft:'1px solid var(--border-color)' }}>
        <div style={{ background:'linear-gradient(160deg,#E4D4C0,#C0A880)', borderBottom:'1px solid var(--border-color)' }} />
        <div style={{ background:'linear-gradient(160deg,#D6CCBE,#A89074)' }} />
      </div>
    </section>
  );
}

// ─── PRODUCT CARD ─────────────────────────────────────────────────────────────

function ProductCard({ product, onSelect, wishlisted, onWishlist, large }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ cursor:'pointer' }}>
      <div
        onClick={() => onSelect(product)}
        style={{ aspectRatio: '3/4', background:`linear-gradient(165deg,${product.g[0]} 0%,${product.g[1]} 100%)`, marginBottom:'1.1rem', position:'relative', overflow:'hidden' }}
      >
        <img src={product.img} alt={product.name} style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
        {product.cond === 'secondhand' && (
          <span style={{ position:'absolute', top:'0.875rem', left:'0.875rem', fontFamily:'var(--font-body)', fontSize:'0.56rem', letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(40,25,15,0.6)', background:'rgba(255,255,255,0.78)', padding:'0.2rem 0.5rem', whiteSpace:'nowrap' }}>Pre-loved</span>
        )}
        <button onClick={e => { e.stopPropagation(); onWishlist(product.id); }} style={{ position:'absolute', top:'0.875rem', right:'0.875rem', background:'none', border:'none', cursor:'pointer', color: wishlisted ? 'var(--accent)' : 'rgba(60,40,25,0.5)', transition:'color 0.2s', zIndex:2 }}>
          <HeartIcon filled={wishlisted} />
        </button>
        <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.06)', opacity: hov ? 1 : 0, transition:'opacity 0.25s' }} />
      </div>
      <div onClick={() => onSelect(product)}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', gap:'1rem' }}>
          <p style={{ fontFamily:'var(--font-display)', fontSize:'0.95rem', fontWeight:400, color:'var(--text)', margin:0, lineHeight:1.3, letterSpacing:'0.01em', flex:1 }}>{product.name}</p>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'0.74rem', color:'var(--text-muted)', margin:0, whiteSpace:'nowrap' }}>${product.price}</p>
        </div>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'0.6rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--text-muted)', margin:'0.3rem 0 0', opacity:0.8 }}>{product.cat}</p>
      </div>
    </div>
  );
}

// ─── SHOP GRID ────────────────────────────────────────────────────────────────

function ShopGrid({ wishlist, onWishlist, onSelect }) {
  const [condFilter, setCond] = React.useState('all');
  const [catFilter, setCat] = React.useState('All');

  const filtered = PRODUCTS.filter(p =>
    (condFilter === 'all' || p.cond === condFilter) &&
    (catFilter === 'All' || p.cat === catFilter)
  );

  // Collage layout: dense scatter of small magazine clippings
  function renderGrid(items) {
    return (
      <div style={{ display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:'3rem 2.25rem', alignItems:'start' }}>
        {items.map(p => (
          <ProductCard key={p.id} product={p} onSelect={onSelect} wishlisted={wishlist.includes(p.id)} onWishlist={onWishlist} />
        ))}
      </div>
    );
  }

  return (
    <div style={{ paddingTop:'56px', minHeight:'100vh', background:'transparent' }}>
      {/* Editorial shop header */}
      <div style={{ padding:'3rem clamp(1.5rem,5vw,4rem) 0', borderBottom:'1px solid var(--border-color)' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', paddingBottom:'1.5rem' }}>
          <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(2rem,5vw,4rem)', fontWeight:400, color:'var(--text)', margin:0, letterSpacing:'-0.01em', lineHeight:1 }}>
            The Edit
          </h2>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'0.65rem', color:'var(--text-muted)', letterSpacing:'0.14em', textTransform:'uppercase', margin:0 }}>{filtered.length} pieces</p>
        </div>

        {/* Filters — minimal text style */}
        <div style={{ display:'flex', gap:'0', borderTop:'1px solid var(--border-color)', overflowX:'auto' }}>
          {[['all','All'],['new','New only'],['secondhand','Pre-loved']].map(([val, label]) => (
            <button key={val} onClick={() => setCond(val)} style={{ background:'none', border:'none', borderBottom: condFilter===val ? '2px solid var(--text)' : '2px solid transparent', padding:'0.875rem 1.5rem 0.75rem', cursor:'pointer', fontFamily:'var(--font-body)', fontSize:'0.65rem', letterSpacing:'0.14em', textTransform:'uppercase', color: condFilter===val ? 'var(--text)' : 'var(--text-muted)', transition:'all 0.15s', whiteSpace:'nowrap' }}>
              {label}
            </button>
          ))}
          <div style={{ width:'1px', background:'var(--border-color)', margin:'0.5rem 1rem' }} />
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setCat(cat)} style={{ background:'none', border:'none', borderBottom: catFilter===cat ? '2px solid var(--text)' : '2px solid transparent', padding:'0.875rem 1rem 0.75rem', cursor:'pointer', fontFamily:'var(--font-body)', fontSize:'0.65rem', letterSpacing:'0.1em', color: catFilter===cat ? 'var(--text)' : 'var(--text-muted)', transition:'all 0.15s', whiteSpace:'nowrap', textTransform:'uppercase' }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div style={{ textAlign:'center', padding:'8rem 2rem', fontFamily:'var(--font-body)', fontSize:'0.875rem', color:'var(--text-muted)', letterSpacing:'0.1em', textTransform:'uppercase' }}>Nothing here yet</div>
      ) : (
        <div style={{ padding:'3rem clamp(1.5rem,5vw,4rem) 5rem' }}>
          {renderGrid(filtered)}
        </div>
      )}
    </div>
  );
}

// ─── PRODUCT MODAL ────────────────────────────────────────────────────────────

function ProductModal({ product, setCart, wishlisted, onWishlist, onClose }) {
  const [size, setSize] = React.useState(null);
  const [added, setAdded] = React.useState(false);

  function addToCart() {
    if (!size) return;
    setCart(prev => {
      const idx = prev.findIndex(i => i.id === product.id && i.size === size);
      if (idx > -1) return prev.map((i,j) => j===idx ? {...i, qty:i.qty+1} : i);
      return [...prev, {...product, size, qty:1}];
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  }

  return (
    <div onClick={onClose} style={{ position:'fixed', inset:0, zIndex:200, display:'flex', justifyContent:'flex-end' }}>
      <div style={{ position:'absolute', inset:0, background:'rgba(10,8,6,0.5)' }} />
      <div onClick={e => e.stopPropagation()} style={{ position:'relative', background:'var(--bg)', width:'min(520px,100%)', height:'100vh', overflowY:'auto', display:'flex', flexDirection:'column' }}>
        <button onClick={onClose} style={{ position:'absolute', top:'1.25rem', right:'1.5rem', background:'none', border:'none', cursor:'pointer', fontFamily:'var(--font-body)', fontSize:'0.65rem', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--text-muted)', zIndex:1 }}>Close</button>

        <div style={{ aspectRatio:'3/4', background:`linear-gradient(165deg,${product.g[0]},${product.g[1]})`, position:'relative', flexShrink:0, overflow:'hidden' }}>
          <img src={product.img} alt={product.name} style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
          {product.cond === 'secondhand' && (
            <span style={{ position:'absolute', top:'1rem', left:'1rem', fontFamily:'var(--font-body)', fontSize:'0.6rem', letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(40,25,15,0.65)', background:'rgba(255,255,255,0.8)', padding:'0.2rem 0.6rem' }}>Pre-loved</span>
          )}
        </div>

        <div style={{ padding:'2rem 2.5rem 3.5rem', flex:1 }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:'1rem', marginBottom:'0.25rem' }}>
            <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.5rem,4vw,2rem)', fontWeight:400, color:'var(--text)', margin:0, lineHeight:1.2, flex:1, letterSpacing:'0.01em' }}>{product.name}</h2>
            <button onClick={() => onWishlist(product.id)} style={{ background:'none', border:'none', cursor:'pointer', color: wishlisted ? 'var(--accent)' : 'var(--text-muted)', flexShrink:0, marginTop:'0.3rem' }}>
              <HeartIcon filled={wishlisted} />
            </button>
          </div>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'0.9rem', color:'var(--text)', marginBottom:'2rem', letterSpacing:'0.02em' }}>${product.price}</p>

          {product.note && (
            <div style={{ borderTop:'1px solid var(--border-color)', borderBottom:'1px solid var(--border-color)', padding:'1rem 0', marginBottom:'2rem' }}>
              <p style={{ fontFamily:'var(--font-body)', fontSize:'0.75rem', color:'var(--text-muted)', margin:0, lineHeight:1.7, letterSpacing:'0.02em' }}>
                <span style={{ textTransform:'uppercase', letterSpacing:'0.14em', fontSize:'0.62rem', display:'block', marginBottom:'0.35rem', color:'var(--text)' }}>Fit note</span>
                {product.note}
              </p>
            </div>
          )}

          <p style={{ fontFamily:'var(--font-body)', fontSize:'0.62rem', letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--text-muted)', marginBottom:'0.875rem' }}>Size</p>
          <div style={{ display:'flex', gap:'0.5rem', flexWrap:'wrap', marginBottom:'2rem' }}>
            {product.sizes.map(s => (
              <button key={s} onClick={() => setSize(s)} style={{ border: size===s ? '1px solid var(--text)' : '1px solid var(--border-color)', background: size===s ? 'var(--text)' : 'transparent', color: size===s ? 'var(--bg)' : 'var(--text)', padding:'0.55rem 1.25rem', cursor:'pointer', fontFamily:'var(--font-body)', fontSize:'0.78rem', letterSpacing:'0.06em', transition:'all 0.15s' }}>
                {s}
              </button>
            ))}
          </div>

          <button onClick={addToCart} disabled={!size} style={{ width:'100%', background: size ? 'var(--text)' : 'var(--border-color)', color: size ? 'var(--bg)' : 'var(--text-muted)', border:'none', padding:'1.05rem', cursor: size ? 'pointer' : 'not-allowed', fontFamily:'var(--font-body)', fontSize:'0.65rem', letterSpacing:'0.2em', textTransform:'uppercase', transition:'all 0.2s' }}>
            {added ? '✓ Added' : 'Add to bag'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── CART DRAWER ──────────────────────────────────────────────────────────────

function CartDrawer({ cart, setCart, onClose }) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const remove = (id, size) => setCart(prev => prev.filter(i => !(i.id===id && i.size===size)));

  return (
    <div onClick={onClose} style={{ position:'fixed', inset:0, zIndex:200, display:'flex', justifyContent:'flex-end' }}>
      <div style={{ position:'absolute', inset:0, background:'rgba(10,8,6,0.4)' }} />
      <div onClick={e => e.stopPropagation()} style={{ position:'relative', background:'var(--bg)', width:'min(380px,100%)', display:'flex', flexDirection:'column', height:'100vh' }}>
        <div style={{ padding:'1.5rem 1.75rem 1.25rem', borderBottom:'1px solid var(--border-color)', display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0 }}>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'0.62rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text)', margin:0 }}>Your Bag {cart.length > 0 && `(${cart.reduce((s,i)=>s+i.qty,0)})`}</p>
          <button onClick={onClose} style={{ background:'none', border:'none', cursor:'pointer', fontFamily:'var(--font-body)', fontSize:'0.62rem', letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--text-muted)' }}>Close</button>
        </div>

        <div style={{ flex:1, overflowY:'auto', padding:'0 1.75rem' }}>
          {cart.length === 0 ? (
            <p style={{ fontFamily:'var(--font-body)', fontSize:'0.8rem', color:'var(--text-muted)', marginTop:'2.5rem', letterSpacing:'0.04em' }}>Your bag is empty.</p>
          ) : cart.map(item => (
            <div key={`${item.id}-${item.size}`} style={{ display:'grid', gridTemplateColumns:'60px 1fr auto', gap:'1rem', padding:'1.5rem 0', borderBottom:'1px solid var(--border-color)', alignItems:'start' }}>
              <img src={item.img} alt={item.name} style={{ width:'60px', height:'78px', objectFit:'cover', display:'block', flexShrink:0 }} />
              <div>
                <p style={{ fontFamily:'var(--font-display)', fontSize:'0.95rem', color:'var(--text)', margin:'0 0 0.3rem', lineHeight:1.3 }}>{item.name}</p>
                <p style={{ fontFamily:'var(--font-body)', fontSize:'0.7rem', color:'var(--text-muted)', margin:'0 0 0.4rem', letterSpacing:'0.06em' }}>Size: {item.size} · Qty: {item.qty}</p>
                <p style={{ fontFamily:'var(--font-body)', fontSize:'0.82rem', color:'var(--text)', margin:0 }}>${item.price}</p>
              </div>
              <button onClick={() => remove(item.id, item.size)} style={{ background:'none', border:'none', cursor:'pointer', color:'var(--text-muted)', fontFamily:'var(--font-body)', fontSize:'0.62rem', letterSpacing:'0.14em', textTransform:'uppercase', paddingTop:'0.1rem' }}>×</button>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div style={{ padding:'1.5rem 1.75rem', borderTop:'1px solid var(--border-color)', flexShrink:0 }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:'1.25rem' }}>
              <span style={{ fontFamily:'var(--font-body)', fontSize:'0.62rem', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--text-muted)' }}>Total</span>
              <span style={{ fontFamily:'var(--font-display)', fontSize:'1.5rem', fontWeight:400, color:'var(--text)', letterSpacing:'-0.01em' }}>${total}</span>
            </div>
            <button style={{ width:'100%', background:'var(--text)', color:'var(--bg)', border:'none', padding:'1rem', cursor:'pointer', fontFamily:'var(--font-body)', fontSize:'0.62rem', letterSpacing:'0.2em', textTransform:'uppercase' }}>
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── WISHLIST — VISION BOARD ─────────────────────────────────────────────────

const VISION_SLOTS = [
  { l:'1%',   t:55,   w:210, r:-6,   tape:true,  tapeR:2,  showText:true,  z:2, ratio:'3/4'  },
  { l:'23%',  t:20,   w:265, r:3.5,  tape:true,  tapeR:-1, showText:false, z:3, ratio:'2/3'  },
  { l:'53%',  t:45,   w:178, r:-2.5, tape:false, tapeR:0,  showText:true,  z:1, ratio:'4/5'  },
  { l:'72%',  t:22,   w:235, r:6,    tape:true,  tapeR:3,  showText:false, z:2, ratio:'3/4'  },
  { l:'5%',   t:355,  w:248, r:4.5,  tape:true,  tapeR:-2, showText:false, z:2, ratio:'2/3'  },
  { l:'30%',  t:320,  w:188, r:-5,   tape:false, tapeR:0,  showText:true,  z:3, ratio:'3/4'  },
  { l:'51%',  t:310,  w:265, r:2,    tape:true,  tapeR:1,  showText:true,  z:1, ratio:'4/5'  },
  { l:'76%',  t:335,  w:198, r:-3.5, tape:false, tapeR:0,  showText:false, z:2, ratio:'3/4'  },
  { l:'2%',   t:650,  w:258, r:-3,   tape:true,  tapeR:-1, showText:true,  z:1, ratio:'2/3'  },
  { l:'29%',  t:618,  w:202, r:5.5,  tape:false, tapeR:0,  showText:false, z:2, ratio:'3/4'  },
  { l:'54%',  t:635,  w:182, r:-4,   tape:true,  tapeR:2,  showText:true,  z:3, ratio:'4/5'  },
  { l:'75%',  t:620,  w:228, r:3,    tape:false, tapeR:0,  showText:false, z:1, ratio:'3/4'  },
];

// Subtle clip paths — slightly off-square for that hand-cut look
const CUT_CLIPS = [
  'polygon(1% 1%, 99% 2%, 98% 99%, 2% 98%)',
  'polygon(2% 0%, 100% 1%, 99% 100%, 0% 98%)',
  'polygon(0% 2%, 98% 1%, 100% 99%, 1% 100%)',
  'polygon(1% 0%, 98% 2%, 100% 98%, 3% 100%)',
  'polygon(0% 1%, 100% 0%, 99% 99%, 2% 100%)',
];

function CutoutCard({ product, slot, onWishlist, onSelect }) {
  const [hov, setHov] = React.useState(false);
  const clip = CUT_CLIPS[product.id % CUT_CLIPS.length];

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'absolute',
        left: slot.l,
        top: slot.t,
        width: `${slot.w}px`,
        transform: `rotate(${slot.r}deg) translateY(${hov ? -10 : 0}px)`,
        transition: 'transform 0.32s cubic-bezier(0.34, 1.4, 0.64, 1), filter 0.25s ease',
        filter: hov
          ? 'drop-shadow(0 16px 32px rgba(0,0,0,0.28))'
          : `drop-shadow(0 3px 10px rgba(0,0,0,0.18))`,
        zIndex: hov ? 30 : (slot.z || 1),
        cursor: 'pointer',
      }}
    >
      {/* Washi tape strip */}
      {slot.tape && (
        <div style={{
          position: 'absolute',
          top: '-9px',
          left: '50%',
          transform: `translateX(-50%) rotate(${slot.tapeR || 0}deg)`,
          width: '54px',
          height: '17px',
          background: 'rgba(255,245,195,0.68)',
          border: '0.5px solid rgba(210,185,120,0.4)',
          zIndex: 4,
          pointerEvents: 'none',
        }} />
      )}

      {/* The cut-out image */}
      <div
        onClick={() => onSelect(product)}
        style={{
          width: '100%',
          aspectRatio: slot.ratio || '3/4',
          background: `linear-gradient(165deg, ${product.g[0]} 0%, ${product.g[1]} 100%)`,
          clipPath: clip,
          display: 'block',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <img src={product.img} alt={product.name} style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
        {product.cond === 'secondhand' && (
          <span style={{ position:'absolute', bottom:'8%', left:'8%', fontFamily:'var(--font-body)', fontSize:'0.55rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(40,25,15,0.65)', background:'rgba(255,255,255,0.75)', padding:'0.15rem 0.45rem' }}>Pre-loved</span>
        )}
      </div>

      {/* Un-heart button */}
      <button
        onClick={e => { e.stopPropagation(); onWishlist(product.id); }}
        style={{ position:'absolute', top:'10px', right:'8px', background:'rgba(255,255,255,0.8)', border:'none', cursor:'pointer', color:'#C4736A', borderRadius:'50%', width:'24px', height:'24px', display:'flex', alignItems:'center', justifyContent:'center', zIndex:5, boxShadow:'0 1px 4px rgba(0,0,0,0.12)' }}
        title="Remove"
      >
        <HeartIcon filled={true} />
      </button>

      {/* Text label — like a clipped caption */}
      {slot.showText && (
        <div
          onClick={() => onSelect(product)}
          style={{ marginTop: '5px', paddingLeft: '3px' }}
        >
          <span style={{
            display: 'inline-block',
            background: '#FFFFF8',
            padding: '2px 8px 3px',
            fontFamily: 'var(--font-display)',
            fontSize: '0.75rem',
            color: '#111',
            transform: `rotate(${-(slot.r * 0.25)}deg)`,
            display: 'inline-block',
            boxShadow: '0 1px 5px rgba(0,0,0,0.1)',
            letterSpacing: '0.01em',
            lineHeight: 1.4,
          }}>
            {product.name}
          </span>
          <span style={{
            display: 'block',
            fontFamily: 'var(--font-body)',
            fontSize: '0.58rem',
            color: '#aaa',
            paddingLeft: '8px',
            marginTop: '3px',
            letterSpacing: '0.08em',
          }}>
            ${product.price}
          </span>
        </div>
      )}
    </div>
  );
}

function WishlistView({ wishlist, onWishlist, onSelect }) {
  const items = PRODUCTS.filter(p => wishlist.includes(p.id));
  const rows = Math.ceil(items.length / 4);
  const boardH = Math.max(520, rows * 310 + 160);

  return (
    <div style={{ paddingTop:'56px', minHeight:'100vh', background:'transparent' }}>
      {/* Header */}
      <div style={{ padding:'2.5rem clamp(1.5rem,5vw,4rem) 1.5rem', borderBottom:'1px solid var(--border-color)', display:'flex', justifyContent:'space-between', alignItems:'flex-end' }}>
        <div>
          <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(2rem,5vw,3.5rem)', fontWeight:400, color:'var(--text)', margin:'0 0 0.25rem', letterSpacing:'-0.01em', lineHeight:1 }}>Vision Board</h2>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'0.62rem', color:'var(--text-muted)', letterSpacing:'0.14em', textTransform:'uppercase', margin:0 }}>Your saved pieces</p>
        </div>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'0.62rem', color:'var(--text-muted)', letterSpacing:'0.16em', textTransform:'uppercase', margin:0 }}>{items.length} {items.length === 1 ? 'piece' : 'pieces'}</p>
      </div>

      {items.length === 0 ? (
        <div style={{ padding:'6rem clamp(1.5rem,5vw,4rem)', textAlign:'center' }}>
          <p style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.5rem,4vw,2.25rem)', fontWeight:400, color:'var(--text-muted)', margin:'0 0 0.75rem', lineHeight:1.2 }}>Your board is empty.</p>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'0.7rem', color:'var(--text-muted)', letterSpacing:'0.12em', textTransform:'uppercase', margin:0 }}>Heart any item to pin it here</p>
        </div>
      ) : (
        /* Board — kraft paper with dot grid */
        <div style={{
          position: 'relative',
          height: `${boardH}px`,
          margin: '2rem clamp(0.75rem,2vw,2rem)',
          background: '#EFE6D8',
          backgroundImage: 'radial-gradient(circle, #D8CCBA 1px, transparent 1px)',
          backgroundSize: '26px 26px',
          borderRadius: '2px',
          overflow: 'visible',
        }}>
          {items.map((p, i) => (
            <CutoutCard
              key={p.id}
              product={p}
              slot={VISION_SLOTS[i % VISION_SLOTS.length]}
              onWishlist={onWishlist}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
      <div style={{ height:'4rem' }} />
    </div>
  );
}

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    { n:'01', title:'Hand-picked only',  body:"Every piece is chosen by me — on-trend, quality-checked, and worth your money. No bulk buying, no filler." },
    { n:'02', title:'New & pre-loved',   body:"New season pieces alongside carefully selected second-hand. Each pre-loved item is graded and described honestly." },
    { n:'03', title:'Sizing notes',      body:"Most items are XS–M. Where relevant I add a note on how something fits on a shorter frame — so you can shop with confidence." },
    { n:'04', title:'Returns',           body:"New items: 14-day returns for store credit. Pre-loved items are final sale — described accurately, so you know exactly what you're getting." },
  ];
  return (
    <div style={{ padding:'calc(56px + 5vw) clamp(1.5rem,5vw,5rem) 7vw', background:'var(--bg)' }}>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 2fr', gap:'4rem', alignItems:'start', borderBottom:'1px solid var(--border-color)', paddingBottom:'5vw', marginBottom:'5vw' }}>
        <div>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'0.6rem', letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--text-muted)', marginBottom:'1.5rem' }}>How it works</p>
          <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(2rem,5vw,3.75rem)', fontWeight:400, color:'var(--text)', lineHeight:1.05, margin:0, letterSpacing:'-0.01em' }}>
            Thoughtful<br />curation,<br />honest<br />shopping.
          </h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'3rem 2.5rem', paddingTop:'0.5rem' }}>
          {steps.map(s => (
            <div key={s.n}>
              <p style={{ fontFamily:'var(--font-display)', fontSize:'2rem', fontWeight:400, color:'var(--border-color)', margin:'0 0 1.25rem', lineHeight:1, letterSpacing:'-0.01em' }}>{s.n}</p>
              <h3 style={{ fontFamily:'var(--font-display)', fontSize:'1.1rem', fontWeight:400, color:'var(--text)', margin:'0 0 0.75rem', letterSpacing:'0.01em' }}>{s.title}</h3>
              <p style={{ fontFamily:'var(--font-body)', fontSize:'0.82rem', color:'var(--text-muted)', lineHeight:1.8, margin:0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

function Footer({ setView }) {
  return (
    <footer style={{ background:'var(--text)', color:'var(--bg)', padding:'5vw clamp(1.5rem,5vw,5rem) 3rem' }}>
      <div style={{ borderBottom:'1px solid rgba(255,255,255,0.1)', paddingBottom:'4vw', marginBottom:'3rem', display:'grid', gridTemplateColumns:'1fr auto', gap:'2rem', alignItems:'end' }}>
        <div>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'0.58rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(255,255,255,0.4)', marginBottom:'1rem' }}>Find us on Instagram</p>
          <h3 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(2rem,6vw,5rem)', fontWeight:400, margin:0, lineHeight:1, letterSpacing:'-0.01em' }}>@gentleheritage</h3>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'0.8rem', color:'rgba(255,255,255,0.5)', marginTop:'0.75rem', lineHeight:1.6 }}>DMs open for questions, restocks &amp; anything else.</p>
        </div>
        <a href="#" style={{ background:'transparent', color:'inherit', textDecoration:'none', padding:'0.875rem 2rem', fontFamily:'var(--font-body)', fontSize:'0.62rem', letterSpacing:'0.18em', textTransform:'uppercase', border:'1px solid rgba(255,255,255,0.25)', display:'inline-block', whiteSpace:'nowrap' }}>
          Open Instagram ↗
        </a>
      </div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'1rem' }}>
        <p style={{ fontFamily:'var(--font-display)', fontSize:'0.9rem', margin:0, color:'rgba(255,255,255,0.35)', letterSpacing:'0.08em', textTransform:'uppercase' }}>Gentle Heritage。</p>
        <div style={{ display:'flex', gap:'2.5rem' }}>
          {[['Shop','shop'],['How it works','howItWorks'],['Contact','contact']].map(([label,v]) => (
            <button key={v} onClick={() => setView(v)} style={{ background:'none', border:'none', cursor:'pointer', fontFamily:'var(--font-body)', fontSize:'0.6rem', color:'rgba(255,255,255,0.4)', letterSpacing:'0.16em', textTransform:'uppercase' }}>{label}</button>
          ))}
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  PRODUCTS, CATEGORIES,
  HeartIcon, BagIcon,
  Nav, Hero, ProductCard, ShopGrid, ProductModal, CartDrawer,
  CutoutCard, WishlistView, HowItWorks, Footer,
});
