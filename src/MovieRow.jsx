import React, { useRef } from 'react';
import './MovieRow.css';

const MovieRow = ({ title, genreLink, movies }) => {
  const sliderRef = useRef(null);
  const paginationRef = useRef(null);
  
  // Handle navigation
  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;
    
    const container = sliderRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    
    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
    
    updatePagination();
  };
  
  // Update pagination indicators
  const updatePagination = () => {
    if (!sliderRef.current || !paginationRef.current) return;
    
    const container = sliderRef.current;
    const items = container.querySelectorAll('.slider-item');
    const indicators = paginationRef.current.querySelectorAll('li');
    const scrollPos = container.scrollLeft;
    const itemWidth = items[0]?.clientWidth || 0;
    
    if (itemWidth === 0) return;
    
    const activeIndex = Math.floor(scrollPos / itemWidth);
    
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === activeIndex);
    });
  };
  
  return (
    <div className="lolomoRow lolomoRow_title_card" data-list-context="genre">
      {/* Row Header */}
      <h2 className="rowHeader">
        <a href={genreLink} className="rowTitle">
          <div className="row-header-title">{title}</div>
          <div className="aro-row-header more-visible">
            <div className="see-all-link">Explore All</div>
            <div className="aro-row-chevron icon-akiraCaretRight"></div>
          </div>
        </a>
      </h2>
      
      {/* Carousel Container */}
      <div className="rowContainer rowContainer_title_card">
        <div className="ptrack-container">
          <div className="rowContent slider-hover-trigger-layer">
            <div className="slider">
              {/* Pagination Indicators removed */}
              {/* Navigation Arrow - Left */}
              <span 
                className="handle handlePrev active" 
                tabIndex="0" 
                role="button" 
                aria-label="See previous titles"
                onClick={() => scrollSlider('left')}
              >
                <b className="indicator-icon icon-leftCaret">&#8249;</b>
              </span>
              {/* Slider Content */}
              <div className="sliderMask showPeek">
                <div 
                  className="sliderContent row-with-x-columns" 
                  ref={sliderRef}
                  onScroll={updatePagination}
                >
                  {/* Movie Cards */}
                  {movies.map((movie, index) => (
                    <div key={index} className={`slider-item slider-item-${index}`}>
                      <div className="title-card-container" data-uia="title-card-container">
                        <div className="title-card">
                          <div className="ptrack-content">
                            <a 
                              href={movie.link} 
                              role="link" 
                              aria-label={movie.title}
                              className="slider-refocus"
                            >
                              <div className="boxart-container boxart-rounded boxart-size-16x9">
                                <img 
                                  className="boxart-image boxart-image-in-padded-container" 
                                  src={movie.image} 
                                  alt={movie.title}
                                />
                                <div className="fallback-text-container" aria-hidden="true">
                                  <p className="fallback-text">{movie.title}</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="bob-container"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Loading Placeholders */}
                  {[...Array(5)].map((_, i) => (
                    <div key={`loading-${i}`} className="slider-item">
                      <div className="title-card-container" data-uia="title-card-container">
                        <div className="title-card">
                          <div className="ptrack-content">
                            <a 
                              href="#" 
                              role="link" 
                              aria-label="Loading..."
                              className="slider-refocus"
                            >
                              <div className="boxart-container boxart-rounded boxart-size-16x9">
                                <img 
                                  className="boxart-image boxart-image-in-padded-container" 
                                  src="https://occ-0-7338-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfiPuL9HSzLZySLxpC7VaHGhopGA_4FvruCkrW70WPI5jOy8xXQPNKbRi7YtEQwjw5syqzHl9Xa02B5r4ryeUPukz_zv9VJG5Y_WjkU1sHcfr0J_1yZyhEKkeLfBuzzVBP4Y.jpg?r=869"
                                  alt="Loading..."
                                />
                                <div className="fallback-text-container" aria-hidden="true">
                                  <p className="fallback-text">Loading...</p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="bob-container"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Navigation Arrow - Right */}
              <span 
                className="handle handleNext active" 
                tabIndex="0" 
                role="button" 
                aria-label="See more titles"
                onClick={() => scrollSlider('right')}
              >
                <b className="indicator-icon icon-rightCaret">&#8250;</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sample movie data
MovieRow.defaultProps = {
  title: "Drama Movies",
  genreLink: "/browse/m/genre/5763",
  movies: [
    {
      title: "Wall to Wall",
      image: "https://occ-0-7338-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdLZ7xONDO32nceprSd6hPTzX6XSxFQB3wzZi1MgniR4Tn8blb5-Qo_TTFVZnotTdjAs4s2mvI5bQwoHaS5Zh1VcdfwE1a15pVY4S_sGr2lUdLJee-l1aXVQn5lv3GeO_rDUG2a0klfG6-ikWbWjjN605S9KkXmirLUJEfIqLUWGIPxVl2fah1NgWzwYltOg5EjwuhGveqGLcuQdmZhfr4HzLnSypLh9KW7hv3rfcckgBaONCIV2cuRZdhGD1d6P4No.jpg?r=a53",
      link: "/watch/81762713?tctx=1%2C0%2C%2C%2C%2C%2C%2C%2C%2CVideo%3A81762713%2C"
    },
    {
      title: "The White Tiger",
      image: "https://occ-0-7338-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfiPuL9HSzLZySLxpC7VaHGhopGA_4FvruCkrW70WPI5jOy8xXQPNKbRi7YtEQwjw5syqzHl9Xa02B5r4ryeUPukz_zv9VJG5Y_WjkU1sHcfr0J_1yZyhEKkeLfBuzzVBP4Y.jpg?r=869",
      link: "/watch/80202877?tctx=1%2C1%2C%2C%2C%2C%2C%2C%2C%2CVideo%3A80202877%2C"
    },
    {
      title: "Lucky Baskhar",
      image: "https://occ-0-7338-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABS3g6RtgQO84FYnF-gQB-yDjA2Y6xRSSZXBF3QuJQBX1N4A8tMTSbjy3NnP6iFkhFZuk2UK9IXpvxeISgvDGPPIIy4gv7m1O1bc.webp?r=0d9",
      link: "/watch/81902035?tctx=1%2C2%2C%2C%2C%2C%2C%2C%2C%2CVideo%3A81902035%2C"
    },
    {
      title: "8 Vasantalu",
      image: "https://occ-0-7338-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQwrbI3ejNqoxFR-k9LtaETzIAzFqQ0JBchb5fUR47TcH2ZCpxaBQfQpvFmIqCBQuHl6OxalJTNHXRskRr8pj61eUjElRAK8FHbBWP-k6zx26nQeGrYArgjslViepoCj_DvjxwsP168SJ6ZPHpeYVj14r7v5tQTPjbFPE5gM7HY-YlmhbIhz7o6ubpJ5X2oH5mBGzYHAGA_SI_9RPaOBVhN4Nuiwn3fqktDGoyU.webp?r=375",
      link: "/watch/82077136?tctx=1%2C3%2C%2C%2C%2C%2C%2C%2C%2CVideo%3A82077136%2C"
    },
    {
      title: "Dragon",
      image: "https://occ-0-7338-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaQ29EbbMVzQxuA_OeGp8UK52dvaZfMtGI_xiO9_5SalRgQUfFQAIq-NtkP-wkmCzVw0PXcDtmykNSCkuALQm5W3EIbyBgo3EMs.webp?r=387",
      link: "/watch/81762715?tctx=1%2C4%2C%2C%2C%2C%2C%2C%2C%2CVideo%3A81762715%2C"
    },
    {
      title: "Raid 2",
      image: "https://occ-0-7338-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRCZj4AEnMaXAnpqfm0b8T_9vychwzYQ6VocjvG7I198wMnwYIhszREeckBRkdUOEh_Qc-Ojab_vifwAn29-C4LJq5Ehopb7PUpIKIMoOr4Y_ym8r5tSZO_aOeAmZIwHM6V_aeViSzj5pAb1RJWSSYXTyyaEJtKBUM6ZEAZId0fpOjv5RwG7Azmhwn-AjU9yTmf9aKa-qQ7jCX-lZLIpKlj7pnvmoqyvgNVx-Ow.webp?r=7ba",
      link: "/watch/81760050?tctx=1%2C5%2C%2C%2C%2C%2C%2C%2C%2CVideo%3A81760050%2C"
    },
    {
      title: "The Old Guard 2",
      image: "https://occ-0-7338-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcEo5qdYEeZYbQ6nxc6wQQw_zXzojoR9mhlzSZ4gZHYFLXqq-1xUiSz8uZk4R8-9oYFanzxivBvn0Uh5SM1TfROy_KGn4lhoecHn-26wTaV9PypFxyINufpSj41krkDDG7LWgyTsc7XTX5D445qTAe0uRK0di_Yh923vGMIgXxFVM5hPPAsSOXp8z1D0-2mKJvX_Bl89.jpg?r=8f1",
      link: "/watch/81328881?tctx=1%2C6%2C%2C%2C%2C%2C%2C%2C%2CVideo%3A81328881%2C"
    }
  ]
};

export default MovieRow; 