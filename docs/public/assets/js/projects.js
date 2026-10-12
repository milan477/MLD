// Research and product projects.
window.PROJECTS = [
  {
    "num": "01",
    "title": "MuNo-SP",
    "desc": "Multimodal representation and scalable data generation, unifying musical score structure with temporally aligned performance information.",
    "tags": [
      "Multimodal Representations",
      "Data Generation",
      "Music Understanding"
    ],
    "image": null,
    "body": [
      "<p><strong>MuNo-SP — Multimodal Representation &amp; Scalable Data Generation</strong> | <a href=\"http://milan477.github.io/MuNo-LM-demo\" target=\"_blank\" rel=\"noopener\">Demo</a></p>",
      "<p>Designed a <strong>novel LLM-readable representation</strong> unifying symbolic score structure with temporally aligned performance information, including timing, dynamics, articulation, velocity, duration, and pedaling, capturing expressive dimensions absent from conventional score-only representations.</p>",
      "<p>Engineered a <strong>scalable, automated data-generation pipeline</strong> transforming aligned score–performance data into structured musical analyses and grounded supervision; released MAESTROCaps with <strong>148 long-form analyses and 31,080 time-grounded question–answer pairs</strong>.</p>",
      "<p>Demonstrated the impact of enriched representations on downstream reasoning, improving GPT-5.6&#x27;s performance-inclusive music-understanding accuracy from <strong>54.5% to 80.5%</strong>; human evaluators preferred MuNo-SP analyses over MIDI-only alternatives.</p>",
      "<a href=\"http://milan477.github.io/MuNo-LM-demo\" target=\"_blank\" rel=\"noopener\">Demo →</a>"
    ]
  },
  {
    "num": "02",
    "title": "MusicTwins",
    "desc": "Structured persona representation and data coverage, with complementary learning objectives for scalable supervision.",
    "tags": [
      "Persona Representations",
      "Data Coverage",
      "Supervision"
    ],
    "image": null,
    "body": [
      "<p><strong>MusicTwins — Structured Persona Representation &amp; Data Coverage</strong></p>",
      "<p>Designed a <strong>novel, structured persona representation</strong> to organize data into a coherent, logically consistent framework with systematic coverage of relevant attributes and relationships.</p>",
      "<p>Defined <strong>distinct learning objectives and coverage dimensions</strong> to guide scalable data creation and ensure complementary, nonredundant supervision across targeted model capabilities.</p>"
    ]
  },
  {
    "num": "03",
    "title": "PitchBench",
    "desc": "Synthetic audio data generation and model evaluation: 17K examples, 28 experiments, and 19 sound sources.",
    "tags": [
      "Synthetic Audio",
      "Pitch Perception",
      "NeurIPS 2026"
    ],
    "image": "public/assets/contents/confusion_matrix.png",
    "body": [
      "<p><strong>PitchBench — Synthetic Audio Data Generation &amp; Model Evaluation</strong> | <a href=\"https://arxiv.org/abs/2605.26176\" target=\"_blank\" rel=\"noopener\">Paper</a> · Accepted to NeurIPS 2026</p>",
      "<p>Built a <strong>scalable, reproducible data-generation pipeline</strong> producing 17K audio–question–answer examples across 28 hierarchically organized experiments, 19 sound sources, and systematically varied acoustic conditions.</p>",
      "<p>Implemented deterministic stimulus generation, ground-truth construction, and automated evaluation to isolate atomic, contextual, and melodic pitch-perception capabilities.</p>",
      "<p>Evaluated six frontier audio-language models, revealing systematic perceptual limitations, with the strongest achieving only <strong>47.7% mean accuracy</strong>.</p>",
      "<img src=\"/public/assets/contents/confusion_matrix.png\"/>"
    ]
  },
  {
    "num": "04",
    "title": "MuSP-Bench",
    "desc": "Human-authored multimodal benchmark and evaluation: 490 questions across 18 piano works and 6 orchestral excerpts.",
    "tags": [
      "Multimodal Evaluation",
      "Human-Authored Data",
      "ISMIR LBD 2026"
    ],
    "image": null,
    "body": [
      "<p><strong>MuSP-Bench — Human-Authored Multimodal Benchmark &amp; Evaluation</strong> | Accepted to ISMIR LBD 2026</p>",
      "<p>Designed a <strong>human-authored, hierarchically structured benchmark of 490 questions</strong> across 18 classical piano works and 6 orchestral excerpts, systematically covering distinct learning objectives in score understanding, performance interpretation, and multimodal musical reasoning.</p>",
      "<p>Built a multimodal evaluation pipeline integrating score images, ABC notation, audio, MIDI-as-text, and temporally aligned score–performance representations.</p>",
      "<p>Evaluated five frontier multimodal models, exposing substantial limitations in score understanding, performance-audio reasoning, and cross-modal integration.</p>"
    ]
  },
  {
    "num": "05",
    "title": "InstructFX2FX",
    "desc": "Language-guided audio processing and perceptual optimization for iterative effect-chain editing.",
    "tags": [
      "Audio Effects",
      "LLMs",
      "CLAP Optimization"
    ],
    "image": null,
    "body": [
      "<p><strong>InstructFX2FX — Language-Guided Audio Processing &amp; Perceptual Optimization</strong> | <a href=\"https://arxiv.org/abs/2606.22005\" target=\"_blank\" rel=\"noopener\">Paper</a> · DAFx 2026</p>",
      "<p>Developed a multi-turn, text-guided audio effect refinement system combining LLM-based planning with CLAP-guided perceptual optimization for iterative effect-chain editing.</p>",
      "<p>Designed a state-preserving architecture that maintains and refines audio-processing parameters across sequential natural-language instructions, supporting realistic audio engineering workflows.</p>"
    ]
  },
  {
    "num": "06",
    "title": "C-K Git",
    "desc": "Human-AI collaborative design using Concept–Knowledge Theory, LLMs, and Git-inspired branching and merging.",
    "tags": [
      "Human-AI Collaboration",
      "C-K Theory",
      "LLMs"
    ],
    "image": null,
    "body": [
      "<p><strong>C-K Git — Human-AI Collaborative Design</strong> | <a href=\"https://milanliessensdujardin.com/public/assets/contents/C-K_Git_Report.pdf\" target=\"_blank\" rel=\"noopener\">Report</a></p>",
      "<p>Built an AI-assisted collaborative conceptual design tool grounded in Concept–Knowledge Theory, using LLMs and Git-inspired branching and merging to support structured concept exploration and preserve collaborative reasoning history.</p>",
      "<iframe src=\"/public/assets/contents/C-K_Git_Report.pdf\"> </iframe>"
    ]
  },
  {
    "num": "07",
    "title": "Automated Satellite Imagery Analysis",
    "desc": "An end-to-end ML pipeline for disaster classification and damage assessment from satellite imagery.",
    "tags": [
      "Computer Vision",
      "DINOv2",
      "PyTorch"
    ],
    "image": null,
    "body": [
      "<p><strong>Machine Learning Engineer | Automated Satellite Imagery Analysis</strong> | Oct. 2025 – Dec. 2025  </p>",
      "<p>UC Berkeley — Berkeley, CA</p>",
      "<p>Developed an end-to-end ML pipeline for disaster classification and damage assessment from scarce, imbalanced satellite imagery, integrating preprocessing, artifact correction, feature engineering, and model selection.</p>",
      "<p>Implemented ML classifiers and transfer learning with <strong>DINOv2 embeddings and PyTorch</strong>, achieving near-perfect disaster-type classification and robust macro-F1 performance for damage assessment. <a href=\"https://milanliessensdujardin.com/public/assets/contents/DS_project_report.pdf\" target=\"_blank\" rel=\"noopener\">Report</a></p>",
      "<iframe src=\"/public/assets/contents/DS_project_report.pdf\"> </iframe>"
    ]
  },
  {
    "num": "08",
    "title": "High-Performance Computing",
    "desc": "Deep tech innovation strategy for neuromorphic hardware developed at Lawrence Berkeley National Laboratory.",
    "tags": [
      "Neuromorphic Hardware",
      "Commercialization",
      "High-Performance Computing"
    ],
    "image": "public/assets/contents/DTIL_project_screenshot.png",
    "body": [
      "<p><strong>Deep Tech Innovation Strategist | High-Performance Computing</strong> | Sep. 2025 – Dec. 2025  </p>",
      "<p>UC Berkeley Deep Tech Innovation Lab — Berkeley, CA</p>",
      "<p>Conducted patent, competitive, and techno-economic analyses of neuromorphic hardware developed at Lawrence Berkeley National Laboratory, identifying quantum error correction as a commercialization opportunity through expert interviews and market research.</p>",
      "<p>Presented findings at NASA Ames and to 50+ researchers, technologists, and investors, contributing to follow-up engagement and startup formation.</p>",
      "<img src=\"/public/assets/contents/DTIL_project_screenshot.png\"/>"
    ]
  }
];
window.EXPLORATIONS = [
  {
    "num": "01",
    "title": "Storm",
    "desc": "A workspace for capturing thoughts and discovering how they connect.",
    "tags": [
      "Knowledge Representation",
      "Spatial Organization",
      "Markdown"
    ],
    "image": null,
    "body": [
      "<p>Storm turns an evolving Markdown document into a spatial board without losing the original text.</p>",
      "<p>A workspace for individuals and teams developing ideas, plans, and systems. The goal is to move fluidly between writing, spatial organization, and semantic relationships, making knowledge tangible.</p>"
    ]
  },
  {
    "num": "02",
    "title": "epic-MAIL",
    "desc": "An email client with AI-powered features to help users manage and respond to their emails more efficiently.",
    "tags": [
      "React",
      "JavaScript",
      "AI"
    ],
    "image": "public/assets/contents/EPICMAIL_project_screenshot.png",
    "body": [
      "<p> Existing email clients are often inefficient and just don't have the features users (I) want. This project aims to turn exasperating-MAIL into epic-MAIL (the real reason why they put an 'e' in front of 'mail'). </p>",
      "<img src=\"/public/assets/contents/EPICMAIL_project_screenshot.png\"/>"
    ]
  },
  {
    "num": "03",
    "title": "SUMIRE",
    "desc": "A low-friction, intelligent meal and workout tracking application.",
    "tags": [
      "Customer Discovery",
      "Product Management",
      "User Testing"
    ],
    "image": "public/assets/contents/SUMIRE_project_screenshot.png",
    "body": [
      "<p> Vibe-coded a prototype for SUMIRE, an app designed to simplify meal and workout tracking using AI. I ran extensive customer discovery interviews. My prototype is under construction <a href=\"https://sumire.bolt.host\">here</a>. Feel free to try it out: just upload a photo of your meal. SUMIRE means violet in Japanese. </p>",
      "<img src=\"/public/assets/contents/SUMIRE_project_screenshot.png\"/>",
      "<p> Key findings from interviews and the product discovery process include (1) Looking for a problem to the solution limits thinking outside the box. (2) Product discovery is about finding commonalities in what people image the product to be. (3) Fast logging attracts users; accuracy and comprehensiveness retain users. (4) Fundamentally, users want to establish a lasting, healthy relationship with food and exercise. </p>"
    ]
  }
];
// Music remains available through questions.
window.ADDITIONAL_WORK = [
  {
    "num": "07",
    "title": "Works",
    "desc": "I sometimes improvise or compose. I have also collaborated with talented artists doing cool stuff.",
    "tags": [
      "Classical Music",
      "Modular Synthesizers",
      "Experimental Music"
    ],
    "image": null,
    "body": [
      "<p> This piece was created using sounds from a modular synthesizer and was edited in Logic Pro X. </p>",
      "<div> <audio controls=\"\"> <source src=\"/public/assets/audio/MilanLiessensDujardin_synth.wav\" type=\"audio/wav\"/> Your browser does not support the audio element. </audio> </div>",
      "<br/>",
      "<p> A peek inside the donkey's mind. </p>",
      "<div> <audio controls=\"\"> <source src=\"/public/assets/audio/MilanLiessensDujardin_carte_blanche.mp3\" type=\"audio/mpeg\"/> Your browser does not support the audio element. </audio> </div>",
      "<p> An improvisation in 7/8. </p>",
      "<div> <audio controls=\"\"> <source src=\"/public/assets/audio/MilanLiessensDujardin_expressionistic_prelude.m4a\" type=\"audio/mp4\"/> Your browser does not support the audio element. </audio> </div>",
      "<br/>",
      "<p> 'Stripped' was created in collaboration with Zita de Aguirre y Otegui, Illa De Preter, and Adrián Henríquez. </p>",
      "<div> <iframe allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen=\"\" src=\"https://www.youtube.com/embed/Qst7jj5yofo?si=IJl5hEVzbpdoG4rL\" title=\"YouTube video player\"></iframe> </div>"
    ]
  }
];
window.ABOUT = {
  "bio": "<p class=\"bio-text\">AI researcher specializing in multimodal representations, automated data and supervision generation, and empirical model evaluation. Built reproducible audio benchmarks and demonstrated improved music reasoning through richer score–performance representations. Holds master’s degrees in machine learning and music; author of papers accepted at NeurIPS, ISMIR, and DAFx.</p><p>I am an AI researcher at UC Berkeley’s Center for New Music and Audio Technologies (CNMAT), Co-Design Lab, and Bryel Labs, based in Berkeley and San Francisco, CA.</p><p>My projects: MuNo-SP, MusicTwins, PitchBench, MuSP-Bench, InstructFX2FX, C-K Git, Automated Satellite Imagery Analysis, High-Performance Computing.</p><p>I worked on automated satellite imagery analysis at UC Berkeley from October to December 2025, and on high-performance computing as a Deep Tech Innovation Strategist at UC Berkeley Deep Tech Innovation Lab from September to December 2025.</p>",
  "edu": "<div class=\"education-list\"> <div class=\"education-item\"> <div class=\"education-header\"> <h3 class=\"education-degree\">M.Eng. in Electrical Engineering and Computer Science</h3> <span class=\"education-timespan\">Aug. 2025 – May 2026</span> </div> <div class=\"education-subheader\"> <span class=\"education-university\">University of California, Berkeley | GPA: 3.98</span> <span class=\"education-location\">Berkeley, CA</span> </div> <p class=\"education-description\"> Focus on machine learning, natural language processing, music-AI, and human-AI interaction. </p> </div> <div class=\"education-item\"> <div class=\"education-header\"> <h3 class=\"education-degree\">B.Sc. in Computer Science</h3> <span class=\"education-timespan\">Sep. 2020 – Jun. 2025</span> </div> <div class=\"education-subheader\"> <span class=\"education-university\">University of Antwerp | Greatest Distinction (2nd/33)</span> <span class=\"education-location\">Antwerp, Belgium</span> </div> </div> <div class=\"education-item\"> <div class=\"education-header\"> <h3 class=\"education-degree\">M.A. in Music</h3> <span class=\"education-timespan\">2022 – 2024</span> </div> <div class=\"education-subheader\"> <span class=\"education-university\"><a href=\"https://www.gva.be/regio/antwerpen/regio-antwerpen/antwerpen/jonge-internationale-leerlingen-volgen-muziekstage-in-de-singel-de-eerste-keer-dat-we-buiten-china-zijn/37411087.html\" target=\"_blank\">Royal Conservatory of Antwerp</a></span> <span class=\"education-location\">Antwerp, Belgium</span> </div> </div> <div class=\"education-item\"> <div class=\"education-header\"> <h3 class=\"education-degree\">B.A. in Music</h3> <span class=\"education-timespan\">2019 – 2022</span> </div> <div class=\"education-subheader\"> <span class=\"education-university\">Royal Conservatory of Antwerp</span> <span class=\"education-location\">Antwerp, Belgium</span> </div> </div> </div>"
};
