import React from "react";
import "./Home.scss";
import img from "../../assets/Birthdaycake.png";
import { BsChevronRight, BsFillCalendarDateFill } from "react-icons/bs";

function Home() {
  return (
    <>
      <div className="main-layout">
        <div className="right-div b">
          <article className="img-box">
            <img src={img} alt="cake" />
          </article>
          <div className="px-2">
          <article>
            <p className="invite-heading">Movie Night</p>
            <p className="invite-sub-heading">Hosted By Elysia</p>
          </article>
          <div className="px-2">
            <article className="py-1 d-flex align-item-center justify-content-between">
              <p className="color-text">14 respone  <span className="ms-1">. see guest</span></p>
             
              <p className="invite-btn">invite</p>
            </article>
            <div className="py-2 d-flex justify-content-between">
              <article className="d-flex align-items-center">
                <article className="icon">
                  <BsFillCalendarDateFill />
                </article>
                <p className="drop-down-text ms-1"> 18 august 6:00 pm</p>
              </article>

              <BsChevronRight />
            </div>
            <div className="py-2 d-flex justify-content-between">
              <article className="d-flex align-items-center">
                <article className="icon">
                  <BsFillCalendarDateFill />
                </article>
                <p className="drop-down-text ms-1"> 18 august 6:00 pm</p>
              </article>

              <BsChevronRight />
            </div><div className="py-2 d-flex justify-content-between">
              <article className="d-flex align-items-center">
                <article className="icon">
                  <BsFillCalendarDateFill />
                </article>
                <p className="drop-down-text ms-1"> 18 august 6:00 pm</p>
              </article>

              <BsChevronRight />
            </div>
          </div>
          </div>
          <article></article>
        </div>

        {/* *************Event Div******** */}
        <div className="a w-75 d-flex align-items-end flex-column">
          <p className="heading">
            Imagine Id <br /> <span className="sub-heading">Snapchat</span>
            <br /> had events.
          </p>
          <p className="content">
            Easily host and share events with your friends across any social
            media.
          </p>
          <button className="button">🎉 Create my event</button>
        </div>
      </div>
    </>
  );
}

export default Home;
