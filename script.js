/*

{
  "title" : "",
  "category" : "",
  "id": "",
  "description" : "",
  "processDescription": "",

  "image" : "",
  "image2": "",
  "image3": "",
  
  "process1":"",
  "process2":"",
  "process3":"",
  "processVideo":"",
  
  "tags": "",
  "link": "",
  "process": "",
  "video":"",
  "blueprint":"",

  "button1":"",
  "button2":""
},

*/

// lazy load
const observer = lozad('.thumbnail');
observer.observe();

let coursesListElement;

let pageTitleElement;
let outputGridElement;
let projectDisplayElement;

let portfolioCollection = [
  // CATEGORIES: code, visual, film, photo, audio, prototype, 3D, work, ARCHIVE, EXPERIMENT
  // ID: url name
  
  // ADD IN ORDER MOST RECENT BELOW............
  

{
  "title" : "Animating Practice",
  "category" : "3d",
  "id": "unrealanimations",
  "description" : "Before learning motion capture, I experimented with Unreal Engine and its marketplace. I chose avatars from the internet and rigged them, then used Adobe’s Mixamo to transpose various animations. Within Unreal, I set up 3D environments to cohesively fit the characters and their animations: I learned to transition between animations and utilize the lighting, multiple camera cuts, and keyframes to create short animations. Overall, these experiments turned out well and let me explore a fantastic engine for real-time rendering.",
  "processDescription": "",

  "image" : "https://i.imgur.com/DyrRXYu.png",
  "image2": "",
  "image3": "",
  
  "process1":"https://i.imgur.com/cthuDsp.png",
  "process2":"",
  "process3":"",
  "processVideo":"https://drive.google.com/file/d/1zJaWgArPBtvZ9CGVetBQu431A955IMzQ/preview",
  
  "tags": "#3denvironment #unrealengine #adobemixamo",
  "link": "",
  "process": "",
  "video":"https://drive.google.com/file/d/1cPCd1Z_f2otBS4AvpeIstyOF6WPh6A_x/preview",
  "blueprint":"",

  "button1":"",
  "button2":""
},

{
  "title" : "3D Sword",
  "category" : "3d",
  "id": "gamesword",
  "description" : "This project aims to remodel a 3D design based on a 2D reference. I chose a fantasy dagger and carefully paid attention to all the details on multiple planar views. I used Autodesk Maya to remodel, avoiding using n-gons and triangles. Afterward, I correctly mapped the UV to avoid distortion if and when shaded.",
  "processDescription": "A challenge encountered during this project was modeling inorganic shapes. Some shapes on the dagger involve cracks, wood, and other texturized materials that are virtually impossible to model without sculpting. In that case, I could not include all sorts of indents, ridges, and cracks on the sword.",

  "image" : "https://i.imgur.com/LzeVF4I.png",
  "image2": "",
  "image3": "",
  
  "process1":"https://i.imgur.com/3MPpDXR.png",
  "process2":"",
  "process3":"",
  "processVideo":"",
  
  "tags": "#3dmodeling #uvmapping #autodeskmaya",
  "link": "",
  "process": "",
  "video":"",
  "blueprint":"",

  "button1":"",
  "button2":""
},


  {
    "title" : "Online Privacy Awareness",
    "category" : "code",
    "id": "onlineprivacyawareness",
    "description" : "The documentary ‘We Live in Public’ and Jaron Lanier's talk on ‘How the Internet Failed and How to Recreate It’ offered interesting insights into the evolution of online culture, privacy, and its impact on technology and society. It is interesting to see the juxtaposition of the two narratives that shift from exploring the early days of the Internet, marked by optimism and experimentation, to the current world of the Internet dominated by corporate control and commodification of personal data. Today, corporations control the flow of all information as data has become clearer than glass, where your information is just a transaction... he states, ‘We've created a world in which any time two people connect online, it's financed by a third person who believes they can manipulate the first two.’\n\nIn the course of this project, I designed a satirical and juxtaposed website with the goal of raising awareness about online privacy and the subtle yet constant tracking and measurement of personal data—often agreed to unknowingly. The homepage imitates this canvas of freedom in the early days of the internet until you initiate the authentication to Spotify. This leaves the website to simulate an algorithm processing the user's data. Subsequently, ‘fake’ statistics are presented, subtly pointing toward the critical concept of data privacy. By the end of the experience, users gain a heightened understanding of the significance of data protection and how they can curtail the tracking of their online habits.",
    "processDescription": "INSTRUCTIONS TO SIMULATE!\n\nSpotify users are free to simulate the authentication directly from the main page (ATTENTION, for those without Spotify, access the following page by adding ‘callback’ to the end of the URL link of the homepage). An important thing to note is that the website uses Spotify API through JavaScript to authorize the connection between users; however, no data is pulled in real-time.\n\n Below provides the presentation pitch of my project, along with the moodboard I crafted beforehand which I drew inspiration from.",

    "image" : "https://i.imgur.com/DcQXTHo.png",
    "image2": "https://i.imgur.com/BDLmFVt.png",
    "image3": "",
    
    "process1":"https://i.imgur.com/AFaiPlK.png",
    "process2":"https://i.imgur.com/6CdzKLm.png",
    "process3":"https://i.imgur.com/T8kRf3Z.png",
    "processVideo":"",
    
    "tags": "#webdevelopment #api #data #javascript",
    "link": "https://mwrcus.github.io/data-through-music/",
    "blueprint": "https://github.com/mwrcus/data-through-music",
    "video":"",

    "button1":"WEBSITE SIMULATION",
    "button2":"CODE"
  },

  {
    "title" : "Personal Branding",
    "category" : "visual",
    "id": "personalbranding",
    "description" : "While still in the process of self-discovery as a designer and engineer in my academic journey, I recognize the significance of crafting a personal brand that reflects how I wish to communicate messages and deliver experiences through my projects. For a considerable time, my inspiration has been drawn from Vincent Van Gogh's 'Starry Night' painting, marveling at how each brush stroke and color conveyed his life, thoughts, and emotions. In my exploration of the design realm, I have come to realize the profound and similar importance of infusing intention into design choices.\n\nMy personal branding encompasses the creation of my logo, tagline, and a high-fidelity webpage wireframe for both desktop and mobile versions. The guiding principle behind all my design choices is to convey my willingness to produce designs that challenge the norm. It is through experimentation and the free flow of creativity that I ultimately shape my projects. This rationale is embodied in the personification of creativity through a sail riding waves. Notably, the color of the waves deviates from expectations, taking on a distinctive green color. Much of the interpretation is left to the audience, yet the cohesive flow of the waves, the vectors of the logo, and the consistent theme throughout aim to leave a lasting impression on me as an emerging designer. (Credits for sailboat vector inspiration: @designstuff on Figma).",
    "processDescription": "",

    "image" : "https://i.imgur.com/36tGMbo.png",
    "image2": "https://i.imgur.com/hgYo9iU.png",
    "image3": "https://i.imgur.com/b0DHImY.png",
    
    "process1":"https://i.imgur.com/4FO0nkF.png",
    "process2":"",
    "process3":"",
    "processVideo":"",
    
    "tags": "#portfolio #graphicdesign #figma",
    "link": "",
    "process": "",
    "video":"",

    "button1":"",
    "button2":""
  },

  {
    "title" : "Task Management App",
    "category" : "prototype",
    "id": "taskulptor",
    "description" : "One of the critical aspects of being a student is maintaining organization around the clock to stay on top of daily tasks and schoolwork. In response to these prevalent challenges faced by students, I embarked on the development of a task management app with a focus on addressing the shortcomings of existing applications.\n\nIn this project, I undertook comprehensive research, ideation, and prototyping to develop a minimum viable product. The goal was to create a solution that goes beyond conventional tasking functionalities. Notably, my emphasis extended beyond task tracking, honing in on personalization and the satisfaction of task completion as rewarding. This focus intends to provide a unique user experience tailored to individual students’ needs and preferences, ensuring an effective and satisfying approach to staying on track.",
    "processDescription": "USER RESEARCH. I started the process with user research, interviewing two students about their tasking habits and preferences. Interestingly, both students used the Apple Notes App for its simplicity and efficiency (i.e., quick to jot reminders) and the satisfaction of completing a task by filling in the checklist bubble. However, they expressed a desire for better integration of organizational, process checking, and priority tasking features. IDEATION. This feedback sparked the ideation for my app. I kept in mind the minimum viable product of being able to task, track, and complete tasks, and my first thought was to start simple and make the app easily navigable. I created a flowchart to focus on the main actions that would drive the user experience around the app and set out to have three main pages.\n\n PROTOTYPING. I took my flowchart onto paper, where I sketched and created a basic low-fidelity layout I assumed would be simple enough to understand from the user’s perspective of navigating around. The home menu ‘hub’ displays all the tasks due for different days and weeks, including a prioritized tasks category (also contains late tasks). I conveniently placed the add task button at the top of the page for immediate access once opening the application, from understanding the convenience of features that competitors already hold. The course library categorizes tasks by different courses, facilitating semester-long scheduling by adding and organizing multiple tasks simultaneously. The settings hub controls personalization, emphasizing the importance of meeting users' needs however they want to task effectively. The following sketch was a higher-fidelity paper prototype to understand the implementation of pop-up features and the content displayed in the app.",
    "processDescription2":"Moving to Figma, an application I was unfamiliar with for high-fidelity prototyping in the second iteration, I learned the importance of establishing components and variants for consistency when I initially copied and pasted my work throughout the prototype. I realized how quite time-consuming and inefficient it would be. So, coming into my second iteration within Figma, I completely reimagined the application and wanted a different feel. I introduced color and enhanced the design of features, especially emphasizing 'task completion satisfaction.’ I introduced individual tasks as squares on a grid instead of a basic checklist so that completing a task would become more than just a tap, giving life to the whole task. USER TESTING. I tested my prototype with students, noted their behaviors and challenges with the experience, and sought to make changes from there. REFINEMENT. The third iteration refines the grid layout of tasks, making it horizontal instead of horizontal alignment to reduce cognitive overload and better comprehend the categorization of tasks. CHALLENGES. A significant challenge encountered in Figma was using its navigation actions in wireframing. While initially aiming for a press-and-hold task detail view in my second iteration, I had to adapt with an ellipsis menu in my third, offering options to view, edit, and delete tasks into one experience.",
    "processDescription3":"Throughout these iterations, user feedback and the understanding of user needs remained central to refining the app's design and functionality. For future development plans, I would invest in additional research on user experiences with the overall feel of the app and its features to ensure its persistent intuitiveness for student task tracking as a user-centric design.",

    "image" : "https://i.imgur.com/ywzE1XO.png",
    "image2": "https://i.imgur.com/kOQhRSP.png",
    "image3": "",
    
    "process1":"https://i.imgur.com/nBxvNgM.png",
    "process2":"https://i.imgur.com/4eMuetX.png",
    "process3":"https://i.imgur.com/ODx3bfc.png",
    "process4":"https://i.imgur.com/OpeaNYr.png",
    "process5":"https://i.imgur.com/lDR3gVv.png",
    
    "tags": "#ideation #uiux #figma",
    "link": "https://www.figma.com/proto/3TWozf0G2iZIoRsMr3EPMK?embed_host=share&kind=&mode=design&node-id=228-1646&page-id=0%3A1&scaling=scale-down&starting-point-node-id=228%3A1925&t=AxrDalixv5srzChO-1&type=design&viewport=-2794%2C209%2C0.35",
    "blueprint": "",
    "video":"",
    "processVideo2":"https://drive.google.com/file/d/1mGyM4DPFj6hfFoYHNOF6_rBg632BgRu-/preview",

    "button1":"PROTOTYPE",
    "button2":""
  },
  

  {
    "title" : "Music Magazine",
    "category" : "visual",
    "id": "rhythmrhymes-magazine",
    "description" : "I created a mockup of a music magazine cover and grid layouts using Adobe InDesign. In graphic design, it's crucial to convey a message visually. A music magazine serves as a great example, demonstrating how hierarchy and visual appeal work together. After having done research specifically on magazine cover design, I realized the influence on the audience. Despite the information overload, they effectively differentiate sections and themes through fonts, colors, and bold elements. My goal was to ensure a cohesive flow in my design, where everything comes together smoothly. The main focus is on capturing the viewer's attention immediately, emphasizing the magazine's title and the featured artist, Blood Orange.",
    "processDescription": "",

    "image" : "https://i.imgur.com/F16vy98.png",
    "image2": "https://i.imgur.com/TO6IRaj.png",
    "image3": "https://i.imgur.com/nw1ScY1.png",
    
    "process1":"",
    "process2":"",
    "process3":"",
    "processVideo":"",
    
    "tags": "#graphicdesign #indesign",
    "link": "",
    "blueprint": "",
    "video":"",

    "button1":"",
    "button2":""
  },
  
  
  {
    "title" : "Terrestrial Trivia",
    "category" : "code",
    "id": "terrestrialtrivia",
    "description" : "Terrestrial Trivia is a web-developed game designed with the goal of successfully answering each question per level. In the event of an incorrect response, users are prompted to restart the level, fostering a learning environment that encourages information retention. As the game progresses, it delves into a more significant issue—climate change—ultimately urging users to take meaningful action.",
    "processDescription": "The initial step in creating this website involved crafting a mood board. I had a clear vision—a trivia game format that not only highlighted a crucial issue but also offered a meaningful takeaway at the end. This project served as both a challenge and an exploration, pushing me to delve deeper into the utilization of flexbox—a critical CSS display setting widely employed in website layouts. While initially challenging to grasp, persistence allowed me to enhance my skills and deepen my understanding of creating a cohesive layout flow.\n\nLooking ahead, for further development, I would opt for Javascript to link a JSON containing questions and answer choices. This approach promises increased time efficiency compared to creating an HTML page for each question.",

    "image2" : "https://i.imgur.com/1lKVBnN.png",
    "image3": "https://i.imgur.com/MIARvfo.png",
    "image": "https://i.imgur.com/GWe2MgG.png",
    
    "process1":"https://i.imgur.com/Igj6CNN.png",
    "process2":"",
    "process3":"",
    "processVideo":"",
    
    "tags": "#webdevelopment #game #html #css",
    "link": "https://mwrcus.github.io/terrestrial-trivia",
    "blueprint": "https://github.com/mwrcus/terrestrial-trivia",
    "video":"",

    "button1":"GAME",
    "button2":"CODE"
  },

  {
  "title" : "Phone Stand Keychain",
  "category" : "prototype",
  "id": "phonestand",
  "description" : "In this project, I focused on ideating a phone stand driven by insights gathered through user research conducted with a classmate. The initial step involved interviewing my classmate, meticulously noting their phone usage behavior and identifying fundamental qualities that shape their interaction with the device. Notably, portability emerged as a key priority for them.",
  "processDescription": "As part of the user research phase, I delved into brainstorming sessions, sketching out various iterations of a phone case. Beginning with familiar and basic designs, I expanded my creative horizons, introducing variations. The breakthrough idea surfaced as I explored integrating portability into the phone stand, leading me to conceptualize a keychain attachment. Mapping out the dimensions through sketches, I created cardboard prototypes to test the concept with my classmate's phone. The initial cube-shaped prototype lacked stability, prompting me to extend the support length in subsequent iterations, ultimately resulting in a functional cardboard prototype.\n\nTransitioning to Autodesk Fusion 360 for 3D modeling, the first printed prototype validated the concept. However, a challenge emerged concerning the optimal angle for the hole that supports the phone without the risk of tipping backward. In response, I revisited my cardboard prototype, adjusted the hole's angle, and incorporated these refinements into my second 3D model iteration. Additionally, I streamlined the design, making the phone stand slimmer and eliminating unnecessary build for a more lightweight keychain.\n\nThe final prototype proved effective, highlighting the iterative nature of the design process. This experience emphasized the importance of continuous user research and the need for adjustments in both dimensions and prototype construction. Moving forward, considerations for future development involve reinforcing the filament of the 3D model and widening the support gap to accommodate a broader range of phones, expanding the applicability beyond the initial focus on my classmate's needs.",

  "image" : "https://i.imgur.com/Lf7E1qI.png",
  "image2": "https://i.imgur.com/P4iHmpI.png",
  "image3": "https://i.imgur.com/o5vWbyC.png",
  
  "process1":"https://i.imgur.com/GJn7ZJg.png",
  "process2":"https://i.imgur.com/O1hZ1My.png",
  "process3":"",
  "processVideo":"",
  
  "tags": "#ideation #prototype #3dprint",
  "link": "",
  "blueprint": "",
  "video":"",

  "button1":"",
  "button2":""
},

  {
  "title" : "Storefront Sign",
  "category" : "visual",
  "id": "psychichreadingsign",
  "description" : "This storefront sign, conceived for a client who owns a small psychic business in Brooklyn, serves as a compelling and attention-grabbing poster. It encapsulates essential information such as the business's location and contact details, along with a concise representation of its four primary services.",
  "processDescription": "The color palette, featuring shades of purple and pink, aligns with the prevalent themes often associated with the psychic industry. A distinctive touch in the design is the incorporation of a 'logo' that symbolizes a crystal ball with a chakra pose as its foundational support. This visual element serves to intricately connect the diverse range of services offered, providing a symbolic representation of the business's essence. Furthermore, the inclusion of the owner's name, Chelsea, seamlessly blends with the business name, adding a personal touch to the overall aesthetic.",

  "image" : "https://i.imgur.com/tCllnT7.png",
  "image2": "",
  "image3": "",
  
  "process1":"",
  "process2":"",
  "process3":"",
  "processVideo":"",
  
  "tags": "#client #graphicdesign #illustrator",
  "link": "",
  "blueprint": "",
  "video":"",

  "button1":"",
  "button2":""
},

{
  "title" : "Air Pollution Awareness",
  "category" : "code",
  "id": "fossilfuelsarenotcool",
  "description" : "In a world where almost two-thirds of the population has internet access, creating a website transcends mere coding to showcase your work. The internet serves as a platform to exchange ideas and messages, precisely what I set out to do: use a website to raise awareness about a significant issue that threatens us all. A website proves to be an effective means of sharing a message due to its accessibility, anytime sharing capability, and the potential to create a genuine impact by spreading awareness.",
  "processDescription": "My process commenced with sketching low-fidelity wireframes on paper, providing a foundation for how I'd present the work and convey the message. Given that this project marked one of my initial forays into HTML/CSS, I successfully presented the work, albeit within the confines of my limited skills and knowledge at the time. Looking ahead, I recognize the need for improvements in visual design to enhance attention-grabbing elements. Presently, the website exudes a publishing newspaper vibe and somewhat falls short in conveying the gravity and impact of the issue, with only the vibrant red and orange colors effectively doing so.",

  "image" : "https://i.imgur.com/H5vbboF.png",
  "image2": "https://i.imgur.com/4FrtPSk.png",
  "image3": "",
  
  "process1":"https://i.imgur.com/PyLTAsi.png",
  "process2":"",
  "process3":"",
  "processVideo":"",
  
  "tags": "#webdevelopment #html #css",
  "link": "https://mwrcus.github.io/flexbox-issue-website",
  "blueprint": "https://github.com/mwrcus/flexbox-issue-website",
  "video":"",

  "button1":"WEBSITE",
  "button2":"CODE"
},

  {
  "title" : "Political Poster",
  "category" : "visual",
  "id": "politicalposter",
  "description" : "Within design, its influential capacity is noteworthy; this poster delves into the political realm, emphasizing how design can and should make powerful statements.",
  "processDescription": "Fueled by my passion for a sustainable future and investments, I crafted a poster for NYC, offering a glimpse into what a ‘bright’ and ‘green’ future might entail. The stark contrast between gray buildings shrouded in polluted clouds at the bottom and the aspiration to construct a better future conveys the possibility of harmonizing nature and urbanization. This design genuinely encapsulates and imagines a distinct ‘future.’",

  "image" : "https://i.imgur.com/YWvewkv.jpg",
  "image2": "",
  "image3": "",
  
  "process1":"",
  "process2":"",
  "process3":"",
  "processVideo":"",
  
  "tags": "#graphicdesign #illustrator",
  "link": "",
  "blueprint": "",
  "video":"",

  "button1":"",
  "button2":""
},

  {
    "title" : "Slow Down Short Film",
    "category" : "film",
    "id": "slowdown-shortfilm",
    "description" : "In this short film, I delve into the significance of mental health and well-being, emphasizing the importance of taking time for oneself. Amidst the chaos of city life, individuals often find themselves caught up in the fast-paced rhythm, leaving little room for self-reflection. The film aims to capture the transformative journey of those who take a moment to step back, acknowledging the profound shifts in emotion and stress just a few steps away.",
    "processDescription": "The protagonist, worn out by the city's daily grind, plans a journey to shift her perspective entirely. The film's concept originated from my reflections on life in New York City, aiming to highlight the importance of balance. I chose a warm color scheme and filmed from both first and third-person perspectives. The project unfolded in two sections: the bustling city captured in Times Square, Manhattan, and the serene ‘natural’ world filmed at Rockaway Beach in Queens. The changing paths from the film's start to finish symbolize this dichotomy. Times Square, with its lively colors and constant activity, served as a stereotypical representation of the city and the impact of capitalism on our connection with nature. The infusion of brighter colors, a faster pace, and heightened Foley sounds aimed to immerse the audience in the frame.\n\nDuring filming, we faced challenges as the final product deviated from the initial storyboarding due to unforeseen obstacles in the lengthy journey. Unfavorable beach weather resulted in fewer people, but I used this to experiment with visual effects masking, symbolizing the city's absence but remains (a representation that although balance is a basis of life, it is not comparable to symmetry, which is not). The discovery of the ferry as an alternative transportation mode added a symbolic touch, emphasizing the escape from the city in the concluding shots with the distant cityscape.",

    "image" : "https://i.imgur.com/cpUSOJZ.png",
    "image2": "",
    "image3": "",
    
    "process1":"https://i.imgur.com/oUB97SM.png",
    "process2":"",
    "process3":"",
    "processVideo":"",
    
    "tags": "#storyboarding #premierepro",
    "link": "",
    "blueprint": "https://docs.google.com/document/d/16KhwU0s9y8fZYVw1D0MHAsxWhv9PkKdIKJWr5VzVvIs/edit?usp=sharing",
    "video":"https://drive.google.com/file/d/1ZOZ3lgO6NcRFZ1NgYE-ACNRfD_yD_G5-/preview",

    "button1":"",
    "button2":"OUTLINE"
  },

//   {
//   "title" : "Sound Collage",
//   "category" : "audio",
//   "id": "",
//   "description" : "",
//   "processDescription": "",

//   "image" : "",
//   "image2": "",
//   "image3": "",
  
//   "process1":"",
//   "process2":"",
//   "process3":"",
//   "processVideo":"",
  
//   "tags": "",
//   "link": "",
//   "process": "",
//   "video":"",

//   "button1":"",
//   "button2":""
// },
  
  {
    "title" : "Cosmicollide Game",
    "category" : "code",
    "id" : "cosmicollide",
    "description" : "Cosmicollide, a game I’ve designed with no ending, is not only a source of fun but also a journey through which I honed my object-oriented programming skills using Javascript. Taking inspiration from Flappy Bird, players navigate an astronaut through space, dodging asteroids while collecting vital oxygen tanks to sustain life. On this cosmic adventure, players encounter power-ups that offer benefits like slower speed, invincibility, or extended breath for a few seconds. The more you play, the more adept you become, raising the challenge to surpass your own high score.",
    "image2" : "https://i.imgur.com/3RKqJFb.png",
    "image": "https://i.imgur.com/207uVih.png",
    "image3":"",
    "processDescription":"The initial phase involved conceptualizing the game screens and defining the necessary steps. I mapped out the rules and actions using a flowchart, guiding me through the creation process. Translating these ideas into code on p5.js, I implemented object velocity to simulate a free fall to the main character and used simple circular shapes with distinct colors for food and obstacle objects (all of which are object-oriented, acting independently within an array). Over a week of consistent coding, totaling over 600 lines, I amalgamated all the components, adding visuals and sounds to bring the game to life.\n\nA significant challenge emerged in seamlessly connecting different functions, particularly with collision checks and player deaths. Navigating between function brackets became a hurdle, but I addressed this by structuring my work and utilizing comments effectively. After a week of persistent effort, the project seamlessly came together.\n\nLooking ahead, I envision further development by integrating an Arduino Uno with p5.js to track hand movements for character positioning. Additionally, I would introduce a leaderboard displaying different times and explore the possibility of incorporating multiplayer options across screens.",
    
    "process1":"https://i.imgur.com/3VN74WZ.png",
    "process2":"https://i.imgur.com/R05egcR.png",
    "process3":"https://i.imgur.com/R8p5enR.png",


    "tags": "#creativecoding #game #javascript #p5js",
    "link": "https://mwrcus.github.io/cosmicollide/",
    "blueprint": "https://github.com/mwrcus/cosmicollide",
    "video":"",

    "button1":"GAME",
    "button2":"CODE"
  },

{
  "title" : "Film Foley",
  "category" : "audio",
  "id": "filmfoley",
  "description" : "",
  "processDescription": "Using the Reaper program, I expertly incorporated foley and sound effects into a film scene, enhancing its auditory dimension. The sounds, mostly recorded and edited by me, underwent meticulous processing with effects like reverb and delay, alongside tools such as noise reduction and EQ adjustments for desired effects. Ambiance noise was strategically introduced throughout to eliminate unwanted silences, while careful adjustments to the volume and panning were made to align with the film's spatial audio. Notably, I crafted a cohesive collage of foley from common household items, like using aluminum foil to mimic the sound of a blanket, creating a consistent background noise and a seamless integration of sound effects that persisted cohesively throughout the film.",

  "image" : "https://i.imgur.com/XqEuKtr.png",
  "image2": "",
  "image3": "",
  
  "process1":"https://i.imgur.com/0cQsNZ7.png",
  "process2":"",
  "process3":"",
  "processVideo":"",
  
  "tags": "#soundfx #foley #reaper",
  "link": "",
  "process": "",
  "video":"https://drive.google.com/file/d/1SiO3nZFaPKBWQmS6OF2voFgmvvjO5na_/preview",

  "button1":"",
  "button2":""
},


//   {
//   "title" : "Tech Talk Podcast",
//   "category" : "audio",
//   "id": "podcasttalk",
//   "description" : "",
//   "processDescription": "",

//   "image" : "https://i.imgur.com/XqEuKtr.png",
//   "image2": "",
//   "image3": "",
  
//   "process1":"",
//   "process2":"",
//   "process3":"",
//   "processVideo":"",
  
//   "tags": "#reaper",
//   "link": "",
//   "process": "",
//   "video":"https://drive.google.com/file/d/1N0IoQidf5ALHEIwf9F_QWcT7OY5ytyAe/preview",

//   "button1":"",
//   "button2":""
// },

  
  {
    "title" : "Experimental Portrait Film",
    "category" : "film",
    "id": "experimentalportrait",
    "description" : "Embarking on this avant-garde exploration, my goal was to craft a meaningful portrayal of someone dear to me: my sister. Through a blend of sound, visuals, and effects, I aimed to take the audience on a journey, free from the confines of storyboarding. Instead, opting for a purely experimental approach, allowing the film to unfold organically. Navigate this unique tapestry of emotion, where each frame paints a vivid portrait of my sister's essence.",
    "processDescription": "",
    
    "image" : "https://i.imgur.com/zhmvEHk.png",
    "image2": "",
    "image3": "",
    
    "process1":"",
    "process2":"",
    "process3":"",
    
    "tags": "#shortfilm #narrative #premierepro",
    "link": "",
    "blueprint": "",
    "video":"https://drive.google.com/file/d/1fxFirPpXL-n4GuuO_g36EA49fLQqQWOf/preview",

    "button1":"",
    "button2":"OUTLINE"
  },
  
  {
  "title" : "Self-Sustaining Terrarium",
  "category" : "prototype",
  "id": "indeplant",
  "description" : "With the world's population on the rise and urbanization claiming more land, the challenges for farming are evident. There's less space, and agriculture needs to be even more efficient than our current technology allows. To address this, I teamed up with a group of engineers. Drawing inspiration from vertical farming, we started small with a self-sustaining terrarium named the Indeplant – an independent planting solution. Our target users identified for the prototype are individuals interested in sustainable, space-efficient planting solutions; however, the project aims to reach a wider audience, specifically in the agricultural field, like farmers, as a viable, efficient, and automated solution to both combat and adapt to these pressing environmental and societal issues.",
  "processDescription":"In my role as the chief design officer for this project, I used CAD software to design both the team’s logo and the prototype, laying the foundation for the group to start the product assembly. I first sketched out ideas; the first idea was to develop a solar-powered and automated flowerpot to water a plant. Through more research and conceptualizing, we shifted towards a terrarium as a more efficient solution, recreating ideal and humid growing conditions–this is important to reflect a changing world where technology can facilitate time-consuming tasks; this is important to speed up the growth of agriculture to meet the needs of a growing population.\n\nThe next phase took place digitally on Autodesk Fusion 360, where more research on technical elements would dictate where we headed as a team. Throughout the project, I honed practical strategies for thinking outside the box when realizing the Indeplant and incorporating its technical and physical components. Multiple iterations of the model were essential to overcome new challenges, and along the way, I advanced my 3D modeling and iterating skills. Our team worked efficiently and well together to realize the product: one person managed the budget, another handled the coding, and I focused on the design. We all contributed ideas and research during our meetings and made changes as needed. This collaboration was crucial to bringing the Indeplant to life.",
  "processDescription2":"The project faced significant challenges, primarily regarding time and incorporating all necessary elements to realize our vision. Constrained by a $100 budget, our team grappled with how to build from the ground up. The original prototype included glass encasing and cornering LED lights to avoid molding and unsanitary conflicts, especially with technological parts. However, we realized the budget constraints and the spacing available for technical components, prompting us to widen the prototype. To meet our budget, we had to make adjustments – changing the glass encasing to plastic and finding an alternative option to LED UV strips. An important realization was that functionality and cost efficiency took precedence over aesthetics, ensuring the creation of a working prototype for our pitch.\n\nThe final implementation utilizes Arduino UNO (circuit board using a C++ language variation) to automate all components, ultraviolet artificial lighting for photosynthesis, a moisture sensor to detect critical water levels, and a pump for cohesive operation. The pump draws water from a compartment behind the terrarium, consistently connecting a tube to water the plant. Placing the moisture sensor at the bottom of the tank allows it to read the soil's humidity and print out the data. You can find more information in the provided pitch presentation and design report linked below for additional details about the ideation, process, challenges, and outcome.",

  "image" : "https://i.imgur.com/R0HvJoT.png",
  "image2": "https://i.imgur.com/0BZdEgL.png",
  "image3": "https://i.imgur.com/ZkiSFQG.png",
  
  "process1":"https://i.imgur.com/YQGd2mX.png",
  "process2":"https://i.imgur.com/Cb38gxw.png",
  "process3":"",
  "process5":"https://i.imgur.com/9Cpgn2s.png",
  "process6":"",
  "processVideo":"https://drive.google.com/file/d/16dvDSt6YyUxKfb7MkQyy4zm7tIx0KZbV/preview",
  
  "tags": "#businesspitch #collaboration #fusion360 #arduino",
  "link": "https://docs.google.com/presentation/d/1kR7g2f5-ErrBBpbe_m9ehJGQGZizvTsE/edit?usp=sharing&ouid=110559693562705367762&rtpof=true&sd=true",
  "blueprint": "https://docs.google.com/document/d/1lRPLm4kvAHdogj8sw2L0BX3Vj4s3o4VrHUo5QwCi7qM/edit?usp=sharing",
  "video":"",

  "button1":"PITCH",
  "button2":"DESIGN REPORT"
}
  
];




