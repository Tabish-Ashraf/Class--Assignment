const ar = require("./StudentJson.json");
const fs = require("fs");
const { json } = require("stream/consumers");

const array = ar.Full;
class Student {
  constructor(student) {
    let {
      ID,
      FirstName,
      LastName,
      City,
      Gender,
      StudentStatus,
      Major,
      Country,
      SAT,
      Age,
      Grade,
      Height,
    } = student;
    this.setId(ID);
    this.setFirstName(FirstName);
    this.setLastName(LastName);
    this.setCity(City);
    this.setStudentStatus(StudentStatus);
    this.setMajor(Major);
    this.setGender(Gender);
    this.setCountry(Country);
    this.setSAT(SAT);
    this.setHeigth(Height);
    this.setAge(Age);
    this.setGrade(Grade);
  }
  setFirstName(name) {
    if (typeof name == "string" && name.length > 0) {
      this.FirstName = name;
    } else console.log("First Name is not Correct");
  }
  setLastName(name) {
    if (typeof name == "string" && name.length > 0) {
      this.LastName = name;
    } else console.log("Last Name is not Correct");
  }
  setCity(city) {
    if (typeof city == "string" && city.length > 0) {
      this.City = city;
    } else console.log("City is not Correct");
  }
  setGender(gender) {
    if (gender.toUpperCase() == "FEMALE" || gender.toUpperCase() == "MALE") {
      this.Gender = gender;
    } else console.log("Gender is not Correct");
  }
  setStudentStatus(status) {
    if (status.length > 0) {
      this.StudentStatus = status;
    } else console.log("Status is not Correct");
  }
  setMajor(major) {
    if (major.length > 0) {
      this.Major = major;
    } else console.log("Major is not Correct");
  }
  setCountry(country) {
    if (country.length > 0) {
      this.Country = country;
    } else console.log("Country is not Correct");
  }
  setAge(age) {
    if (parseInt(age) > 0) {
      this.Age = age.toString(10);
    } else console.log("Age is not Correct");
  }
  setGrade(grade) {
    if (parseInt(grade) > 0) {
      this.Grade = grade.toString(10);
    } else console.log("Grade is not Correct");
  }

  setHeigth(heigth) {
    if (parseInt(heigth) > 0) {
      this.Height = heigth.toString(10);
    } else console.log("Heigth is not Correct");
  }
  setSAT(sat) {
    if (parseInt(sat) > 0) {
      this.SAT = sat.toString(10);
    } else console.log("SAT is not Correct");
  }
  setId(id) {
    if (parseInt(id) > 0) {
      this.Id = id.toString(10);
    } else console.log("Id is not Correct");
  }
  gettFirstName() {
    return this.FirstName;
  }
  getLastName() {
    return this.LastName;
  }
  getCity() {
    return this.City;
  }
  getGender() {
    return this.Gender;
  }
  getStudentStatus() {
    return this.StudentStatus;
  }
  getMajor() {
    return this.Major;
  }
  getCountry() {
    return this.Country;
  }
  getAge() {
    return this.Age;
  }
  getGrade() {
    return this.Grade;
  }

  getHeigth() {
    return this.Height;
  }
  getSAT() {
    return this.SAT;
  }
  getId() {
    return this.Id;
  }
  static showData() {
    console.log(array);
  }
  static insertStudent(student) {
    array.push(student);
    console.log("Student added at", array.length - 1);
  }
  static delete(id) {
    array.forEach((element, index, array) => {
      if (element.ID == id) {
        array.splice(index, 1);
      }
    });

    //  Array.splice(index, index + 1);
  }
  static UpdateFile(path) {
    let arr = { full: "" };
    arr.full = array;
    fs.writeFile(path, JSON.stringify(arr), function (err) {
      if (err) throw err;
      console.log("updated");
    });
  }
  static update(id, student) {
    array.forEach((element, index, array) => {
      if (element.ID == id) {
        array.splice(index, 1);
        array.splice(index, 0, student);
      }
    });
  }
}
const obj2 = {
  ID: "29",
  LastName: "Hammad",
  FirstName: "Ashraf",
  City: "Karachi",
  State: "Sindh",
  Gender: "Male",
  StudentStatus: "Graduate",
  Major: "Politics",
  Country: "Pak",
  Age: "30",
  SAT: "2279",
  Grade: "85",
  Height: "72",
};

const obj = {
  ID: "32",
  LastName: "Tabish",
  FirstName: "Ashraf",
  City: "Lahore",
  State: "Punjab",
  Gender: "Male",
  StudentStatus: "Graduate",
  Major: "IT",
  Country: "PAk",
  Age: "23",
  SAT: "2263",
  Grade: "78",
  Height: "61",
};

let student = new Student(obj);
student.setFirstName("Imran");
student.setLastName("Khan");
Student.insertStudent(student);
Student.delete("20");

Student.update(29, obj2);

console.log(array);
Student.UpdateFile("temp.json");
