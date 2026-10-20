// Reviewed answers grounded in the résumé and existing project descriptions.
window.CACHED_ANSWERS = {
  "v": "2919337866",
  "a": {
    "what are you working on": {
      "t": "My research focuses on multimodal representations, supervision generation, and model evaluation. I designed MuNo-SP to represent musical scores and performances together, and MusicTwins to organize persona data. I also built PitchBench and MuSP-Bench to evaluate musical understanding, alongside work on language-guided audio effects and collaborative design.",
      "s": "I work on multimodal representations, supervision generation, and model evaluation, with projects in music, personas, audio effects, and collaborative design.",
      "k": [
        "multimodal representations",
        "supervision generation",
        "model evaluation"
      ]
    },
    "tell me about pitchbench": {
      "t": "I built PitchBench to evaluate pitch perception in audio-language models using 17K audio–question–answer examples across 28 experiments and 19 sound sources. Its reproducible pipeline generates stimuli and ground truth for atomic, contextual, and melodic tasks under varied acoustic conditions. I evaluated six frontier models; the strongest achieved 47.7% mean accuracy. The paper was accepted to NeurIPS 2026.",
      "s": "I built PitchBench to evaluate pitch perception; across six frontier models, the strongest achieved 47.7% mean accuracy.",
      "k": [
        "PitchBench",
        "pitch perception",
        "mean accuracy"
      ]
    },
    "what did you study": {
      "t": "I earned an M.Eng. in Electrical Engineering and Computer Science at UC Berkeley, focused on machine learning, with a GPA of 3.98. I also hold a B.Sc. in Computer Science from the University of Antwerp and a B.A. and M.A. in Music from the Royal Conservatory of Antwerp.",
      "s": "I studied machine learning at UC Berkeley, Computer Science at the University of Antwerp, and Music at the Royal Conservatory.",
      "k": [
        "machine learning",
        "UC Berkeley",
        "Computer Science",
        "Music"
      ]
    },
    "do you make music": {
      "t": "Yes, I compose and improvise, and I have collaborated with other artists. My work includes a piece made with a modular synthesizer and edited in Logic Pro X, as well as a separate improvisation in 7/8. I created Stripped with Zita de Aguirre y Otegui, Illa De Preter, and Adrián Henríquez.",
      "s": "I compose and improvise, including work with a modular synthesizer and Logic Pro X, and collaborate with other artists.",
      "k": [
        "compose",
        "modular synthesizer",
        "Logic Pro"
      ]
    },
    "how can i contact you": {
      "t": "You can email me at milanliessensdujardin@gmail.com or find me on LinkedIn at linkedin.com/in/milan-liessens-dujardin. My GitHub username is milan477.",
      "s": "You can contact me by email or LinkedIn, and find my code on GitHub.",
      "k": [
        "email",
        "LinkedIn",
        "GitHub"
      ]
    },
    "what is instructfx2fx": {
      "t": "I developed InstructFX2FX to refine an audio effect chain through successive natural-language instructions. It combines LLM planning with CLAP-guided optimization and preserves the current processing parameters between turns, so each instruction builds on the previous state. The work was published at DAFx 2026.",
      "s": "I developed InstructFX2FX for iterative audio refinement using LLM planning and CLAP-guided optimization while preserving processing parameters.",
      "k": [
        "InstructFX2FX",
        "LLM planning",
        "processing parameters"
      ]
    },
    "tell me about c k git": {
      "t": "I built C-K Git, a collaborative design tool based on Concept–Knowledge Theory. It uses LLMs and Git-inspired branching and merging to help contributors explore concepts while preserving their reasoning history.",
      "s": "I built C-K Git to support collaborative design with LLMs, branching and merging, and preserved reasoning history.",
      "k": [
        "C-K Git",
        "collaborative design",
        "LLMs",
        "reasoning history"
      ]
    },
    "can ai read music": {
      "t": "The models I evaluated can answer questions about musical scores, but they still show substantial limitations in score understanding and reasoning about performances. In MuNo-SP, richer score–performance representations improved GPT-5.6’s performance-inclusive music-understanding accuracy from 54.5% to 80.5%. That result concerns the evaluated tasks, rather than reliable music understanding in general.",
      "s": "I found limitations in score understanding, while richer representations improved GPT-5.6’s accuracy on the evaluated music-understanding tasks.",
      "k": [
        "score understanding",
        "representations",
        "accuracy"
      ]
    },
    "what did you do at berkeley lab": {
      "t": "Through UC Berkeley Deep Tech Innovation Lab, I analyzed neuromorphic hardware developed at Lawrence Berkeley National Laboratory. I conducted patent, competitive, and techno-economic analyses and identified quantum error correction as a commercialization opportunity through interviews and market research. I presented the findings at NASA Ames and to 50+ researchers, technologists, and investors.",
      "s": "I analyzed neuromorphic hardware and explored quantum error correction as a commercialization opportunity, presenting findings at NASA Ames.",
      "k": [
        "neuromorphic hardware",
        "commercialization opportunity",
        "NASA Ames"
      ]
    },
    "what is sumire": {
      "t": "SUMIRE is my prototype for a meal and workout tracking app using AI. I ran extensive customer discovery interviews. The prototype is under construction, and its meal-photo input lets you try the concept.",
      "s": "I explored meal and workout tracking with SUMIRE and ran extensive customer discovery interviews.",
      "k": [
        "SUMIRE",
        "tracking",
        "customer discovery"
      ]
    },
    "which projects use language models": {
      "t": "MuNo-SP provides an LLM-readable musical representation and a pipeline for generating supervision. PitchBench and MuSP-Bench evaluate language models with audio or multimodal inputs. InstructFX2FX uses LLM planning for audio processing, and C-K Git uses LLMs for collaborative design.",
      "s": "I use language models for musical representation, supervision, evaluation, audio processing, and collaborative design.",
      "k": [
        "language models",
        "supervision",
        "audio processing",
        "collaborative design"
      ]
    },
    "tell me about yourself": {
      "t": "I'm Milan Liessens Dujardin, an AI researcher and musician. My work focuses on multimodal representations, supervision generation, and model evaluation, particularly for music and audio. I hold master's degrees in machine learning and music, and have papers accepted at NeurIPS, ISMIR, and DAFx.",
      "s": "I'm an AI researcher and musician focused on multimodal representations, supervision generation, and model evaluation for music and audio.",
      "k": [
        "AI researcher",
        "multimodal representations",
        "supervision generation",
        "model evaluation"
      ]
    },
    "what is epic mail": {
      "t": "epic-MAIL is my exploration of an email client with AI-powered features. I am developing it around the inefficiencies and missing features I encounter in existing email clients, with the aim of making email easier to manage and respond to.",
      "s": "I am exploring an email client with AI-powered features to make email easier to manage and respond to.",
      "k": [
        "email client",
        "AI-powered",
        "email"
      ]
    },
    "what is muno sp": {
      "t": "I designed MuNo-SP to represent musical score structure together with aligned performance details such as timing, dynamics, articulation, velocity, duration, and pedaling. I built a supervision pipeline and released MAESTROCaps with 148 long-form analyses and 31,080 time-grounded question–answer pairs. In my evaluation, GPT-5.6’s performance-inclusive music-understanding accuracy improved from 54.5% to 80.5%, and human evaluators preferred MuNo-SP analyses over MIDI-only alternatives.",
      "s": "I designed MuNo-SP and a supervision pipeline for time-grounded musical analyses, with improved performance-inclusive accuracy in my evaluation.",
      "k": [
        "MuNo-SP",
        "supervision pipeline",
        "analyses",
        "accuracy"
      ]
    },
    "what is musictwins": {
      "t": "MusicTwins is my work on representing a persona as a coherent set of attributes and relationships. I designed the representation and defined separate learning objectives to guide data creation, so the examples provide complementary supervision rather than repeating the same information.",
      "s": "I designed MusicTwins to organize persona attributes and guide data creation with complementary supervision.",
      "k": [
        "MusicTwins",
        "data creation",
        "supervision"
      ]
    },
    "tell me about musp bench": {
      "t": "I designed MuSP-Bench, a human-authored benchmark with 490 questions across 18 classical piano works and 6 orchestral excerpts. It evaluates score understanding, performance interpretation, and multimodal musical reasoning using score images, ABC notation, audio, MIDI-as-text, and aligned score–performance representations. I evaluated five frontier multimodal models and found substantial limitations in score understanding, performance-audio reasoning, and cross-modal integration. The work was accepted to ISMIR LBD 2026.",
      "s": "I designed MuSP-Bench to evaluate score understanding, performance interpretation, and multimodal musical reasoning with a human-authored benchmark.",
      "k": [
        "MuSP-Bench",
        "score understanding",
        "performance interpretation",
        "human-authored benchmark"
      ]
    },
    "how do you generate musical supervision": {
      "t": "I transform aligned score–performance data into structured musical analyses and grounded supervision through an automated pipeline. MuNo-SP provides the representation of score and performance details, while MAESTROCaps contains the generated outputs: 148 long-form analyses and 31,080 time-grounded question–answer pairs.",
      "s": "I generate grounded supervision from aligned score–performance data, producing musical analyses and time-grounded question–answer pairs.",
      "k": [
        "grounded supervision",
        "musical analyses"
      ]
    },
    "how do you evaluate multimodal models": {
      "t": "I evaluate multimodal models with MuSP-Bench, a human-authored benchmark of 490 questions about score understanding, performance interpretation, and musical reasoning. The pipeline integrates score images, ABC notation, audio, MIDI-as-text, and aligned score–performance representations. In evaluations of five frontier models, I found substantial limitations in score understanding, performance-audio reasoning, and cross-modal integration.",
      "s": "I evaluate multimodal models using a human-authored benchmark covering score understanding, performance interpretation, and musical reasoning.",
      "k": [
        "multimodal models",
        "human-authored benchmark",
        "score understanding",
        "performance interpretation"
      ]
    },
    "what is storm": {
      "t": "Storm is my exploration of a workspace for capturing thoughts and discovering how they connect. It turns an evolving Markdown document into a spatial board while preserving the original text. The goal is to move fluidly between writing, spatial organization, and semantic relationships.",
      "s": "I am exploring Storm to connect writing, spatial organization, and semantic relationships while preserving the original text.",
      "k": [
        "Storm",
        "writing",
        "spatial organization",
        "semantic relationships"
      ]
    },
    "what is automated satellite imagery analysis": {
      "t": "I developed an ML pipeline for disaster classification and damage assessment from scarce, imbalanced satellite imagery. The work combines preprocessing, artifact correction, feature engineering, and model selection. I used ML classifiers and transfer learning with DINOv2 embeddings and PyTorch, achieving near-perfect disaster-type classification and robust macro-F1 performance for damage assessment.",
      "s": "I used satellite imagery, DINOv2 embeddings, and PyTorch for disaster classification and damage assessment under data scarcity and class imbalance.",
      "k": [
        "satellite imagery",
        "DINOv2 embeddings",
        "PyTorch",
        "damage assessment"
      ]
    },
    "what is high performance computing": {
      "t": "Through UC Berkeley Deep Tech Innovation Lab, I analyzed neuromorphic hardware developed at Lawrence Berkeley National Laboratory. I conducted patent, competitive, and techno-economic analyses and identified quantum error correction as a commercialization opportunity through interviews and market research. I presented the findings at NASA Ames and to 50+ researchers, technologists, and investors.",
      "s": "I analyzed neuromorphic hardware and explored quantum error correction as a commercialization opportunity, presenting findings at NASA Ames.",
      "k": [
        "neuromorphic hardware",
        "commercialization opportunity",
        "NASA Ames"
      ]
    }
  }
};
