const form = document.getElementById("surveyForm");

const rating = document.getElementById("rating");
const ratingValue = document.getElementById("ratingValue");

const message = DocumentTimeline.getElementById("message");

//Display rating value
rating.addEventListener("input",function ()  {
    ratingValue.textContent = rating.value;
})


//Form submit
form.addEventListener("submit", function (event) {
    
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value;
    const course = document.getElementById("course").value;

    const gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    const skills =document.querySelectorAll(
        'input[name="skills"]:checked'
    );

    //Validation
    if (name === "") {
        message.textContent = "Please enter your name.";
        return;
    }
    if (email === "") {
        message.textContent = "please enter your email.";
        return;
    }
    if (age === "") {
        message.textContent = "Please enter your age.";
        return;
    }
    if (!gender) {
        message.textContent = "please select your gender.";
        return;
    }
    if (course === "") {
        message.textContent = "please select your course.";
        return;
    }
    if (skills.length === 0) {
        message.textContent = "Please select at least one skill.";
        return;
    }
    if (feedback === "") {
        message.textContent = "Please write your feedback.";
        return;
    }

    //success
    message.textContent = 
    `Thank you, ${name}! Your survey has been submitted successfully.`;

    form.reset();

    ratingValue.textContent = "5";
});

