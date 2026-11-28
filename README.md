# Water Facilities and Drinking Water Availability in Rebala Village

An academic Community Service Project (CSP) documenting water facilities, drinking-water availability, public water infrastructure and community observations in Rebala Village, Andhra Pradesh, India.

**Institution:** Sree Venkateswara College of Engineering  
**Department:** Artificial Intelligence  
**Project Location:** Rebala Village, Buchireddypalem Mandal, SPSR Nellore District, Andhra Pradesh, India  
**Project Type:** Community Service Project (CSP)

---

## About the Project

This project focuses on documenting water facilities and drinking-water availability in Rebala Village.

Through field observations, community interactions and photographic documentation, the project explores the local water infrastructure, including public water distribution facilities, storage infrastructure, hand pumps and other water-access points.

The accompanying website presents the project findings through an interactive, documentary-style digital experience.

## Website Features

- **Project Overview:** Introduction, objectives, study area and field methodology.
- **Eight-Week Documentation:** A chronological presentation of the project journey.
- **Water Facility Profiles:** Documentation of the water facilities observed during fieldwork.
- **Interactive Geographical Map:** A Leaflet-based map showing six documented facility locations.
- **GPS Classification:** Clear distinction between approximate field locations and a GPS ground-truth location.
- **Photo Documentary Archive:** Searchable and filterable photographic documentation.
- **Interactive Lightbox:** Full-size photograph viewing and navigation.
- **Responsive Design:** Layout adapted for desktop and mobile screens.
- **Project Findings:** Observations, recommendations and conservation-related information.
- **Academic Credits:** Project acknowledgements and conclusion.

## Eight-Week Documentation

| Week | Documentation |
|---|---|
| Week 1 | Village fieldwork |
| Week 2 | Village fieldwork |
| Week 3 | Village fieldwork |
| Week 4 | Village fieldwork |
| Week 5 | Village fieldwork |
| Week 6 | Village fieldwork |
| Week 7 | Website design and development documentation |
| Week 8 | Website functionality and final review documentation |

### Photographic Documentation

The website contains 20 registered media items:

- 11 original village fieldwork photographs from Weeks 1–6.
- 9 website documentation screenshots from Weeks 7–8.

## Interactive Map and GPS Information

The interactive map uses Leaflet and OpenStreetMap.

It contains six facility markers with two distinct verification classifications:

| Facility | Latitude | Longitude | Classification |
|---|---:|---:|---|
| Rebala Gram Sachivalayam | 14.5185 | 79.9072 | Approximate (±150 m) |
| Government RWSS Mineral Water Plant | 14.5198 | 79.9056 | Approximate (±250 m) |
| Overhead Water Storage Reservoir | 14.5215 | 79.9038 | Approximate (±150 m) |
| Public Standposts and Indoor Multi-Tap Facility | 14.5222 | 79.9062 | Approximate (±200 m) |
| Multi-Tap Washing Platform | 14.5178 | 79.9085 | Approximate (±250 m) |
| Week 6 India Mark II Hand-Pump Installation | 14.520941 | 79.904295 | GPS Ground-Truth (±5 m) |

**Location accuracy note:** Five facility locations are approximate field-referenced positions. Only the specific Week 6 India Mark II hand-pump installation is classified as GPS ground-truth. These classifications are displayed separately on the website.

The dashed 650 m circle is an approximate map reference around the documented facilities, not an official village boundary.

Map data and tiles are provided by OpenStreetMap contributors.

## Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling, animations and responsive layout |
| JavaScript | Interactive website functionality |
| Leaflet | Interactive geographical map |
| OpenStreetMap | Map tiles and geographical background |
| Google Fonts | Website typography |

The website is a static project and does not require a dedicated backend server or database.

## Project Structure

```text
CSP-Water-Facilities/
│
├── .nojekyll
├── README.md
├── index.html
│
└── assets/
    ├── css/
    │   └── style.css
    │
    ├── js/
    │   ├── app.js
    │   └── photos.js
    │
    └── images/
        ├── week-1/
        ├── week-2/
        ├── week-3/
        ├── week-4/
        ├── week-5/
        ├── week-6/
        ├── week-7/
        └── week-8/
```

## Run Locally

You can run the website using Python's built-in HTTP server.

1. Open a terminal inside the project directory.
2. Execute:

```bash
python -m http.server 4173
```

3. Open your browser and visit:

```text
http://127.0.0.1:4173/
```

An HTTP server is recommended instead of opening `index.html` directly through `file://`, particularly for loading OpenStreetMap tiles.

## Deployment — GitHub Pages

This website is designed for deployment using GitHub Pages.

1. Create a public GitHub repository.
2. Upload the website files and folders to the repository root.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)` folder.
6. Save the publishing configuration.

GitHub Pages will publish the static website.

## Project Credits

**Institution:** Sree Venkateswara College of Engineering  
**Department:** Artificial Intelligence  
**Project:** Water Facilities and Drinking Water Availability in Rebala Village

The project documentation acknowledges the guidance of the faculty mentor, support of the local community and participation of the student project team.

## Acknowledgements

We express our gratitude to our institution, faculty guide, Rebala Gram Sachivalayam and the community members who supported our field observations and documentation.

We also acknowledge OpenStreetMap contributors for providing the geographical map data used in the interactive map.

---

*An academic Community Service Project documenting local water facilities through fieldwork, photographs and an interactive digital presentation.*






## Author

Fameed Shaik
(24JNA31032)
