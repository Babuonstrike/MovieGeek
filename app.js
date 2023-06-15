'use strict';

let movies = {
  Tamil: [
    {
      img: 'https://i1.behindwoods.com/tamil-movies/oh-manapenne/images/thumbnails/oh-manapenne-review.jpg',
      title: 'Oh Manapenne',
      score: 7.5,
      time: '2h 20min',
      date: 2021,
    },
    {
      img: 'https://i1.behindwoods.com/tamil-movies/doctor-tamil/images/thumbnails/doctor-tamil-review.jpg',
      title: 'Doctor',
      score: 8.5,
      time: '2h 28min',
      date: 2021,
    },
    {
      img: 'https://i2.behindwoods.com/tamil-movies/dikkiloona/images/thumbnails/dikkiloona-review.jpg',
      title: 'Dikkiloona',
      score: 6.5,
      time: '2h 24min',
      date: 2021,
    },
    {
      img: 'https://i3.behindwoods.com/tamil-movies/thalaivii-tamil/images/thumbnails/thalaivii-tamil-review.jpg',
      title: 'Thalaivii',
      score: 6.1,
      time: '2h 33min',
      date: 2021,
    },
    {
      img: 'https://i4.behindwoods.com/tamil-movies/kasada-tabara-tamil/images/thumbnails/kasada-tabara-tamil-review.jpg',
      title: 'Kasada Tabara',
      score: 7.4,
      time: '2h 17min',
      date: 2021,
    },
    {
      img: 'https://i4.behindwoods.com/tamil-movies/netrikann-tamil/images/thumbnails/netrikann-tamil-review.jpg',
      title: 'Netrikann',
      score: 6.0,
      time: '2h 26min',
      date: 2021,
    },
    {
      img: 'https://i7.behindwoods.com/tamil-movies/sulthan-tamil/images/thumbnails/sulthan-tamil-review.jpg',
      title: 'Sultan',
      score: 7.4,
      time: '2h 25min',
      date: 2021,
    },
    {
      img: 'https://i8.behindwoods.com/tamil-movies/teddy/images/thumbnails/teddy-review.jpg',
      title: 'Teddy',
      score: 6.6,
      time: '2h 16min',
      date: 2021,
    },
    {
      img: 'https://i10.behindwoods.com/tamil-movies/paris-jayaraj-tamil/images/thumbnails/paris-jayaraj-tamil-review.jpg',
      title: 'Paris Jeyaraj',
      score: 5.8,
      time: '2h 16min',
      date: 2021,
    },
    {
      img: 'https://i2.behindwoods.com/tamil-movies/bhoomi-tamil/images/thumbnails/bhoomi-tamil-review.jpg',
      title: 'Bhoomi',
      score: 5.0,
      time: '2h 8min',
      date: 2021,
    },
    {
      img: 'https://i5.behindwoods.com/tamil-movies/sarpatta-parambarai-tamil/images/thumbnails/sarpatta-parambarai-tamil-review.jpg',
      title: 'Sarpatta Parambarai',
      score: 8.7,
      time: '2h 53min',
      date: 2021,
    },
    {
      img: 'https://i6.behindwoods.com/tamil-movies/karnan-tamil/images/thumbnails/karnan-tamil-review.jpg',
      title: 'Karnan',
      score: 8.2,
      time: '2h 38min',
      date: 2021,
    },
  ],
  English: [
    {
      img: 'https://resizing.flixster.com/l_Vw-O0ZRNSSHBtye6MXe471Yks=/206x305/v2/https://resizing.flixster.com/4amRuM3jqSEr3GiFgBHrFPSHxM4=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzdhYTI2NDJkLTU5YTYtNDNkOS05ZWQxLWZiNjFlOTZmYjZlZS5qcGc=',
      title: 'Dune',
      score: 8.3,
      rotten_tomato: 83,
      date: 2021,
      rate: 'PG-13',
      time: '2h 35min',
    },
    {
      img: 'https://resizing.flixster.com/dvrBlvusKyzJWd3_0xPYl-cYAoA=/206x305/v2/https://resizing.flixster.com/iq-lPVWed-w4chclXfxu0sacIwc=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzFkNTZlZTE1LTRiYjMtNDA3MC1iMGE3LTdhOWZmOGNlZWJjOS5qcGc=',
      title: 'NO TIME TO DIE',
      score: 7.6,
      rotten_tomato: 83,
      date: 2021,
      rate: 'PG-13',
      time: '2h 43min',
    },
    {
        img: 'https://resizing.flixster.com/zfr8r5hDj7u2spfKHi9W3t0dtcA=/206x305/v2/https://resizing.flixster.com/m-_iSmK-QO9H2Iurcv7uu4TrxCM=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzYwZGZhODY3LTI2YzktNGVkYy05YWJlLTVmMGNmMTY2YWZhNS5qcGc=',
        title: 'Venom: Let There Be Carnage',
        score: 6.3,
        rotten_tomato: 61,
        date: 2021,
        rate: 'PG-13',
        time: '1h 26m',
    },
    {
      img: 'https://resizing.flixster.com/yVJuXjlQcx0Ae-cCgRXJXUPgTbE=/206x305/v2/https://resizing.flixster.com/xwxxJB2xH5NdYHpX_VBGwBtT54I=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2U1NzRmM2YxLWJmZjctNDYzNS05Mjk4LTVmOGM4NGJiMTQwMS5qcGc=',
      title: 'Free Guy',
      score: 7.2,
      rotten_tomato: 80,
      date: 2021,
      rate: 'PG-13',
      time: '1h 55m',
    },
    {
      img: 'https://resizing.flixster.com/X7GEgZezXul54oFjWo_pvQjn7oQ=/206x305/v2/https://resizing.flixster.com/8Cps_AWwNbk0bMzDtqzwRhccnY0=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzRkMWJjZjI2LWE0MDktNDczZC05ZmNiLTIzMTQ0NTE5MGJiMC5qcGc=',
      title: 'Black Widow',
      score: 6.8,
      rotten_tomato: 79,
      date: 2021,
      rate: 'PG-13',
      time: '2h 13m',
    },
    {
      img: 'https://resizing.flixster.com/8gToQidSLYTJ7XsOJsetvpdsuAU=/206x305/v2/https://resizing.flixster.com/g4Dehbdq4DM0RU1b4-pv1JqTwCQ=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2NjYWQ1NGQ0LTEyMjMtNGFmZi04YjMxLTc0NjQ1Y2VkYzk2MS5qcGc=',
      title: 'Eternals',
      score: 7.7,
      rotten_tomato: 60,
      date: 2021,
      rate: 'PG-13',
      time: '2h 37m',
    },
    {
      img: 'https://resizing.flixster.com/m1tdQjR0pz9NbIxc4bsrkc2EgW4=/206x305/v2/https://resizing.flixster.com/o1SPgS2QSheJMY3jWYRnl4Jev7s=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzUzNjRlMjVkLTU0YTEtNDVlYi05NjcyLWU4ZDVjZDYzODcyMy5qcGc=',
      title: 'The Guilty',
      score: 6.3,
      rotten_tomato: 73,
      date: 2021,
      rate: 'R',
      time: '1h 31m',
    },
    {
      img: 'https://resizing.flixster.com/77dcPYqvbl0g9Z0lFpK1KMqNr1w=/206x305/v2/https://resizing.flixster.com/8NoM--CS6cQTcuEIv7msiZhHHPg=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzMzNDFmZTIxLWI4NGUtNGRiZC1hM2IxLTA4ZmVkNmJjNjIxYi5qcGc=',
      title: 'The Black Phone',
      score: 8.3,
      rotten_tomato: 96,
      date: 2021,
      rate: 'R',
      time: '1h 42m',
    },
    {
      img: 'https://resizing.flixster.com/aMzBCIMFvqjXVUviTHAS6lGfei4=/206x305/v2/https://resizing.flixster.com/o3Oul5Xmgiu8no89gblCUYWJB0s=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzY0NWJhN2RhLTg1Y2YtNDBmYS04YjQ0LWI5MWY4NmIwOGRjMy5qcGc=',
      title: 'Shang-Chi and Legend of Ten Rings',
      score: 7.9,
      rotten_tomato: 92,
      date: 2021,
      rate: 'PG-13',
      time: '2h 13m',
    },
    {
      img: 'https://resizing.flixster.com/s-re6pmRAkGFaGLUiusgbYZk2hI=/206x305/v2/https://resizing.flixster.com/0qaBzQ_H1uBgR0hIYzrAIY28URU=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzAyYTFmYWFiLTNhYzItNDg5My1iYmExLWJjZDUzNmI3NDc0Mi5qcGc=',
      title: 'The Suicide Squad',
      score: 7.3,
      rotten_tomato: 90,
      date: 2021,
      rate: 'R',
      time: '2h 12m',
    },
    {
      img: 'https://resizing.flixster.com/HwM3cShR0-r13DUcjTv7gYSu5tg=/206x305/v2/https://resizing.flixster.com/2nDztWKJ5qSkaR7c7o2Rlak_QSg=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2ViZTM1ZTM1LWZhODAtNDFhMS05MjM4LTQ2MWM1NWRmMzU4Ny5qcGc=',
      title: 'Cruella',
      score: 7.4,
      rotten_tomato: 74,
      date: 2021,
      rate: 'PG-13',
      time: '2h 14m',
    },
    {
      img: 'https://resizing.flixster.com/KUsfo-ovtlPsrFU8QS40-U2omAg=/206x305/v2/https://resizing.flixster.com/o4Dcp2h2yDSyFi7Jrnscz9DXAvI=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzYwOWNlODJmLTE1OTEtNGNiMi1hZWIxLTc5ZjYwNGQxYWQ4OS5qcGc=',
      title: 'Ghostbusters: Afterlife',
      score: 7.8,
      rotten_tomato: 77,
      date: 2021,
      rate: 'PG-13',
      time: '2h 4m',
    },
  ],
  //   Malayalam: [],
  //   Telugu: [],
  //   Kannada: [],
  //   Hindi: [],
};

