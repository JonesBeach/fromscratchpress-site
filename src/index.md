---
layout: "base.njk"
---

<h1 class="index-title">{{ site.title }}</h1>

{{ site.description }}

<p><strong>Currently</strong>: <i><a href="https://fromscratchpress.substack.com/p/the-half-pint-pilgrimage">The Half Pint Pilgrimage</a></i>

<ul class="essays-list">
  {%- set featuredEssay = collections.featuredEssay -%}
  {%- if featuredEssay -%}
    {%- set post = featuredEssay -%}
    {%- set featured = true -%}
    {%- include "essay-card.njk" -%}
    {%- set featured = false -%}
  {%- endif -%}
</ul>

## Latest Essays
<ul class="essays-list">
  {%- for post in collections.latestEssays -%}
    {%- include "essay-card.njk" -%}
  {%- endfor -%}
</ul>

### [See All](/essays/)
