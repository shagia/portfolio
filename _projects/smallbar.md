---
title:  "smallBar"
date:   2018-05-22 00:00:00 -0700
tags: [Personal, Design, UI, Front-end]
coverimg: smallbar.jpg
imgfolder: SMB
---
smallBar is a minimalist Übersicht widget designed to display a set of information without focus obstruction.

Übersicht is a macOS widget system revolving around HTML5, Javascript and CoffeeScript. Quick, minimal amounts of information about the time, my system, the weather, etc, is something I incredibly appreciate, but most widgets I found seemed to over do it, either visually, i.e by taking a large margin of the screen or being placed somewhere unconventional, or just providing <i>too</i> much information, so I set out to make a widget that’s both visually appealing and useful.

I decided that giving a small fraction of space to the bottom of the screen and sitting the widget on the bottom right would be the least distracting, it’s under the focus points of your windows and the content on the windows themselves aren’t critically broken because of the space given. Limiting the amount of items in the widget to only three (Battery, Time, Weather) gives basic, but functional information that I can quickly gloss at when the thought comes around instead of having it forced at me.

I don’t think anything needs to be ‘fixed’ with just having a menubar and it’s clock, but I appreciate the ability to have it hidden and having a low profile replacement for it’s clock without the need of gesturing the menu to pop down. Plus I think it looks cool!  

<div class="title-2">Installation</div>


Homebrew and Übersicht are required for this widget, both are free for all.

First, install Übersicht:
<code>brew cask install ubersicht</code>

Then, clone the GitHub repo, and move it to Ubersicht’s widgets folder:
<code> git clone https://github.com/shagia/smallbar.git
mv home/ ~/Library/Application\ Support/Ubersicht/widgets/</code>