import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Section = styled.section``;

const Home: React.FC = () => {
  return (
    <Section>
      <header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <nav>
          <ul>
            <li>
              <Link to="/page2">Page2</Link>
            </li>
          </ul>
        </nav>
      </header>
    </Section>
  );
};

export default Home;
