import React from 'react';
import { Sticky, StickyContainer } from 'react-sticky'

const Content = ({ id, title, text }) => (
  <StickyContainer
      key={id}
      style={{ height: 1000, background: `hsl(${id * 50}, 70%, 90%)` }}
    >
    <Sticky>
      {({
        style,
        distanceFromTop,
        distanceFromBottom,
      }) => {
        return (
          <div
            style={{
              ...style,
              height: 80,
              background: `hsl(${id * 50}, 95%, 20%)`
            }}
          >
            <h2
              style={{
                lineHeight: "80px",
                padding: "0 15px",
                margin: 0,
                color: "#ddd"
              }}
            >
              <span className="pull-left">{title}</span>
            </h2>
            <div style={{ background: `hsl(${id * 50}, 70%, 90%)`, opacity: 0.7 }} >
              <p>Distance From Top : {distanceFromTop}</p>
              <p>Distance From Bottom : {distanceFromBottom}</p>
            </div>
          </div>
        );
      }}
    </Sticky>
      <div className="text-center" style={{ marginTop: 250 }}>
        <p>{text}</p>
      </div>
  </StickyContainer>
)

export default Content
