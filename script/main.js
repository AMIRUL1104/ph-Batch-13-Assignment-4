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

const { totalJob } = countJobs();
document.getElementById("jobOfJobs").innerText = `${totalJob} jobs`;

// Render job posts
const jobContainer = document.getElementById("job-container");

// render jobs on page load
renderJobs(jobPosts);

// selection stored in a variable to be used in toggleAvailableJob function
let selectionStatus = "all";

// update button styles on selection tab
updateButtonStyle(selectionStatus);

// Toggle available job posts based on status
function toggleAvailableJob(selection) {
  switch (selection) {
    case "all":
      {
        // remove previous selection button styles
        removePreviousBtnStyle(selectionStatus);

        updateButtonStyle(selection);

        renderAllJob();

        selectionStatus = "all";

        // update job count text
        const { totalJob } = countJobs();
        document.getElementById("jobOfJobs").innerText = `${totalJob} jobs`;
      }
      break;
    case "interview":
      {
        // remove previous selection button styles
        removePreviousBtnStyle(selectionStatus);

        updateButtonStyle(selection);

        renderInterviewJob();

        selectionStatus = "interview";

        const { totalJob, interviewJob } = countJobs();
        document.getElementById("jobOfJobs").innerText =
          `${interviewJob} of ${totalJob} jobs`;
      }
      break;
    case "rejected":
      {
        // remove previous selection button styles
        removePreviousBtnStyle(selectionStatus);

        updateButtonStyle(selection);

        renderRejectedJob();

        selectionStatus = "rejected";

        const { totalJob, rejectedJob } = countJobs();
        document.getElementById("jobOfJobs").innerText =
          `${rejectedJob} of ${totalJob} jobs`;
      }
      break;
    default:
      {
        renderAllJob();
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

  // re-render jobs after status update
  if (selectionStatus === "interview") {
    document.getElementById("jobOfJobs").innerText =
      `${interviewJob} of ${totalJob} jobs`;

    renderInterviewJob();
  } else if (selectionStatus === "rejected") {
    document.getElementById("jobOfJobs").innerText =
      `${rejectedJob} of ${totalJob} jobs`;

    renderRejectedJob();
  } else {
    renderAllJob();
  }
}

function handleDelete(event) {
  const jobId = event.target.id;
  jobPosts = jobPosts.filter((job) => job.id != jobId);

  const { totalJob, interviewJob, rejectedJob } = countJobs();

  // re-render jobs after deletion
  if (selectionStatus === "interview") {
    renderInterviewJob();
  } else if (selectionStatus === "rejected") {
    renderRejectedJob();
  } else {
    renderAllJob();
  }

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
