import React, { useState } from 'react';
import './App.css';
import CardInterface from './components/CardInterface';
import NavigationBar from './components/NavigationBar';


function App() {

  const testingData = [
    {
        id: 1,
        name: 'Pizza',
        rating: '4',
        address: 'Someplace Somewhere',
        phone: '1234567890',
        description: 'yada yada'
    },
    {
        id: 2,
        name: 'Burger',
        rating: '3',
        address: 'Someplace Somewhere',
        phone: '1234567890',
        description: 'burg'
    },
    {
        id:3,
        name: 'Pasta',
        rating: '4.5',
        address: 'Someplace Somewhere',
        phone: '1234567890',
        description: 'spagetti'
    },
    {
        id:4,
        name: 'sandwich',
        rating: '3.5',
        address: 'Someplace Somewhere',
        phone: '1234567890',
        description: 'PB&J'
    }
  ]// end of testingData ---------------

  const testingReview = [
    {
      id: 1,
      title: "Super",
      body: "I could eat a gazillion",
      rating: 5,
      restId: 1
    },
    {
      id: 2,
      title: "bad",
      body: "rat in food",
      rating: 1,
      restId: 1
    },
    {
      id:3,
      title: "good stuff",
      body: "I ate it",
      rating: 4,
      restId: 2
    }
  ]

  const [cardId, setCardId] = useState('');
  const [review, setReview] = useState(false);
  const [search, setSearch] = useState('');
  const [searching, setSearching] = useState(false);

  const findReviews = (cardId, reviewState) => {
    setCardId(cardId)
    setReview(reviewState);
  }

  const searchFor = (searchValue, searchState) => {
    setSearch(searchValue);
    setSearching(searchState);
  }

  return (
    <div className="container-fluid">
      <NavigationBar search={searchFor}/>
      {!review && <CardInterface findReviews={findReviews} restaurant={testingData} />}
      {review && <CardInterface cardId={cardId} findReviews={testingReview} />}
    </div>
  );
}

export default App;
