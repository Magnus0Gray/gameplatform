//import { Link } from "react-router-dom";

//ingress support should be added, replace content with ingress
//<Link to={subjectinfo?.slug?.current}>More info</Link>
export default function ArticleCard({ subjectinfo }) {
	return (
		<article>
			<h2>{subjectinfo.subject_title}</h2>

			<p style={{ whiteSpace: "pre-wrap" }}>
				{subjectinfo?.content[0].children[0].text}
			</p>
			
		</article>
	)
}			//{subjects?.map((p, i) => <ArticleCard key={i} subjectinfo={p} >{p.subject_title}</ArticleCard>)}

/*{
	subjectinfo.content?.map((c, i) => (
		{ c }
	))
}*/