document.addEventListener("DOMContentLoaded", function() {

  pageTitleElement = document.getElementById("pageTitle");
  outputGridElement = document.getElementById("outputGrid");
  projectDisplayElement = document.getElementById("projectDisplay");

  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let urlSection = urlParams.get('section');
  let urlID = urlParams.get('id');

  if (urlSection != "item") { //display project previews in grid

    let projectsFound = false;

    if (urlSection == "code") {
      pageTitleElement.innerText = "CODING PROJECTS";
    } else if (urlSection == "visual") {
      pageTitleElement.innerText = "VISUAL PROJECTS";
    } else if (urlSection == "film") {
      pageTitleElement.innerText = "FILM PROJECTS";
    } else if (urlSection == "photography") {
      pageTitleElement.innerText = "PHOTOGRAPHY PROJECTS";
    } else if (urlSection == "audio") {
      pageTitleElement.innerText = "AUDIO PROJECTS";
    } else if (urlSection == "prototype") {
      pageTitleElement.innerText = "PROTOTYPING PROJECTS";
    } else if (urlSection == "3d") {
      pageTitleElement.innerText = "3D PROJECTS";
    } else if (urlSection == "archive") {
      pageTitleElement.innerText = "ARCHIVED PROJECTS";
    } else if (urlSection == "work") {
      pageTitleElement.innerText = "WORK EXPERIENCE";
    } else if (urlSection == "experiment") {
      pageTitleElement.innerText = "EXPERIMENTATIONS";
    }

    //thumbnails
    for (let i = 0; i < portfolioCollection.length; i++) {
      if (portfolioCollection[i]["category"] == urlSection || urlSection == "" || urlSection == null) {
        createProjectPreview(portfolioCollection[i]);
        projectsFound = true;
      }
    }

    //display a message if no projects are found
    if (!projectsFound) {
      displayNoProjectsMessage();
    }

  } else { //display individual projects
    for (let i = 0; i < portfolioCollection.length; i++) {
      if (portfolioCollection[i]["id"] == urlID) {
        createProjectPage(portfolioCollection[i]);
      }
    }
  }

  initLibraries();

  function displayNoProjectsMessage() {
    const messageElement = document.createElement('p');

    messageElement.innerText = "In the works. Check back soon!";
    messageElement.classList.add("description");
    outputGridElement.appendChild(messageElement);
  }

});






