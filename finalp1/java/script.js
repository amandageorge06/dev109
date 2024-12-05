function validateForm(event) {
   // Prevent form submission to check validation
   event.preventDefault();

   // Get form values
   const fullName = document.getElementById('fullname').value.trim();
   const email = document.getElementById('email').value.trim();
   const comment = document.getElementById('comment').value.trim();

   // Validate full name
   if (fullName === "") {
      alert("Full Name is required.");
      return false;
   }

   // Validate email format
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (email === "" || !emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
   }

   // Validate comment
   if (comment === "") {
      alert("Comment is required.");
      return false;
   }

   // If all fields are valid, redirect to thank you page
   alert("Thank you for your submission!");
   window.location.href = "thankyou.html";
}

// Add event listener to the form
window.onload = function() {
   const form = document.forms['myContact'];
   form.onsubmit = validateForm;
};
