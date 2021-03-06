export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  listCreatorText: 'Add new list',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
  header: {
    icon: 'clipboard-list',
  },
};


export const pageContents = {
  title: 'To Do list',
  subtitle: 'A simple to-do app, with lists, columns and cards',
  titleFaq: 'Frequently Asked Questions',
  titleInfo: 'Info about the page',
  imageInfo: 'https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  imageFaq: 'https://i0.wp.com/psychologiafotografii.pl/wp-content/uploads/2019/06/question-mark-1872665_1920.jpg?resize=1024%2C563&ssl=1',
};

export const listData = {
  title: 'Things to do <sup>soooooooooon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Requested (to be planned)',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'In Progress',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Done',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Kanban board',
    description: 'Important actions to do',
    imageList: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    id: 'list-2',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out now!',
    imageList: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Requested',
    icon: 'tasks',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'In Progress',
    icon: 'people-carry',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Done',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'Cook the dinner',
    index: 0,
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Do shopping',
    index: 1,
  },
  {
    id: 'card-3',
    columnId: 'column-1',
    title: 'Complete kodilla task',
    index: 2,
  },
  {
    id: 'card-4',
    columnId: 'column-1',
    title: 'Watch a movie',
    index: 3,
  },
  {
    id: 'card-5',
    columnId: 'column-2',
    title: 'Visit a doctor',
    index: 0,
  },
  {
    id: 'card-6',
    columnId: 'Visit mom',
    title: 'Skyrim',
    index: 1,
  },
  {
    id: 'card-7',
    columnId: 'column-2',
    title: 'Prepare a pizza',
    index: 2,
  },
  {
    id: 'card-8',
    columnId: 'column-2',
    title: 'Repair a car',
    index: 3,
  },
  {
    id: 'card-9',
    columnId: 'column-3',
    title: 'Do some coding',
    index: 0,
  },
  {
    id: 'card-10',
    columnId: 'column-3',
    title: 'Drink a beer',
    index: 1,
  },
  {
    id: 'card-11',
    columnId: 'column-3',
    title: 'Go sleep',
    index: 2,
  },
  {
    id: 'card-12',
    columnId: 'column-3',
    title: 'Read a book',
    index: 3,
  },
  {
    id: 'card-13',
    columnId: 'column-3',
    title: 'Play a game',
    index: 4,
  },
];

const initialStoreData = {
  app: { ...pageContents },
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
