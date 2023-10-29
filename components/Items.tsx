import { useTeamStore } from '../store/TeamStore'

export default function Items() {
	const { items, addItems } = useTeamStore(state => state)

	return (
		<section
			className="rounded-lg bg-base-200 p-5 shadow"
			data-aos="fade-up"
			data-aos-delay="100"
		>
			<h2 className="mb-2 px-1 text-xl font-bold text-base-content">Items</h2>
			<textarea
				data-cy="itemsInput"
				className="textarea textarea-primary h-48 w-full border-2"
				placeholder="Type here, each item separated with a new line."
				value={items}
				onChange={e => addItems(e.target.value)}
			></textarea>
		</section>
	)
}
