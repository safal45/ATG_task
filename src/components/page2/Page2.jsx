import React from "react";
import Card2 from "./Card2";

function Page2() {
  const pageData = [
    {
      logo: "People.png",
      logoH: "20px",
      logoW: "40px",
      name: "People",
      about:
        "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.",
      value: "#8064A2",
    },
    {
      logo: "Place.png",
      logoH: "33.33px",
      logoW: "23.33px",
      name: "Place",
      about:
        "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.",
      value: "#77933C",
    },
    {
      logo: "Product2.png",
      logoH: "31px",
      logoW: "36px",
      name: "Product",
      about:
        "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.",
      value: "#C0504D",
    },
    {
      logo: "Program.png",
      logoH: "33px",
      logoW: "30px",
      name: "Program",
      about:
        "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
      value: "#0096C8",
    },
  ];

  return (
    <div className="w-full h-full">
      <Card2 values={pageData} />
    </div>
  );
}

export default Page2;
