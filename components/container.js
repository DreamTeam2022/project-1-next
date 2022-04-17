import react from "react"
function Container({ children }) {
    return <div className="w-full ">
            <div className="max-w-[1200px] px-2 md:px-6 lg:px-12 mx-auto">
                {children}
            </div>
        </div>
 }
 
 export default Container