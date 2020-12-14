import React, { useState } from "react";
import { Card, DropDown, Title, Description, RefId } from "./styles";

const Information = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div style={{ minHeight: "80vh" }}>
      <div>
        <h1>Example Header</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "center",
        }}>
        <div style={{ width: "100%" }}>
          <Card>
            <Title>Example 1</Title>
            <div onClick={() => setToggle(!toggle)}>
              {!toggle ? (
                <DropDown className='fas fa-caret-down' />
              ) : (
                <DropDown className='fas fa-caret-up' />
              )}
            </div>
            {toggle ? (
              <div style={{ transition: "200ms" }}>
                <Description style={{ marginTop: "10px" }}>
                  Example Decription
                </Description>
              </div>
            ) : (
              false
            )}
          </Card>
          <Card>
            <Title>Example 1</Title>
            <div onClick={() => setToggle(!toggle)}>
              {!toggle ? (
                <DropDown className='fas fa-caret-down' />
              ) : (
                <DropDown className='fas fa-caret-up' />
              )}
            </div>
            {toggle ? (
              <div style={{ transition: "200ms" }}>
                <Description style={{ marginTop: "10px" }}>
                  Example Decription
                </Description>
              </div>
            ) : (
              false
            )}
          </Card>
          <Card>
            <Title>Example 1</Title>
            <div onClick={() => setToggle(!toggle)}>
              {!toggle ? (
                <DropDown className='fas fa-caret-down' />
              ) : (
                <DropDown className='fas fa-caret-up' />
              )}
            </div>
            {toggle ? (
              <div style={{ transition: "200ms" }}>
                <Description style={{ marginTop: "10px" }}>
                  Example Decription
                </Description>
              </div>
            ) : (
              false
            )}
          </Card>
        </div>
        <div style={{ width: "100%" }}>
          <Card>
            <Title>Example 1</Title>
            <div onClick={() => setToggle(!toggle)}>
              {!toggle ? (
                <DropDown className='fas fa-caret-down' />
              ) : (
                <DropDown className='fas fa-caret-up' />
              )}
            </div>
            {toggle ? (
              <div style={{ transition: "200ms" }}>
                <Description style={{ marginTop: "10px" }}>
                  Example Decription
                </Description>
              </div>
            ) : (
              false
            )}
          </Card>
          <Card>
            <Title>Example 1</Title>
            <div onClick={() => setToggle(!toggle)}>
              {!toggle ? (
                <DropDown className='fas fa-caret-down' />
              ) : (
                <DropDown className='fas fa-caret-up' />
              )}
            </div>
            {toggle ? (
              <div style={{ transition: "200ms" }}>
                <Description style={{ marginTop: "10px" }}>
                  Example Decription
                </Description>
              </div>
            ) : (
              false
            )}
          </Card>
          <Card>
            <Title>Example 1</Title>
            <div onClick={() => setToggle(!toggle)}>
              {!toggle ? (
                <DropDown className='fas fa-caret-down' />
              ) : (
                <DropDown className='fas fa-caret-up' />
              )}
            </div>
            {toggle ? (
              <div style={{ transition: "200ms" }}>
                <Description style={{ marginTop: "10px" }}>
                  Example Decription
                </Description>
              </div>
            ) : (
              false
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Information;
