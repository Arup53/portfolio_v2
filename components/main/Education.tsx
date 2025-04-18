function Education() {
  return (
    <div id="education" className="md:w-[90%] md:mx-auto min-h-[25vh] py-12">
      <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-white">
        Education
      </h3>
      <div className="grid grid-cols-1   md:grid-cols-2 gap-2">
        {/* imgae */}

        <figure>
          <img
            className="w-[300px] h-[300px] object-cover  translate-x-12  lg:translate-x-24"
            src="/university.png"
            alt=""
          />
        </figure>

        {/* content */}
        <div className="flex flex-col px-2 gap-1 py-12 text-white">
          <p className=" text-2xl">Daffodil International University</p>
          <p className="text-lg">
            Bachelor of Science in Electrical and Electronics Engineering
          </p>
          <p className="text-base">Duration: 2018-2023</p>
          <p className="text-base">CGPA: 3.95 out of 4</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
