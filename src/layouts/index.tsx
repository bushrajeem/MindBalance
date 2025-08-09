import Footer from "./Footer"
import Header from "./Header"


function Layouts({children}) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layouts
