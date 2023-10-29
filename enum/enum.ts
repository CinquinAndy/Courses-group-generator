// liste des élèves
const students = [
	{ name: 'Jean', group: 'ce2' },
	{ name: 'Luc', group: 'ce2' },
	{ name: 'Thomas', group: 'ce2' },
	{ name: 'Jacques', group: 'ce2' },
	{ name: 'Jude', group: 'ce2' },
	{ name: 'Julie', group: 'ce2' },
	{ name: 'Anne', group: 'ce2' },
	{ name: 'Suzanne', group: 'ce2' },
	{ name: 'Chloé', group: 'ce2' },
	{ name: 'Dorcas', group: 'ce2' },

	{ name: 'Marc', group: 'ce1' },
	{ name: 'Matthieu', group: 'ce1' },
	{ name: 'Philippe', group: 'ce1' },
	{ name: 'Simon', group: 'ce1' },
	{ name: 'Paul', group: 'ce1' },
	{ name: 'Marie', group: 'ce1' },
	{ name: 'Marthe', group: 'ce1' },
	{ name: 'Marie', group: 'ce1' },
	{ name: 'Lydie', group: 'ce1' },
	{ name: 'Loïs', group: 'ce1' },
]

// liste des élèves, séparé par des \n, pour textarea, sous format name (group)\n
export const studentsList = students
	.map(student => `${student.name} (${student.group})`)
	.join('\n')
