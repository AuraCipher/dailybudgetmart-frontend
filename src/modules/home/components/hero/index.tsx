import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="relative h-[85vh] w-full bg-gradient-to-br from-grey-5 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.03),transparent)]" />
      <div className="relative h-full flex flex-col justify-center items-center text-center px-6 small:px-32">
        <div className="max-w-4xl space-y-8">
          <h1 className="text-5xl small:text-7xl font-bold text-primary tracking-tight">
            Welcome to{" "}
            <span className="block text-6xl small:text-8xl mt-2">
              DailyBudgetMart
            </span>
          </h1>
          <p className="text-xl small:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing products at unbeatable prices. Quality meets affordability in every purchase.
          </p>
          <div className="flex flex-col small:flex-row gap-4 justify-center pt-8">
            <LocalizedClientLink href="/store">
              <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Shop Now
              </button>
            </LocalizedClientLink>
            <LocalizedClientLink href="/collections">
              <button className="px-8 py-4 bg-white text-primary border-2 border-primary font-semibold rounded-lg hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                View Collections
              </button>
            </LocalizedClientLink>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  )
}

export default Hero
