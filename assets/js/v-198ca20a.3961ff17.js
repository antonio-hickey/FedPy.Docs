"use strict";(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[599],{9960:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-198ca20a",path:"/Payment_Systems/03-currency.html",title:"Currency",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"About",slug:"about",children:[]},{level:2,title:"in_circulation()",slug:"in-circulation",children:[{level:3,title:"About",slug:"about-1",children:[]},{level:3,title:"Example use",slug:"example-use",children:[]}]},{level:2,title:"printing_cost()",slug:"printing-cost",children:[{level:3,title:"About",slug:"about-2",children:[]},{level:3,title:"Example use",slug:"example-use-1",children:[]}]},{level:2,title:"operation_expenses()",slug:"operation-expenses",children:[{level:3,title:"About",slug:"about-3",children:[]},{level:3,title:"Example use",slug:"example-use-2",children:[]}]},{level:2,title:"payments()",slug:"payments",children:[{level:3,title:"About",slug:"about-4",children:[]},{level:3,title:"Example use",slug:"example-use-3",children:[]}]},{level:2,title:"receipts()",slug:"receipts",children:[{level:3,title:"About",slug:"about-5",children:[]},{level:3,title:"Example use",slug:"example-use-4",children:[]}]}],filePathRelative:"Payment_Systems/03-currency.md",git:{updatedTime:1636180046e3,contributors:[{name:"Antonio Hickey",email:"antoniohickey99@gmail.com",commits:1}]}}},7119:(n,a,s)=>{s.r(a),s.d(a,{default:()=>p});const e=(0,s(6252).uE)('<h1 id="currency" tabindex="-1"><a class="header-anchor" href="#currency" aria-hidden="true">#</a> Currency</h1><h2 id="about" tabindex="-1"><a class="header-anchor" href="#about" aria-hidden="true">#</a> About</h2><p>The Federal Reserve Board is the issuing authority for Federal Reserve notes and ensures that there is enough cash in circulation to meet the public&#39;s demand. The Federal Reserve Banks distribute, receive, and process Federal Reserve notes and distribute and receive through depository institutions.</p><p>FedPy allows you to quickly and seamlessly pull data on their Currency Service.</p><h2 id="in-circulation" tabindex="-1"><a class="header-anchor" href="#in-circulation" aria-hidden="true">#</a> in_circulation()</h2><h3 id="about-1" tabindex="-1"><a class="header-anchor" href="#about-1" aria-hidden="true">#</a> About</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>FedPy<span class="token punctuation">.</span>Currency<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>in_circulation<span class="token punctuation">(</span>_type<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Returns a <code>DataFrame</code> of annual currency in circulation.</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters:</h4><ul><li><code>_type</code> : string, by default is set to &quot;val&quot; if nothing is passed. <ul><li>Valid _type&#39;s: <ul><li>&quot;val&quot;, &quot;Val&quot;, &quot;value&quot;, or &quot;Value&quot; : Value of currency in circulation.</li><li>&quot;vol&quot;, &quot;Vol&quot;, &quot;volume&quot;, or &quot;Volume&quot; : Volume of currency in circulation.</li></ul></li></ul></li></ul><h3 id="example-use" tabindex="-1"><a class="header-anchor" href="#example-use" aria-hidden="true">#</a> Example use</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> FedPy\n\n\nval_in_circulation <span class="token operator">=</span> FedPy<span class="token punctuation">.</span>Currency<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>in_circulation<span class="token punctuation">(</span><span class="token string">&quot;val&quot;</span><span class="token punctuation">)</span>\nvol_in_circulation <span class="token operator">=</span> FedPy<span class="token punctuation">.</span>Currency<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>in_circulation<span class="token punctuation">(</span><span class="token string">&quot;vol&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>val_in_circulation<span class="token punctuation">,</span> vol_in_circulation<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output:</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>val_in_circulation:\nYear            $1  ... $500 to $10,000           Total\n2020  $13100000000  ...      $300000000  $2040700000000\n2019  $12700000000  ...      $300000000  $1759800000000\n2018  $12400000000  ...      $300000000  $1671900000000\n2017  $12100000000  ...      $300000000  $1571100000000\n2016  $11700000000  ...      $300000000  $1463400000000\n2015  $11400000000  ...      $300000000  $1380000000000\n...   ...           ...      ...         ...\n2000   $7700000000  ...      $300000000   $563900000000\n\nvol_in_circulation:\nYear    $1  ... $500 to $10,000 Total\n2020  13.1  ...         0.0004  50.3\n2019  12.7  ...         0.0004  44.9\n2018  12.4  ...         0.0004  43.4\n2017  12.1  ...         0.0004  41.6\n2016  11.7  ...         0.0004  39.8\n2015  11.4  ...         0.0005  38.1\n...   ...   ...         ...     ...\n2001   7.8  ...         0.0005  22.1\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="printing-cost" tabindex="-1"><a class="header-anchor" href="#printing-cost" aria-hidden="true">#</a> printing_cost()</h2><h3 id="about-2" tabindex="-1"><a class="header-anchor" href="#about-2" aria-hidden="true">#</a> About</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>FedPy<span class="token punctuation">.</span>Currency<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>printing_cost<span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Returns a <code>DataFrame</code> of the annual cost of printing currency, and takes in no parameters.</p><h3 id="example-use-1" tabindex="-1"><a class="header-anchor" href="#example-use-1" aria-hidden="true">#</a> Example use</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> FedPy\n\nprinting_cost <span class="token operator">=</span> FedPy<span class="token punctuation">.</span>Currency<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>printing_cost<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>printing_cost<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="output-1" tabindex="-1"><a class="header-anchor" href="#output-1" aria-hidden="true">#</a> Output:</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Year     Amount\n2020  778000000\n2019  641000000\n2018  800000000\n2017  674000000\n2016  660000000\n2015  689000000\n2014  707000000\n2013  717000000\n...   ...\n2000  456000000\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="operation-expenses" tabindex="-1"><a class="header-anchor" href="#operation-expenses" aria-hidden="true">#</a> operation_expenses()</h2><h3 id="about-3" tabindex="-1"><a class="header-anchor" href="#about-3" aria-hidden="true">#</a> About</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>FedPy<span class="token punctuation">.</span>Currency<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>operation_expenses<span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Returns a <code>DataFrame</code> of cash operation expenses, including (processing, paying, recieving, verification, destruction, transportation, and non-standerd packaging), and takes in no parameters.</p><h3 id="example-use-2" tabindex="-1"><a class="header-anchor" href="#example-use-2" aria-hidden="true">#</a> Example use</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> FedPy\n\nop_expense <span class="token operator">=</span> FedPy<span class="token punctuation">.</span>Currency<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>operation_expenses<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>op_expense<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="output-2" tabindex="-1"><a class="header-anchor" href="#output-2" aria-hidden="true">#</a> Output:</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Year     Amount\n2020  751000000\n2019  700000000\n2018  680000000\n2017  628000000\n2016  593000000\n2015  578000000\n...   ...\n2000  329000000\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="payments" tabindex="-1"><a class="header-anchor" href="#payments" aria-hidden="true">#</a> payments()</h2><h3 id="about-4" tabindex="-1"><a class="header-anchor" href="#about-4" aria-hidden="true">#</a> About</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>FedPy<span class="token punctuation">.</span>Currency<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>payments<span class="token punctuation">(</span>_type<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Returns a <code>DataFrame</code> of payments of currency in either value or volume format.</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters:</h4><ul><li><code>_type</code> : string of the format type, by default is &quot;val&quot; if nothing is passed. <ul><li>Valid _type&#39;s : <ul><li>&quot;val&quot;, &quot;Val&quot;, &quot;Value&quot;, &quot;value&quot; : Value format.</li><li>&quot;vol&quot;, &quot;Vol&quot;, &quot;Volume&quot;, &quot;volume&quot; : Volume format.</li></ul></li></ul></li></ul><h3 id="example-use-3" tabindex="-1"><a class="header-anchor" href="#example-use-3" aria-hidden="true">#</a> Example use</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> FedPy\n\npayments_val <span class="token operator">=</span> FedPy<span class="token punctuation">.</span>Currency<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>payments<span class="token punctuation">(</span><span class="token string">&quot;val&quot;</span><span class="token punctuation">)</span>\npayments_vol <span class="token operator">=</span> FedPy<span class="token punctuation">.</span>Currency<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>payments<span class="token punctuation">(</span><span class="token string">&quot;vol&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>payments_val<span class="token punctuation">,</span> payments_vol<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="output-3" tabindex="-1"><a class="header-anchor" href="#output-3" aria-hidden="true">#</a> Output:</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>payments_val:\nYear            $1          $2  ...           $50           $100          Total\n2020   $7800000000  $100000000  ...  $95900000000  $432800000000  $872800000000\n2019  $10800000000  $200000000  ...  $78900000000  $367700000000  $784100000000\n2018  $11300000000  $200000000  ...  $75400000000  $369200000000  $792600000000\n2017  $11600000000  $200000000  ...  $71900000000  $368800000000  $789700000000\n2016  $11900000000  $200000000  ...  $64500000000  $323800000000  $730000000000\n2015  $12200000000  $200000000  ...  $61000000000  $328600000000  $736000000000\n...   ...           ...         ...  ...           ...            ...\n2000  $11500000000  $100000000  ...  $54100000000  $162500000000  $527300000000\n\npayments_vol:\nYear    $1   $2   $5  $10   $20  $50 $100 Total\n2020   7.8  0.1  2.5  1.5  15.4  1.9  4.3  33.5\n2019  10.8  0.1  3.2  1.7  14.7  1.6  3.7  35.7\n2018  11.3  0.1  3.3  1.7  15.1  1.5  3.7  36.8\n2017  11.6  0.1  3.3  1.7  15.2  1.4  3.7  37.0\n2016  11.9  0.1  3.2  1.7  14.8  1.3  3.2  36.3\n2015  12.2  0.1  3.2  1.9  15.0  1.2  3.3  36.8\n...   ...   ...  ...  ...  ...   ...  ...  ...\n2000  11.5  0.0  2.4  2.3  13.2  1.1  1.6  32.1\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="receipts" tabindex="-1"><a class="header-anchor" href="#receipts" aria-hidden="true">#</a> receipts()</h2><p><strong>TODO</strong> : spelt receipts wrong MUST fix you retard.</p><h3 id="about-5" tabindex="-1"><a class="header-anchor" href="#about-5" aria-hidden="true">#</a> About</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>FedPy<span class="token punctuation">.</span>Currency<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>reciepts<span class="token punctuation">(</span>_type<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Returns a <code>DataFrame</code> of receipts of currency in either value or volume format.</p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters:</h4><ul><li><code>_type</code> : string of the format type, by default is &quot;val&quot; if nothing is passed. <ul><li>Valid _type&#39;s : <ul><li>&quot;val&quot;, &quot;Val&quot;, &quot;Value&quot;, &quot;value&quot; : Value format.</li><li>&quot;vol&quot;, &quot;Vol&quot;, &quot;Volume&quot;, &quot;volume&quot; : Volume format.</li></ul></li></ul></li></ul><h3 id="example-use-4" tabindex="-1"><a class="header-anchor" href="#example-use-4" aria-hidden="true">#</a> Example use</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> FedPy\n\nreceipts_val <span class="token operator">=</span> FedPy<span class="token punctuation">.</span>Currency<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>reciepts<span class="token punctuation">(</span><span class="token string">&quot;val&quot;</span><span class="token punctuation">)</span>\nreceipts_vol <span class="token operator">=</span> FedPy<span class="token punctuation">.</span>Currency<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>reciepts<span class="token punctuation">(</span><span class="token string">&quot;vol&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>receipts_val<span class="token punctuation">,</span> receipts_vol<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="output-4" tabindex="-1"><a class="header-anchor" href="#output-4" aria-hidden="true">#</a> Output:</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>receipts_val:\nYear            $1          $2  ...           $50           $100          Total\n2020   $7400000000  $100000000  ...  $74100000000  $220800000000  $592100000000\n2019  $10500000000  $100000000  ...  $75800000000  $286600000000  $696000000000\n2018  $11000000000  $100000000  ...  $72600000000  $277500000000  $692000000000\n2017  $11300000000  $100000000  ...  $69200000000  $272400000000  $682600000000\n2016  $11600000000  $100000000  ...  $60900000000  $251200000000  $646600000000\n2015  $11800000000  $100000000  ...  $58300000000  $260900000000  $655400000000\n...   ...           ...         ...  ...           ...            ...\n2000  $11400000000  $000000000  ...  $63700000000  $170700000000  $564300000000\n\nreceipts_vol:\nYear    $1   $2   $5  $10   $20  $50 $100 Total\n2020   7.4  0.0  2.4  1.4  13.2  1.5  2.2  28.1\n2019  10.5  0.0  3.1  1.6  14.6  1.5  2.9  34.2\n2018  11.0  0.0  3.2  1.7  14.9  1.5  2.8  35.0\n2017  11.3  0.0  3.2  1.7  14.8  1.4  2.7  35.2\n2016  11.6  0.0  3.1  1.7  14.5  1.2  2.5  34.7\n2015  11.8  0.0  3.0  1.9  14.5  1.2  2.6  35.1\n...   ...   ...  ...  ...  ...   ...  ...  ...\n2000  11.4  0.0  2.4  2.5  14.1  1.3  1.7  33.3\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>',51),t={},p=(0,s(3744).Z)(t,[["render",function(n,a){return e}]])},3744:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,e]of a)s[n]=e;return s}}}]);