"use strict";(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[84],{504:(n,e,a)=>{a.r(e),a.d(e,{data:()=>s});const s={key:"v-4856b93b",path:"/Payment_Systems/04-FedWire.html",title:"FedWire",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"About",slug:"about",children:[]},{level:2,title:"funds()",slug:"funds",children:[{level:3,title:"About",slug:"about-1",children:[]},{level:3,title:"Example use",slug:"example-use",children:[]}]},{level:2,title:"securities()",slug:"securities",children:[{level:3,title:"About",slug:"about-2",children:[]},{level:3,title:"Example use",slug:"example-use-1",children:[]}]}],filePathRelative:"Payment_Systems/04-FedWire.md",git:{updatedTime:1636180046e3,contributors:[{name:"Antonio Hickey",email:"antoniohickey99@gmail.com",commits:1}]}}},4568:(n,e,a)=>{a.r(e),a.d(e,{default:()=>i});const s=(0,a(6252).uE)('<h1 id="fedwire" tabindex="-1"><a class="header-anchor" href="#fedwire" aria-hidden="true">#</a> FedWire</h1><h2 id="about" tabindex="-1"><a class="header-anchor" href="#about" aria-hidden="true">#</a> About</h2><p>FedWire is a real-time gross settlement funds transfer system operated by the Federal Reserve that allows financial institutions to electronically transfer funds between its more than 9,289 participants (as of March 19, 2009).</p><p>FedPy allows you to quickly and seamlessly pull FedWire data.</p><h2 id="funds" tabindex="-1"><a class="header-anchor" href="#funds" aria-hidden="true">#</a> funds()</h2><h3 id="about-1" tabindex="-1"><a class="header-anchor" href="#about-1" aria-hidden="true">#</a> About</h3><p>The Fedwire Funds Service is a credit transfer service. Participants originate funds transfers by instructing a Federal Reserve Bank to debit funds from its own account and credit funds to the account of another participant. Participants may originate funds transfers online, by initiating a secure electronic message, or off line, via telephone procedures.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>FedPy<span class="token punctuation">.</span>FedWire<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>funds<span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Returns a <code>DataFrame</code> of FedWire Funds annual data, and takes in no parameters.</p><h3 id="example-use" tabindex="-1"><a class="header-anchor" href="#example-use" aria-hidden="true">#</a> Example use</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> FedPy\n\nfedwire_funds <span class="token operator">=</span> FedPy<span class="token punctuation">.</span>FedWire<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>funds<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>fedwire_funds<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="output-s" tabindex="-1"><a class="header-anchor" href="#output-s" aria-hidden="true">#</a> Output&#39;s:</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Year  ... Average daily value of transfers ($millions)\n2020  ...                                    3,322,067\n2019  ...                                    2,772,252\n2018  ...                                    2,853,433\n2017  ...                                    2,948,593\n2016  ...                                    3,055,624\n2015  ...                                    3,312,026\n...   ...                                    ...\n1987  ...                                      604,974\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="securities" tabindex="-1"><a class="header-anchor" href="#securities" aria-hidden="true">#</a> securities()</h2><h3 id="about-2" tabindex="-1"><a class="header-anchor" href="#about-2" aria-hidden="true">#</a> About</h3><p>The Federal Reserve Banks provide the Fedwire Securities Service, a securities settlement system that enables participants to hold, maintain, and transfer Fedwire-eligible securities.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>FedPy<span class="token punctuation">.</span>FedWire<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>securities<span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Returns a <code>DataFrame</code> of FedWire Securities annual data, and takes in no parameters.</p><h3 id="example-use-1" tabindex="-1"><a class="header-anchor" href="#example-use-1" aria-hidden="true">#</a> Example use</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> FedPy\n\nfedwire_securities <span class="token operator">=</span> FedPy<span class="token punctuation">.</span>FedWire<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>securities<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>fedwire_securities<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="output-s-1" tabindex="-1"><a class="header-anchor" href="#output-s-1" aria-hidden="true">#</a> Output&#39;s:</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Year  ... Securities held in custody at year end ($millions)\n2020  ...                                         96,952,666\n2019  ...                                         88,271,327\n2018  ...                                         85,141,500\n2017  ...                                         76,440,851\n2016  ...                                         74,039,804\n2015  ...                                         70,489,690\n2014  ...                                         67,914,939\n2013  ...                                         65,725,983\n2012  ...                                         63,196,046\n2011  ...                                         60,295,945\n2010  ...                                         56,722,615\n...   ...                                         ...\n1989  ...                                                   \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>',22),t={},i=(0,a(3744).Z)(t,[["render",function(n,e){return s}]])},3744:(n,e)=>{e.Z=(n,e)=>{const a=n.__vccOpts||n;for(const[n,s]of e)a[n]=s;return a}}}]);