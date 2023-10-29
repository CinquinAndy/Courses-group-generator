import ClearAllButton from './ClearAllButton'
import GenerateButton from './GenerateButton'
import GroupsInput from './GroupsInput'

export default function Form() {
	return (
		<div
			className="rounded-lg bg-base-200 p-5 shadow"
			data-aos="fade-up"
			data-aos-delay="200"
		>
			<section data-aos="fade-up" data-aos-delay="200">
				<div className="form-control flex flex-col justify-center">
					<GroupsInput />
					<GenerateButton />
					<ClearAllButton />
				</div>
			</section>
		</div>
	)
}
