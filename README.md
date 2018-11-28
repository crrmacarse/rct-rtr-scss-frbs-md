# rct-rtr-scss-frbs-mdui-bs-rcmp

### Bootstrap v4 Guideline

- container inside App.js <br />
	-- row inside /component folder with indexjs { export default } <br />
		--- col division inside /component folder with indexjs { export default } <br />
			----- a mere html no col definition { export } *S1.0 <br />


###### Snippet 1.0

	class Main extend React.Component{
		...
		
		return(
			<div className = "row">
				<div className = "col-12">
					<SubComp />
				</div>
			</div>
		)
	}

	const SubComp = () => (
		<h1>
			Hello
		</h1>
	)

	export default Main;

	export { SubComp };