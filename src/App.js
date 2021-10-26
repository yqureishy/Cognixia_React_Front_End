import React, { useState } from 'react';
import './App.css';
import CardInterface from './components/CardInterface';
import NavigationBar from './components/NavigationBar';


function App() {

  const [userRole, setUserRole] = useState('guest');
  const [activeUser, setActiveUser] = useState(false);
  const [cardId, setCardId] = useState('');
  const [review, setReview] = useState(false);
  const [search, setSearch] = useState('');
  const [searching, setSearching] = useState(false);

  const findUser = (role, userState) => {
    setUserRole(role);
    setActiveUser(userState);
  }

  const findReviews = (cardId, reviewState) => {
    setCardId(cardId);
    setReview(reviewState);
  }

  const searchFor = (searchValue, searchState) => {
    setSearch(searchValue);
    setSearching(searchState);
  }

  return (
    <div className="container-fluid">
      <NavigationBar search={searchFor}/>
      {!review && <CardInterface findReviews={findReviews} search={searchFor} restaurant={testingData} />}
      {review && <CardInterface cardId={cardId} />}
    </div>
  );
}

export default App;
