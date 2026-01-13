export const PORTFOLIO_DATA = {
    personal: {
        name: "Priti Gupta",
        role: "Full Stack Engineer & AI Researcher",
        headline: "Engineering high-throughput distributed systems & optimizing transformer inference pipelines.",
        bio: "Engineer and Researcher specialized in bridging the gap between scalable web architectures and production ML models. Background in reducing inference latency for NLP tasks and architecting event-driven frontend systems. Proven track record of deploying research-grade AI into performant user-facing applications.",
        location: "India",
        email: "pritigupta2026@outlook.com",
        phone: "+91-7068899164",
        github: "https://github.com/priti200",
        linkedin: "https://linkedin.com/in/priti-gupta-554637255",
    },
    skills: {
        frontend: ["React", "TypeScript", "Next.js (SSR/ISR)", "Tailwind CSS", "Redux Toolkit"],
        backend: ["Java", "Spring Boot", "Node.js", "PostgreSQL (Complex Queries)", "Redis", "System Design"],
        ai_ml: ["Python", "PyTorch", "HuggingFace Transformers", "FastAPI", "Docker", "ONNX Runtime"],
        cloud: ["Google Cloud Platform", "AWS", "CI/CD Pipelines"],
    },
    experience: [
        {
            company: "Capovex Research and Analytics",
            role: "Frontend Engineer",
            period: "2024 - Present",
            description: "Architected the frontend layer for high-volume data visualization dashboards. Implemented aggressive memoization and tree-shaking strategies, reducing First Contentful Paint (FCP) by 40% (1.2s to 0.7s). Reduced technical debt by migrating legacy codebase to rigid TypeScript strict-mode standards.",
        },
        {
            company: "Themarketable.in",
            role: "Product Engineer",
            period: "2023 - 2024",
            description: "Led the product engineering lifecycle from wireframe to deployment. Translated complex user flows into responsive, component-driven interfaces using React, resulting in a 15% increase in user session duration.",
        },
    ],
    journey: [
        {
            title: "Started B.Tech (CS)",
            company: "Amrita Vishwa Vidyapeetham",
            year: "2022",
            description: "Focusing on Distributed Systems and Machine Learning Algorithms.",
            icon: "BookOpen"
        },
        {
            title: "Open Source Contributor",
            company: "AmFOSS",
            year: "2022 - 2023",
            description: "Contributed to core distributed systems libraries. Learned collaborative development at scale using Git flow.",
            icon: "Code"
        },
        {
            title: "Product Engineer",
            company: "Themarketable.in",
            year: "2023 - 2024",
            description: "Designed user-centric interfaces and prototypes, focusing on product reliability and meaningful UX.",
            icon: "PenTool"
        },
        {
            title: "Frontend Engineer",
            company: "Capovex",
            year: "2024 - Present",
            description: "Building scalable frontline applications using Next.js and React ecosystem with a focus on web performance.",
            icon: "Laptop"
        }
    ],
    projects: [
        {
            title: "HealthConnect",
            description: "HIPAA-compliant telemedicine infrastructure. Built a custom WebRTC signaling server on Spring Boot for low-latency (<200ms) video streaming. Integrated OAuth2 for secure patient RBAC and implemented AES-256 encryption for data at rest.",
            tech: ["React", "Spring Boot", "WebRTC", "OAuth2"],
            links: {
                code: "https://github.com/priti200/HealthConnect",
                demo: "https://healthconnect-frontend-dwa76nbkfq-uc.a.run.app",
            },
        },
        {
            title: "CrossEmbedUID",
            description: "Novel user identification framework leveraging cross-modal embeddings. Fine-tuned BERT-based models on heterogeneous social graphs, achieving 87% Top-1 accuracy in profile linkage tasks. Optimized inference throughput using quantized models served via FastAPI.",
            tech: ["Python", "BERT", "FastAPI", "Vector DB"],
            links: {
                code: "https://github.com/priti200/cross-embed-UID",
                demo: "https://github.com/priti200/cross-embed-UID",
            },
        },
        {
            title: "HopeLens",
            description: "Suicide risk detection pipeline. Engineered an asynchronous prediction API wrapping a fine-tuned Roberta model. Decoupled inference service from the React client using a message queue pattern to handle burst traffic reliable.",
            tech: ["React", "Spring Boot", "FastAPI", "Celery"],
            links: {
                code: "https://github.com/priti200/Hopelens-Analyzing-and-Predicting-Suicide-Attempts",
                demo: "https://hopelens.onrender.com/",
            },
        },
        {
            title: "Emotion Recognition",
            description: "Automated subjective emotional analysis pipeline. Implemented spectral feature extraction (MFCCs) and trained a CNN architecture achieving 88% classification accuracy on the SAVEE dataset.",
            tech: ["Python", "TensorFlow", "Signal Processing"],
            links: {
                code: "https://github.com/anudeep2710/EmotionClassifier",
            },
        }
    ],
};
