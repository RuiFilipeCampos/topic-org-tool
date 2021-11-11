
export var section_bar = [
    "Section 1",
    "Section 2",
    "Section 3",
    "Agenda",
]



export var current_section = {
    name:"Agenda",
    topics:[
        {
            title:"Calendar",
            description:"Threads organized into years, months and days.",
        },

        {
            title:"Journal",
            description:"A place for me to collect my thoughts",
        },

        {
            title:"Notes",
            description:"Just some random notes.",
        },
    ]
}

export var current_topic = "ads"

export var TOPICS_TO_RENDER = current_section.topics


export function topic_search(name){
    TOPICS_TO_RENDER =  [{
        title:"Notes",
        description:"Just some random notes.",
    },]
}
