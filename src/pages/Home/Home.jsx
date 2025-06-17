import React from 'react';
import Header from './Header';
import Stat from './Stat';
import Categories from './Categories';
import Contents from './Contents';
import Faq from './Faqs';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = `Home | Talkademic`;
    return () => {
      document.title = "Talkademic";
    };
  }, []);
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