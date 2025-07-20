import React from "react";
import "./SubHeader.css";

const SubHeader = () => {
  return (
    <div className="sub-header">
      <div className="sub-header-wrapper">
        <div className="aro-gallery-header">
          <div className="title"></div>
          <div className="aro-genre-details">
            <span className="genreTitle">TV Shows</span>
            <div className="subgenres">
              <div className="ptrack-container">
                <div className="ptrack-content" data-ui-tracking-context='{"appView":"categorySelector","usePresentedEvent":true}' data-tracking-uuid="63f92c0c-fb1a-4091-b5e2-0c5ca38704a7">
                  <div label="Genres" cols="3" className="nfDropDown theme-lakira">
                    <div className="label" role="button" aria-haspopup="true" tabIndex={0} aria-expanded="false" aria-labelledby="profileLanguageDropDown-header">
                      Genres<span className="arrow"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="aro-toggle">
              <button className="aro-row-toggle" aria-label="View in list view" tabIndex={0}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="ListStandard" aria-hidden="true" className="svg-icon svg-icon-rows">
                  <path fillRule="evenodd" clipRule="evenodd" d="M24 6H0V4H24V6ZM24 18V20H0V18H24ZM0 13H12V11H0V13Z" fill="currentColor"></path>
                </svg>
              </button>
              <div className="aro-grid">
                <button aria-label="View in grid view" className="aro-grid-toggle" tabIndex={0}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="GridFillStandard" aria-hidden="true" className="svg-icon svg-icon-grid">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1 3C0.447715 3 0 3.44772 0 4V10C0 10.5523 0.447715 11 1 11H10C10.5523 11 11 10.5523 11 10V4C11 3.44772 10.5523 3 10 3H1ZM1 13C0.447715 13 0 13.4477 0 14V20C0 20.5523 0.447715 21 1 21H10C10.5523 21 11 20.5523 11 20V14C11 13.4477 10.5523 13 10 13H1ZM13 4C13 3.44772 13.4477 3 14 3H23C23.5523 3 24 3.44772 24 4V10C24 10.5523 23.5523 11 23 11H14C13.4477 11 13 10.5523 13 10V4ZM14 13C13.4477 13 13 13.4477 13 14V20C13 20.5523 13.4477 21 14 21H23C23.5523 21 24 20.5523 24 20V14C24 13.4477 23.5523 13 23 13H14Z" fill="currentColor"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
