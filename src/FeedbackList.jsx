import { useState } from "react";

const FeedbackList = () => {
  const [feedbacks, setFeedbakcs] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getFeedbacks = () => {
    setLoading(true);
    fetch("https://68fa362cef8b2e621e7f36a6.mockapi.io/register")
      .then((res) => res.json())
      .then((data) => setFeedbakcs(data))
      .finally(() => setLoading(false));
  };

  return (
    <div className="mx-auto max-w-[1250px] mt-4 bg-transparent flex items-center flex-col space-y-4 w-full">
      <div className="space-x-4">
        {isLoading ? <h2 className="text-white">Loading ...</h2> : ""}
        <button
          onClick={getFeedbacks}
          className=" text-[#FFFFFF] bg-linear-to-r from-[#763AF5] to-[#A604F2] px-[10] py-[12px] rounded-[5px] max-w-[400px] cursor-pointer"
        >
          Show Most recent Feedback
        </button>
        <button className=" text-[#FFFFFF] bg-linear-to-r from-[#763AF5] to-[#A604F2] px-[10] py-[12px] rounded-[5px] max-w-[400px] cursor-pointer">
          <a
            target="_blank"
            href="https://68fa362cef8b2e621e7f36a6.mockapi.io/register"
          >
            {" "}
            Go To mock Api
          </a>
        </button>
      </div>
      {feedbacks.length != 0 && (
        <div className="border border-[#FFFFFF20] bg-[#FFFFFF0D] p-4 text-white flex flex-wrap w-full min-h-[200px] text-justify">
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(feedbacks[feedbacks.length - 1], null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default FeedbackList;
