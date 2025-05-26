import Header from "/src/Tesla/Header.jsx"
import Section from "/src/Tesla/Section.jsx"
import DROPDOWN from "../assets/images/down-arrow.svg"
import Model3 from "../assets/images/model-3.jpg"
import Models from "../assets/images/model-s.jpg"
import Modelx from "../assets/images/model-x.jpg"
import Modely from "../assets/images/model-y.jpg"
import solarpanel from "../assets/images/solar-panel.jpg"
import solarroof from "../assets/images/solar-roof.jpg"
import interrior from "../assets/images/accessories.jpg"
import "/src/Tesla/tesla.css"
function Home() {
  return (
    <>

      <Header />
      <Section
        heading="Model-3"
        paragraph="Order online for touchless delivery"
        buttonleft="Custom Order"
        buttonright="Existing Order"
        Dropdownarrow={DROPDOWN}
        bgimage={Model3}
      />
      <Section
        heading="Model-S"
        paragraph="Order online for touchless delivery"
        buttonleft="Custom Order"
        buttonright="Existing Order"
        bgimage={Modelx}
      />
      <Section
        heading="Model-X"
        paragraph="Order online for touchless delivery"
        buttonleft="Custom Order"

        buttonright="Existing Order"
        bgimage={Models}
      />
      <Section
        heading="Model-Y"
        paragraph="Order online for touchless delivery"
        buttonleft="Custom Order"
        buttonright="Existing Order"
        bgimage={Modely}

      />
      <Section
        heading="Solar Panels"
        paragraph="Lower Cost Solar Panels in India"
        buttonleft="Order Now"
        buttonright="Learn More"
        bgimage={solarpanel}

      />
      <Section
        heading="Solar Roofs"
        paragraph="Lower Cost Solar Panels in India"
        buttonleft="Order Now"
        buttonright="Learn More"
        bgimage={solarroof}


      />
      <Section
        heading="Accessories"
        buttonleft="Order Now"
        bgimage={interrior}



      />

    </>
  )
}

export default Home