document.getElementById("generatePDF").addEventListener("click", function () {
    const pdf = new jsPDF();


    const personalDetails = formatPersonalDetails();
    const professionalDetails = formatProfessionalDetails();
    const links = formatLinks();


    const content = `${personalDetails}\n\n${professionalDetails}\n\n${links}`;

    pdf.text(content, 10, 10);

    pdf.save("resume.pdf");
});

function formatPersonalDetails() {

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const age = document.getElementById("age").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const postCode = document.getElementById("post-code").value;
    const country = document.getElementById("country").value;

    return `Personal Details:
- First Name: ${firstName}
- Last Name: ${lastName}
- Age: ${age}
- Phone No: ${phone}
- Address: ${address}
- City: ${city}
- State: ${state}
- Post Code: ${postCode}
- Country: ${country}`;
}

function formatProfessionalDetails() {

    const education = document.getElementById("education").value;
    const workExperience = document.getElementById("work-experience").value;
    const hobbies = document.getElementById("hobbies").value;
    const skills = document.getElementById("skills").value;
    const awards = document.getElementById("awards").value;

    return `Professional Details:
- Education: ${education}
- Work Experience: ${workExperience}
- Hobbies: ${hobbies}
- Skills: ${skills}
- Awards and Honours: ${awards}`;
}

function formatLinks() {

    const linkedin = document.getElementById("linkedin").value;
    const instagram = document.getElementById("instagram").value;
    const webpage = document.getElementById("webpage").value;

    return `Links:
- LinkedIn Profile Link: ${linkedin}
- Instagram Profile Link: ${instagram}
- Personal Webpage Link: ${webpage}`;
}
