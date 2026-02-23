// Mock data for job posts
let jobPosts = [
  {
    id: 1,
    company: "Google",
    position: "Software Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    status: "Not applied",
    description:
      "Develop and maintain web applications using modern frameworks and technologies. Collaborate with cross-functional teams to design scalable solutions and improve user experience.",
  },
  {
    id: 2,
    company: "Meta",
    position: "Frontend Developer",
    location: "Menlo Park, CA",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    status: "Not applied",
    description:
      "Build and optimize user interfaces for Meta's social media platforms. Work closely with designers and backend engineers to create seamless and engaging user experiences.",
  },
  {
    id: 3,
    company: "Amazon",
    position: "Backend Engineer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    status: "Not applied",
    description:
      "Design and implement scalable backend services for Amazon's e-commerce platform. Collaborate with frontend teams to ensure efficient data flow and high performance.",
  },
  {
    id: 4,
    company: "Netflix",
    position: "Full Stack Developer",
    location: "Remote",
    type: "Contract",
    salary: "$140,000 - $190,000",
    status: "Not applied",
    description:
      "Work on both frontend and backend components of Netflix's streaming service. Develop new features, optimize performance, and ensure a seamless user experience across devices.",
  },
  {
    id: 5,
    company: "Microsoft",
    position: "Cloud Solutions Architect",
    location: "Redmond, WA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    status: "Not applied",
    description:
      "Design and implement cloud-based solutions using Microsoft Azure. Collaborate with clients to understand their needs and provide scalable, secure, and cost-effective cloud architectures.",
  },
  {
    id: 6,
    company: "Tesla",
    position: "Embedded Systems Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$115,000 - $155,000",
    status: "Not applied",
    description:
      "Develop and maintain embedded software for Tesla's electric vehicles. Work closely with hardware teams to ensure seamless integration and optimal performance of vehicle systems.",
  },
  {
    id: 7,
    company: "Spotify",
    position: "Mobile App Developer (iOS)",
    location: "Remote",
    type: "Full-time",
    salary: "$105,000 - $145,000",
    status: "Not applied",
    description:
      "Design and develop the iOS version of Spotify's music streaming app. Collaborate with cross-functional teams to create new features and enhance the user experience on mobile devices.",
  },
  {
    id: 8,
    company: "Twitter (X)",
    position: "Site Reliability Engineer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$135,000 - $180,000",
    status: "Not applied",
    description:
      "Ensure the reliability and scalability of Twitter's platform. Monitor system performance, troubleshoot issues, and implement solutions to maintain high availability and optimal user experience.",
  },
  {
    id: 9,
    company: "Adobe",
    position: "UI/UX Engineer",
    location: "San Jose, CA",
    type: "Part-time",
    salary: "$80,000 - $110,000",
    status: "Not applied",
    description:
      "Design and implement user interfaces for Adobe's creative software suite. Collaborate with designers and product teams to create intuitive and visually appealing user experiences.",
  },
  {
    id: 10,
    company: "Stripe",
    position: "API Specialist",
    location: "Remote",
    type: "Full-time",
    salary: "$145,000 - $200,000",
    status: "Not applied",
    description:
      "Develop and maintain APIs for Stripe's payment processing platform. Work closely with developers and clients to ensure seamless integration and optimal performance of API services.",
  },
];

// countJobs();

const { totalJob } = countJobs();
document.getElementById("jobOfJobs").innerText = `${totalJob} jobs`;

// Render job posts
const jobContainer = document.getElementById("job-container");

// render jobs on page load
renderJobs(jobPosts);

// selection stored in a variable to be used in toggleAvailableJob function
let selectionStatus = "all";

// update button styles
let currentSelectedBtn = document.getElementById(`${selectionStatus}`);
currentSelectedBtn.classList.add("bg-indigo-600", "text-white");

