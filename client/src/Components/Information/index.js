import React, { useState } from "react";
import { Card, DropDown, Title, Description, RefId } from "./styles";

const Information = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      style={{
        minHeight: "80vh",
        padding: " 50px 100px",
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "center",
      }}>
      <div>
        <h1>Example Header</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "row nowrap",
          width: "100vw",
          padding: "50px",
        }}>
        <div style={{ width: "100%" }}>
          <div class='accordion accordion-flush' id='accordionFlushExample'>
            <div class='accordion-item'>
              <h2 class='accordion-header' id='flush-headingOne'>
                <button
                  class='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#flush-collapseOne'
                  aria-expanded='false'
                  aria-controls='flush-collapseOne'>
                  Accordion Item #1
                </button>
              </h2>
              <div
                id='flush-collapseOne'
                class='accordion-collapse collapse'
                aria-labelledby='flush-headingOne'
                data-bs-parent='#accordionFlushExample'>
                <div class='accordion-body'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div class='accordion-item'>
              <h2 class='accordion-header' id='flush-headingTwo'>
                <button
                  class='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#flush-collapseTwo'
                  aria-expanded='false'
                  aria-controls='flush-collapseTwo'>
                  Accordion Item #2
                </button>
              </h2>
              <div
                id='flush-collapseTwo'
                class='accordion-collapse collapse'
                aria-labelledby='flush-headingTwo'
                data-bs-parent='#accordionFlushExample'>
                <div class='accordion-body'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div class='accordion-item'>
              <h2 class='accordion-header' id='flush-headingThree'>
                <button
                  class='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#flush-collapseThree'
                  aria-expanded='false'
                  aria-controls='flush-collapseThree'>
                  Accordion Item #3
                </button>
              </h2>
              <div
                id='flush-collapseThree'
                class='accordion-collapse collapse'
                aria-labelledby='flush-headingThree'
                data-bs-parent='#accordionFlushExample'>
                <div class='accordion-body'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
                <div />
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <div class='accordion accordion-flush' id='accordionFlushExample'>
            <div class='accordion-item'>
              <h2 class='accordion-header' id='flush-headingFour'>
                <button
                  class='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#flush-collapseFour'
                  aria-expanded='false'
                  aria-controls='flush-collapseFour'>
                  Accordion Item #4
                </button>
              </h2>
              <div
                id='flush-collapseFour'
                class='accordion-collapse collapse'
                aria-labelledby='flush-headingFour'
                data-bs-parent='#accordionFlushExample'>
                <div class='accordion-body'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div class='accordion-item'>
              <h2 class='accordion-header' id='flush-headingFive'>
                <button
                  class='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#flush-collapseFive'
                  aria-expanded='false'
                  aria-controls='flush-collapseFive'>
                  Accordion Item #5
                </button>
              </h2>
              <div
                id='flush-collapseFive'
                class='accordion-collapse collapse'
                aria-labelledby='flush-headingFive'
                data-bs-parent='#accordionFlushExample'>
                <div class='accordion-body'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
            <div class='accordion-item'>
              <h2 class='accordion-header' id='flush-headingSix'>
                <button
                  class='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#flush-collapseSix'
                  aria-expanded='false'
                  aria-controls='flush-collapseSix'>
                  Accordion Item #6
                </button>
              </h2>
              <div
                id='flush-collapseSix'
                class='accordion-collapse collapse'
                aria-labelledby='flush-headingSix'
                data-bs-parent='#accordionFlushExample'>
                <div class='accordion-body'>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa
                  nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                  aliqua put a bird on it squid single-origin coffee nulla
                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                  beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                  beer farm-to-table, raw denim aesthetic synth nesciunt you
                  probably haven't heard of them accusamus labore sustainable
                  VHS.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
