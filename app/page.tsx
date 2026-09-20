import Link from 'next/link';
import { products } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { HomeMotion } from '@/components/home-motion';

const moments = [
  ['01','THE WELCOME','Toran','A doorway becomes the first chapter of the celebration.'],
  ['02','THE RITUAL','Bajot + Pitti','The quiet details that give a ceremony its meaning.'],
  ['03','THE EXCHANGE','Mala','Two garlands. One unforgettable moment.'],
  ['04','THE HERITAGE','Topi','A traditional detail worn with pride.'],
];

export default function Home(){
 return <main className="home">
  <HomeMotion/>
  <section className="hero">
   <div className="hero-grid"/><div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
   <div className="hero-content">
    <div className="hero-topline"><span>EST. CHENNAI</span><span>WEDDING ESSENTIALS</span><span>01 / 05</span></div>
    <div className="hero-mark"><img src="/brand/sri-mishri-logo.jpg" alt="Sri Mishri Decors"/></div>
    <p className="hero-kicker">TRADITION · CRAFT · MOMENTS</p>
    <h1><span>SRI MISHRI</span><em>DECORS</em></h1>
    <p className="hero-tagline">Crafting Eternal Moments</p>
    <Link href="/collection" className="hero-cta"><span>Enter the collection</span><b>↗</b></Link>
   </div>
   <div className="hero-footer"><span>SCROLL TO DISCOVER</span><i>↓</i></div>
  </section>

  <section className="manifesto reveal-section">
   <div className="manifesto-index">02 — THE IDEA</div>
   <div><p className="eyebrow">THE FIRST DETAIL</p><h2>Every beautiful wedding begins with <em>traditions, emotions,</em> and countless little details.</h2></div>
   <p className="manifesto-note">The details that welcome, bless, celebrate and stay with a family long after the day is over.</p>
  </section>

  <section className="moments reveal-section">
   <header><div><p className="eyebrow">A WEDDING, TOLD THROUGH DETAILS</p><h2>Four moments.<br/><em>One celebration.</em></h2></div><span>03 — RITUALS</span></header>
   <div className="moment-list">{moments.map(([n,k,name,desc])=><Link href={name==='Bajot + Pitti'?'/collection':'/product/'+name.toLowerCase()} className="moment" key={n}><span>{n}</span><div><small>{k}</small><h3>{name}</h3><p>{desc}</p></div><b>↗</b></Link>)}</div>
  </section>

  <section className="craft reveal-section" id="craft">
   <div className="craft-copy"><p className="eyebrow">04 — CRAFTED BY HAND</p><h2>Haath ka kaam.<br/><em>Made for moments.</em></h2><p>At Sri Mishri Decors, tradition is not simply something we preserve — it is something we celebrate and present in a way that feels elegant, personal, and timeless.</p><Link href="/collection" className="line-cta">Discover our craft <b>↗</b></Link></div>
   <div className="craft-object"><div className="craft-ring ring-a"/><div className="craft-ring ring-b"/><div className="craft-diamond"/><span>PARAMPARA</span><small>THE TOUCH OF HAATH KA KAAM</small></div>
  </section>

  <section className="collection-home reveal-section">
   <header><div><p className="eyebrow">05 — THE INITIAL EDIT</p><h2>Five pieces.<br/><em>A beginning.</em></h2></div><Link href="/collection" className="line-cta">View all pieces <b>↗</b></Link></header>
   <div className="product-rail">{products.map((p,i)=><ProductCard key={p.id} product={p} index={i}/>)}</div>
  </section>

  <section className="wordscape"><div>TRADITION</div><div>CRAFT</div><div>RITUAL</div><div>COLOUR</div><div>MOMENTS</div></section>

  <section className="story reveal-section" id="story">
   <div className="story-image"><span>THE STORY</span><strong>06</strong></div>
   <div className="story-copy"><p className="eyebrow">OUR STORY</p><h2>Born from a love for the <em>little details.</em></h2>
    <p>Every beautiful wedding begins with traditions, emotions, and countless little details that make the celebration truly special.</p>
    <p>Sri Mishri Decors was born from a love for those very details — the traditional elements that bring warmth, beauty, and meaning to Indian weddings.</p>
    <p>What started with a passion for creating beautiful wedding essentials gradually became a journey of craftsmanship, creativity, and dedication.</p>
    <p>From carefully designed torans and pooja thalis to varmala accessories, wedding rituals and trousseau packing, every creation is made with the belief that even the smallest element of a wedding deserves to be special.</p>
    <Link href="/collection" className="line-cta">Enter Sri Mishri <b>↗</b></Link>
   </div>
  </section>

  <section className="closing reveal-section">
   <p className="eyebrow">07 — ETERNAL MOMENTS</p><h2>Because the smallest details<br/>can hold the <em>biggest memories.</em></h2>
   <div><Link href="/collection" className="button gold">Shop the collection <b>↗</b></Link><a href="#contact" className="button outline-light">Talk to us <b>↗</b></a></div>
  </section>
 </main>
}