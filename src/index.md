---
title: "from scratch press"
layout: "page.njk"
---

Essays on neurodivergence, meaningful work, and building a life that fits.

<ul class="essays-list">
  {%- for post in collections.latestEssays -%}
    <li class="essay-item">
      <a href="{{ post.url }}" class="essay-title">{{ post.data.title }}</a>
      <p class="essay-description">{{ post.data.description }}</p>
      <p class="essay-date">{{ post.date | essayDateFormat }}</p>
    </li>
  {%- endfor -%}
</ul>

### [See All](/essays/)