// Toggle available job posts based on status
function toggleAvailableJob(selection) {
  switch (selection) {
    case "all":
      {
        // remove previous selection button styles
        let previousSelectedBtn = document.getElementById(`${selectionStatus}`);
        previousSelectedBtn.classList.remove("bg-indigo-600", "text-white");

        // re-render all jobs
        jobContainer.innerHTML = "";
        renderJobs(jobPosts);

        // reset selection to all after filtering interview or rejected jobs
        selectionStatus = "all";

        // update job count text
        const { totalJob } = countJobs();

        document.getElementById("jobOfJobs").innerText = `${totalJob} jobs`;

        // update button styles
        let currentSelectedBtn = document.getElementById(`${selection}`);
        currentSelectedBtn.classList.add("bg-indigo-600", "text-white");
      }
      break;
    case "interview":
      {
        // remove previous selection button styles
        let previousSelectedBtn = document.getElementById(`${selectionStatus}`);
        previousSelectedBtn.classList.remove("bg-indigo-600", "text-white");

        let interviewJobs = jobPosts.filter(
          (job) => job.status === "interview",
        );
        const { totalJob, interviewJob } = countJobs();
        jobContainer.innerHTML = "";
        if (interviewJob === 0) {
          const jobCard = document.createElement("div");
          jobCard.classList.add(
            "card",
            "bg-base-100",
            "shadow-sm",
            "rounded-[8px]",
            "hover:shadow-xl",
            "transition-shadow",
            "duration-200",
            "ease-linear",
          );
          jobCard.innerHTML = `
              <div class="card-body space-y-3">
            <div class="flex flex-col justify-between items-center">
              <div class="w-[100px] mb-5">
                 <img src="jobs.png" alt="no job found" class="w-full">
              </div>
               <h2 class="card-title text-[#002C5C] text-xl">No job found </h2>
               <p class="text-[#64748B]">Check back soon for new job opportunities</p>
            </div>
                  
                  `;

          jobContainer.appendChild(jobCard);
        } else {
          renderJobs(interviewJobs);
        }

        selectionStatus = "interview";

        document.getElementById("jobOfJobs").innerText =
          `${interviewJob} of ${totalJob} jobs`;

        // update button styles
        let currentSelectedBtn = document.getElementById(`${selection}`);
        currentSelectedBtn.classList.add("bg-indigo-600", "text-white");
      }
      break;
    case "rejected":
      {
        // remove previous selection button styles
        let previousSelectedBtn = document.getElementById(`${selectionStatus}`);
        previousSelectedBtn.classList.remove("bg-indigo-600", "text-white");

        const { totalJob, rejectedJob } = countJobs();
        jobContainer.innerHTML = "";
        let rejectedJobs = jobPosts.filter((job) => job.status === "rejected");
        if (rejectedJob === 0) {
          const jobCard = document.createElement("div");
          jobCard.classList.add(
            "card",
            "bg-base-100",
            "shadow-sm",
            "rounded-[8px]",
            "hover:shadow-xl",
            "transition-shadow",
            "duration-200",
            "ease-linear",
          );
          jobCard.innerHTML = `
              <div class="card-body space-y-3">
            <div class="flex flex-col justify-between items-center">
              <div class="w-[100px] mb-5">
                 <img src="jobs.png" alt="no job found" class="w-full">
              </div>
               <h2 class="card-title text-[#002C5C] text-xl">No job found </h2>
               <p class="text-[#64748B]">Check back soon for new job opportunities</p>
            </div>
                  
                  `;

          jobContainer.appendChild(jobCard);
        } else {
          renderJobs(rejectedJobs);
        }
        selectionStatus = "rejected";

        document.getElementById("jobOfJobs").innerText =
          `${rejectedJob} of ${totalJob} jobs`;

        // update button styles
        let currentSelectedBtn = document.getElementById(`${selection}`);
        currentSelectedBtn.classList.add("bg-indigo-600", "text-white");
      }
      break;
    default:
      {
        jobContainer.innerHTML = "";
        renderJobs(jobPosts);
        const { totalJob } = countJobs();
        if (totalJob === 0) {
          const jobCard = document.createElement("div");
          jobCard.classList.add(
            "card",
            "bg-base-100",
            "shadow-sm",
            "rounded-[8px]",
            "hover:shadow-xl",
            "transition-shadow",
            "duration-200",
            "ease-linear",
          );
          jobCard.innerHTML = `
              <div class="card-body space-y-3">
            <div class="flex flex-col justify-between items-center">
              <div class="w-[100px] mb-5">
                 <img src="jobs.png" alt="no job found" class="w-full">
              </div>
               <h2 class="card-title text-[#002C5C] text-xl">No job found </h2>
               <p class="text-[#64748B]">Check back soon for new job opportunities</p>
            </div>
                  
                  `;

          jobContainer.appendChild(jobCard);
        } else {
          renderJobs(jobPosts);
        }

        selectionStatus = "all";
      }
      break;
  }
}