function createProjectPreview(incomingJSON) {
  
  let newPreviewLink = document.createElement("A");
  newPreviewLink.href = "index.html?section=item&id=" + incomingJSON["id"];
  
  let newPreviewElement = document.createElement("DIV");
  
  // add AOS data attributes
  newPreviewElement.setAttribute("data-aos", "fade-up");
  newPreviewElement.setAttribute("data-aos-offset", "0");
  
  // random delay
  // let randomDelay = Math.floor(Math.random() * 5000).toString();
  // newPreviewElement.setAttribute("data-aos-delay", randomDelay);
  
  // newPreviewElement.setAttribute("data-aos-duration", "1000");
  // newPreviewElement.setAttribute("data-aos-easing", "ease-in-out");
  // newPreviewElement.setAttribute("data-aos-mirror", "true");
  // newPreviewElement.setAttribute("data-aos-once", "false");
  // newPreviewElement.setAttribute("data-aos-anchor-placement", "top-center");*/
  
  
  newPreviewLink.appendChild(newPreviewElement);
  
  // image preview
  let newPreviewThumbnail = document.createElement("IMG");
  newPreviewThumbnail.classList.add("thumbnail");
  newPreviewThumbnail.src = incomingJSON["image"];
  newPreviewElement.appendChild(newPreviewThumbnail);
  
  // title preview
  let newPreviewTitle = document.createElement("P");
  newPreviewTitle.classList.add("previewTitle");
  newPreviewTitle.innerText = incomingJSON["title"];
  newPreviewElement.appendChild(newPreviewTitle);
  
  // tags preview
  let newPreviewTags = document.createElement("P");
  newPreviewTags.classList.add("previewTags");
  newPreviewTags.innerText = incomingJSON["tags"];
  newPreviewElement.appendChild(newPreviewTags);
  
  outputGridElement.appendChild(newPreviewLink);
  newPreviewElement.classList.add("preview-element");
}


