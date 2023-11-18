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
  "blueprint": "",
  "video":""
},

*/

// lazy load
const observer = lozad('.thumbnail');
observer.observe();


let pageTitleElement;
let outputGridElement;
let projectDisplayElement;

let portfolioCollection = [
  // CATEGORIES: code, visual, film, photo, audio, prototype, 3D, work, ARCHIVE
  // ID: url name
  
  // ADD IN ORDER MOST RECENT BELOW............
  
  
  {
    "title" : "Task Management App",
    "category" : "prototype",
    "id": "taskulptor",
    "description" : "",
    "processDescription": "",

    "image" : "",
    "image2": "",
    "image3": "",
    
    "process1":"",
    "process2":"",
    "process3":"",
    "ProcessVideo":"",
    
    "tags": "#ideation #figma",
    "link": "",
    "blueprint": "",
    "video":""
  },
  

  {
    "title" : "Music Magazine",
    "category" : "visual",
    "id": "rhythmrhymes-magazine",
    "description" : "",
    "processDescription": "",

    "image" : "",
    "image2": "",
    "image3": "",
    
    "process1":"",
    "process2":"",
    "process3":"",
    "ProcessVideo":"",
    
    "tags": "#graphicdesign #indesign",
    "link": "",
    "blueprint": "",
    "video":""
  },
  
  
  {
    "title" : "Terrestrial Trivia",
    "category" : "code",
    "id": "terrestrialtrivia",
    "description" : "Terrestrial Trivia is a web-developed game designed with the goal of successfully answering each question per level. In the event of an incorrect response, users are prompted to restart the level, fostering a learning environment that encourages information retention. As the game progresses, it delves into a more significant issue—climate change—ultimately urging users to take meaningful action. This project served as a valuable experimentation with Flexbox, aiming to enhance my skills in web development layout techniques.",
    "processDescription": "",

    "image" : "",
    "image2": "",
    "image3": "",
    
    "process1":"",
    "process2":"",
    "process3":"",
    "processVideo":"",
    
    "tags": "#webdevelopment #game #html #css",
    "link": "https://mwrcus.github.io/midterm-website/",
    "blueprint": "https://github.com/mwrcus/midterm-website/",
    "video":""
  },

  {
  "title" : "Phone Stand",
  "category" : "prototype",
  "id": "phonestand",
  "description" : "",
  "processDescription": "",

  "image" : "",
  "image2": "",
  "image3": "",
  
  "process1":"",
  "process2":"",
  "process3":"",
  "processVideo":"",
  
  "tags": "#ideation #prototype #3dprint",
  "link": "",
  "blueprint": "",
  "video":""
},

  {
  "title" : "Storefront Sign",
  "category" : "visual",
  "id": "psychichreadingsign",
  "description" : "",
  "processDescription": "",

  "image" : "",
  "image2": "",
  "image3": "",
  
  "process1":"",
  "process2":"",
  "process3":"",
  "processVideo":"",
  
  "tags": "#client #graphicdesign #illustrator",
  "link": "",
  "blueprint": "",
  "video":""
},

{
  "title" : "Air Pollution Awareness",
  "category" : "code",
  "id": "fossilfuelsarenotcool",
  "description" : "",
  "processDescription": "",

  "image" : "",
  "image2": "",
  "image3": "",
  
  "process1":"",
  "process2":"",
  "process3":"",
  "processVideo":"",
  
  "tags": "#webdevelopment #html #css",
  "link": "",
  "blueprint": "",
  "video":""
},

  {
  "title" : "Political Poster",
  "category" : "visual",
  "id": "politicalposter",
  "description" : "",
  "processDescription": "",

  "image" : "",
  "image2": "",
  "image3": "",
  
  "process1":"",
  "process2":"",
  "process3":"",
  "processVideo":"",
  
  "tags": "#graphicdesign #illustrator",
  "link": "",
  "blueprint": "",
  "video":""
},

  
  {
    "title" : "Slow Down Short Film",
    "category" : "film",
    "id": "slowdown-shortfilm",
    "description" : "In this short film, I delve into the significance of mental health and well-being, emphasizing the importance of taking time for oneself. Amidst the chaos of city life, individuals often find themselves caught up in the fast-paced rhythm, leaving little room for self-reflection. The film aims to capture the transformative journey of those who take a moment to step back, acknowledging the profound shifts in emotion and stress just a few steps away.",
    "processDescription": "",

    "image" : "https://drive.google.com/file/d/1nlBDkKEtenDLMAT_B33Jat1-QHhZjvYS/view?usp=sharing",
    "image2": "",
    "image3": "",
    
    "process1":"",
    "process2":"",
    "process3":"",
    "processVideo":"",
    
    "tags": "#storyboarding #premierepro",
    "link": "",
    "blueprint": "",
    "video":"https://drive.google.com/file/d/1ZOZ3lgO6NcRFZ1NgYE-ACNRfD_yD_G5-/preview"
  },
  
  {
    "title" : "Cosmicollide",
    "category" : "code",
    "id" : "cosmicollide",
    "description" : "With over 600 lines of code, the game features a dynamic gameplay experience where players navigate through space but must both avoid meteors and collect oxygen tanks, also snagging exciting power-ups that pass by. Throughout the development process, overcoming challenges like object-oriented programming allowed me to hone my coding skills and creativity.",
    "image" : "",
    "image2": "",
    
    "tags": "#creativecoding #game #javascript #p5js",
    "link": "https://mwrcus.github.io/cosmicollide/",
    "blueprint": "https://github.com/mwrcus/cosmicollide",
    "video":""
  },
  
  {
    "title" : "Experimental Portrait",
    "category" : "film",
    "id": "experimentalportrait",
    "description" : "",
    "processDescription": "",
    
    "image" : "https://drive.google.com/file/d/1-3YrmCKQgQBNHrLu68FvtsBJFS8Ty4rY/view?usp=sharing",
    "image2": "",
    "image3": "",
    
    "process1":"",
    "process2":"",
    "process3":"",
    
    "tags": "#shortfilm #narrative #premierepro",
    "link": "",
    "blueprint": "",
    "video":"https://drive.google.com/file/d/1fxFirPpXL-n4GuuO_g36EA49fLQqQWOf/preview"
  },
  
  {
  "title" : "Self-Sustaining Terrarium",
  "category" : "prototype",
  "id": "indeplant",
  "description" : "With the world's population on the rise and urbanization claiming more land, the challenges for farming are evident. There's less space, and farming needs to be even more efficient than our current technology allows. To address this, I teamed up with a group of engineers. Drawing inspiration from vertical farming, we started small with a self-sustaining terrarium we named the Indeplant – an independent planting solution.",
  "processDescription":"The concept behind this prototype is to create an automated and functional terrarium for plant growth. The Indeplant utilizes an Arduino motherboard to automate all components, ultraviolet artificial lighting for photosynthesis, a moisture sensor to detect critical water levels, and a pump for cohesive operation. The pump draws water from a compartment behind the terrarium, connecting a tube to consistently water the plant. Placing the moisture sensor at the bottom of the tank allows it to read the soil's humidity and print out the data.\n\nIn my role as the chief design officer for this project, I used CAD software to design the prototype, laying the foundation for the group to start the product assembly. Throughout the project, I honed practical strategies for thinking outside the box when realizing the Indeplant and incorporating its technical and physical components. Multiple iterations of the 3D model were essential to overcome new challenges and advance my skills in Autodesk Fusion 360. I also designed the logo to serve as our company’s branding later in our business pitch.\n\nThe project faced significant challenges, primarily related to time and incorporating all necessary elements to realize our vision. Constrained by a $100 budget, our team grappled with how to build from the ground up. The original prototype included a glass encasing and cornering LED lights to avoid molding and unsanitary conflicts, especially with technological parts. However, we realized that the space versus technological components weren't aligned, prompting us to add more behind the casing. To meet our budget, we had to make adjustments – changing the glass encasing to plastic and finding an alternative placement for the LED lights on the roof. In this scenario, functionality and cost efficiency took precedence over aesthetics, ensuring the creation of a working prototype.\n\nFor additional details about the ideation, process, challenges, outcome, and pitch, you can find more information at the provided links.",

  "image" : "https://drive.google.com/file/d/1a51jaqwFiizQThkpBmT6VnkZRNLaLFK1/preview",
  "image2": "https://drive.google.com/file/d/1R622f0nRM6i3FYfmSzM9z4SFYhGstDo2/preview",
  "image3": "https://drive.google.com/file/d/1hTZKeG4uAYi6vAOt_pCDrTXzLamHoQnZ/preview",
  
  "process1":"",
  "process2":"",
  "process3":"",
  "processVideo":"",
  
  "tags": "#businesspitch #futuresolution #cadprototype",
  "link": "https://docs.google.com/presentation/d/1kR7g2f5-ErrBBpbe_m9ehJGQGZizvTsE/edit?usp=sharing&ouid=110559693562705367762&rtpof=true&sd=true",
  "blueprint": "https://docs.google.com/document/d/1lRPLm4kvAHdogj8sw2L0BX3Vj4s3o4VrHUo5QwCi7qM/edit?usp=sharing",
  "video":""
}



  
];

