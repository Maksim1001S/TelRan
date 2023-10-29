const students = [
    {
        id: 1,
        firstname: "John",
        lastname: "Doe",
        age: 20,
        major: "History",
        avg_grade: 4.5,
        avatar: "https://d1hb67vd7r4m10.cloudfront.net/images/easyblog_articles/89/b2ap3_large_ee72093c-3c01-433a-8d25-701cca06c975.jpg",
    },
    {
        id: 2,
        firstname: "Jane",
        lastname: "Doe",
        age: 21,
        major: "Mathematics",
        avg_grade: 3.8,
        avatar: "https://d1hb67vd7r4m10.cloudfront.net/images/easyblog_articles/89/b2ap3_large_ee72093c-3c01-433a-8d25-701cca06c975.jpg",
    },
    {
        id: 3,
        firstname: "Bob",
        lastname: "Smith",
        age: 22,
        major: "Physics",
        avg_grade: 3.2,
        avatar: "https://d1hb67vd7r4m10.cloudfront.net/images/easyblog_articles/89/b2ap3_large_ee72093c-3c01-433a-8d25-701cca06c975.jpg",
    },
    {
        id: 4,
        firstname: "Alice",
        lastname: "Johnson",
        age: 19,
        major: "Chemistry",
        avg_grade: 4.0,
        avatar: "https://d1hb67vd7r4m10.cloudfront.net/images/easyblog_articles/89/b2ap3_large_ee72093c-3c01-433a-8d25-701cca06c975.jpg",
    },
    {
        id: 5,
        firstname: "Mike",
        lastname: "Davis",
        age: 23,
        major: "Computer Science",
        avg_grade: 3.7,
        avatar: "https://d1hb67vd7r4m10.cloudfront.net/images/easyblog_articles/89/b2ap3_large_ee72093c-3c01-433a-8d25-701cca06c975.jpg",
    },
    {
        id: 6,
        firstname: "Mary",
        lastname: "Wilson",
        age: 20,
        major: "History",
        avg_grade: 2.9,
        avatar: "https://d1hb67vd7r4m10.cloudfront.net/images/easyblog_articles/89/b2ap3_large_ee72093c-3c01-433a-8d25-701cca06c975.jpg",
    },
    {
        id: 7,
        firstname: "David",
        lastname: "Brown",
        age: 21,
        major: "Mathematics",
        avg_grade: 3.5,
        avatar: "https://d1hb67vd7r4m10.cloudfront.net/images/easyblog_articles/89/b2ap3_large_ee72093c-3c01-433a-8d25-701cca06c975.jpg",
    },
    {
        id: 8,
        firstname: "Emily",
        lastname: "Taylor",
        age: 24,
        major: "Physics",
        avg_grade: 3.1,
        avatar: "https://d1hb67vd7r4m10.cloudfront.net/images/easyblog_articles/89/b2ap3_large_ee72093c-3c01-433a-8d25-701cca06c975.jpg",
    },
    {
        id: 9,
        firstname: "Brian",
        lastname: "Miller",
        age: 22,
        major: "Chemistry",
        avg_grade: 4.2,
        avatar: "",
    },
    {
        id: 10,
        firstname: "Jessica",
        lastname: "Anderson",
        age: 19,
        major: "Computer Science",
        avg_grade: 3.6,
        avatar: "https://d1hb67vd7r4m10.cloudfront.net/images/easyblog_articles/89/b2ap3_large_ee72093c-3c01-433a-8d25-701cca06c975.jpg",
    },
    {
        id: 11,
        firstname: "Steven",
        lastname: "Lee",
        age: 23,
        major: "History",
        avg_grade: 4.1,
        avatar: "https://d1hb67vd7r4m10.cloudfront.net/images/easyblog_articles/89/b2ap3_large_ee72093c-3c01-433a-8d25-701cca06c975.jpg",
    },
    {
        id: 12,
        firstname: "Sarah",
        lastname: "Johnson",
        age: 20,
        major: "Mathematics",
        avg_grade: 3.9,
        avatar: "https://d1hb67vd7r4m10.cloudfront.net/images/easyblog_articles/89/b2ap3_large_ee72093c-3c01-433a-8d25-701cca06c975.jpg",
    },
    {
        id: 13,
        firstname: "Daniel",
        lastname: "Williams",
        age: 21,
        major: "Physics",
        avg_grade: 3.4,
        avatar: "https://d1hb67vd7r4m10.cloudfront.net/images/easyblog_articles/89/b2ap3_large_ee72093c-3c01-433a-8d25-701cca06c975.jpg",
    },
    {
        id: 14,
        firstname: "Amanda",
        lastname: "Garcia",
        age: 22,
        major: "Chemistry",
        avg_grade: 3.3,
        avatar: "https://d1hb67vd7r4m10.cloudfront.net/images/easyblog_articles/89/b2ap3_large_ee72093c-3c01-433a-8d25-701cca06c975.jpg",
    },
    {
        id: 15,
        firstname: "Jason",
        lastname: "Davis",
        age: 19,
        major: "Computer Science",
        avg_grade: 3.0,
        avatar: "https://d1hb67vd7r4m10.cloudfront.net/images/easyblog_articles/89/b2ap3_large_ee72093c-3c01-433a-8d25-701cca06c975.jpg",
    },
];
// 1. Дан массив students. Для каждого объекта в массиве создать карточку студента со следующей информацией: Имя + Фамилия, возраст, специализация и средний балл

const cards_container = document.querySelector(".cards_container");

//1
students.forEach((el) => {
    const studentCard = document.createElement("div");
    const nameElem = document.createElement("p");
    const majorElem = document.createElement("p");
    const ageElem = document.createElement("p");
    const gradeElem = document.createElement("p");
    const avatarElem = document.createElement("img");

    nameElem.innerText = `Name: ${el.firstname} ${el.lastname}`;
    majorElem.innerText = `Major: ${el.major}`;
    ageElem.innerText = `Age: ${el.age}`;
    gradeElem.innerText = `avg_grade: ${el.avg_grade}`;

    avatarElem.classList.add("cardAvatar");
    studentCard.classList.add("studentsCards");

    avatarElem.setAttribute("src", el.avatar);
    avatarElem.setAttribute(
        "alt",
        (el.avatar = `https://w7.pngwing.com/pngs/1001/431/png-transparent-computer-icons-avatar-flat-design-blank-shape-logo-rim-area.png`)
    );

    studentCard.append(avatarElem, nameElem, ageElem, majorElem, gradeElem);
    cards_container.append(studentCard);
});
//2
// const students_cards = students.map((el) => {
//   const studentCard = document.createElement("div");
//   const nameElem = document.createElement("p");
//   const majorElem = document.createElement("p");
//   const ageElem = document.createElement("p");
//   const gradeElem = document.createElement("p");

//   nameElem.innerText = `Name: ${el.firstname} ${el.lastname}`;
//   majorElem.innerText = `Major: ${el.major}`;
//   ageElem.innerText = `Age: ${el.age}`;
//   gradeElem.innerText = `avg_grade: ${el.avg_grade}`;

//   studentCard.classList.add("studentsCards");

//   studentCard.append(nameElem, ageElem, majorElem, gradeElem);
//   return studentCard
// });
// cards_container.append(...students_cards);
