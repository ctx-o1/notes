---
title: Some Reward Hacking Examples
---

A growing collection of reward hacking examples I come across. 


[Quo vadis, LLM benchmarks?](https://florianbrand.com/posts/benches-2026)

> For `sha256_hashing`, models are asked to optimize a SHA-256 hash function. However, the reference already uses Python's `cryptography`, which uses `OpenSSL` under the hood, so a real speedup is basically impossible. I told Codex repeatedly to optimize it, no matter what. It then came to the genius solution to disable `OPENSSL_armcap` with environment variables at import time, which means the CPU crypto capabilities are disabled, which makes OpenSSL (and thus the reference implementation) slower. Codex's own solution then used Apple's `libcommonCrypto`, which obviously isn't affected by the environment variable, resulting in a >5x speedup. Codex did call it out before and after it implemented it, so that was easy to catch!


---

[When AI Starts Writing Systems Code \| Core Automation](https://www.coreauto.com/blog/when-ai-starts-writing-systems-code)  

> Some hacks are straight up superhuman: an entry that was #1 for a few minutes on a NVFP4 group gemm kernel. 
> Under correctness testing the AI was giving us a correct kernel but under performance testing it gave us a wrong but fast kernel!

*Further reading* [Anatomy of a Reward Hack: A Real Story from the Latest GPU Mode NVFP4 Competition](https://www.gpumode.com/news/reward-hacking-nvfp4)
