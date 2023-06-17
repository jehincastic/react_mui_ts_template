import { useTranslation } from "react-i18next";

const Home = () => {
	const { t } = useTranslation();

	return (
		<div style={{ display: "flex", flexDirection: "column", width: "30%", margin: "10% auto" }}>
			<h1>
				{t("Welcome to React")}
			</h1>
		</div>
	);
};

export default Home;
