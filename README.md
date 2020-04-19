```
  (@>  
 {||
--""--
  ||
  ||

PARROT JS vs sed
- a Bash syntax highlighter for JavaScript
(and similar languages)
```
![screenshot1.png](screenshot1.png)
(From my machine, POP_OS!)

Often we use JavaScript or similar languages to solve small problems, too small problems. This is sometimes a mistake and this is an example. Compare my JavaScript solution with my sed solution. The sed/Bash-solution is very simple, but does the job.

Surely, we could make a more advanced syntax highlighter but this is advanced enough. Already with a simplistic solution, we have some quantity code. Is it reasonable to use a language like JavaScript to solve this task, even if scaled it? Is JavaScript the right tool for the job? It depends on the scope, I guess.

We could arge, this is an unrealistic project and that the project should've used a parser or more advanced regular expressions. This is true. But at the same time it's not hard to imagine cases when our scope is small and we still sometimes use JavaScript or Python. Perhaps we shouldn't?

Also, if we make a (un-systematic though) benchmark using the gnu tool time we see a huge difference in performance. The sed-version is, when used on a example-file in the GitHub-repo, close to 5-6 times faster on my machine. However, we should not trust micro-benchmarks. But I guess they communicate… something.

`$ time ./hi-sed example-js-file.js` outputs,
```
real    0m0.008s
user    0m0.006s
sys     0m0.003s
```

while `$ time ./hi-js example-js-file.js` outputs,
```
real    0m0.037s
user    0m0.033s
sys     0m0.008s
```

# JavaScript-version

### Setup

```
npm install
```

### Usage

```
// 1
./hi-js example-js-file.js

// 2
cat example-js-file.js | ./hi-js
```

# sed-version

### Usage

```
# 1
./hi-sed example-js-file.js

# 2
cat example-js-file.js | ./hi-sed
```
