const Projects = [
    {
        name : "Contact Management System Project on C language",
        about : "In this project, you can do the operations like add a new contact of a person with their name, phone number, address and email. Listing all the contacts which are stored in the contact file",
        img : "data:image/jpeg;base64,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",
        gitrepo : "https://github.com/Yarlagadda-saimanoj/Contact-Management-System-Project-in-C",
        blog : " ",
        tech_stack : "C Language",
        tech_stackicons : [
            `<img src="https://icons8.com/icon/40669/c%2B%2" />`
        ],
        project_link : "https://github.com/Yarlagadda-saimanoj/Contact-Management-System-Project-in-C",
        project_type : "Individual Project"
    },
    
    {
        name : "Online Bus Booking System Project On C++ Language",
        about : "A new way of delivering a Service",
        img : "https://st.redbus.in/Images/India/ContextualLogin/generic_banner_Ind.png",
        gitrepo : "https://github.com/Yarlagadda-saimanoj/Bus--BookingSystem_Project",
        blog : "",
        tech_stack : "C++",
        tech_stackicons : [
            `<img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" />`
            
            
        ],
        project_link : "https://github.com/Yarlagadda-saimanoj/Bus--BookingSystem_Project",
        project_type : "Individual Project"

    },

    {
        name : "Python BMI Application",
        about : "Python-BMI-App is a simple but powerful Body Mass Index (BMI) calculator built using Python and Streamlit.",
        img : "https://www.dyna-nutrition.com/wp-content/uploads/2018/10/bmi-chart.jpg",
        gitrepo : "https://github.com/Yarlagadda-saimanoj/Python-BMI-App",
        blog : "",
        tech_stack : "Python",
        tech_stackicons : [
            `<img src="https://upload.wikimedia.org/wikipedia/commons/archive/c/c3/20220821153136%21Python-logo-notext.svg" />`
            
        ],
        project_link : "https://github.com/Yarlagadda-saimanoj/Python-BMI-App",
        project_type : "Individual Project"

    },
    
    
    {
        name : "4 star on HackerRank Platform",
        about : " ",
        img : "https://cdn-images-1.medium.com/max/2600/1*UGT1Rh9xLww3JeIDR1F0RQ.png",
        gitrepo : "https://www.hackerrank.com/RA2111026010202",
        blog : "",
        tech_stack : "C++",
        tech_stackicons : [
            `<img src="https://cdn-images-1.medium.com/max/2600/1*UGT1Rh9xLww3JeIDR1F0RQ.png" />`
            
        ],
        project_link : "https://www.hackerrank.com/RA2111026010202",
        project_type : "Individual Project"

    },
    
    {
        name : "3 star on CodeChef Platform",
        about : " ",
        img : "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Codechef%28new%29_logo.svg/1200px-Codechef%28new%29_logo.svg.png",
        gitrepo : "https://www.codechef.com/users/srmbtech_58",
        blog : "",
        tech_stack : "C++",
        tech_stackicons : [
            `<img src=" " />`
            
        ],
        project_link : "https://www.codechef.com/users/srmbtech_58",
        project_type : "Individual Project"

    }
]


let projects__container = document.getElementById("projects--container")

Projects.forEach(pro => {
    let main = document.createElement("div")
    main.setAttribute("class", "portfolio-item padd-15")
    main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="">
      <h3 class="project-name"><b>${pro.name}</b></h3> <br/>
      <h4 class="project-name project__about">${pro.about}</h4>
      <a href=${pro.project_link} target="_blank" class="see-project">Live💻</a>
      <a href=${pro.gitrepo} target="_blank" class="github-repo">GitHub</a>
      </div>
      <br/>
      <h3 class="project-name techcen"><b>Tech Stack</b></h3>
      <span>${pro.tech_stackicons[0] ? pro.tech_stackicons[0] : '' }
      ${pro.tech_stackicons[1] ? pro.tech_stackicons[1] : ''}
      ${pro.tech_stackicons[2] ? pro.tech_stackicons[2] : ''}
      ${pro.tech_stackicons[3] ? pro.tech_stackicons[3] : ''}
      ${pro.tech_stackicons[4] ? pro.tech_stackicons[4] : ''}
      ${pro.tech_stackicons[5] ? pro.tech_stackicons[5] : ''}
      ${pro.tech_stackicons[6] ? pro.tech_stackicons[6] : ''}
      ${pro.tech_stackicons[7] ? pro.tech_stackicons[7] : ''}
      ${pro.tech_stackicons[8] ? pro.tech_stackicons[8] : ''}
      ${pro.tech_stackicons[9] ? pro.tech_stackicons[9] : ''}
      </span>
      
    </div>
  </div>
    `
    projects__container.append(main)

})
