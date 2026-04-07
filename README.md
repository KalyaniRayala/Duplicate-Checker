# Duplicate Reference Checker

A simple web prototype to detect duplicate references using normalization.

##  Features

* Accepts DOI / URL / ISBN
* Normalizes input (removes https, trims spaces)
* Detects duplicates
* Stores references using browser localStorage

##  Tech Stack

* HTML
* JavaScript
* LocalStorage

##  How to Use

1. Enter a reference (DOI / URL)
2. Click "Check"
3. If already exists → shows duplicate
4. Otherwise → adds new reference

##  Live Demo

(https://vercel.com/kalyanirayalas-projects/duplicate-checker)

##  GitHub Repo

(https://github.com/KalyaniRayala/Duplicate-Checker)

##  Future Improvements

* Cross-type matching (DOI vs URL)
* Better UI
* API integration (CrossRef)

---

Built as part of Outreachy contribution
