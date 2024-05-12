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
  // Add more sample data if needed
];

// Function to display fulfilled donation posts
function displayFulfilledDonationPosts() {
  const fulfilledPostsSection = document.getElementById(
    "fulfilled-donation-posts"
  );

  fulfilledDonationPosts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
            <h4>${post.title}</h4>
            <p><strong>Description:</strong> ${post.description}</p>
            <p><strong>Donor:</strong> ${post.donor}</p>
            <!-- Add a button or link to view details -->
            <button class="view-details-btn" onclick="viewDetails(${post.id})">View Details</button>
        `;
    fulfilledPostsSection.appendChild(postElement);
  });
}

// Call the function to display fulfilled donation posts when the page loads
window.onload = displayFulfilledDonationPosts;

// Function to view details
function viewDetails(id) {
  // Find the donation post with the given id
  const donationPost = fulfilledDonationPosts.find((post) => post.id === id);

  // Display details in modal or another page (you can choose either option)
  // For modal:
  const modal = document.getElementById("myModal");
  const modalContent = document.getElementById("modal-content");
  modal.style.display = "block";
  modalContent.innerHTML = `
        <h2>${donationPost.title}</h2>
        <p><strong>Description:</strong> ${donationPost.description}</p>
        <p><strong>Donor:</strong> ${donationPost.donor}</p>
    `;

  // For another page: You can redirect to a new page with the details using window.location.href or load the details dynamically using AJAX.
}

// Function to handle form submission and display donor contributions
document
  .getElementById("donor-contributions-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const donorName = document.getElementById("donor-name").value;
    displayDonorContributions(donorName);
  });

// Function to display donor contributions
function displayDonorContributions(donorName) {
  const contributions = fulfilledDonationPosts.filter(
    (post) => post.donor === donorName
  );

  if (contributions.length === 0) {
    alert(`No contributions found for ${donorName}.`);
    return;
  }

  let contributionsText = `Contributions made by ${donorName}:\n`;
  contributions.forEach((contribution) => {
    contributionsText += `- ${contribution.title}\n`;
  });
  alert(contributionsText);
}

// Close the modal when the close button is clicked
const closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Close the modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
