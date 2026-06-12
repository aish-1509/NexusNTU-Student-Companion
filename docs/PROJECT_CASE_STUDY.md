# NexusNTU Project Case Study

## Executive Summary

NexusNTU is an AI-enabled digital companion for international students at
Nanyang Technological University. It centralizes high-friction parts of student
onboarding and daily life: campus navigation, nearby amenities, practical
financial tools, news, university resources, personal account management, and
AI-assisted guidance.

## My Role

**Aishwarya Anand - Project Manager and Team Lead**

I led a six-person team across the complete delivery lifecycle:

- framed the user problem and coordinated product scope
- organized requirements, use cases, priorities, and the team backlog
- chaired planning and progress reviews
- coordinated GitHub delivery, demonstrations, and final submission
- maintained oversight across quality, risk, change, configuration, release,
  and testing
- contributed to implementation, integration, and the final product redesign

The project was collaborative; my ownership was end-to-end leadership and
integration rather than a claim of sole authorship.

## Problem

International students must learn a new campus and country while information is
spread across university portals, maps, external services, and informal
support. This increases cognitive load, slows routine decisions, and makes
onboarding feel more fragmented than it needs to be.

## Product Response

We designed one responsive hub that combines:

- route planning and nearby-amenity discovery
- Gemini-powered conversational and image-based assistance
- personalized currency conversion and news
- curated links to important NTU systems and services
- registration, authentication, profiles, avatars, and settings

## Technical Delivery

- **Frontend:** React, Vite, Tailwind CSS, Axios
- **Backend:** Node.js, Express, JWT
- **AI:** Python, Streamlit, Google Gemini
- **Data:** MongoDB and Mongoose
- **Caching:** Redis
- **Object storage:** AWS S3
- **External integrations:** Google Maps/Places, News API, RapidAPI, Firebase

## Product And Engineering Decisions

1. We used a modular service architecture so the web client, API, and AI
   assistant could evolve independently.
2. We introduced Redis caching for frequently accessed profile data.
3. We used JWT-based authentication for stateless API access.
4. We separated project governance artifacts from source code while keeping
   both discoverable in one portfolio.
5. We treated maintainability, risk, change, release, and testing as delivery
   work rather than end-of-project paperwork.

## Users And Outcome

The intended users were international NTU students. The delivered result was an
academic prototype demonstrated and evaluated through planned test cases,
coverage work, milestone reviews, and a final presentation.

No production deployment or real-user adoption metric was measured, so none is
claimed here. The strongest outcome is the complete end-to-end delivery:
problem framing, working multi-service prototype, project controls, validation,
and presentation.

## Evidence

The [documentation index](README.md) links directly to the requirements,
backlog, plans, risk register, maintainability report, test evidence, demo, and
final presentation.
