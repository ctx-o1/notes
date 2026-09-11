---
title: re:ctx
---




### Read log


[Understanding Neural ODEs - Jonty Sinai](https://jontysinai.github.io/jekyll/update/2019/01/18/understanding-neural-odes.html)

> Euler’s method is a discretisation of the continuous relationship between the input and output domains of the data. 
> Neural networks are also discretisations of this continuous relationship, only the discretisation is **through hidden states in a latent space**.

Hidden state updates with residual connections $h_{t+1} = h_t + f(h_t, \theta_t)$ can be viewed as *Euler discretization of a continuous transformation*. This is the intuition behind Neural ODEs.
Neural ODEs parameterize the hidden states using an ordinary differential equation.
This gives us *Continuous Hidden States*.


Honestly a cool idea. I will write a more detailed note on this after reading the paper.

[Scaling Laws, Carefully | Lil'Log](https://lilianweng.github.io/posts/2026-06-24-scaling-laws/)


Kaplan and Chinchilla both assume data-infinite regimes, i.e., "effectively _unlimited unique data_, no repetition, and no multi-epoch training".
[Hernandez et al. (2022)](https://arxiv.org/abs/2205.10487), [Muennighoff et al. (2023)](https://arxiv.org/abs/2305.16264), and, recently, [Lovelace et al. (2026)](https://arxiv.org/abs/2605.01640) model scaling-law experiments for finite data with real-world constraints.

I will write a more detailed note on current hypotheses about why scaling follows a power law later.

[Quo vadis, LLM benchmarks?](https://florianbrand.com/posts/benches-2026)

A good benchmark is fair to the models. Benchmarks should elicit models' capabilities to the fullest for evaluation. Similar concerns appear in Noam Brown's [article](https://x.com/polynoamial/status/2064210146558136827) on test-time scaling compute.


[When AI Starts Writing Systems Code \| Core Automation](https://www.coreauto.com/blog/when-ai-starts-writing-systems-code)

Models can write [competitive](https://x.com/marksaroufim/status/2009497284418130202?s=20) kernels now. But reward hacking is a bigger problem now than one could imagine. Some really good examples of reward hacking.

(It's definitely not a kernel-writing-specific problem, though. (?) Models are obviously reward hacking in the wild; it's just not getting the same scrutiny.)


Hints at what [Core Automation](https://www.coreauto.com/) is doing. Some inspiration from adversarial training, although there is a *clarification* at the end that they're still using transformers.

[The Second Half - Shunyu Yao - 姚顺雨](https://ysymyth.github.io/The-Second-Half/)


Why didn't RL work before? Why does RL work now? ***Priors***.
Scaling language pre-training gave us powerful priors. Yao mentions how this may seem counterintuitive to a classic RL researcher from even just a few years ago. (The whole *miracle* was empirical anyway.)

**Language reasoning as actions**

AI's first half involved searching for novel methods to hill-climb harder and harder benchmarks. Now the "recipe" is in place and is scaling well *so far*.
But "*If novel methods are no longer needed and harder benchmarks will just get solved increasingly soon, what should we do?*"

> The second half of AI will shift focus from solving problems to defining problems. In this new era, evaluation becomes more important than training.


[Scaling Laws, Honestly | Diogo Almeida](https://x.com/CompleteSkeptic/status/2073442518117884197)

Kaplan et al. trained all models on a fixed amount of data (~130B tokens) and used a learning-rate schedule that zeroes out. The former caused big models not to get enough data, and the latter caused models not to train enough.

[2406.12907](https://arxiv.org/abs/2406.12907), which tries to reconcile the difference in results between two scaling-law papers, is also inaccurate.


Labs' equity vortex drying academia, closed research and not acknowledging wrong results... is a sad state of affairs.

[LSA LongCat Sparse Attention - arjunkocher](https://www.k-a.in/LSA.html)

The indexer becomes the bottleneck in sparse attention; Meituan LSA focuses on this bottleneck and introduces three **orthogonal** optimizations to the indexer.


[A brief history of distillation in AI | Sergio Paniego](https://x.com/SergioPaniego/status/2073066275819991472?s=20)

TL;DR Distillation gives a better training signal than hard labels.
> ... line between distillation, supervised fine-tuning, reinforcement learning and synthetic data is getting blurry.


---


<script src="./static/ink-shader.js"></script>
