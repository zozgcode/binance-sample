import { gainersContent, hotContent, losersContent } from "./TabContent";
import Gainers from "./contents/Gainers";
import Hot from "./contents/Hot";
import Losers from "./contents/Losers";

export const items = [
  {
    title: "Hot",
    content: (
      <div className="w-full">
        <Hot />
      </div>
    ),
  },
  {
    title: "Gainers",
    content: (
      <div className="w-full">
        <Gainers />
      </div>
    ),
  },
  {
    title: "Losers",
    content: (
      <div className="w-full">
        <Losers />
      </div>
    ),
  },
];
