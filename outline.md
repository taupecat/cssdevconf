## Introduction

• Three things in #webdev I love:
    • WordPress
    • Responsive Web Design
    • Sass

This talk is about the second two things.

BUT! everything here can be applied to WordPress (or Drupal, or Sitecore, or static site generators). It doesn't matter what platform you're using as long as you can use Sass in your front end authoring process.

## Prologue

* But first, a story:
	* rwjf.org (Oct-Dec 2011): my first major responsive project
	* 2 front end developers, no CSS preprocessors (git hook for concatenating separate CSS files)
    * _Hours_ spent calculating percentages, then copying and pasting those results into our CSS
	* Finished file is **80kB**

    * nscorp.com
    * Sass + Compass, CodeKit

* **Why** should you use Sass for RWD?
	* Partials allow for better code organization and less VCS conflicts
	* Provide function, mixin, and media query bubbling functionality
    * Libraries for rapid prototyping and development

## Part I: RWD Basics

    * Fluid layouts (a.k.a. flexible grids)
    * Flexible images & media
    * Media Queries (a.k.a. breakpoints)

Sass has tools that will help us with all of these.

## Part II: Sass Basics for RWD

• Variables
    * Store media query settings

• functions
    * Responsive formula: target / context = result
    • percentage()
    * Create your own

• Mixins
	* Benefits of creating your own custom mixins

• Media query bubbling
    * Basic example
    * Example using variables
    * Chris Coyier's "baby-bear, mama-bear, papa-bear" method

    * Not JUST for screen widths
    • downside: repeating media queries (gzip)

• @extend + %placeholder
    * Great for non-semantic classes
    * BUT! doesn't play friendly with media queries

## Part III: Working with Libraries

• sass-enabled grid system
• breakpoint + (susy|singularity)
• flint?

## Part IV: Suggested Sass Structure

• util directory

## What Sass *isn't* good for

• Vendor prefixing (Autoprefixer)

## How to fall back to older browsers

* Modernizr + mixins

## research

## Edits

### A few Sass basics

* Variables
* Functions
* Mixins

