import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import EventKit from "../data/EventKit"

const BackgroundImgStyle = styled.img`
  width: 70%;
  object-fit: cover;
  padding-top: 20px;
`

export default function EventListPage(props) {
  console.log("props i list", props)
  const [eventList, setEventList] = useState(null)
  const eventKit = new EventKit()

  useEffect(() => {
    fetchEventList()
  }, [])

  function fetchEventList() {
    eventKit
      .fetchEventList()
      .then(res => res.json())
      .then(data => {
        setEventList(data.results)
        console.log("data i event list", data.results)
      })
  }
  return (
    <div>
      <h3>Event List Page</h3>
      <div>
        {eventList &&
          eventList.map((eventItem, index) => {
            return (
              <div key={index}>
                <h5>{eventItem.title}</h5>
                <Link to={`event/${eventItem.slug}`}>{eventItem.title}</Link>
                {eventItem.backgroundImage && (
                  <BackgroundImgStyle src={eventItem.backgroundImage} />
                )}
                <p>{eventItem.description}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}
