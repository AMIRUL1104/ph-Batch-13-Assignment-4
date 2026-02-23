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

// update button styles
function updateButtonStyle(selection) {
  let currentSelectedBtn = document.getElementById(`${selection}`);
  currentSelectedBtn.classList.add("bg-indigo-600", "text-white");
}
