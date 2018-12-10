export function loadState () {

  try {

    // Get the serialized state
    const serializedState = localStorage.getItem('state');

    if (serializedState === null) {
      return undefined;
    }

    // De-serialize the saved state and return it as an object
    return JSON.parse(serializedState);

  } catch (error) {

    // In case of error, play it safe and let the reducers
    // initialize the store with the default state
    return undefined;
  }

}

export function saveState(state: any) {

  try {

    // Serialize state
    const serializedState = JSON.stringify(state);

    // Save the serialized state
    localStorage.setItem('state', serializedState);

  } catch (error) {
    // TODO handle error
    console.error(error);
  }

}
