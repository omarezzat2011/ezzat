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
          <hr>
       `;
    fulfilledPostsSection.appendChild(postElement);
  });
}

// Call the function to display fulfilled donation posts when the page loads
window.onload = displayFulfilledDonationPosts;
