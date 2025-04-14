import DynamicBar from "./DynamicBar"
import MenuBar from "./MenuBar"

function Navbar() {
  return (
    <div className="w-full px-4 sm:px-10 paytone">
        <div className="flex sm:justify-end justify-center items-center py-2  sm:p-2 ">
            <MenuBar />
        </div>
        <div>
          <DynamicBar />
        </div>
    </div>
  )
}

export default Navbar
