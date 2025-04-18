function DataCard({ data }) {
  const { stack, info, live, github, challenges, lackings } = data || {};
  console.log(stack, info, live, github, challenges, lackings);

  return (
    <div className="flex flex-col w-[80%] space-y-4 text-white">
      {data && (
        <>
          <h3>
            {" "}
            <span className="font-bold">Stack Used:</span> {stack}
          </h3>
          <p>{info}</p>
          <a className="font-bold" href={live}>
            Live Link
          </a>
          <a className="font-bold" href={github}>
            Github Repo
          </a>

          <div>
            <span className="font-bold">Challenges</span>
            {challenges?.map((el, idx) => (
              <p key={idx}>{el}</p>
            ))}
          </div>
          <div>
            <span className="font-bold">Lackings</span>
            {lackings?.map((el, idx) => (
              <p key={idx}>{el}</p>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default DataCard;
