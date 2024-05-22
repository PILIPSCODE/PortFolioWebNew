"use client";
// import axios from "axios";
import React, { useEffect, useState } from "react";
import BarChart from "./Chart";
import { MdPageview } from "react-icons/md";

type Uiews = {
  id: string;
  views: string;
  createdAt: Date;
};

function Views() {
  const [data, SetData] = useState<Uiews[]>([]);
  const [inshigt, setInshight] = useState({day:"satuminggu",num:'7'});
  const [PageView, SetPageView] = useState(0);
  const [PageViewK, SetPageViewK] = useState("");
  const [PageViewM, SetPageViewM] = useState("");
  const currentDate = new Date();
  
  const view =
    PageViewM !== ""
      ? PageViewM + "M"
      : PageViewK !== ""
      ? PageViewK + "k"
      : PageView;

  if (Number(PageView) >= 1000000) {
    const roundedNumber = (Number(PageView) / 1000000).toFixed(2);
    SetPageViewM(roundedNumber);
  } else if (Number(PageView) >= 10000) {
    const roundedNumber = (Number(PageView) / 1000).toFixed(2);
    SetPageViewK(roundedNumber);
  }

  const createdWeb = new Date('2023-09-09T07:31:48.460+00:00')
  
  const startDate: Date = new Date(createdWeb);
  const endDate: Date = new Date(currentDate);
  const timeDifferenceMs: number = endDate.getTime() - startDate.getTime();
  
  const timeDifferenceDays: number = timeDifferenceMs /(1000 * 60 * 60 * 24);

  return (
    <div className="w-full  bg-slate-200 p-4  text-black shadow-xl rounded-xl ">
      <div className="flex items-center mx-2 gap-2">
        <MdPageview size={35} />
        <div className="flex flex-col  w-full">
          <p className="font-bold text-2xl">{view}</p>
          <p>Visitor</p>
        </div>
          <select defaultValue={'satu minggu'} onChange={(e) => setInshight({day:e.target.value === "kemarin"?"satuhari":(e.target.value === "satu minggu"?"satuminggu":(e.target.value === "28 hari terakir"?"28hariterakir":(e.target.value === "90 hari terakir"?"90hariterakir":"all"))),num:e.target.value === "kemarin"? "3":(e.target.value === "satu minggu"?"7":(e.target.value === "28 hari terakir"?"28":(e.target.value === "90 hari terakir"?"90":`${timeDifferenceDays}`)))})} className="select select-info w-full bg-white text-black max-w-xs">
            <option disabled >
              Select language
            </option>
            <option >kemarin</option>
            <option >satu minggu</option>
            <option >28 hari terakir</option>
            <option>90 hari terakir</option>
            <option>All</option>
         
          </select>
      </div>
      <BarChart data={data} inshight={inshigt}/>
    </div>
  );
}

export default Views;
