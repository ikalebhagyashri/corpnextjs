import Hero from "../components/Hero";
import performanceImg from "../../../public/performance.jpg";

export default function Home() {
  return (
  <Hero 
      imgData={performanceImg}
      imgAlt="welding"
      title="We serve high performance application"/>
  );
}