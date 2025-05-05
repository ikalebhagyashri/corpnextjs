import Hero from "../components/Hero";
import scaleImage from "../../../public/reliability.jpg";

export default function Home() {
  return (
  <Hero 
      imgData={scaleImage}
      imgAlt="scale app"
      title="Scale your app to infinity"/>
  );
}