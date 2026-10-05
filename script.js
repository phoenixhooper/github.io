/* =========================================================
   PHOENIX HOOPER
   V2 INTERACTIVE PORTFOLIO
========================================================= */

const body = document.body;


/* =========================================================
   MODAL SYSTEM
========================================================= */

const modalButtons = document.querySelectorAll("[data-modal]");
const closeButtons = document.querySelectorAll("[data-close]");
const dialogs = document.querySelectorAll("dialog");


function openModal(id) {

    const modal = document.getElementById(`modal-${id}`);

    if (!modal) return;

    dialogs.forEach(dialog => {

        if (dialog !== modal && dialog.open) {
            dialog.close();
        }

    });

    modal.showModal();

    body.classList.add("modal-open");
}


function closeModal(modal) {

    if (!modal || !modal.open) return;

    modal.close();

    if (!document.querySelector("dialog[open]")) {
        body.classList.remove("modal-open");
    }

}


/* Main navigation */

modalButtons.forEach(button => {

    button.addEventListener("click", () => {

        openModal(button.dataset.modal);

    });

});


/* Close buttons */

closeButtons.forEach(button => {

    button.addEventListener("click", () => {

        closeModal(button.closest("dialog"));

    });

});


/* Click outside modal */

dialogs.forEach(dialog => {

    dialog.addEventListener("click", event => {

        if (event.target === dialog) {
            closeModal(dialog);
        }

    });


    dialog.addEventListener("close", () => {

        if (!document.querySelector("dialog[open]")) {
            body.classList.remove("modal-open");
        }

    });

});


/* =========================================================
   PROJECT DATA
========================================================= */

const projectData = {

    retail: {

        label: "01 / RETAIL OPERATIONS CENTER",

        type: "SPACE PLANNING · CAD",

        title: "Retail Operations Center Conversion",

        perspective:
            "Supported the conversion of an existing gas station into a multi-tenant retail facility by assessing space requirements, developing interior modifications, and producing inspection-ready CAD documentation.",

        focus:
            "Stakeholder Needs & Requirements Analysis",

        capabilities:
            "Space planning · CAD · Stakeholder collaboration"

    },


    passport: {

        label: "02 / PASSPORT DINNER SERIES",

        type: "EVENT SERIES",

        title: "Passport Dinner Series",

        perspective:
            "A recurring international dining experience requiring planning, coordination, themed execution, and consistent delivery across multiple events.",

        focus:
            "Planning, Coordination & Consistent Execution",

        capabilities:
            "Event planning · Coordination · Guest experience"

    },


    holiday: {

        label: "03 / HOLIDAY EVENT ELEVATION",

        type: "EVENT ELEVATION",

        title: "Holiday Event Elevation",

        perspective:
            "Planning and improving a year-long series of holiday experiences with an emphasis on quality, execution, and guest experience.",

        focus:
            "Quality, Execution & Guest Experience",

        capabilities:
            "Planning · Quality management · Execution"

    },


    warehouse: {

        label: "04 / WAREHOUSE MAPPING & CAD",

        type: "CAD · TECHNICAL DOCUMENTATION",

        title: "Warehouse Mapping & CAD Development",

        perspective:
            "Mapped existing conditions, documented gas lines, and translated client concepts into validated CAD drawings for proposed interior additions.",

        focus:
            "Existing Conditions & Technical Documentation",

        capabilities:
            "CAD · Documentation · Requirements gathering"

    }

};


/* =========================================================
   PROJECT DETAILS
========================================================= */

const projectButtons =
    document.querySelectorAll("[data-project]");

const projectsModal =
    document.getElementById("modal-projects");

const detailModal =
    document.getElementById("modal-project-detail");


const detailElements = {

    label:
        document.getElementById("detail-label"),

    type:
        document.getElementById("detail-type"),

    title:
        document.getElementById("detail-title"),

    perspective:
        document.getElementById("detail-perspective"),

    focus:
        document.getElementById("detail-focus"),

    capabilities:
        document.getElementById("detail-capabilities")

};


projectButtons.forEach(button => {

    button.addEventListener("click", () => {

        const project =
            projectData[button.dataset.project];

        if (!project) return;


        detailElements.label.textContent =
            project.label;

        detailElements.type.textContent =
            project.type;

        detailElements.title.textContent =
            project.title;

        detailElements.perspective.textContent =
            project.perspective;

        detailElements.focus.textContent =
            project.focus;

        detailElements.capabilities.textContent =
            project.capabilities;


        projectsModal.close();

        detailModal.showModal();

        body.classList.add("modal-open");

    });

});


/* Back to project list */

