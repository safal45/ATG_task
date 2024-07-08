import React from "react";
import Card1 from "./Card1";

function Page() {
  const pageData = [
    {
      logo: "People.png",
      logoH: "20px",
      logoW: "40px",
      name: "People",
      about:
        "Find a teacher, coach, or expert for your hobby interest in your locality.Find a partner, teammate, accompanist or collaborator.",
      value: "Connect",
    },
    {
      logo: "Place.png",
      logoH: "33.33px",
      logoW: "23.33px",
      name: "Place",
      about:
        "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.",
      value: "Meet up",
    },
    {
      logo: "Product2.png",
      logoH: "31px",
      logoW: "36px",
      name: "Product",
      about:
        "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.",
      value: "Get it",
    },
    {
      logo: "Program.png",
      logoH: "33px",
      logoW: "30px",
      name: "Program",
      about:
        "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
      value: "Attend",
    },
  ];

  return (
    <div className="w-full flex items-center justify-center py-8 bg-[#FFFFFF]">
      <Card1 values={pageData} />
    </div>
  );
}

export default Page;
