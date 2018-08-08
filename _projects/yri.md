---
title:  "Youth Radio Interactive"
date:   2015-01-02 00:00:00 -0700
tags: [Present, Front-end, UI + UX]
coverimg: yr.jpg
imgfolder: YR
---
Youth Radio is a non-profit media company dedicated to featuring young voices in media, nationwide. At Youth Radio Interactive, Youth Radio’s Interactive team, I help program and design fun and accessible front end experiences that combine creative concepts and journalism. With Youth Radio’s Design team, we manage an entire pipeline that begins at conceptualization, prototyping, design and ends at the coding.

So far in my 3 years, I’ve worked on a number of projects using various jQuery frameworks including Vue and three.js, I’ve grown my skills through them and have been seeing myself improving ever since. One of my projects that I’m most proud of is a reboot of the division’s portfolio.

There were a number of attempts I've made redesigning Interactive's portfolio over the years. There was only a point last year where I created what I thought were interesting ideas. I started by surveying our building on what could improve the current portfolio, the main responses I got were:

1.		<i>Not enough information about what things are before clicking</i>
2.		<i>Nothing showing what kind of skill we have as a team</i>
3.		<i>"What is Youth Radio Interactive?"</i>

This made the key goals easy to be realized, which were:

1.		<i>Build a quick way to not only introduce ourselves, but also our projects and those who worked on them, giving readers a quick lowdown on us</i>
2.		<i>Build a straight forward user experience along with a minimalist and legible design</i>
3.		<i>Make it sustainable for the future (both in code and content)</i>


<b>People need more than a tidbit</b>, it was easy to give them a header of info and a bunch of projects but I came to believe that it was the moderate information that people sought that made them interested in what they saw. It would be worth giving the website an extra click to give them something instead of leaving them in the dark.

<hr/>
Taking these thoughts in, I built three basic wireframes. First one being a random warm up, second one was based on the idea of a timeline, and third being a SPA concept. We didn’t like the second one, so we went towards the third one, which I believed was a step forward for our needs. Not only did it achieve the goal in giving a proper intro, we introduce our projects, and instead of linking directly to them, we give them an overview page of what it is, which  youth worked on it, and where it is. To top it all off, it was built with sustainability in mind by having a scrollable grid that would only grow as we update our projects.

I was originally planning to rely on JSON objects for project information and building a loop that asks how many projects make up the project list, but I was introduced to a static blog framework called Jekyll by my friend and coworker Radames. Jekyll not only introduced me into building content management systems, but Jekyll also taught me how to think about data models in Markup and JSON better.

Radames helped convert the first static build to Jekyll, and from there, development begun.

Disappointingly, our final product wasn’t considered, not out of disagreement, but because Youth Radio had been planning a company-wide rebrand which also had our division in the court, so I figured I toss my work here, especially because it was one of the first projects I self started. I used my conversational skills to asses how people feel about functionality, I used their feedback to convert it to something physical, and my skills in development grew along the way.

<div class="title-2">Live view & deployment</div>


This is a Jekyll project deployed directly into Github Pages, it'd be easier to view [the live demo.](https://shagia.github.io/YRI-portfolio-draft/) 

In order to view this project locally on macOS, you'll require:

* Ruby
* Ruby Gems
* Jekyll
* GCC and Make, if you don't have them already

For other machines, refer to [Jekyll's install process.](https://jekyllrb.com/docs/installation/)

After installing, clone the archive 
`git clone https://github.com/shagia/YRI-portfolio-draft.git`
or view via the Github App, `cd` into the folder, and either:

`jekyll serve` or `bundle exec jekyll serve`