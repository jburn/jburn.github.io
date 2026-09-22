---
title: OTIT
summary: A small, typed, dependency-free Python library for navigating, inspecting, and modifying heterogeneous nested Python objects.
image: /assets/projects/otit/thumbnail.png
technologies:
  - Python
  - GitHub Actions
  - PyPI
github: https://github.com/jburn/otit
order: 3
---

## Overview

OTIT is a small, typed, dependency-free Python library for navigating, inspecting, and modifying heterogeneous nested Python objects.

It provides a consistent path-based API for working with mappings, sequences, object attributes, and structures containing a mixture of all three.

Instead of writing separate traversal logic for dictionaries, lists, tuples, and custom objects, OTIT represents a location as a path and handles the underlying access mechanism automatically.

```python
path = ("users", 0, "profile", "name")
```

A path like this can cross several different kinds of Python objects while exposing them through the same interface.

OTIT is published as a Python package on PyPI. 

## How it works

OTIT treats traversal as a sequence of operations over a path.

Each component of the path describes the next value to access. Depending on the current object, OTIT resolves that component using the appropriate access strategy—for example, mapping lookup, sequence indexing, or attribute access.

This allows heterogeneous structures to be traversed without the caller needing to know how every intermediate value is represented.

Conceptually, a structure such as:

```python
{
    "users": [
        User(
            profile={
                "name": "Alice"
            }
        )
    ]
}
```

can be navigated using a single path:

```python
("users", 0, "profile", "name")
```

The same path representation can then be used by the library's inspection and mutation operations.

Keeping traversal separate from the structure being traversed makes the API useful for objects that don't fit neatly into a purely dictionary-based or object-based model.

## Design decisions

The main design decision was to avoid requiring callers to distinguish between mapping keys, sequence indices, and object attributes themselves. A path describes *where* a value is located, while OTIT is responsible for determining *how* each step should be performed. This keeps calling code small and makes traversal logic reusable across differently shaped data.

OTIT is designed as a typed library without any third-party runtime dependencies.

I wanted the package to remain focused rather than grow into a general-purpose object manipulation framework. Keeping the public API small makes the behavior easier to understand, document, test, and evolve without unnecessarily expanding the compatibility surface of the library.

## What I learned

The project also gave me more experience designing abstractions around Python's dynamic object model. Supporting mappings, sequences, attributes, and combinations of them through one interface requires clear definitions for how traversal behaves instead of relying on assumptions about the shape of the input.

Publishing OTIT gave me practical experience with the complete lifecycle of a Python package: structuring the library, defining its public API, testing it, packaging it, documenting it, and distributing releases through PyPI.
