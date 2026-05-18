type Props = {
	team: string[]
	index: number
}

export default function Team({ team, index }: Props) {
	const teamId = index + 1
	return (
		<div data-cy="team" className="card bg-primary text-primary-content shadow-xl">
			<div className="card-body">
				<h2 className="card-title">Groupe {teamId}</h2>
				{/* biome-ignore lint/suspicious/noArrayIndexKey: order and key is fine here */}
				<ul>{team ? team.map((item, index) => <li key={`${item}-${index}`}>{item}</li>) : ''}</ul>
			</div>
		</div>
	)
}
