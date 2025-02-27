---
title: "Essays"
layout: "base.njk"
---

<h1>Essays</h1>
<ul>
{%- for post in collections.essays -%}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>
