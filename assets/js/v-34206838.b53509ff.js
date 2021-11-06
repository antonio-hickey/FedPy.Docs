"use strict";(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[866],{4251:(a,n,e)=>{e.r(n),e.d(n,{data:()=>s});const s={key:"v-34206838",path:"/SOMA/02-summary.html",title:"summary()",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"About",slug:"about",children:[]},{level:2,title:"Example use",slug:"example-use",children:[]}],filePathRelative:"SOMA/02-summary.md",git:{updatedTime:1636180046e3,contributors:[{name:"Antonio Hickey",email:"antoniohickey99@gmail.com",commits:1}]}}},7467:(a,n,e)=>{e.r(n),e.d(n,{default:()=>p});const s=(0,e(6252).uE)('<h1 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> summary()</h1><h2 id="about" tabindex="-1"><a class="header-anchor" href="#about" aria-hidden="true">#</a> About</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>FedPy<span class="token punctuation">.</span>SOMA<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>summary<span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>This command takes no parameters, and is for aggregating the value of each type of security held in the SOMA portfolio. Returning a <code>DataFrame</code> organized by <code>asOfDate</code>, <code>security type</code>, and <code>total</code>.</p><h2 id="example-use" tabindex="-1"><a class="header-anchor" href="#example-use" aria-hidden="true">#</a> Example use</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> FedPy\n\nSOMA_summery <span class="token operator">=</span> FedPy<span class="token punctuation">.</span>SOMA<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>summary<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>SOMA_summery<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output:</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>     asOfDate               mbs  ...    agencies             total\n0  2021-11-03  2518432273010.10  ...  2347000000  7996833535330.90\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',8),t={},p=(0,e(3744).Z)(t,[["render",function(a,n){return s}]])},3744:(a,n)=>{n.Z=(a,n)=>{const e=a.__vccOpts||a;for(const[a,s]of n)e[a]=s;return e}}}]);