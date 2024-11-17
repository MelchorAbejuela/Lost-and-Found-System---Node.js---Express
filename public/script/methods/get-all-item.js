export async function getAllItems() {
  const itemParentContainer = document.querySelector(
    ".lost-item-main-container"
  );

  await axios
    .get("/api/items")
    .then((response) => {
      const lostItem = response.data.map((item) => {
        return ` <div class="main-item-container">
                    <p>${item.itemName}</p>
                    <p>${item.category}</p>
                    <p>${item.timeStampFound}</p>
                    <p>${item.reportedBy}</p>
                    <button><img src="../img/edit.png" alt=""></button>
                </div>`;
      });
      itemParentContainer.innerHTML = lostItem;
    })
    .catch((error) => {
      console.log(error);
    });
}
