---
layout: page
sidebar: false 
---

<div 
        class="calendly-inline-widget" 
        data-url="https://calendly.com/thomasrob-in/quick-connect?hide_gdpr_banner=1&background_color=1e1e20&primary_color=10b981&text_color=ffffff" 
        style="min-width:90vw;height:90vh;"
    >
</div>


<script setup>
import { useScriptTag } from '@vueuse/core'
useScriptTag('https://assets.calendly.com/assets/external/widget.js')
</script>