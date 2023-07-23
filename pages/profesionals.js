// Sample data with names and image URLs
const data = [
  {
    name: "John Doe",
    imageUrl: "https://res.cloudinary.com/dwuyhjoib/image/upload/v1686600436/pmvl13fvg0rzkyzfkrux.jpg",
    skills: "Electrician", phone: "08135674845"
  },
  {
    name: "Mark Smith",
    imageUrl: "https://res.cloudinary.com/dwuyhjoib/image/upload/v1689873297/mike-med_pqyvlo.jpg",
    skills: "Mechanic", phone: "08137488458"
  },
  {
    name: "Michael Brax",
    imageUrl: "https://res.cloudinary.com/dwuyhjoib/image/upload/v1689873297/dr-mike-732x549-thumbnail_vd7jgm.jpg",
    skills: "Plumber", phone: "07032474885"
  },
  {
    name: "Peter Johnson",
    imageUrl: "https://res.cloudinary.com/dwuyhjoib/image/upload/v1689873291/25eec7182e6185d2e293470f56203425-mike-faist_hedxyy.jpg",
    skills: "Plumber", phone: "08047837316"
  }
  // Add more objects as needed
];

const imageList = document.getElementById("image-list");

// Function to populate the list with data
function populateList() {
  data.forEach((item) => {
    const listItem = document.createElement("li");
    const image = document.createElement("img");
    image.src = item.imageUrl;
    listItem.appendChild(image);

    const nameElement = document.createElement("div");
    nameElement.classList.add("name");
    nameElement.textContent = item.name;
    listItem.appendChild(nameElement);

    const skillsElement = document.createElement("div");
    skillsElement.classList.add("skills");
    skillsElement.textContent = item.skills;
    listItem.appendChild(skillsElement);

    const phoneElement = document.createElement("div");
    phoneElement.classList.add("phone");
    phoneElement.textContent = item.phone;
    listItem.appendChild(phoneElement);

    // Add onclick event listener to each listItem element
    listItem.onclick = function () {
        alert("You clicked on: " + item.name);
          // Add your custom action here when the list item is clicked
        };
    

    imageList.appendChild(listItem);
  });
}

// Populate the list with data
populateList();
