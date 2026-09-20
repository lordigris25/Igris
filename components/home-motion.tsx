'use client';
import {useLayoutEffect,useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export function HomeMotion(){
 const root=useRef<HTMLDivElement>(null);
 useLayoutEffect(()=>{
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const ctx=gsap.context(()=>{
   gsap.set(['.hero-mark','.hero-kicker','.hero h1 span','.hero h1 em','.hero-tagline','.hero-cta'],{autoAlpha:0,y:35});
   gsap.timeline({defaults:{ease:'power3.out'}})
    .to('.hero-mark',{autoAlpha:1,y:0,duration:.8})
    .to('.hero-kicker',{autoAlpha:1,y:0,duration:.45},'-=.35')
    .to('.hero h1 span',{autoAlpha:1,y:0,duration:.7},'-=.2')
    .to('.hero h1 em',{autoAlpha:1,y:0,duration:.7},'-=.55')
    .to('.hero-tagline',{autoAlpha:1,y:0,duration:.5},'-=.3')
    .to('.hero-cta',{autoAlpha:1,y:0,duration:.5},'-=.2');
   gsap.to('.hero-content',{yPercent:-13,scale:.96,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
   gsap.to('.orbit-one',{rotation:25,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
   gsap.to('.orbit-two',{rotation:-18,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
   gsap.utils.toArray<HTMLElement>('.reveal-section').forEach(section=>{
    gsap.fromTo(section.querySelectorAll('.eyebrow,h2,p,.moment,.craft-object,.story-image,.line-cta'),{autoAlpha:0,y:40},{autoAlpha:1,y:0,stagger:.05,duration:.65,ease:'power2.out',scrollTrigger:{trigger:section,start:'top 78%',once:true}});
   });
   if(innerWidth>820){
    gsap.to('.collection-home .product-rail',{x:()=>-(document.querySelector('.collection-home .product-rail')?.scrollWidth||0)+innerWidth-160,ease:'none',scrollTrigger:{trigger:'.collection-home',start:'top top',end:'+=1800',pin:true,scrub:1}});
   }
   gsap.utils.toArray<HTMLElement>('.wordscape div').forEach((el,i)=>gsap.fromTo(el,{x:i%2?-80:80},{x:0,ease:'none',scrollTrigger:{trigger:'.wordscape',start:'top bottom',end:'bottom top',scrub:1}}));
   ScrollTrigger.refresh();
  },root);
  return()=>ctx.revert();
 },[]);
 return <div ref={root} className="motion-root" aria-hidden="true"/>;
}