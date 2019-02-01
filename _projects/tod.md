---
title:  "THRIVE OR DIE"
date:   2018-09-02 00:00:00 -0700
tags: [Front-end]
coverimg: TOD.jpg
imgfolder: TOD
---
THRIVE OR DIE is an electronic music collective formed by my friend FOXSKY. He had invited me along the ride to produce some cool music, and to kick it off, we planned a Bootleg pack for Christmas.

One of the ideas was a website, scrolling marquee on the far left, social media links, and details for letting you listen to the music, including a visualizer! Unfortunately we had maybe _a couple of weeks_ to do things, this wasn't a problem though.

Ricco Harver, friend, designer and also a THRIVE OR DIE signee, tossed a mock up real quick. Sent me many SVGs for the site, and so began development. Overall, the site is a mix of vanilla javascript and some cool CSS. The visualizer is powered by p5.FFT, which grabs analysis of any audio running through it's own audioContext. We draw the background spectrum based off of the bands p5.FFT sends to an array by mapping the amount of bands to a variable divided by 2 to blow up the size of the spectrum and to cut off the bands that isn't as heavy in EDM music, and by also drawing the angle of the drawn spectrum into a 360 degree angle. We then map the p5 bands variable and the drawn angle into a x and y coordinate, and draw a vertex using both x and y.

There's more work to be done on the site, so this'll be updating overtime! <a href="http://todmg.club" target="_new">Check it out!</a> Refer to my <a href="">Github</a> for the source code.