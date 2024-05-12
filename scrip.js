// Sample data for fulfilled donation posts
const fulfilledDonationPosts = [
  {
    id: 1,
    title: "Clothes Donation",
    description: "A bag of clothes in good condition.",
    donor: "John Doe",
  },
  {
    id: 2,
    title: "School Supplies Donation",
    description: "Various school supplies including notebooks and pencils.",
    donor: "Jane Smith",
  },
];

// Function to display donation details
function displayDonationDetails() {
  const donationDetailsContainer = document.getElementById("donation-details");

  fulfilledDonationPosts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("donation");
    postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p><strong>Description:</strong> ${post.description}</p>
            <p><strong>Donor:</strong> ${post.donor}</p>
            <button class="view-details-btn" onclick="viewDetails(${post.id})">View Details</button>
        `;
    donationDetailsContainer.appendChild(postElement);
  });
}

// Call the function to display donation details when the page loads
window.onload = displayDonationDetails;

// Function to view details
function viewDetails(id) {
  // Find the donation post with the given id
  const donationPost = fulfilledDonationPosts.find((post) => post.id === id);

  // Display details in modal
  const modal = document.getElementById("myModal");
  const modalContent = document.getElementById("modal-content");
  modal.style.display = "block";
  modalContent.innerHTML = `
        <h2>${donationPost.title}</h2>
        <p><strong>Description:</strong> ${donationPost.description}</p>
        <p><strong>Donor:</strong> ${donationPost.donor}</p>
    `;
}

// Close the modal when the close button is clicked
const closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function () {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
};

// Close the modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
