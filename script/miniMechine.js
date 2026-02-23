// job post data
function countJobs() {
  // Display total job count
  const totalJob = jobPosts.length;
  document.getElementById("totalJob").innerText = totalJob;

  // count interview and rejected jobs
  const interviewJob = jobPosts.filter(
    (job) => job.status === "interview",
  ).length;
  const rejectedJob = jobPosts.filter(
    (job) => job.status === "rejected",
  ).length;
  document.getElementById("interviewJob").innerText = interviewJob;
  document.getElementById("rejectedJob").innerText = rejectedJob;

  return { totalJob, interviewJob, rejectedJob };
}

// remove previous selection button styles
function removePreviousBtnStyle(selectionStatus) {
  let previousSelectedBtn = document.getElementById(`${selectionStatus}`);
  previousSelectedBtn.classList.remove("bg-indigo-600", "text-white");
}

// update button styles
function updateButtonStyle(selection) {
  let currentSelectedBtn = document.getElementById(`${selection}`);
  currentSelectedBtn.classList.add("bg-indigo-600", "text-white");
}

// render individual job cards
function renderAllJob() {
  // re-render all jobs
  const { totalJob } = countJobs();
  clearJobContainer();
  if (totalJob === 0) {
    noJobFound();
  } else {
    renderJobs(jobPosts);
  }
}

// render individual job cards
function renderInterviewJob() {
  const { interviewJob } = countJobs();

  clearJobContainer();
  if (interviewJob === 0) {
    noJobFound();
  } else {
    let interviewJobs = jobPosts.filter((job) => job.status === "interview");
    renderJobs(interviewJobs);
  }
}

// render individual job cards
function renderRejectedJob() {
  const { rejectedJob } = countJobs();

  clearJobContainer();
  if (rejectedJob === 0) {
    noJobFound();
  } else {
    let rejectedJobs = jobPosts.filter((job) => job.status === "rejected");
    renderJobs(rejectedJobs);
  }
}
