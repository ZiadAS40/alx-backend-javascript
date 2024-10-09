// Writing an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)


interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}


const firstStudent: Student = {
	firstName: "Obed",
	lastName: "Ehoneah",
	age: 97,
	location: "Accra"
}

const secondStudent: Student = {
	firstName: "Frank",
	lastName: "Ehoneah",
	age: 79,
	location: "Kumasi"
}


const studentsList = [firstStudent, secondStudent];

const table = document.getElementById('studentTable') as HTMLTableElement;


studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})