function createProjectPage(incomingJSON) {
  
  pageTitleElement.innerText = incomingJSON["title"];
  
  let newProjectElement = document.createElement("DIV");
  
  // if description..  
  if (incomingJSON["description"]){
    let newProjectDescription = document.createElement("P");
    newProjectDescription.classList.add("description");
    newProjectDescription.innerText = incomingJSON["description"];
    newProjectElement.appendChild(newProjectDescription);
  }

  let newProjectImage = document.createElement("IMG");
  newProjectImage.classList.add("pageImage");
  newProjectImage.src = incomingJSON["image"];
  newProjectElement.appendChild(newProjectImage);
  
  

  // multiple images AND OR VIDEO
  if (incomingJSON["image2"]){
    let newProjectImage2 = document.createElement("IMG");
    newProjectImage2.classList.add("pageImage2");
    newProjectImage2.src = incomingJSON["image2"];
    newProjectElement.appendChild(newProjectImage2);
  }
  if (incomingJSON["image3"]){
    let newProjectImage3 = document.createElement("IMG");
    newProjectImage3.classList.add("pageImage3");
    newProjectImage3.src = incomingJSON["image3"];
    newProjectElement.appendChild(newProjectImage3);
  }

  if (incomingJSON["video"]){
    let newProjectVideo = document.createElement("iframe");
    newProjectVideo.classList.add("pageVideo");
    newProjectVideo.src = incomingJSON["video"];
    // newProjectVideo.controls = true;
    // newProjectVideo.autoplay = true;

    newProjectElement.appendChild(newProjectVideo);
    
    // remove image if video exists
    if (incomingJSON["image"]) {
      newProjectImage.remove();
    }
  }

  // if process description..  
  if (incomingJSON["processDescription"]){
    let newProjectProcessDescription = document.createElement("P");
    newProjectProcessDescription.classList.add("description");
    newProjectProcessDescription.innerText = incomingJSON["processDescription"];
    newProjectElement.appendChild(newProjectProcessDescription);
  }

  // PROJECT PROCESS PICTURES IF NECESSARY
  if(incomingJSON["process1"]){
    
    // text "process"
    // let newProjectProcess = document.createElement("P");
    // newProjectProcess.classList.add("projectProcess");
    // newProjectProcess.innerText = "PROCESS~"
    // newProjectElement.appendChild(newProjectProcess);
    
    
    let newProjectProcess1 = document.createElement("IMG");
    newProjectProcess1.classList.add("pageProcess1");
    newProjectProcess1.src = incomingJSON["process1"];
    newProjectElement.appendChild(newProjectProcess1);
    
    if(incomingJSON["process2"]){
      let newProjectProcess2 = document.createElement("IMG");
      newProjectProcess2.classList.add("pageProcess2");
      newProjectProcess2.src = incomingJSON["process2"];
      newProjectElement.appendChild(newProjectProcess2);
    }
    
    if(incomingJSON["process3"]){
      let newProjectProcess3 = document.createElement("IMG");
      newProjectProcess3.classList.add("pageProcess3");
      newProjectProcess3.src = incomingJSON["process3"];
      newProjectElement.appendChild(newProjectProcess3);
    }
    
    //VIDEO
    if (incomingJSON["processVideo"]){
      let newProjectProcessVideo = document.createElement("iframe");
      newProjectProcessVideo.classList.add("pageProcessVideo");
      newProjectProcessVideo.src = incomingJSON["processVideo"];
      // newProjectProcessVideo.controls = true;
      // newProjectProcessVideo.autoplay = true;
      // newProjectProcessVideo.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
      // newProjectProcessVideo.setAttribute("allowfullscreen", "");

      newProjectElement.appendChild(newProjectProcessVideo);
    }

  if (incomingJSON["processDescription2"]){
    let newProjectProcessDescription2 = document.createElement("P");
    newProjectProcessDescription2.classList.add("description");
    newProjectProcessDescription2.innerText = incomingJSON["processDescription2"];
    newProjectElement.appendChild(newProjectProcessDescription2);
  }

  if(incomingJSON["process4"]){
      let newProjectProcess4 = document.createElement("IMG");
      newProjectProcess4.classList.add("pageProcess4");
      newProjectProcess4.src = incomingJSON["process4"];
      newProjectElement.appendChild(newProjectProcess4);
    }
  if(incomingJSON["process5"]){
      let newProjectProcess5 = document.createElement("IMG");
      newProjectProcess5.classList.add("pageProcess5");
      newProjectProcess5.src = incomingJSON["process5"];
      newProjectElement.appendChild(newProjectProcess5);
    }

  if (incomingJSON["processDescription3"]){
    let newProjectProcessDescription3 = document.createElement("P");
    newProjectProcessDescription3.classList.add("description");
    newProjectProcessDescription3.innerText = incomingJSON["processDescription3"];
    newProjectElement.appendChild(newProjectProcessDescription3);
  }

  if (incomingJSON["processVideo2"]){
      let newProjectProcessVideo2 = document.createElement("iframe");
      newProjectProcessVideo2.classList.add("pageProcessVideo2");
      newProjectProcessVideo2.src = incomingJSON["processVideo2"];
      newProjectElement.appendChild(newProjectProcessVideo2);

    }

   // open project and/or code in new tab
  if (incomingJSON["link"]){
    let newProjectLink = document.createElement("A");
    newProjectLink.classList.add("link");
    newProjectLink.href = incomingJSON["link"];
    newProjectLink.target = "_blank";

    // customize button name
    if (incomingJSON["button1"]){
      let projectLinkText1 = incomingJSON["button1"];
      newProjectLink.innerText = "OPEN " + projectLinkText1;
    } else{
      newProjectLink.innerText = "OPEN PROJECT";
    }

    newProjectElement.appendChild(newProjectLink);
  }

}
  
  if (incomingJSON["blueprint"]){
    let newProjectCode = document.createElement("A");
    newProjectCode.classList.add("code");
    newProjectCode.href = incomingJSON["blueprint"];
    newProjectCode.target = "_blank";

    //customize button name
    if (incomingJSON["button2"]){
      let projectLinkText2 = incomingJSON["button2"];
      newProjectCode.innerText = "OPEN "+ projectLinkText2;
    } else{
      newProjectCode.innerText = "OPEN PROCESS";
    }
    newProjectElement.appendChild(newProjectCode);
  }
  
  // create page
  projectDisplayElement.appendChild(newProjectElement);
  
}


