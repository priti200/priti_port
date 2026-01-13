
export const PORTFOLIO_DATA = {
    personal: {
        name: "Priti Gupta",
        role: "Software Engineer | Full-Stack & AI-driven Applications",
        headline:
            "Building scalable web & mobile products powered by clean backend architecture and practical ML.",
        bio: "Software Engineer focused on end-to-end product development across web and mobile. Experience spans React, Django, Flutter, and databases, with growing work in NLP and AI-assisted workflows. Comfortable owning features from idea and wireframes to deployment and iteration.",
        location: "Kerala, India",
        email: "geekpritigupta@gmail.com",
        phone: "+91-7356726056",
        github: "https://github.com/priti200",
        linkedin: "https://linkedin.com/in/priti-gupta-554637255",
    },

    skills: {
        frontend: ["React", "Flutter", "HTML", "CSS", "Bootstrap"],
        backend: ["Django", "REST APIs", "Firebase", "Node.js (basic)", "System Design (fundamentals)"],
        ai_ml: ["Python", "NLP (LLM pipelines)", "Embeddings & Vector Search (basic)", "Data Processing"],
        databases: ["PostgreSQL", "MySQL", "Firebase Realtime DB"],
        core: ["C++ (DSA)", "Git & GitHub", "Linux", "Figma"],
    },

    experience: [
        {
            company: "Capovex / Arth by Capovex",
            role: "Frontend / Product Engineer (Community & Projects)",
            period: "2024 - Present",
            description:
                "Contributing to web experiences focused on finance and analytics. Working with React-based frontends and collaborating on clean API integration, performance, and UI polish within product teams.",
        },
        {
            company: "amFOSS",
            role: "Open Source Contributor",
            period: "2022 - 2023",
            description:
                "Completed multiple onboarding tasks and contributed to team projects. Learned Git-based workflows, code reviews, and collaborative development while building real features and debugging in production-like setups.",
        },
    ],

    journey: [
        {
            title: "Started B.Tech (CSE)",
            company: "Amrita Vishwa Vidyapeetham",
            year: "2022",
            description:
                "Began formal CS journey with a focus on Data Structures, Algorithms, and core computer science fundamentals.",
            icon: "BookOpen",
        },
        {
            title: "Joined amFOSS",
            company: "amFOSS",
            year: "2022 - 2023",
            description:
                "Solved structured tasks, explored open source, and learned how to ship features in a collaborative environment.",
            icon: "Code",
        },
        {
            title: "Full-Stack & Mobile Focus",
            company: "Personal & Academic Projects",
            year: "2023 - 2024",
            description:
                "Built full-stack applications with Django, React, and Flutter, focusing on real-world flows like telemedicine and smart farming.",
            icon: "PenTool",
        },
        {
            title: "AI-Assisted Products",
            company: "Personal Projects",
            year: "2024 - Present",
            description:
                "Exploring NLP, LLM pipelines, and document understanding tools, and integrating them into user-facing products.",
            icon: "Laptop",
        },
    ],

    projects: [
        {
            title: "Smart Agriculture Mobile Application",
            description:
                "End-to-end mobile solution for farmers to manage crops and access guidance. Built with a scalable Flutter architecture and Firebase backend, enabling real-time data sync, authentication, and extensible modules for future ML/IoT integrations.",
            tech: ["Flutter", "Firebase", "REST APIs"],
            links: {
                code: "https://github.com/priti200/amfoss_tasks",
                demo: "",
            },
        },
        {
            title: "HealthConnect – Telemedicine Platform",
            description:
                "Full-stack telemedicine application enabling secure patient–doctor communication. Implemented user authentication, appointment scheduling, and role-based access control with a focus on clean REST API design and relational data modelling.",
            tech: ["React", "Django", "PostgreSQL", "REST APIs"],
            links: {
                code: "https://github.com/priti200/django_girls-",
                demo: "",
            },
        },
        {
            title: "TalkToYourDocument",
            description:
                "AI-powered document assistant that lets users query documents conversationally. Implemented text chunking, embedding generation, and retrieval workflows, then wired them into an LLM pipeline to return context-aware answers.",
            tech: ["Python", "NLP", "Embeddings", "Vector Search"],
            links: {
                code: "https://github.com/priti200", // replace with exact repo when you split it out
                demo: "",
            },
        },
        {
            title: "CrossEmbed – Cross-Modal User Linking",
            description:
                "Research-grade framework for linking user identities across platforms using cross-modal embeddings. Designed and evaluated a pipeline that combines profile text and interaction signals to compute similarity, targeting robust identity resolution across noisy data.",
            tech: ["Python", "NLP", "Embeddings", "Experiment Tracking"],
            links: {
                code: "https://github.com/priti200", // update to specific CrossEmbed repo when public
                demo: "",
            },
        },
    ],

    publications: [
        {
            title: "CrossEmbed: Cross-Modal Embedding Framework for User Identity Linking",
            venue: "Project report / in-progress manuscript",
            year: "2025",
            description:
                "Proposed and implemented CrossEmbed, a cross-modal representation learning approach for user identity linkage across heterogeneous platforms, with empirical evaluation on real-world-style data.",
            link: "https://github.com/priti200", // or arXiv/CEUR/drive link when available
        },
    ],
};
