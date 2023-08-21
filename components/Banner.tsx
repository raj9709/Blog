import React from "react"

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-10 py-5 mb-10 space-x-2 lg:space-x-5">
      <div>
        <h1 className="font-bold text-branding text-6xl text-text-black mb-2">
          Daily Blog
        </h1>
        <p>
          Welcome to the{" "}
          <span className="font-bold underline decoration-4 decoration-branding">
          Every Persons
          </span>{" "}
          favourite blog in this New Gen World
        </p>
      </div>

      <div className="">
        <p className="text-vp-c-text-light mt-5 md:mt-2 max-w-sm text-center lg:text-left">
          Latest feature | Web development | Technology | more and more ~
        </p>
      </div>
    </div>
  )
}

export default Banner
