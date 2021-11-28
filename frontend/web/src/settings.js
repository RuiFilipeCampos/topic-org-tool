


var BACKEND_URL = "localhost:3000/"








class Database{
    constructor(){
      this.data = {
        sections:[
          {
            id:0,
            title:"Inbox",
            description: "A place to put random stuff so I can organize them later.",
            topics:[
              {
                title:"Random",
                description: "For those quick entries that I don't wanna think about."
              },
              {
                title:"Urgent",
                description: "Stuff that needs to be organized as soon as possible."
              },
              {
                title:"Normal",
                description: "Fo"
              },
              {
                title:"Not important",
                description: "Eh, do it when you can :P"
              },
            ]
          },
          {
            id:1,
            title:"Documents",
            description: "A place to put my documents.",
            topics:[
              {
                title:"Personal",
                description: "Personal documents."
              },
              {
                title:"Personal",
                description: "Personal documents."
              },
            ]
          },
          {
            id:2,
            title:"Agenda",
            description: "Description of section 3",
            topics:[
              {
                title:"Calendsadar",
                description: "Whatever"
              }
            ]
          },
        ]
      }
    }

    get_filtered_topics(word, section_id){
        if (word == ""){
            return this.data.sections[section_id].topics
        }
        let section = this.data.sections[section_id]
        let new_topics = []
        for (let i = 0; i < section.topics.length; ++i){
            if (section.topics[i].title.includes(word)){
                new_topics.push(
                    section.topics[i]
                )
            }
        }
        return new_topics
    }
  
    get_section(id){
      return this.data.sections[id]
    }
  
    get_section_list(word){
        let section_list = []
        if (word == undefined){
            this.data.sections.forEach(function (value, i) {
                section_list.push(value.title)
            });
        } else {
            this.data.sections.forEach(function (value, i) {
                if (value.title.includes(word)){
                    section_list.push(value.title)
                }
            });
        }
        return section_list;
    }

    get_section_by_name(name){
        for (let i = 0; i < this.data.sections.length; ++i){
            if (this.data.sections[i].title != name ){
                continue;
            }

            return this.data.sections[i] 
        }
    }
  }
  

  export var db = new Database();