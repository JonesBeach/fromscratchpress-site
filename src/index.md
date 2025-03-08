---
title: "from scratch press"
layout: "page.njk"
---

Essays on neurodivergence, meaningful work, and building a life that fits.

<ul class="essays-list">
  {%- set featured = collections.featuredEssay -%}
  {%- if featured -%}
    <li class="essay-item featured-essay">
      <a href="{{ featured.url }}" class="essay-title">{{ featured.data.title }}</a>
      <p class="essay-description">{{ featured.data.description }}</p>
      <p class="essay-date">{{ featured.date | essayDateFormat }}</p>
    </li>
  {%- endif -%}
  {%- for post in collections.latestEssays -%}
    <li class="essay-item">
      <a href="{{ post.url }}" class="essay-title">{{ post.data.title }}</a>
      <p class="essay-description">{{ post.data.description }}</p>
      <p class="essay-date">{{ post.date | essayDateFormat }}</p>
    </li>
  {%- endfor -%}
</ul>

### [See All](/essays/)
