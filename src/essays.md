---
title: "essays"
layout: "page.njk"
---

<ul class="essays-list">
  {%- for post in collections.essays | reverse -%}
    {%- include "essay-card.njk" -%}
  {%- endfor -%}
</ul>
