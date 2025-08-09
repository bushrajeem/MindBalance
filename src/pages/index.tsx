import Layouts from "@/layouts"
import Banner from "./Banner"
import AboutUs from "./AboutUs"
import Services from "./Services"


function Home() {
  return (
    <Layouts>
      <Banner />
      <AboutUs />
      <Services />
    </Layouts>
  )
}

export default Home
