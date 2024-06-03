import githubLogo from './github-mark.png'
import linkedinLogo from './LI-In-Bug.png'

export default function Root() {
	return (
		<div className="Root">
			<p>This is where I talk about myself</p>
			<a href="https://www.linkedin.com/in/freyja-mentado/">
				<img
					src={linkedinLogo}
					alt="linkedin"
					width="40"
					height="40" />
			</a>
			<a href="https://github.com/FreyjaMentado">
				<img
					src={githubLogo}
					alt="github"
					width="40"
					height="40" />
			</a>
		</div>
	);
}