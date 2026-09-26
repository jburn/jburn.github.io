---
title: kalja
summary: A dependency-free Python library for generating imperfect text to test how software handles typos and messy natural language input.
image: /assets/projects/kalja/thumbnail.png
technologies:
  - Python
  - GitHub Actions
  - PyPI
github: https://github.com/jburn/kalja
order: 4
---

## Overview

Software rarely receives perfectly typed input. Search queries contain typos, words lose spaces, and characters get repeated or left out. kalja is a small Python library for generating these kinds of imperfect inputs when testing search, fuzzy matching, form validation, and text processing.

The library has no third-party runtime dependencies and provides both a Python API and a command-line interface. It includes Finnish and US keyboard layouts, with Finnish as the default.

## How it works

kalja combines several text mutations: replacing characters with nearby keyboard keys, swapping adjacent characters, omitting or repeating characters, and changing spacing, casing, and punctuation. Keyboard substitutions use approximate physical key positions rather than choosing arbitrary replacement characters.

The high-level API generates individual results or batches of variants:

```python
import kalja

queries = kalja.variants(
    "ravintola Oulu",
    count=10,
    intensity=0.6,
    seed=42,
)
```

These variants can then be used as test inputs to check whether a search system still finds the intended result. The intensity setting scales the mutation rates together; it is not the percentage of characters that will change.

For more targeted tests, each mutation is also available separately. A configurable `Mutator` allows callers to set individual rates and supply a different keyboard layout.

## Design decisions

Randomness makes it easy to generate varied inputs, but a failing test needs to be reproducible. Supplying a seed reproduces the same result, while a persistent `Mutator` produces a repeatable sequence of results. Each mutator owns its random-number generator, leaving Python's global random state untouched.

The API separates a simple intensity-based interface from the individual mutation operations. This makes it possible to quickly generate a batch of imperfect inputs or isolate a specific behaviour, such as missing characters or keyboard errors.

The scope is deliberately mechanical: kalja generates useful variations for testing rather than claiming to simulate human typing accurately. Keyboard geometry is approximate, and mutations operate on Python string characters rather than complete Unicode grapheme clusters. Generated variants can also repeat, especially with short inputs or low intensity.

## What I learned

When implementing my Master's thesis, I needed to create a similar solution to mutate natural language input without making it completely incomprehensible. This project was essentially a polished and extended version of the module without byte-level manipulation.