document.addEventListener("DOMContentLoaded", function(){
  
  /* Get page element references */
  pageTitleElement = document.getElementById("pageTitle");
  outputGridElement = document.getElementById("outputGrid");
  projectDisplayElement = document.getElementById("projectDisplay");
  
  /* Get URL Params */
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let urlSection = urlParams.get('section');
  let urlID = urlParams.get('id');
  
  if (urlSection != "item") { // display project previews in grid

    //setting page titles
    
    
    if (urlSection == "code") {
      pageTitleElement.innerText = "CODING PROJECTS";
    }
    else if (urlSection == "visual") {
      pageTitleElement.innerText = "VISUAL PROJECTS";
    }
    else if (urlSection == "film") {
      pageTitleElement.innerText = "FILM PROJECTS";
    }
    else if (urlSection == "photography") {
      pageTitleElement.innerText = "PHOTOGRAPHY PROJECTS";
    }
    else if (urlSection == "audio") {
      pageTitleElement.innerText = "AUDIO PROJECTS";
    }
    else if (urlSection == "prototype") {
      pageTitleElement.innerText = "PROTOTYPING PROJECTS";
    }
    else if (urlSection == "3d") {
      pageTitleElement.innerText = "3D PROJECTS";
    }
    else if (urlSection == "archive") {
      pageTitleElement.innerText = "ARCHIVED PROJECTS";
    }
    else if (urlSection == "work") {
      pageTitleElement.innerText = "WORK EXPERIENCE";
    }
    
    
    
    
    
    // creating thumbnails
    for (let i = 0; i < portfolioCollection.length; i++) {
      if (portfolioCollection[i]["category"] == urlSection || urlSection == "" || urlSection == null){
        createProjectPreview(portfolioCollection[i]);
      }
    }
    
  }
  
  else {
    // displaying individual projects
    for (let i = 0; i < portfolioCollection.length; i++) {
      if (portfolioCollection[i]["id"] == urlID) {
        createProjectPage(portfolioCollection[i]);
      }
    }
  }

  initLibraries();
  
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
  let newPreviewThumbnail = document.createElement("iframe");
  newPreviewThumbnail.classList.add("thumbnail");
  newPreviewThumbnail.src = incomingJSON["image"];
  newPreviewThumbnail.allow = "autoplay;"
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

  let newProjectImage = document.createElement("iframe");
  newProjectImage.classList.add("pageImage");
  newProjectImage.src = incomingJSON["image"];
  newProjectImage.allow = "autoplay;"
  newProjectElement.appendChild(newProjectImage);
  
  

  // multiple images AND OR VIDEO
  if (incomingJSON["image2"]){
    let newProjectImage2 = document.createElement("iframe");
    newProjectImage2.classList.add("pageImage2");
    newProjectImage2.src = incomingJSON["image2"];
    newProjectElement.appendChild(newProjectImage2);
  }
  if (incomingJSON["image3"]){
    let newProjectImage3 = document.createElement("iframe");
    newProjectImage3.classList.add("pageImage3");
    newProjectImage3.src = incomingJSON["image3"];
    newProjectElement.appendChild(newProjectImage3);
  }

  // if process description..  
  if (incomingJSON["processDescription"]){
    let newProjectProcessDescription = document.createElement("P");
    newProjectProcessDescription.classList.add("description");
    newProjectProcessDescription.innerText = incomingJSON["processDescription"];
    newProjectElement.appendChild(newProjectProcessDescription);
  }

  if (incomingJSON["video"]){
    let newProjectVideo = document.createElement("iframe");
    newProjectVideo.classList.add("pageVideo");
    newProjectVideo.src = incomingJSON["video"];
    newProjectVideo.controls = true;
    // newProjectVideo.autoplay = true;
    newProjectElement.appendChild(newProjectVideo);
    
    // remove image if video exists
    if (incomingJSON["image"]) {
      newProjectImage.remove();
    }
  }
  
  // open project and/or code in new tab
  if (incomingJSON["link"]){
    let newProjectLink = document.createElement("A");
    newProjectLink.classList.add("link");
    newProjectLink.href = incomingJSON["link"];
    newProjectLink.target = "_blank";
    newProjectLink.innerText = "OPEN PROJECT";
    newProjectElement.appendChild(newProjectLink);
  } 
  
  if (incomingJSON["blueprint"]){
    let newProjectCode = document.createElement("A");
    newProjectCode.classList.add("code");
    newProjectCode.href = incomingJSON["blueprint"];
    newProjectCode.target = "_blank";
    newProjectCode.innerText = "OPEN PROCESS";
    newProjectElement.appendChild(newProjectCode);
  }
  
  

  // PROJECT PROCESS PICTURES IF NECESSARY
  if(incomingJSON["process1"]){
    
    // text "process"
    let newProjectProcess = document.createElement("P");
    newProjectProcess.classList.add("projectProcess");
    newProjectProcess.innerText = "PROCESS~"
    newProjectElement.appendChild(newProjectProcess);
    
    
    let newProjectProcess1 = document.createElement("iframe");
    newProjectProcess1.classList.add("pageProcess1");
    newProjectProcess1.src = incomingJSON["process1"];
    newProjectElement.appendChild(newProjectProcess1);
    
    if(incomingJSON["process2"]){
      let newProjectProcess2 = document.createElement("iframe");
      newProjectProcess2.classList.add("pageProcess2");
      newProjectProcess2.src = incomingJSON["process2"];
      newProjectElement.appendChild(newProjectProcess2);
    }
    
    if(incomingJSON["process3"]){
      let newProjectProcess3 = document.createElement("iframe");
      newProjectProcess3.classList.add("pageProcess3");
      newProjectProcess3.src = incomingJSON["process3"];
      newProjectElement.appendChild(newProjectProcess3);
    }
    
    //VIDEO
    if (incomingJSON["processVideo"]){
      let newProjectProcessVideo = document.createElement("iframe");
      newProjectProcessVideo.classList.add("pageProcessVideo");
      newProjectProcessVideo.src = incomingJSON["processVideo"];
      newProjectProcessVideo.controls = true;
      // newProjectProcessVideo.autoplay = true;
      newProjectElement.appendChild(newProjectProcessVideo);
    }
  }
  
  projectDisplayElement.appendChild(newProjectElement);
  
}


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

