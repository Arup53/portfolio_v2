function AboutMe() {
  return (
    <div
      id="about-me"
      className="md:w-[90%] md:mx-auto min-h-[25vh] py-12 text-white px-6"
    >
      <div className="md:w-[40%] md:mx-auto flex flex-col gap-2">
        {/* content */}
        <div className="flex flex-col  space-y-4 py-6 basis-1/2 ">
          <h3 className="my-2 text-xl md:text-3xl lg:text-4xl font-bold text-center">
            About Me
          </h3>
          <p className="text-xs md:text-sm">
            Passionate about coding and problem-solving, particularly in
            software development and data structures & algorithms. Outside the
            tech realm, I enjoy expanding my horizons by reading articles and
            watching thought-provoking documentaries.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
