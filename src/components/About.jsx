const About = () => {
  return (
    <section id="about" className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            About
          </h1>
          <p className="mb-8 leading-relaxed text-2xl">
            TuxCat is tired of watching everyone play hot potato with the
            endless derivative ShibaCumGMElonKishuTurboAssFlokiMoon Inu coins.
            The Inu’s have had their day. It’s time for the most recognizable
            meme in the world to take his reign as king of the memes. TuxCat is
            here to make memecoins great again. Launched stealth with no
            presale, zero taxes, LP burnt and contract renounced, $PEPE is a
            coin for the people, forever. Fueled by pure memetic power, let
            $TUXCAT show you the way.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
