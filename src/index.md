---
layout: "base.njk"
---

<h1 class="index-title">{{ site.title }}</h1>

Essays on neurodivergence, meaningful work, and building a life that fits.

<ul class="essays-list">
  {%- set featured = collections.featuredEssay -%}
  {%- if featured -%}
    <li class="essay-item featured-essay">
      <a href="{{ featured.url }}" class="essay-title">{{ featured.data.title }}</a>
      <p class="essay-description">{{ featured.data.description }}</p>
      <div class="essay-date">{{ featured.date | essayDateFormat }}</div>
    </li>
  {%- endif -%}
  {%- for post in collections.latestEssays -%}
    <li class="essay-item">
      <a href="{{ post.url }}" class="essay-title">{{ post.data.title }}</a>
      <p class="essay-description">{{ post.data.description }}</p>
      <div class="essay-date">{{ post.date | essayDateFormat }}</div>
    </li>
  {%- endfor -%}
</ul>

### [See All](/essays/)
