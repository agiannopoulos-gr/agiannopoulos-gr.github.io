---
layout: null
---
(function (root) {
    var month_translations = {
        {% for mon in site.data.ui-text-months-short[site.locale] -%}
        '{{ mon[0] }}': '{{ mon[1] }}'{% unless forloop.last %},{% endunless %}
        {% endfor %}
    }
    for (const element of root.document.getElementsByTagName('time')) {
        element.textContent = element.textContent.replace(/^\d{1,2}\s+(\S+)\s+\d{4}$/, function(m, p1) {
            return p1 in month_translations ? m.replace(p1, month_translations[p1]) : m;
        });
    }
}(this));