// Toggle job status to interview or rejected
function toggleJobStatus(status, event) {
  let updated = jobPosts.map((job) => {
    if (job.id == event.target.id) {
      job.status = status;
    }
    return job;
  });

  jobPosts = updated;
  const { totalJob, interviewJob, rejectedJob } = countJobs();

  if (selectionStatus === "interview") {
    let interviewJobs = jobPosts.filter((job) => job.status === "interview");
    // re-render jobs after status update
    jobContainer.innerHTML = "";
    if (interviewJob === 0) {
      const jobCard = document.createElement("div");
      jobCard.classList.add(
        "card",
        "bg-base-100",
        "shadow-sm",
        "rounded-[8px]",
        "hover:shadow-xl",
        "transition-shadow",
        "duration-200",
        "ease-linear",
      );
      jobCard.innerHTML = `
              <div class="card-body space-y-3">
            <div class="flex flex-col justify-between items-center">
              <div class="w-[100px] mb-5">
                 <img src="jobs.png" alt="no job found" class="w-full">
              </div>
               <h2 class="card-title text-[#002C5C] text-xl">No job found </h2>
               <p class="text-[#64748B]">Check back soon for new job opportunities</p>
            </div>
                  
                  `;

      jobContainer.appendChild(jobCard);
    } else {
      renderJobs(interviewJobs);
    }

    // const { totalJob, interviewJob } = countJobs();
    document.getElementById("jobOfJobs").innerText =
      `${interviewJob} of ${totalJob} jobs`;
  } else if (selectionStatus === "rejected") {
    let rejectedJobs = jobPosts.filter((job) => job.status === "rejected");
    // re-render jobs after status update
    jobContainer.innerHTML = "";
    if (rejectedJob === 0) {
      const jobCard = document.createElement("div");
      jobCard.classList.add(
        "card",
        "bg-base-100",
        "shadow-sm",
        "rounded-[8px]",
        "hover:shadow-xl",
        "transition-shadow",
        "duration-200",
        "ease-linear",
      );
      jobCard.innerHTML = `
              <div class="card-body space-y-3">
            <div class="flex flex-col justify-between items-center">
              <div class="w-[100px] mb-5">
                 <img src="jobs.png" alt="no job found" class="w-full">
              </div>
               <h2 class="card-title text-[#002C5C] text-xl">No job found </h2>
               <p class="text-[#64748B]">Check back soon for new job opportunities</p>
            </div>
                  
                  `;

      jobContainer.appendChild(jobCard);
    } else {
      renderJobs(rejectedJobs);
    }

    // const { totalJob, rejectedJob } = countJobs();
    document.getElementById("jobOfJobs").innerText =
      `${rejectedJob} of ${totalJob} jobs`;
  } else {
    // re-render jobs after status update
    jobContainer.innerHTML = "";

    if (totalJob === 0) {
      const jobCard = document.createElement("div");
      jobCard.classList.add(
        "card",
        "bg-base-100",
        "shadow-sm",
        "rounded-[8px]",
        "hover:shadow-xl",
        "transition-shadow",
        "duration-200",
        "ease-linear",
      );
      jobCard.innerHTML = `
              <div class="card-body space-y-3">
            <div class="flex flex-col justify-between items-center">
              <div class="w-[100px] mb-5">
                 <img src="jobs.png" alt="no job found" class="w-full">
              </div>
               <h2 class="card-title text-[#002C5C] text-xl">No job found </h2>
               <p class="text-[#64748B]">Check back soon for new job opportunities</p>
            </div>
                  
                  `;

      jobContainer.appendChild(jobCard);
    } else {
      renderJobs(jobPosts);
    }
  }
}

function handleDelete(event) {
  const jobId = event.target.id;
  jobPosts = jobPosts.filter((job) => job.id != jobId);

  // re-render jobs after deletion
  if (selectionStatus === "interview") {
    let interviewJobs = jobPosts.filter((job) => job.status === "interview");
    jobContainer.innerHTML = "";
    renderJobs(interviewJobs);
  } else if (selectionStatus === "rejected") {
    let rejectedJobs = jobPosts.filter((job) => job.status === "rejected");
    jobContainer.innerHTML = "";
    renderJobs(rejectedJobs);
  } else {
    jobContainer.innerHTML = "";
    renderJobs(jobPosts);
  }

  const { totalJob, interviewJob, rejectedJob } = countJobs();
  if (selectionStatus === "interview") {
    document.getElementById("jobOfJobs").innerText =
      `${interviewJob} of ${totalJob} jobs`;
  } else if (selectionStatus === "rejected") {
    document.getElementById("jobOfJobs").innerText =
      `${rejectedJob} of ${totalJob} jobs`;
  } else {
    document.getElementById("jobOfJobs").innerText = `${totalJob} jobs`;
  }
}
