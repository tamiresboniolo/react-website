import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/about.jpg'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about'/>
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='about image'/>
        <article>
          <div className='title'>
            <h2>Our Story</h2>
            <div className='underline'></div>
          </div>
          <p>
            There is nothing better than happiness. After all, who doesn't like to lie in the sun to watch the sunrise? Or enjoy the popcorn and movie double in front of the TV? And breakfast in bed? Are holidays coming up? Happiness is realizing that happiness is in the little things and also in the big ones, but above all, that it lives inside you.
          </p>
          <p>
            For us, relationships of trust and credibility with the long-standing public and the new generations that are coming are a priority. In our 12 years of solid history, we have reinforced the values we cherish most. In our company, happiness lies in the special service of the seller, in the quality products offered to the consumer, and in the relationship of proximity and respect inherited from its founder.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
