export default `
// Pass multiple elements:
const [firstInstance, secondInstance] = new Choices(elements);

// Pass single element:
const choices = new Choices(element);

// Pass reference
const choices = new Choices('[data-trigger]');
const choices = new Choices('.js-choice');

// Pass jQuery element
const choices = new Choices($('.js-choice')[0]);

 // Passing options (with default options)
const choices = new Choices(elements, {
  silent: false,
  items: [],
  choices: [],
  renderChoiceLimit: -1,
  maxItemCount: -1,
  addItems: true,
  removeItems: true,
  removeItemButton: false,
  editItems: false,
  duplicateItemsAllowed: true,
  delimiter: ',',
  paste: true,
  searchEnabled: true,
  searchChoices: true,
  searchFloor: 1,
  searchResultLimit: 4,
  searchFields: ['label', 'value'],
  position: 'auto',
  resetScrollPosition: true,
  regexFilter: null,
  shouldSort: true,
  shouldSortItems: false,
  sortFn: () => {...},
  placeholder: true,
  placeholderValue: null,
  searchPlaceholderValue: null,
  prependValue: null,
  appendValue: null,
  renderSelectedChoices: 'auto',
  loadingText: 'Loading...',
  noResultsText: 'No results found',
  noChoicesText: 'No choices to choose from',
  itemSelectText: 'Press to select',
  addItemText: (value) => {
    return \`Press Enter to add <b>"\${value}"</b>\`;
  },
  maxItemText: (maxItemCount) => {
    return \`Only \${maxItemCount} values can be added\`;
  },
  itemComparer: (choice, item) => {
    return choice === item;
  },
  classNames: {
    containerOuter: 'choices',
    containerInner: 'choices__inner',
    input: 'choices__input',
    inputCloned: 'choices__input--cloned',
    list: 'choices__list',
    listItems: 'choices__list--multiple',
    listSingle: 'choices__list--single',
    listDropdown: 'choices__list--dropdown',
    item: 'choices__item',
    itemSelectable: 'choices__item--selectable',
    itemDisabled: 'choices__item--disabled',
    itemChoice: 'choices__item--choice',
    placeholder: 'choices__placeholder',
    group: 'choices__group',
    groupHeading: 'choices__heading',
    button: 'choices__button',
    activeState: 'is-active',
    focusState: 'is-focused',
    openState: 'is-open',
    disabledState: 'is-disabled',
    highlightedState: 'is-highlighted',
    hiddenState: 'is-hidden',
    flippedState: 'is-flipped',
    loadingState: 'is-loading',
    noResults: 'has-no-results',
    noChoices: 'has-no-choices'
  },
  // Choices uses the great Fuse library for searching. You
  // can find more options here: https://github.com/krisk/Fuse#options
  fuseOptions: {
    include: 'score'
  },
  callbackOnInit: null,
  callbackOnCreateTemplates: null
});
`;
