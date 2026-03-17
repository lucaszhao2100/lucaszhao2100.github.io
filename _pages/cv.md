---
layout: archive
title: "Curriculum Vitae📄"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

## 🎓 Education
* **M.E. in Remote Sensing Science and Technology**, Beijing Normal University, China, 2026 (Expected)
* **B.E. in Resources Prospecting Engineering**, China University of Geosciences (Beijing), China, 2023

---

## 🏆 Honors and Awards
* **2025 IEEE GRSS Student Travel Grant**, IGARSS 2025 (Brisbane) 1,550 AUD
* **2025 & 2023 Academic Excellence Scholarship**, Beijing Normal University (BNU)
* **2023 Outstanding Graduate**, China University of Geosciences, Beijing (CUGB)
* **2019–2022 Academic Excellence Scholarship (Multiple times)**, China University of Geosciences, Beijing (CUGB)

---

## 📚 Publications
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

{% comment %}
## 🎤 Talks
<ul>
  {% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}
</ul>
{% endcomment %}
