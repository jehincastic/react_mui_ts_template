import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const NotFound = () => (
	<Grid
		container
		sx={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			height: "100vh",
		}}
	>
		<Typography variant="h3" gutterBottom component="div">
      404 - Not Found
		</Typography>
	</Grid>
);

export default NotFound;
