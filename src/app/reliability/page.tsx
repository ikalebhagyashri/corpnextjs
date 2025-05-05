import Hero from "../components/Hero";
import reliabilityImg from "../../../public/reliability.jpg";

export default function Home() {
  return (
  <Hero 
      imgData={reliabilityImg}
      imgAlt="welding"
      title="Super High Reliability"/>
  );
}