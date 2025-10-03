import LocalizedClientLink from "@modules/common/components/localized-client-link"
import heroBackground from "../../../assets/hero-background.jpg"

const Hero = () => {
  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white/40" />
      
      <div className="relative h-full flex flex-col justify-center items-center text-center px-6 small:px-32">
        <div className="max-w-4xl space-y-8 animate-fade-in">
          <h1 className="text-5xl small:text-7xl font-bold text-primary tracking-tight animate-scale-in">
            Welcome to{" "}
            <span className="block text-6xl small:text-8xl mt-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              DailyBudgetMart
            </span>
          </h1>
          <p className="text-xl small:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discover amazing products at unbeatable prices. Quality meets affordability in every purchase.
          </p>
          <div className="flex flex-col small:flex-row gap-4 justify-center pt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <LocalizedClientLink href="/store">
              <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl active:scale-95 hover-scale">
                Shop Now
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </button>
            </LocalizedClientLink>
            <LocalizedClientLink href="/collections">
              <button className="px-8 py-4 bg-white text-primary border-2 border-primary font-semibold rounded-lg hover:bg-primary hover:text-white transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl active:scale-95 hover-scale">
                View Collections
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </button>
            </LocalizedClientLink>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Fast Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Best Prices</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  )
}

export default Hero
