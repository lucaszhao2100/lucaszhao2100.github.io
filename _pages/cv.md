---
layout: archive
title: "**Curriculum Vitae** 📄"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

🎓 **Education**
======
* M.E. in Remote Sensing Science and Technology, Beijing Normal University, China, 2026 (expected)
* B.E. in Resources Prospecting Engineering, China University of Geosciences (Beijing), China, 2023

🏆 **Honors and Awards**
======
* 2025 Award for Grade Academic Scholarship, Beijing Normal University
* 2023 Award for Grade Academic Scholarship, Beijing Normal University
* 2023 Outstanding Graduate, China University of Geosciences (Beijing)
* 2019-2022 Award for Grade Academic Scholarship, China University of Geosciences (Beijing)
  
📚 **Publications**
======
{% assign all_pubs = site.publications | sort: 'date' | reverse %}

### Journal Articles
{% assign journals = all_pubs | where: "type", "journal" %}
<ol reversed start="{{ journals.size }}" style="margin-left: 0;">
  {% for post in journals %}
    <li style="margin-bottom: 0.8em;">
      {{ post.citation }} 
      {% if post.paperurl %}<a href="{{ post.paperurl }}">[Link]</a>{% endif %}
    </li>
  {% endfor %}
</ol>

### Conference Papers
{% assign conferences = all_pubs | where: "type", "conference" %}
<ol reversed start="{{ conferences.size }}" style="margin-left: 0;">
  {% for post in conferences %}
    <li style="margin-bottom: 0.8em;">
      {{ post.citation }} 
      {% if post.paperurl %}<a href="{{ post.paperurl }}">[Link]</a>{% endif %}
    </li>
  {% endfor %}
</ol>

🎤 **Talks**
======
<ul>
  {% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}
</ul>
