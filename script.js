let clickCounter = 0;

function closeTheTab() {
  // make a modal later to make this confirm window attractive and more offensive
  const confirmVar = confirm("Get off the internet, n00b!");
  confirmVar ? window.close() : false;
}

function pewdSubFunc() {
  const pewdSubCheckbox = document.getElementById("subscribed");
  const pewdSubText = document.getElementById("pewd-sub-text");

  pewdSubCheckbox.checked
    ? (pewdSubText.style.display = "block")
    : (pewdSubText.style.display = "none");
}

function disableLameOptions() {
  clickCounter += 1;

  const faceb00k = document.getElementById("checkbox-faceb00k");
  const instagerm = document.getElementById("checkbox-instagerm");

  if (faceb00k.checked) {
    faceb00k.checked = false;
    faceb00k.setAttribute("disabled", "false");
  }

  if (instagerm.checked) {
    instagerm.checked = false;
    instagerm.setAttribute("disabled", "false");
  }

  if (clickCounter === 1) {
    document.getElementById("thanos-message").textContent =
      "You do not deserve any memes!";
  }
  if (clickCounter === 2) {
    const elem = document.getElementById("thanos-img");
    elem.setAttribute(
      "src",
      "https://media.giphy.com/media/goSX53ZlxRhKg/giphy.gif"
    );
    document.getElementById("thanos-message").textContent =
      "You erred twice, human! There will be no mercy!";
  }

  showModal();
}

function showLegendaryStatus() {
  const googleImages = document.getElementById("GoogleImg");
  const googleAssistant = document.getElementById("Assistant");
  const legend = document.getElementById("legend");
  const ultraLegend = document.getElementById("ultra-legend");

  googleImages.checked
    ? (legend.style.display = "inline-block")
    : (legend.style.display = "none");
  googleAssistant.checked
    ? (ultraLegend.style.display = "inline-block")
    : (ultraLegend.style.display = "none");
}

let locatorClickCounter = 0;
const locator = function() {
  if (document.getElementById("antivaxxer").checked) {
    const img = document.getElementById("thanos-img");
    const message = document.getElementById("thanos-message");

    img.style.display = "none";
    span.style.display = "none";
    // message.textContent = "Illuminati wants to know your location!";
    message.style.cssText = "border: none;";

    if (locatorClickCounter === 0) {
      locatorClickCounter++;
      message.textContent = "Illuminati wants to know your location!";
      showModal();
      setTimeout(() => {
        message.textContent =
          "Illuminati now has your location information! Thank you!";
      }, 2000);

      setTimeout(() => {
        modal.style.display = "none";
        img.style.display = "block";
        span.style.display = "block";
      }, 4000);
    } else if (locatorClickCounter > 0) {
      message.textContent =
        "Illuminati already has your location information! Thank you!";
      showModal();
      setTimeout(() => {
        modal.style.display = "none";
        img.style.display = "block";
        span.style.display = "block";
      }, 2000);
    }
  }
};

// MODAL

const modal = document.getElementById("thanos-modal");
const span = document.getElementById("close");

function showModal() {
  modal.style.display = "block";
}

const closeModal = function(e) {
  if (e.target === span || e.target === modal) {
    modal.style.display = "none";
  }
};

document.body.addEventListener("click", closeModal);
