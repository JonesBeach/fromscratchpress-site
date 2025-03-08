---
title: "Essays"
layout: "page.njk"
---

<ul class="essays-list">
  {%- for post in collections.essays -%}
    <li class="essay-item">
      <a href="{{ post.url }}" class="essay-title">{{ post.data.title }}</a>
      <p class="essay-description">{{ post.data.description }}</p>
      <div class="essay-date">{{ post.date | essayDateFormat }}</div>
    </li>
  {%- endfor -%}
</ul>
