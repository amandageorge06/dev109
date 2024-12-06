function validateForm(event) {
   event.preventDefault();

   const fullName = document.getElementById('fullname').value.trim();
   const email = document.getElementById('email').value.trim();
   const comment = document.getElementById('comment').value.trim();

   //validate name
   if (fullName === "") {
      alert("Enter Full Name");
      return false;
   }

   //validate email
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (email === "" || !emailRegex.test(email)) {
      alert("Enter a valid email address");
      return false;
   }

   //validate comment
   if (comment === "") {
      alert("Enter Comment");
      return false;
   }

   // if passes redirect to thank you page
   alert("Thank you for your submission!");
   window.location.href = "thankyou.html";
}


window.onload = function() {
   const form = document.forms['myContact'];
   form.onsubmit = validateForm;
};
