window.POSTS = [
 {
  "title": "Audio-Language Models",
  "desc": "How do they listen, and what do they hear?",
  "tags": [
   "ALMs",
   "Musical Understanding"
  ],
  "body": [
   "<h4>ALMs</h4>",
   "<p> Recent advances in Audio-Language Models have boosted performance across musical understanding benchmarks for long-form music fragments. By leveraging previous work in Music Information Retrieval, researchers have found ways to address the data scarcity issue of music-text pairs: LLMs synthesize a combination of outputs from multiple MIR models, existing metadata, and contextual knowledge into richer captions. This raises the question: to what extent does this approach provide the model with true music intelligence? Is the model aware of the content and intentions of the music, i.e., the artistic image, or does it just pretend to be? Is there a risk that GPT-generated or GPT-enhanced captions introduce hallucinations in the training data, which then leads to a drift in performance? Similar to the debate about whether models are able to truely understand the meaning of text, this one is about: how do ALMs listen, and what do they hear? </p>",
   "<p> Posted: Monday, February 16, 2026. </p>"
  ]
 },
 {
  "title": "Clouds, Streams, and Ground (Truths)",
  "desc": "Conference notes from UC Berkeley, March 7-8.",
  "tags": [
   "Conference",
   "Music Ecosystems"
  ],
  "body": [
   "<h4>Conference Notes</h4>",
   "<p> I recently attended the Clouds, Streams, and Ground (Truths): Developing Methods for Studying Music Ecosystems conference on March 7-8 at UC Berkeley. The event highlighted cutting-edge topics in the field of music, featuring talks on: </p>",
   "<ul> <li><strong>Human-AI Co-improvisation:</strong> exploring the use of a physical, joint medium of interaction</li> <li><strong>Algorithmic Curation:</strong> Generating interpretable music playlists by navigating a musician's social networks.</li> <li><strong>Copyright Law:</strong> Navigating the complex legal challenges surrounding AI-assisted artworks (is a 600-prompt artwork copyrightable?).</li> <li><strong>Media Evolution:</strong> Analyzing the trend in which the once-sole transmitter of music (\"vapor\") has become \"frozen\" when</li> <li><strong>Human-Algorithm Interaction:</strong> Developing novel methodologies to capture how humans interact with algorithmic agency.</li> </ul>",
   "<p> Posted: Monday, March 9, 2026. </p>"
  ]
 },
 {
  "title": "Generative UIs",
  "desc": "Thoughts on dynamic controls, adaptation, and what still feels missing.",
  "tags": [
   "UI",
   "Generative AI"
  ],
  "body": [
   "<h4>A Reflection on Generative UIs</h4>",
   "<p> My first reaction to many generative UI ideas is: how is this different from vibe-coding a plot or graph? Visualizing data through code is already something many models can do. What feels new is adding a layer on top of natural-language instructions with interface controls like sliders, drop-down menus, and input boxes, where prompt refinement becomes the core interaction. </p>",
   "<p> It does seem more efficient in some cases, especially when users are asked to try many small changes like legend placement or axis label orientation. But I think those comparisons should be taken with a grain of salt, because these are exactly the kinds of edits that widget-based interfaces are designed to make easy. </p>",
   "<p> Given the relatively deterministic outputs of this kind of system, compared to diffusion models, and the predictability of instructions like \"show the legend at 45 degrees,\" I wonder how much added value dynamic controls provide over vibe-coding. To me, the bigger value in visualization editing is exploring fundamentally different views of the same data, or reacting to goals like \"I want the graph to convey X.\" A compelling direction is turning those high-level goals into smart controls that can increase or decrease aspects of X. </p>",
   "<h4>Beyond Responsive Design</h4>",
   "<p> The idea that every application should adapt to any device in a way that is specifically designed for the user feels like a meaningful path toward the future of interfaces. Adapting layout to device constraints already feels mostly solved: browsers and apps resize and reflow content well. </p>",
   "<p> What still feels underdeveloped is adapting to each person's preferred way of interacting with an interface. Outside recommendation systems and content personalization, interfaces themselves rarely reshape around users in real time. I wish my phone or computer would support me in daily tasks with the right controls and UI patterns exactly when I need them. For me, that is the real promise of generative UIs. </p>"
  ]
 },
 {
  "title": "Can AI Read Music?",
  "desc": "How well do frontier models actually understand music notation?",
  "tags": [
   "Music Notation",
   "LLMs",
   "Benchmarks"
  ],
  "body": [
   "<h4>Can AI Read Music?</h4>",
   "<p> How effectively do frontier models interpret musical scores? Our study assessed the score-reading abilities of <strong>GPT-5.5</strong>, <strong>Claude Opus 4.7</strong>, <strong>Gemini 3.1 Pro</strong>, and <strong>Qwen 3.6 Plus</strong> across various notation formats. </p>",
   "<h4>Notation Format Performance</h4>",
   "<p> The results indicate that traditional formats like ABC or stripped MusicXML are less effective for model comprehension than the custom <strong>MuNo</strong> format. MuNo variants outperformed standard notations across all models, suggesting that the structural encoding of musical data is a primary driver of performance. </p>",
   "<h4>Key Findings by Model</h4>",
   "<ul> <li><strong>Gemini 3.1 Pro:</strong> Achieved the highest overall performance, reaching 94% accuracy with the MuNo Compact variant.</li> <li><strong>GPT-5.5:</strong> Showed the most versatility across formats, notably maintaining 80% accuracy on ABC notation, which other models struggled to process.</li> <li><strong>Format Sensitivity:</strong> There is no universal \"best\" format; Gemini performed better with compact representations, whereas GPT-5.5 showed a preference for verbose, written-out details.</li> </ul>",
   "<h4>Validating Score Analysis</h4>",
   "<p> To ensure models were not simply relying on memorized training data, we included a control condition using only the piece's title. The models averaged only 9% accuracy in this condition, confirming that their performance is based on active analysis of the provided scores rather than simple retrieval. </p>",
   "<p> Posted: Monday, April 28, 2026. </p>"
  ]
 }
];
