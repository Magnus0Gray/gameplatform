import ArticleCard from '../articleCard'

export default function Frontpage({ subjects }) {
	return (
		<section>
			<h1>Template page</h1>
			{subjects?.map((p, i) => <ArticleCard key={i} subjectinfo={p} >{p.subject_title}</ArticleCard>)}
		</section>
	)
}