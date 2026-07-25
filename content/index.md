---
title: re:ctx
---




### Read log


[Understanding Neural ODE's - Jonty Sinai](https://jontysinai.github.io/jekyll/update/2019/01/18/understanding-neural-odes.html)

> Euler’s method is a discretisation of the continuous relationship between the input and output domains of the data. 
> Neural networks are also discretisations of this continuous relationship, only the discretisation is **through hidden states in a latent space**.

Hidden state updates with residual conenctions $h_{t+1} = h_t + f(h_t, \theta_t)$ can be viewed as *Euler discretization of a continuos transformation*. This is the intution behind Neural ODE.   
Neural ODE parameterize the hidden states using an ordinary differential equation.
This gives us *Continuos Hidden States*.


Honestly a cool idea. I will write a more detailed note on this after reading the paper.

[Scaling Laws, Carefully | Lil'Log](https://lilianweng.github.io/posts/2026-06-24-scaling-laws/) *


Kaplan and Chinchilla both assume Data-Infinite regions i.e. "effectively _unlimited unique data_, no repetition, and no multi-epoch training". 
[Hernandez et al. (2022)](https://arxiv.org/abs/2205.10487), [Muennighoff et al. (2023)](https://arxiv.org/abs/2305.16264) and recently [Lovelace et al. (2026)](https://arxiv.org/abs/2605.01640) model scaling law experiments for finite data with real world constraints.

I will write a more detailed note on current 'Why scaling follow a power law?' hypotheses later. 

[Quo vadis, LLM benchmarks?](https://florianbrand.com/posts/benches-2026)

A good benchark is fair to the models. Benchmarks should elicit model's capabilities to fullest for evaluation. Similar concerns to Noam Brown's [article](https://x.com/polynoamial/status/2064210146558136827) for test-time scaling compute. 


[When AI Starts Writing Systems Code \| Core Automation](https://www.coreauto.com/blog/when-ai-starts-writing-systems-code) *

Models can write [competetive](https://x.com/marksaroufim/status/2009497284418130202?s=20) kernels now. But reward hacking is a bigger problem now than one could imagine. Some really good examples of reward hacking. 

(It's definitely not a kernel-writing specific problem though (?) Models are obviously reward hacking in the wild, it's just not getting the same scrutiny.)


Hints at what [Core Automation](https://www.coreauto.com/) is doing. Some inspirations from Adversarial training, although a *clarification* at end that they're still using transformers. 

[The Second Half - Shunyu Yao - 姚顺雨](https://ysymyth.github.io/The-Second-Half/) *


Why RL didn't work before? Why RL works now? ***Priors***.  
Scaling language pre-training gave us powerful priors. Yao mentions how this* may seem counterintutive to a classic RL researcher even just few years ago. (whole *miracle* was empirical anyway)

**language reasoning as actions*

AI's first half involved search for novel methods to hillclimb harder and harder benchmarks. Now The "recipe" is in place and is scaling well *so far*.  
But "*If novel methods are no longer needed and harder benchmarks will just get solved increasingly soon, what should we do?*"

> The second half of AI will shift focus from solving problems to defining problems. In this new era, evaluation becomes more important than training.


[Scaling Laws, Honestly | Diogo Almeida](https://x.com/CompleteSkeptic/status/2073442518117884197)

Kaplan et al. trained all models on the fixed amount of data (~130B tokens) and used a learning rate schedule that zeroes. Former caused big models to not get enough data and later caused models to not train enough.

[2406.12907](https://arxiv.org/abs/2406.12907), which tries to reconcile difference in results of two scaling lawa papers, is also inaccurate.


Labs' equity vortex drying academia, closed research and not acknowledging wrong results... is a sad state of affairs.

[LSA LongCat Sparse Attention - arjunkocher](https://www.k-a.in/LSA.html)

The indexer becomes the bottleneck in sparse attention; Meituan LSA focuses on this bottleneck and introduces three **orthogonal** optimizations to indexer.


[A brief history of distillation in AI | Sergio Paniego](https://x.com/SergioPaniego/status/2073066275819991472?s=20)

TL;DR Distillation gives a better training signal than hard labels.
> ... line between distillation, supervised fine-tuning, reinforcement learning and synthetic data is getting blurry.


---


<script src="./static/ink-shader.js"></script>
