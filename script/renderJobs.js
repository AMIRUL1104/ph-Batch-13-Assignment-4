// Loop through job posts and create job cards

function renderJobs(jobPosts) {
  for (const job of jobPosts) {
    const jobCard = document.createElement("div");
    jobCard.classList.add(
      "card",
      "bg-base-100",
      "shadow-sm",
      "rounded-[8px]",
      "hover:shadow-lg",
      "transition-shadow",
      "duration-500",
      "ease-linear",
      "hover:-translate-y-2",
    );
    jobCard.innerHTML = `
              <div class="card-body space-y-3">
            <div>
              <h2 class="card-title text-[#002C5C]">${job.company} </h2>
              <p class="text-[#64748B]">${job.position} </p>
            </div>

            <div class="text-[#64748B] flex flex-row gap-3">
              ${job.location}
              <ul
                class="list-disc list-inside text-[#64748B] flex flex-row gap-3"
              >
                <li>${job.type} </li>
                <li>${job.salary} </li>
              </ul>
            </div>

          
            <div>
              <p
                class="bg-indigo-100 rounded-sm w-28 px-3 py-1.5 font-medium text-[#002C5C]"
              >
                ${job.status}
              </p>

              <p>
                ${job.description}
              </p>
            </div>

            <!-- toggle button -->
            <div class="flex flex-row gap-3">
              <button id="${job.id} " onclick="toggleJobStatus('interview',event)"
                class="text-green-600 border-2 rounded-sm border-green-600 px-3 py-1.5 font-medium hover:bg-green-600 hover:text-white"
              >
                Interview
              </button>
              <button id="${job.id} "  onclick="toggleJobStatus('rejected', event)"
                class="text-red-600 border-2 rounded-sm border-red-600 px-3 py-1.5 font-medium hover:bg-red-600 hover:text-white"
              >
                Rejected
              </button>
            </div>
          </div>
            `;
    jobContainer.appendChild(jobCard);
  }
}
