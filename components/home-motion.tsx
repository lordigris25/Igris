'use client';
import {useLayoutEffect,useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function HomeMotion(){
 const root=useRef<HTMLDivElement>(null);
 useLayoutEffect(()=>{const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(reduce)return;const ctx=gsap.context(()=>{
  const q=gsap.utils.selector(document);
  gsap.set(['.hero-logo','.hero-title','.tagline','.round-link','.hero-orbit'],{autoAlpha:0});
  gsap.timeline({defaults:{ease:'power3.out'}}).to('.hero-logo',{autoAlpha:1,scale:1,duration:1.1}).to('.hero-title',{autoAlpha:1,y:0,duration:.75},'-=.55').to('.tagline',{autoAlpha:1,y:0,duration:.55},'-=.35').to('.round-link',{autoAlpha:1,y:0,duration:.5},'-=.3').to('.hero-orbit',{autoAlpha:1,duration:1},'-=.8');
  gsap.to('.hero-content',{yPercent:-12,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:.6}});
  q('.reveal-section').forEach((section:Element)=>{const targets=section.querySelectorAll('.eyebrow,h2,p,.chapter,.story-art,.craft-art');gsap.from(targets,{y:35,autoAlpha:0,stagger:.08,duration:.7,ease:'power2.out',scrollTrigger:{trigger:section,start:'top 78%',once:true}})});
  const cards=q('.product-rail .product-card');gsap.from(cards,{x:110,autoAlpha:0,stagger:.14,duration:.75,ease:'power3.out',scrollTrigger:{trigger:'.collection-strip',start:'top 70%',once:true}});
  if(window.innerWidth>820){const rail=document.querySelector<HTMLElement>('.product-rail');if(rail){gsap.to(rail,{x:()=>-(rail.scrollWidth-window.innerWidth+160),ease:'none',scrollTrigger:{trigger:'.collection-strip',start:'top top',end:()=>`+=${Math.max(900,rail.scrollWidth)}`,pin:true,scrub:1,invalidateOnRefresh:true}})}gsap.to('.craft-art',{scale:1.08,ease:'none',scrollTrigger:{trigger:'.craft',start:'top bottom',end:'bottom top',scrub:1}});}
  ScrollTrigger.refresh();
 },root);return()=>ctx.revert()},[]);
 return <div ref={root} aria-hidden="true" className="motion-root"/>;
}
