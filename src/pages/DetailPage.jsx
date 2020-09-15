import React, { useState, useEffect } from "react"
import styled from "styled-components"
import EventKit from "../data/EventKit"

const LinkDocumentStyle = styled.img`
  width: 300px;
  oject-fit: cover;
`

export default function DetailPage(props) {
  console.log("props", props)
  const [mainPageData, setMainPageData] = useState(null)
  const eventKit = new EventKit()

  useEffect(() => {
    fetchMainPage()
  }, [])

  function fetchMainPage() {
    const eventSlug = props.match.params.slug
    eventKit
      .fetchMainPage(eventSlug)
      .then(res => res.json())
      .then(data => {
        console.log("data i main", data)
        setMainPageData(data)
      })
  }
  return (
    <div>
      <h3>Detail page</h3>
      {mainPageData && (
        <div>
          <h4>{mainPageData.title}</h4>
          {mainPageData.actionPoints &&
            mainPageData.actionPoints.map((actionPoints, index) => {
              return (
                <div key={index}>
                  <h5>{actionPoints.title}</h5>
                  <LinkDocumentStyle src={actionPoints.linkDocument} />

                  {actionPoints.linkExternal && (
                    <a href={actionPoints.linkExternal} target="_blank">
                      {actionPoints.title}
                    </a>
                  )}
                </div>
              )
            })}
        </div>
      )}
    </div>
  )
}
