// JavaScript code to create buttons dynamically
window.addEventListener('DOMContentLoaded', function() {
  // Get the parent element where you want to append the buttons
  const parentElement = document.getElementById('button-list');

  // Array of button labels
  const buttonLabels = [
    'Electrician', 'Carpenter', 'Bulder', 'Nurse', 'HVAC Technician',
    'Painter', 'Roofer', 'Landscaper', 'Cleaner', 'Home Repair Specialist', 'Moving and Relocation Service Provider',
    'Automotive Mechanic', 'Computer Repair Technician', 'Event Planner', 'Fitness Trainer', 'Photographer',
    'Beautician/Spa Therapist', 'Tutor', 'Pet Care Provider', 'Lawyer', 'Financial Advisor', 'Chef'
  ];

  // Create a function to handle button click event
  function handleClick() {
    alert('Button clicked!');
  }

  // Loop through the button labels and create buttons
  buttonLabels.forEach((label) => {
    // Create a button element
    const button = document.createElement('button');

    // Set the button text
    button.textContent = label;

    // Add event listener for button click
    button.addEventListener('click', handleClick);

    // Append the button to the parent element
    parentElement.appendChild(button);
  });
});
