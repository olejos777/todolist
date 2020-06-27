// selectors
export const getSearchString = ({ searchString }) => searchString;

export const countVisibleCards = ({ cards, searchString }) =>
  cards.filter(card => new RegExp(searchString, 'i').test(card.title));

export const countAllCards = ({ cards }) => cards.length;

// action name creator

// actions types

// action creators

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}

