## Introduction

• Three things in #webdev I love:
    • WordPress
    • Responsive Web Design
    • Sass

This talk is about the second two things.

BUT! everything here can be applied to WordPress (or Drupal, or Sitecore, or static site generators). It doesn't matter what platform you're using as long as you can use Sass in your front end authoring process.

* This talk is _not_ an introduction to Sass or RWD. It's intended for developers who know the fundamentals of both and looking for ways to put them together and take the next step into advanced tools.

## Prologue

* But first, a story:
	* rwjf.org (Oct-Dec 2011): my first major responsive project
	* 2 front end developers, no CSS preprocessors (git hook for concatenating separate CSS files)
	* Finished file is **80kB**

* **Why** should you use Sass (or any preprocessor) for RWD?
	* Partials allow for better code organization and less VCS conflicts
	* Provide function, mixin, and media query bubbling functionality

## Part I: Sass Basics for RWD

• Variables

• functions
    * Responsive formula: target / context = result
    • percentage()
    * Create your own

• Mixins
	* Benefits of creating your own custom mixins

• Media query bubbling
    • downside: repeating media queries (gzip)

• @extend

## Part II: Working with Libraries

• breakpoint + susy

• flint?

• sass-enabled grid system

## Part III: Suggested Sass Structure

• util directory

## What Sass *isn't* good for

• Vendor prefixing (Autoprefixer)

## How to fall back to older browsers

* Modernizr + mixins

## research
