import React from 'react'
import {updateStore, getStore} from './store';

export default function Hello() {
  const {username} = getStore();

  function resetStore() {
    updateStore(store => Object.assign(store, {
      username: 'reset-username'
    }))
  }

  return <div>
    <h1>Hello {username}</h1>
    <button onClick={() => resetStore()}>Reset store</button>
  </div>
};