window.addEventListener('load', function () {
  fetch_tamil_movies();
  fetch_english_movies();
});

function getMoviesCardsInfo(type) {
  const VALID_TYPES = [
    'Tamil',
    'English',
    'Malayalam',
    'Telugu',
    'Kannada',
    'Hindi',
  ];
  if (!VALID_TYPES.includes(type)) return new Error('invalid movie type');
  for (const [movie_type, cards] of Object.entries(movies))
    if (type === movie_type) return cards;
  return null;
}

function fetch_tamil_movies() {
  const tamil_movie_cards = document.getElementById('tamil-movie-cards');
  let cardsInfo = getMoviesCardsInfo('Tamil');
  let tamil_cards_fragment = document.createDocumentFragment();
  if (!cardsInfo) return new Error('tamil movies not found');
  cardsInfo.forEach((card) => {
    let card_template = document
      .getElementById('tamil-movie-card-template')
      .content.cloneNode(true);
    card_template.querySelector('img').src = card.img;
    card_template.querySelector('h5').innerHTML = card.title;
    card_template.querySelector('.score').innerHTML = `${card.score}/10`;
    card_template.querySelector('h6').innerHTML = `${card.date} . ${card.time}`;
    tamil_cards_fragment.append(card_template);
  });
  tamil_movie_cards.append(tamil_cards_fragment);
}

function fetch_english_movies() {
  const english_movie_cards = document.getElementById('english-movie-cards');
  let cardsInfo = getMoviesCardsInfo('English');
  let english_cards_fragment = document.createDocumentFragment();
  if (!cardsInfo) return new Error('english movies not found');
  cardsInfo.forEach((card) => {
    let card_template = document
      .getElementById('english-movie-card-template')
      .content.cloneNode(true);
    card_template.querySelector('img').src = card.img;
    card_template.querySelector('h5').innerHTML = card.title;
    card_template.querySelector('.score').innerHTML = `${card.score}/10`;
    card_template.querySelector('.rotten').innerHTML = `${card.rotten_tomato}%`;
    card_template.querySelector(
      'h6'
    ).innerHTML = `${card.date} . ${card.rate} . ${card.time}`;
    english_cards_fragment.append(card_template);
  });
  english_movie_cards.append(english_cards_fragment);
}
