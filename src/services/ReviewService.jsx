import { useState, useEffect } from 'react';
import axios from 'axios';

const baseurl = 'http://127.0.0.1:8080';

// custom hook for performing GET request
export const useFetch = (searchMethod, searchValue) => {
  let param = 0;

  if (searchValue !== undefined) param = searchValue;

  const getAll = `${baseurl}/api/restaurants`;
  const getById = `${baseurl}/api/restaurants/` + param;
  const search = `${baseurl}/api/restaurants/search/` + param;
  let url = null;

  switch (searchMethod) {
    case 'getById': url = getById;
      break;
    case 'getAll': url = getAll;
      break;
    case 'search': url = search;
      break;
    default: url = null;
  }

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        if (response.status === 200) {
          setData(response.data);
          console.log('Date fetched! -> ' + data[0]);
        }
      } catch (error) {
        setData(false);
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { loading, data };
};

export function createRestaurant(restaurant) {
  return axios.post(`${baseurl}/api/add/restaurant`, restaurant);
}

export function updateRestaurant(restaurant) {
  console.log('Currently in the restaurant upate service...');
  return axios.put(`${baseurl}/api/update/restaurant`, restaurant);
}

export function deleteStudent(restaurantId) {
  return axios.delete(`${baseurl}/api/delete/restaurant/` + restaurantId);
}

export function createReview(review) {
  return axios.post(`${baseurl}/api/add/review`, review);
}
  
export function updateReview(review) {
  console.log('Currently in the review upate service...');
  return axios.put(`${baseurl}/api/update/review`, review);
}

export function createUser(user) {
    return axios.post(`${baseurl}/api/add/user`, user);
}
    
export function updateReview(user) {
    console.log('Currently in the user upate service...');
    return axios.put(`${baseurl}/api/update/user`, user);
}


