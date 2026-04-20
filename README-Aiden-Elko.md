# Student Name: Aiden Elko

## 1. My Assigned Work
I was responsible for the homepage and the functionality between all pages. This included making sure navigation worked consistently across pages, connecting homepage weekly event listings to calendar events, and ensuring events created on the calendar appeared correctly on the homepage by day of week.

## 2. Bootstrap Implementation
I implemented the homepage and shared navigation behavior using standard Bootstrap 5 layout/components while keeping the UI simple and functional for this iteration. I also used Bootstrap utility classes for interaction feedback (like temporary day highlighting) without adding custom CSS.

* **Components Used:** 
- Bootstrap Cards (weekly day/event display)
- Grid and Flex Utilities (page layout and responsive sections)
- Buttons and Nav Buttons (.btn, .btn-light, .btn-outline-primary)
- Badges (.badge) for event labels
- Bootstrap Modal behavior already used within page flow integration
- Utility classes for temporary highlight/fade effect (no custom CSS)

## 3. Technical Challenges & Solutions
One challenge was syncing data between pages without a backend. I solved this by storing created events in localStorage, then reading that same data on the homepage and grouping by the correct weekday/date. Another challenge was linking homepage events back to the calendar and briefly highlighting the selected day; this was handled by passing the date in URL query parameters and applying/removing Bootstrap utility classes in sequence.

## 4. AI / LLM Usage
*Did you use an AI tool to help write or debug your code?*
* **What I asked the AI:** I asked AI to help me structure homepage logic, connect events created on the calendar to weekly homepage cards, wire navigation between pages, and implement click-to-focus behavior from homepage events to the matching calendar day.
* **How it helped & What I learned:** It helped me break the work into clear steps, improve consistency across pages, and better understand how front-end state can be shared through localStorage and URL parameters in a multi-page app.

## 5. Live Site Link
*Provide the GitHub Pages link to the specific page(s) you built.*
* **Live URL:** https://vcu-257.github.io/iteration-1-ugly-build-group-5/homepage.html