document
    .getElementById("back-projects")
    .addEventListener("click", () => {

        detailModal.close();

        projectsModal.showModal();

        body.classList.add("modal-open");

    });


/* =========================================================
   RECOMMENDATION DATA
========================================================= */

const referenceData = {

    scott: {

        label: "01 / SCOTT HUGGINS",

        initials: "SH",

        name: "Scott Huggins",

        role:
            "Director of Manufacturing\nProOK Processing",

        sourceName:
            "Scott Huggins",

        sourceTitle:
            "Director of Manufacturing · ProOK Processing",

        tags: [

            "PROJECT MANAGEMENT",

            "PROCESS IMPROVEMENT",

            "OPERATIONAL PLANNING"

        ],

        quote:
            "Phoenix has a strong ability to understand the larger purpose of a project while still giving proper attention to the details that determine whether it succeeds. He could take a complex operational need, help organize it into an actionable plan, and produce clear documentation that allowed the rest of the team to move forward with confidence."

    },


    joe: {

        label: "02 / JOE WILSON",

        initials: "JW",

        name: "Joe Wilson",

        role:
            "Owner\nSalute Bene",

        sourceName:
            "Joe Wilson",

        sourceTitle:
            "Owner · Salute Bene",

        tags: [

            "CAD",

            "SPACE PLANNING",

            "PROBLEM SOLVING"

        ],

        quote:
            "His attention to detail, strong problem-solving skills, and practical approach consistently helped us develop efficient solutions and successfully execute numerous initiatives."

    },


    chris: {

        label: "03 / CHRIS MORREY",

        initials: "CM",

        name: "Chris Morrey",

        role:
            "Research Associate\nChristopher C. Gibbs College of Architecture\nUniversity of Oklahoma",

        sourceName:
            "Chris Morrey",

        sourceTitle:
            "Research Associate · Christopher C. Gibbs College of Architecture · University of Oklahoma",

        tags: [

            "ARCHITECTURE",

            "DESIGN",

            "COLLABORATION"

        ],

        quote:
            "Phoenix showed himself to be thoughtful and measured in class, and consistently worked at a high level. He gave deliberate attention and careful execution to his projects despite constraints on his time and care that would have stopped many students in their tracks.\n\nPhoenix is professional in the best sense: he invests time in his peers, contributes his ideas, shares information and elevates the standard for everyone around him by helping to create a focused atmosphere. He is a pleasure to work with, and I think he is primed to make a real contribution in any field he engages."

    }

};


/* =========================================================
   RECOMMENDATION DETAILS
========================================================= */

const referenceButtons =
    document.querySelectorAll("[data-reference]");


const recommendationsModal =
    document.getElementById("modal-recommendations");


const referenceModal =
    document.getElementById("modal-reference-detail");


const referenceElements = {

    label:
        document.getElementById("reference-detail-label"),

    initials:
        document.getElementById("reference-initial"),

    name:
        document.getElementById("reference-detail-name"),

    role:
        document.getElementById("reference-detail-role"),

    sourceName:
        document.getElementById("reference-source-name"),

    sourceTitle:
        document.getElementById("reference-source-title"),

    quote:
        document.getElementById("reference-quote"),

    tag1:
        document.getElementById("reference-tag-1"),

    tag2:
        document.getElementById("reference-tag-2"),

    tag3:
        document.getElementById("reference-tag-3")

};


referenceButtons.forEach(button => {

    button.addEventListener("click", () => {

        const reference =
            referenceData[button.dataset.reference];

        if (!reference) return;


        referenceElements.label.textContent =
            reference.label;


        referenceElements.initials.textContent =
            reference.initials;


        referenceElements.name.textContent =
            reference.name;


        referenceElements.role.innerHTML =
            reference.role.replace(/\n/g, "<br>");


        referenceElements.sourceName.textContent =
            reference.sourceName;


        referenceElements.sourceTitle.textContent =
            reference.sourceTitle;


        referenceElements.quote.textContent =
            reference.quote;


        referenceElements.tag1.textContent =
            reference.tags[0];


        referenceElements.tag2.textContent =
            reference.tags[1];


        referenceElements.tag3.textContent =
            reference.tags[2];


        recommendationsModal.close();

        referenceModal.showModal();

        body.classList.add("modal-open");

    });

});


/* Back to recommendations */

document
    .getElementById("back-references")
    .addEventListener("click", () => {

        referenceModal.close();

        recommendationsModal.showModal();

        body.classList.add("modal-open");

    });


/* =========================================================
   REDUCED MOTION
   CSS handles the actual animation removal.
========================================================= */
