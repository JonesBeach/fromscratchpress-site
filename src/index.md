---
layout: "base.njk"
---

<h1 class="index-title">{{ site.title }}</h1>

{{ site.description }}

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
