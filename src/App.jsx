import "./App.css";
import Questions from "./components/FAQ/Questions";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/HeroSection/Hero";
import Testimonials from "./components/Testimonials/Testimonials";
import Timeline from "./components/Timeline/Timeline";

function App() {
	return (
		<>
			<Header />
			<Hero />
			<Features />
			<Timeline />
			<Testimonials/>
			<Questions />
			<Footer />
		</>
	);
}

export default App;
