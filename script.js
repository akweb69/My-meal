function updateClock() {
  const clockElement = document.getElementById("clock");
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const amPm = hours >= 12 ? "PM" : "AM";

  // Convert 24-hour format to 12-hour format
  hours = hours % 12 || 12; // If hours is 0, set it to 12

  // Add leading zeros if needed
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  // Display the time
  clockElement.textContent = `${hours}:${minutes}:${seconds} ${amPm}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock display on page load
updateClock();

// !loader
function loader() {
  const loader = document.getElementById("spiner");
  loader.classList.remove("hidden");
  loader.classList.add("flex");

  setTimeout(() => {
    loader.classList.remove("flex");
    loader.classList.add("hidden");
    console.log("hi!");
  }, 3000);
}

// ! modal
function openModal() {
  const btn1 = document.getElementById("btn1");
  const modal = document.getElementById("modal1");
  const cofirmBtn = document.getElementById("confirm");
  btn1.addEventListener("click", function () {
    modal.classList.remove("hidden");
    btn1.classList.add("hidden");
  });
  cofirmBtn.addEventListener("click", function () {
    btn1.classList.remove("hidden");
    modal.classList.add("hidden");
    loader();

    // !
    setTimeout(() => {
      const mealcard = document.createElement("div");
      const mealCardSection = document.getElementById("meal-card-box");
      mealcard.innerHTML = `
     <div
              class="w-11/12 mx-auto p-2 border grid grid-cols-7 items-center"
            >
              <div class="h-full col-span-1">
                <h1 class="text-xl font-bold p-3 text-center bg-violet-600">
                  01 Oct
                </h1>
              </div>
              <div
                class="bg-violet-500 h-full col-span-4 grid grid-cols-3 items-center"
              >
                <div
                  class="flex font-semibold flex-col items-center justify-center border-r"
                >
                  <p>Sokal</p>
                  <p>0.5</p>
                </div>
                <div
                  class="flex font-semibold flex-col items-center justify-center border-r"
                >
                  <p>Dupur</p>
                  <p>0.5</p>
                </div>
                <div
                  class="flex flex-col font-semibold items-center justify-center"
                >
                  <p>Rat</p>
                  <p>0.5</p>
                </div>
              </div>
              <div class="col-span-2 h-full bg-violet-600 grid grid-cols-2">
                <div
                  class="flex text-lg font-semibold flex-col border-r justify-center items-center"
                >
                  <p>Today</p>
                  <p>10.5</p>
                </div>
                <div
                  class="flex text-lg font-semibold flex-col justify-center items-center"
                >
                  <p>Total</p>
                  <p>10.5</p>
                </div>
              </div>
            </div>
    `;

      mealCardSection.appendChild(mealcard);
    }, 3000);
  });
}
openModal();
