export async function createItem() {
  const itemNameInput = document.querySelector(".item-name");
  const categoryInput = document.querySelector(".category");
  const timeStampFoundInput = document.querySelector(".time-stamp-found");
  const reportedByInput = document.querySelector(".reported-by");

  const messageContainer = document.querySelector(".message-form-container");
  const submitButton = document.querySelector(".submit-form-button");

  submitButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const itemName = itemNameInput.value;
    const category = categoryInput.value;
    const timeStampFound = timeStampFoundInput.value;
    const reportedBy = reportedByInput.value;

    if (!itemName) {
      messageContainer.textContent = `Enter Item Name`;
    } else if (!category) {
      messageContainer.textContent = `Enter Category`;
    } else if (!timeStampFound) {
      messageContainer.textContent = `Enter Time Stamp Found`;
    } else if (!reportedBy) {
      messageContainer.textContent = `Enter Name of Reporter`;
    } else {
      try {
        await axios
          .post("/api/items", {
            itemName: itemName,
            category: category,
            timeStampFound: timeStampFound,
            reportedBy: reportedBy,
          })
          .then((response) => {
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    }
  });
}
