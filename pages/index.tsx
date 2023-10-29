import type { NextPage } from 'next'
import Form from '../components/Form'
import Items from '../components/Items'
import Team from '../components/Team'
import { useTeamStore } from '../store/TeamStore'

const Home: NextPage = () => {
	const teams = useTeamStore(state => state.teams)
	return (
		<div className="mt-2">
			<div className="m-2 grid grid-cols-1 gap-4 md:grid-cols-2">
				<Items />
				<Form />
			</div>

			<section className="flex flex-col justify-center p-6">
				<div className="divider mb-4 mt-2"></div>
				<div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 ">
					{teams
						? teams.map((team, index) => (
								<Team team={team} index={index} key={index} />
						  ))
						: ''}
				</div>
			</section>
		</div>
	)
}

export default Home
