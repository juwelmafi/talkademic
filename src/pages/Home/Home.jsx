import React from 'react';
import Header from './Header';
import Stat from './Stat';
import Categories from './Categories';
import Contents from './Contents';
import Faq from './Faqs';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Stat></Stat>
      <Categories></Categories>
      <Contents></Contents>
      <Faq></Faq>
    </div>
  );
};

export default Home;