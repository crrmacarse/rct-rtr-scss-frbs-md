# rct-rtr-scss-frbs-mdui-bs-rcmp

### Bootstrap v4 Guideline

- container inside App.js 
	-- row inside /component folder with indexjs { export default }
		--- col division inside /component folder with indexjs { export default }
			----- a mere html no col definition { export } *S1.0


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