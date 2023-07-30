function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var contact = document.getElementById("contact");
    var about = document.getElementById("about");
    var memberList = document.getElementById("memberList");
    var skillsList = document.getElementById("skillsList");
    var contactList = document.getElementById("contactList");
    var aboutList = document.getElementById("aboutList");
    member.style.display = "block";
    skills.style.display = "none";
    contact.style.display = "none";
    about.style.display = "none";
    memberList.classList.add("active");
    skillsList.classList.remove("active");
    contactList.classList.remove("active");
    aboutList.classList.remove("active");
}