import ButtonTransparentGet from "../button/buttonTransparentGet"

function Hero() {
    return (
        <div class = "sm:flex flex-col bg-black text-center justify-center items-center sm:text-center h-screen bg-[url('/home.png')]">

            <h1 class = 'font-title text-[1.5rem] color-white text-white sm:font-title  sm:text-[3.75rem] pb-10 pt-10'>Let’s talk about AI-<br></br>Driven decision Making?</h1>

            <p class = 'px-10 pb-10 font-text text-[1.125rem] text-white sm:text-[1.25rem]' >
            A wonderful serenity has taken possession of my entire soul, like these <br></br>sweet mornings of spring which I enjoy with my whole heart. I am alone,<br></br> and feel the charm of existence in this spot, which was created for the bliss<br></br> of souls like mine.
            </p>
            <ButtonTransparentGet class = 'items-center'/>
        </div>
    )
}

export default Hero