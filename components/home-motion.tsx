'use client';
import {useLayoutEffect,useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function HomeMotion(){
 const root=useRef<HTMLDivElement>(null);
 useLayoutEffect(()=>{
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce)return;
  const ctx=gsap.context(()=>{
   gsap.set(['.hero-logo-frame','.hero-eyebrow','.hero-title','.tagline','.round-link','.hero-kicker','.scroll-note'],{autoAlpha:0});
   const intro=gsap.timeline({defaults:{ease:'power3.out'}});
   intro.fromTo('.hero-logo-frame',{y:24,scale:.9},{y:0,scale:1,autoAlpha:1,duration:1})
    .fromTo('.hero-kicker',{y:12},{y:0,autoAlpha:1,duration:.45},'-=.45')
    .fromTo('.hero-eyebrow',{y:15},{y:0,autoAlpha:1,duration:.5},'-=.25')
    .fromTo('.hero-title span',{y:50},{y:0,autoAlpha:1,duration:.7},'-=.25')
    .fromTo('.hero-title em',{y:50},{y:0,autoAlpha:1,duration:.7},'-=.55')
    .fromTo('.tagline',{y:12},{y:0,autoAlpha:1,duration:.45},'-=.25')
    .fromTo('.round-link',{scale:.8},{scale:1,y:0,autoAlpha:1,duration:.5},'-=.15')
    .fromTo('.scroll-note',{y:8},{y:0,autoAlpha:1,duration:.4},'-=.2');
   gsap.to('.hero-content',{yPercent:-15,scale:.94,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
   gsap.to('.orbit-one',{rotation:28,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
   gsap.to('.orbit-two',{rotation:-22,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
   gsap.utils.toArray<HTMLElement>('.reveal-section').forEach(section=>{
    const targets=section.querySelectorAll('.eyebrow,h2,p,.chapter,.story-art,.craft-art,.text-link');
    gsap.fromTo(targets,{y:38,autoAlpha:0},{y:0,autoAlpha:1,stagger:.055,duration:.7,ease:'power2.out',scrollTrigger:{trigger:section,start:'top 76%',once:true}});
   });
   const cards=gsap.utils.toArray<HTMLElement>('.product-rail .product-card');
   gsap.fromTo(cards,{x:90,autoAlpha:0},{x:0,autoAlpha:1,stagger:.12,duration:.7,ease:'power3.out',scrollTrigger:{trigger:'.collection-strip',start:'top 70%',once:true}});
   if(window.innerWidth>820){
    const rail=document.querySelector<HTMLElement>('.product-rail');
    if(rail){
     gsap.to(rail,{x:()=>-(rail.scrollWidth-window.innerWidth+180),ease:'none',scrollTrigger:{trigger:'.collection-strip',start:'top top',end:()=>'+='+Math.max(900,rail.scrollWidth*.9),pin:true,scrub:1.1,invalidateOnRefresh:true}});
    }
    gsap.to('.craft-art',{scale:1.08,rotation:-1.5,ease:'none',scrollTrigger:{trigger:'.craft',start:'top bottom',end:'bottom top',scrub:1}});
   }
   ScrollTrigger.refresh();
  },root);
  return()=>ctx.revert();
 },[]);
 return <div ref={root} aria-hidden="true" className="motion-root"/>;
}