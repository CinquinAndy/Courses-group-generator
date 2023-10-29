// liste des élèves
const students = [
	{ name: 'Evan', group: 'CE1' },
	{ name: 'Lauren', group: 'CE1' },
	{ name: 'Timothée', group: 'CE1' },
	{ name: 'Salma', group: 'CE1' },
	{ name: 'Eloi', group: 'CE1' },
	{ name: 'Milan', group: 'CE1' },
	{ name: 'Thélio', group: 'CE1' },
	{ name: 'Gabriel', group: 'CE1' },
	{ name: 'Luis', group: 'CE1' },
	{ name: 'Kira', group: 'CE1' },
	{ name: 'Emma', group: 'CE1' },
	{ name: 'Thélio', group: 'CE1' },
	{ name: 'Lucas', group: 'CE1' },
	{ name: 'Valin', group: 'CE1' },
	{ name: 'Tilio', group: 'CE1' },
	{ name: 'Liam', group: 'CE1' },

	{ name: 'Ernest', group: 'CE2' },
	{ name: 'Aliyah', group: 'CE2' },
	{ name: 'Linoa', group: 'CE2' },
	{ name: 'Valentin', group: 'CE2' },
	{ name: 'Elina', group: 'CE2' },
	{ name: 'Solène', group: 'CE2' },
	{ name: 'Aya', group: 'CE2' },
	{ name: 'Sacha', group: 'CE2' },
	{ name: 'Mahé', group: 'CE2' },
	{ name: 'Evan', group: 'CE2' },
]

// liste des élèves, séparé par des \n, pour textarea, sous format name (group)\n
export const studentsList = students
	.map(student => `${student.name} (${student.group})`)
	.join('\n')
