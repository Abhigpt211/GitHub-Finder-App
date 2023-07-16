const searchForm = document.getElementById("search-form");
const usernameInput = document.getElementById("username-input");
const userProfile = document.getElementById("user-profile");
const avatar = document.getElementById("avatar");
const nameElement = document.getElementById("name");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = usernameInput.value.trim();

  if (username === "") {
    alert("Please enter a GitHub username.");
    return;
  }

  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
      if (data.message === "Not Found") {
        alert("User not found.");
        return;
      }

      avatar.src = data.avatar_url;
      nameElement.textContent = data.name;

      userProfile.style.display = "block";
    })
    .catch(error => {
      console.log("Error:", error);
      alert("An error occurred while fetching user data.");
    });
});