// LIBRARY-------------------------------------------------------------
function initLibraries() {
  

  console.log("Starting libraries...");

  // POPUP DIV ANIMATIONS JAVASCRIPT LIBRARY
  
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 150, // the delay on throttle used while scrolling the page (advanced)
    
    
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 10, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
  });
  
}


// SKILLS PAGE------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
 
/*

 {
      "course": "",
      "concepts":"",
      "skills": ""
},

*/

  let coursesCollection = [

    {
      "course": "Introduction to Engineering and Design",
      // "concepts":"The course provided a comprehensive exploration of engineering, spanning its historical evolution, philosophical foundations, methodologies, and contemporary applications. Centered on practical learning, the course emphasized experimentation and a semester-long collaborative design project. A focal point was the enhancement of essential communication skills in the engineering field. By nurturing teamwork, project management, and design capabilities, Introduction to Engineering established a foundational understanding applicable across diverse sectors of the engineering profession.",
      "skills": "Autodesk Fusion 360, Autodesk Revit, Arduino UNO, Circuitry, Design Reporting, Budgeting"
},
     {
      "course": "Introduction to Programming and Problem Solving",
      "concepts":"",
      "skills": "Python"
},
{
      "course": "Creative Coding",
      "concepts":"",
      "skills": "JavaScript, APIs, Arduino UNO"
},
{
      "course": "Still and Moving Images",
      "concepts":"",
      "skills": "Outlining, Storyboarding, Framing, Filming, Color Grading, Adobe Premiere Pro"
},
{
      "course": "Audio Foundations Studio",
      "concepts":"",
      "skills": "REAPER"
},
{
      "course": "Visual Foundations Studio",
      "concepts":"",
      "skills": "Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Figma"
},
{
      "course": "Ideation and Prototyping",
      "concepts":"",
      "skills": "Ideation, Brainstorming, Sketching, Iterating, Prototyping (Cardboard, 3D, Wireframe)"
},
{
      "course": "Web Development",
      "concepts":"",
      "skills": "Git, HTML, CSS, JavaScript, JS Libraries"
},

{
      "course": "Motion Capture",
      "concepts":"",
      "skills": "Unreal Engine, Autodesk MotionBuilder"
},

{
      "course": "3D Modeling",
      "concepts":"",
      "skills": "Autodesk Maya, ZBrush, UV Mapping"
},




  ];

  let coursesListElement = document.getElementById('coursesList');

for (let i = 0; i < coursesCollection.length; i++){
  let courseData = coursesCollection[i];

    let courseElement = document.createElement('div');
    courseElement.classList.add('specificCourse');

    let headingElement = document.createElement('h4');
    headingElement.textContent = courseData.course;

    // let conceptsElement = document.createElement('p');
    // conceptsElement.classList.add('description');
    // conceptsElement.textContent = "" + courseData.concepts;

    let skillsElement = document.createElement('p');
    skillsElement.classList.add('description');
    skillsElement.classList.add('descriptionSkills');
    skillsElement.innerHTML = "&#10551; " + courseData.skills;

    courseElement.appendChild(headingElement);
    // courseElement.appendChild(conceptsElement);
    courseElement.appendChild(skillsElement);

    coursesListElement.appendChild(courseElement);
  };
});

