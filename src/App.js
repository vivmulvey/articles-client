import { Component } from 'react';

import Navigation from './Navigation';
import Filters from './Filters';
import ArticleList from './ArticleList';

import './App.css';
import { Container } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null,
      categories: [
        {
            "id": 1,
            "title": "Soccer",
            "created_at": "2021-01-07T15:19:29.000000Z",
            "updated_at": "2021-01-07T15:19:29.000000Z"
        },
        {
            "id": 2,
            "title": "Basketball",
            "created_at": "2021-01-07T15:19:29.000000Z",
            "updated_at": "2021-01-07T15:19:29.000000Z"
        },
        {
            "id": 3,
            "title": "Sailing",
            "created_at": "2021-01-07T15:19:29.000000Z",
            "updated_at": "2021-01-07T15:19:29.000000Z"
        },
        {
            "id": 4,
            "title": "Rugby",
            "created_at": "2021-01-07T15:19:29.000000Z",
            "updated_at": "2021-01-07T15:19:29.000000Z"
        },
        {
            "id": 5,
            "title": "Badminton",
            "created_at": "2021-01-07T15:19:29.000000Z",
            "updated_at": "2021-01-07T15:19:29.000000Z"
        },
        {
            "id": 6,
            "title": "Tennis",
            "created_at": "2021-01-07T15:19:29.000000Z",
            "updated_at": "2021-01-07T15:19:29.000000Z"
        },
        {
            "id": 7,
            "title": "Running",
            "created_at": "2021-01-07T15:19:29.000000Z",
            "updated_at": "2021-01-07T15:19:29.000000Z"
        },
        {
            "id": 8,
            "title": "Hockey",
            "created_at": "2021-01-07T15:19:29.000000Z",
            "updated_at": "2021-01-07T15:19:29.000000Z"
        },
        {
            "id": 9,
            "title": "Canoeing",
            "created_at": "2021-01-07T15:19:29.000000Z",
            "updated_at": "2021-01-07T15:19:29.000000Z"
        },
        {
            "id": 10,
            "title": "Rowing",
            "created_at": "2021-01-07T15:19:29.000000Z",
            "updated_at": "2021-01-07T15:19:29.000000Z"
        }
     ],
     articles: [
      {
          "id": 1,
          "title": "Hic et odio aliquid optio aut eos qui temporibus.",
          "body": "Sunt error omnis labore quae minima suscipit consequatur et. Omnis eveniet dolores in et illum. Fuga voluptas unde dolore quia totam a rem.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 6,
          "user_id": 2,
          "category": {
              "id": 6,
              "title": "Tennis",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 2,
              "name": "Prof. Arnold Cronin IV",
              "email": "daphne.boehm@steuber.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 2,
          "title": "Quasi repellendus debitis voluptas eos reiciendis sunt sint beatae.",
          "body": "Sint quas saepe inventore et non alias et. Rerum id eum commodi rem ex eos excepturi.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 7,
          "user_id": 6,
          "category": {
              "id": 7,
              "title": "Running",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 6,
              "name": "Velva Mohr",
              "email": "peggie49@langosh.org",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 3,
          "title": "Excepturi laboriosam assumenda non quia.",
          "body": "Consectetur delectus ullam magnam labore ea quasi quidem. Labore quod deserunt nihil deleniti quo dolor. Impedit consequatur facilis error ex repellendus quaerat hic. Qui aut quia sed consequatur.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 6,
          "user_id": 4,
          "category": {
              "id": 6,
              "title": "Tennis",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 4,
              "name": "Tavares Reynolds",
              "email": "matilda.leannon@yahoo.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 4,
          "title": "Voluptatem non praesentium illo dolorum.",
          "body": "Deleniti vitae aut voluptatem voluptates et. Optio ratione aut ipsam asperiores fuga. Dolor aperiam et tempore veniam quibusdam error ullam. Ex ipsa quasi et dolore quisquam.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 3,
          "user_id": 3,
          "category": {
              "id": 3,
              "title": "Sailing",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 3,
              "name": "Zelma Carroll",
              "email": "peter.heller@reichel.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 5,
          "title": "Doloremque et repudiandae qui assumenda sit.",
          "body": "Omnis velit commodi sint velit aliquid velit dolor. Et occaecati est ut et qui voluptas libero. Aut pariatur sed expedita voluptas at voluptatem aspernatur. Ducimus praesentium amet aliquam corrupti aut repellat. Modi sit ut itaque hic.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 9,
          "user_id": 8,
          "category": {
              "id": 9,
              "title": "Canoeing",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 8,
              "name": "Brenden Kessler",
              "email": "luna99@gmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 6,
          "title": "Ad unde aut qui esse consequatur quae.",
          "body": "Non harum vel explicabo nihil ex qui sunt. Ducimus vel quia provident autem quas. Repellendus nam in minima nisi.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 5,
          "user_id": 10,
          "category": {
              "id": 5,
              "title": "Badminton",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 10,
              "name": "Gardner Wehner PhD",
              "email": "gkonopelski@hotmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 7,
          "title": "Suscipit aliquam quia in maxime.",
          "body": "Laborum consequuntur quia et adipisci itaque molestiae at. Nemo iure maxime sint maxime consequatur sit impedit nemo.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 6,
          "user_id": 2,
          "category": {
              "id": 6,
              "title": "Tennis",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 2,
              "name": "Prof. Arnold Cronin IV",
              "email": "daphne.boehm@steuber.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 8,
          "title": "Ut sequi sit totam qui eos.",
          "body": "Exercitationem at ipsa dolorem rem ut eum. Blanditiis omnis modi vero dolor. Quisquam nam aperiam dolor veritatis reprehenderit.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 2,
          "user_id": 4,
          "category": {
              "id": 2,
              "title": "Basketball",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 4,
              "name": "Tavares Reynolds",
              "email": "matilda.leannon@yahoo.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 9,
          "title": "Sit voluptatem totam suscipit ex.",
          "body": "Error magnam delectus ea voluptatum. At et asperiores ea odit illum dolores. Odio reprehenderit molestias recusandae reprehenderit non.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 1,
          "user_id": 2,
          "category": {
              "id": 1,
              "title": "Soccer",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 2,
              "name": "Prof. Arnold Cronin IV",
              "email": "daphne.boehm@steuber.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 10,
          "title": "Temporibus quo excepturi expedita.",
          "body": "Placeat necessitatibus aut dolorum libero voluptatem quibusdam. Optio iste quia veritatis rem eligendi sint. Aperiam nisi sed consequatur quisquam quisquam.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 2,
          "user_id": 7,
          "category": {
              "id": 2,
              "title": "Basketball",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 7,
              "name": "Adah Mills",
              "email": "carroll.dan@gmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 11,
          "title": "Consequatur esse molestiae praesentium minima aspernatur quis aspernatur.",
          "body": "Sunt illo est occaecati impedit nam. Aperiam quo alias alias repudiandae. Itaque similique adipisci tempora. Commodi accusamus consequatur molestiae ut nesciunt quia.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 10,
          "user_id": 2,
          "category": {
              "id": 10,
              "title": "Rowing",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 2,
              "name": "Prof. Arnold Cronin IV",
              "email": "daphne.boehm@steuber.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 12,
          "title": "Voluptas nihil et aut sed porro fugiat repellat.",
          "body": "Enim rerum est dolore. Non est non aliquid saepe illo qui. Quos reprehenderit illum dicta dolore eligendi vero aperiam voluptatibus. Qui rerum consequuntur est expedita quia.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 2,
          "user_id": 8,
          "category": {
              "id": 2,
              "title": "Basketball",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 8,
              "name": "Brenden Kessler",
              "email": "luna99@gmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 13,
          "title": "Assumenda voluptas est voluptatum expedita.",
          "body": "Iste alias et sint fugiat natus occaecati ut. Molestiae et temporibus aut delectus. Sequi consequatur qui doloribus tempora adipisci commodi. Ut sed molestias et laudantium soluta nesciunt amet.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 5,
          "user_id": 2,
          "category": {
              "id": 5,
              "title": "Badminton",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 2,
              "name": "Prof. Arnold Cronin IV",
              "email": "daphne.boehm@steuber.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 14,
          "title": "Iusto maxime velit sit magni autem.",
          "body": "Voluptate amet labore qui voluptatem et. Commodi magni beatae architecto expedita.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 2,
          "user_id": 5,
          "category": {
              "id": 2,
              "title": "Basketball",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 5,
              "name": "Erwin Witting",
              "email": "abshire.shanel@volkman.info",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 15,
          "title": "Hic in dolore eos nisi sapiente sunt aut qui.",
          "body": "Dolorem vitae aliquid consectetur. Quo aut aliquid illo iste repellendus neque similique. Et ea deleniti exercitationem est et.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 7,
          "user_id": 7,
          "category": {
              "id": 7,
              "title": "Running",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 7,
              "name": "Adah Mills",
              "email": "carroll.dan@gmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 16,
          "title": "Et porro nobis nulla omnis quaerat nisi placeat.",
          "body": "Ab nihil autem perferendis enim consequatur. Quasi sit officia temporibus id autem qui ex. Quas qui illo praesentium laborum.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 10,
          "user_id": 9,
          "category": {
              "id": 10,
              "title": "Rowing",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 9,
              "name": "Dr. Lela Trantow I",
              "email": "kuhic.therese@gmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 17,
          "title": "Vel dolores debitis perferendis eligendi quisquam ad sit dolores.",
          "body": "Ut omnis tenetur iure. Aliquam in dolore laudantium officia voluptatem alias placeat. Pariatur mollitia quis dolores et natus pariatur id.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 5,
          "user_id": 4,
          "category": {
              "id": 5,
              "title": "Badminton",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 4,
              "name": "Tavares Reynolds",
              "email": "matilda.leannon@yahoo.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 18,
          "title": "Aut iure itaque dolores cupiditate est eaque illo aut.",
          "body": "Nobis quaerat libero itaque soluta dolores aut officia. Sequi nihil qui omnis culpa ipsa et inventore velit. Dolor vel et eius vel.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 8,
          "user_id": 3,
          "category": {
              "id": 8,
              "title": "Hockey",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 3,
              "name": "Zelma Carroll",
              "email": "peter.heller@reichel.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 19,
          "title": "Quia rerum id fugit laborum pariatur iusto.",
          "body": "Sed reiciendis esse hic saepe. Maxime numquam eius delectus corporis tempore quibusdam. Eveniet consequatur facilis occaecati libero fugit. Doloribus quis non autem enim assumenda.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 2,
          "user_id": 5,
          "category": {
              "id": 2,
              "title": "Basketball",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 5,
              "name": "Erwin Witting",
              "email": "abshire.shanel@volkman.info",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 20,
          "title": "Neque et qui molestiae consequatur quae vel.",
          "body": "Voluptatum porro ullam natus perspiciatis amet incidunt. Eum perspiciatis nemo eum eius magni. Totam qui nam voluptatum vero dolores.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 4,
          "user_id": 9,
          "category": {
              "id": 4,
              "title": "Rugby",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 9,
              "name": "Dr. Lela Trantow I",
              "email": "kuhic.therese@gmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 21,
          "title": "Aut accusamus quo fugiat deserunt facere quam.",
          "body": "Beatae in sed rem qui quia veritatis. Porro aliquid rerum dolorem voluptas doloremque facere aut omnis. Assumenda eum molestiae quo et vel.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 8,
          "user_id": 8,
          "category": {
              "id": 8,
              "title": "Hockey",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 8,
              "name": "Brenden Kessler",
              "email": "luna99@gmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 22,
          "title": "Nam sint fugiat autem minus velit laudantium.",
          "body": "Autem qui eum nostrum consequatur commodi repellat. Ut molestiae animi quia fugit dolor expedita voluptatibus et. Voluptatibus necessitatibus consequatur veniam aliquam fugiat.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 7,
          "user_id": 4,
          "category": {
              "id": 7,
              "title": "Running",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 4,
              "name": "Tavares Reynolds",
              "email": "matilda.leannon@yahoo.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 23,
          "title": "Sapiente tenetur ipsum accusantium aut ut iusto.",
          "body": "Dolorum odio minus odio id. Dolor nisi maiores repellat dolorem voluptate laboriosam. Sed culpa quia non deleniti culpa.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 9,
          "user_id": 11,
          "category": {
              "id": 9,
              "title": "Canoeing",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 11,
              "name": "Dr. Marilou McDermott DVM",
              "email": "ymurray@gmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 24,
          "title": "Laborum deserunt voluptatem ratione dolor sint.",
          "body": "Ipsum explicabo nihil cumque asperiores commodi. Dolores aliquam cum maxime sed iure. Facere assumenda tempore voluptas consequatur. Possimus sit rerum quam.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 4,
          "user_id": 11,
          "category": {
              "id": 4,
              "title": "Rugby",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 11,
              "name": "Dr. Marilou McDermott DVM",
              "email": "ymurray@gmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 25,
          "title": "Cumque nam rerum molestias consequatur.",
          "body": "Officia sint blanditiis consequatur est. Sed beatae culpa quia explicabo rerum. Sed assumenda architecto perspiciatis qui officia ad. Eos itaque odio quibusdam quas minima.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 2,
          "user_id": 9,
          "category": {
              "id": 2,
              "title": "Basketball",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 9,
              "name": "Dr. Lela Trantow I",
              "email": "kuhic.therese@gmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 26,
          "title": "In repellendus dolor totam quis tempora explicabo.",
          "body": "Inventore et nostrum cupiditate fugit. Odit a voluptas eius similique. Quam quidem pariatur velit minima iste est fugit. Error voluptas consectetur et atque cum repudiandae qui.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 5,
          "user_id": 5,
          "category": {
              "id": 5,
              "title": "Badminton",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 5,
              "name": "Erwin Witting",
              "email": "abshire.shanel@volkman.info",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 27,
          "title": "Cum sit nobis quae aspernatur illum officiis.",
          "body": "Pariatur delectus est et illo. Quasi corrupti qui ipsum deleniti aut veniam. Reprehenderit reprehenderit aperiam eaque consequuntur dolores et. Quasi nemo ipsum repellat libero quae molestias voluptas nulla.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 2,
          "user_id": 10,
          "category": {
              "id": 2,
              "title": "Basketball",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 10,
              "name": "Gardner Wehner PhD",
              "email": "gkonopelski@hotmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 28,
          "title": "Qui ut culpa non rerum et.",
          "body": "Dolor voluptatem temporibus ut explicabo officia. Excepturi eligendi rerum qui fuga. Perferendis quas numquam dicta dolore.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 2,
          "user_id": 7,
          "category": {
              "id": 2,
              "title": "Basketball",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 7,
              "name": "Adah Mills",
              "email": "carroll.dan@gmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 29,
          "title": "Deleniti et rerum tempora non nesciunt dolore id.",
          "body": "Officiis amet et autem molestiae vero labore ut. Eum voluptas vel aut architecto magnam amet adipisci. Consequatur occaecati reiciendis quia iste laudantium.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 6,
          "user_id": 11,
          "category": {
              "id": 6,
              "title": "Tennis",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 11,
              "name": "Dr. Marilou McDermott DVM",
              "email": "ymurray@gmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 30,
          "title": "Rerum numquam earum iure iure minus.",
          "body": "Eos aut voluptatem ipsa repudiandae et totam. Amet rem doloribus sit vel odio nulla. Et molestiae ab sed laborum tempore omnis in. Harum nulla tempore earum dignissimos et dolores vel et.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 2,
          "user_id": 6,
          "category": {
              "id": 2,
              "title": "Basketball",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 6,
              "name": "Velva Mohr",
              "email": "peggie49@langosh.org",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 31,
          "title": "Dolor voluptas tempore enim et velit ratione quae.",
          "body": "Veritatis aut aliquam id ullam voluptas aperiam expedita eius. Quas id magnam autem illo culpa. Reiciendis eligendi porro facere deleniti corporis voluptates et natus.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 6,
          "user_id": 5,
          "category": {
              "id": 6,
              "title": "Tennis",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 5,
              "name": "Erwin Witting",
              "email": "abshire.shanel@volkman.info",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 32,
          "title": "Praesentium voluptatem dolorem qui mollitia veritatis.",
          "body": "Aut nihil voluptatem omnis quam dolor quibusdam. Facilis dolorum nam molestiae occaecati dolorem corporis sunt. Ratione vitae et veniam id. Atque sapiente modi maiores neque consequuntur voluptate.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 6,
          "user_id": 11,
          "category": {
              "id": 6,
              "title": "Tennis",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 11,
              "name": "Dr. Marilou McDermott DVM",
              "email": "ymurray@gmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 33,
          "title": "Ut aut mollitia nostrum nemo.",
          "body": "Expedita velit et necessitatibus eligendi optio quos distinctio voluptas. Dolorum voluptatem et corrupti fuga. Quis aut accusamus non illo nihil.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 3,
          "user_id": 7,
          "category": {
              "id": 3,
              "title": "Sailing",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 7,
              "name": "Adah Mills",
              "email": "carroll.dan@gmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 34,
          "title": "Exercitationem atque voluptatum praesentium ut autem rerum ea.",
          "body": "Autem perspiciatis deserunt voluptatum est. Dicta sequi nihil voluptas. Repudiandae repellendus esse adipisci debitis. Fugit nobis praesentium libero placeat rerum quam enim qui.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 3,
          "user_id": 10,
          "category": {
              "id": 3,
              "title": "Sailing",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 10,
              "name": "Gardner Wehner PhD",
              "email": "gkonopelski@hotmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 35,
          "title": "Doloribus nesciunt qui dolores magni.",
          "body": "Repudiandae fuga ut recusandae ut facilis. Nobis corporis et commodi quia. Doloribus tenetur aut magni.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 4,
          "user_id": 3,
          "category": {
              "id": 4,
              "title": "Rugby",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 3,
              "name": "Zelma Carroll",
              "email": "peter.heller@reichel.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 36,
          "title": "Earum et aut porro rerum praesentium sit.",
          "body": "Nihil et aliquam omnis nihil earum voluptatem illum. Inventore est et qui non doloribus sit. Quas repudiandae reprehenderit aut eum. Et non est quos omnis.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 3,
          "user_id": 8,
          "category": {
              "id": 3,
              "title": "Sailing",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 8,
              "name": "Brenden Kessler",
              "email": "luna99@gmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 37,
          "title": "Aut consequatur omnis esse provident eos.",
          "body": "Dicta placeat voluptatem saepe et. Praesentium et quidem fugiat minus temporibus sint. Cumque enim qui alias aut ut illo.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 4,
          "user_id": 8,
          "category": {
              "id": 4,
              "title": "Rugby",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 8,
              "name": "Brenden Kessler",
              "email": "luna99@gmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 38,
          "title": "Eveniet cupiditate deserunt et asperiores molestias nam molestiae.",
          "body": "Et ea id autem et ipsa enim quas. Rem debitis voluptas excepturi id perspiciatis facere commodi. Totam magnam aut eum a fuga veritatis eos blanditiis.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 6,
          "user_id": 4,
          "category": {
              "id": 6,
              "title": "Tennis",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 4,
              "name": "Tavares Reynolds",
              "email": "matilda.leannon@yahoo.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 39,
          "title": "Cupiditate nostrum vero non.",
          "body": "Repellat aliquam ab voluptatem eaque consectetur sint deserunt nisi. Ea ipsam autem itaque inventore ut dolor dolorum. Ratione consequatur nesciunt rerum quam laboriosam eveniet occaecati. Omnis autem ab qui dolorem.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 4,
          "user_id": 8,
          "category": {
              "id": 4,
              "title": "Rugby",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 8,
              "name": "Brenden Kessler",
              "email": "luna99@gmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 40,
          "title": "Dignissimos dolores quo molestiae culpa qui.",
          "body": "Magni at magnam et ipsa nobis. Velit voluptatem id minima provident rerum similique in. Cumque aut quis ea fuga. Neque laudantium doloribus quibusdam sed.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 3,
          "user_id": 9,
          "category": {
              "id": 3,
              "title": "Sailing",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 9,
              "name": "Dr. Lela Trantow I",
              "email": "kuhic.therese@gmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 41,
          "title": "Provident qui in harum quidem in enim magni.",
          "body": "Cumque error et inventore aut quos. Doloremque soluta sint saepe perspiciatis voluptas ea omnis sunt. Iste ea officia esse et natus dolorem sapiente rerum.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 7,
          "user_id": 11,
          "category": {
              "id": 7,
              "title": "Running",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 11,
              "name": "Dr. Marilou McDermott DVM",
              "email": "ymurray@gmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 42,
          "title": "Eos et placeat eum.",
          "body": "Et temporibus veniam corrupti temporibus ut quam nihil qui. Esse minima consequuntur voluptate facilis id incidunt qui. Et qui voluptas molestias sint velit. Repellendus mollitia laborum pariatur velit aspernatur inventore itaque.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 3,
          "user_id": 8,
          "category": {
              "id": 3,
              "title": "Sailing",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 8,
              "name": "Brenden Kessler",
              "email": "luna99@gmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 43,
          "title": "Sed veritatis sed provident vel quis.",
          "body": "Et blanditiis nemo et placeat tempore nesciunt. Commodi vitae eius architecto possimus nisi consequatur a. Delectus quaerat dolore quae veniam pariatur repellendus natus.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 2,
          "user_id": 9,
          "category": {
              "id": 2,
              "title": "Basketball",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 9,
              "name": "Dr. Lela Trantow I",
              "email": "kuhic.therese@gmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 44,
          "title": "Commodi adipisci omnis dolorum et rerum doloremque eos.",
          "body": "Vel est adipisci voluptatem quia quia perferendis labore. Amet eveniet voluptatem temporibus hic doloremque facilis. Qui quia quia voluptatem qui dolores nobis magnam. Occaecati dolorum voluptas possimus a dolores voluptates. Nostrum vel eaque dolore placeat asperiores exercitationem qui.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 4,
          "user_id": 11,
          "category": {
              "id": 4,
              "title": "Rugby",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 11,
              "name": "Dr. Marilou McDermott DVM",
              "email": "ymurray@gmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 45,
          "title": "Quia necessitatibus quae qui tenetur vel officiis ipsa.",
          "body": "Quasi fugiat non ullam sit qui. Dolorem excepturi adipisci magnam architecto et adipisci quia. Consequatur ea esse vitae alias omnis accusantium. Ea veritatis praesentium qui aperiam eum necessitatibus. Odit modi amet dolor iusto corporis autem.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 10,
          "user_id": 5,
          "category": {
              "id": 10,
              "title": "Rowing",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 5,
              "name": "Erwin Witting",
              "email": "abshire.shanel@volkman.info",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 46,
          "title": "Laudantium consequatur dolore quaerat temporibus incidunt dolore distinctio.",
          "body": "Excepturi rerum similique id aut sunt inventore temporibus at. Debitis excepturi fugit nulla repellendus molestias minima quae non. Odit repellat aspernatur dignissimos rerum. Unde laudantium voluptas earum.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 3,
          "user_id": 7,
          "category": {
              "id": 3,
              "title": "Sailing",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 7,
              "name": "Adah Mills",
              "email": "carroll.dan@gmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 47,
          "title": "Ducimus in praesentium fugit ut.",
          "body": "Minus dolorum itaque mollitia. Provident ipsa magnam nihil qui quia. Distinctio qui ex excepturi.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 1,
          "user_id": 10,
          "category": {
              "id": 1,
              "title": "Soccer",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 10,
              "name": "Gardner Wehner PhD",
              "email": "gkonopelski@hotmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 48,
          "title": "Illo consequatur ut exercitationem est occaecati.",
          "body": "Dolor quo recusandae minus vel in quidem. Qui perspiciatis aut id sed omnis. Aliquid ex nesciunt voluptatem vitae laboriosam quasi aliquam. Sint occaecati sed sed esse architecto quae.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 1,
          "user_id": 5,
          "category": {
              "id": 1,
              "title": "Soccer",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 5,
              "name": "Erwin Witting",
              "email": "abshire.shanel@volkman.info",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 49,
          "title": "Quam earum et voluptas est similique.",
          "body": "Aut eveniet illum odio consequatur vitae sunt. Doloribus enim nam vel veniam. Doloremque possimus exercitationem sequi architecto aspernatur unde quia. Ea libero omnis illo occaecati.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 5,
          "user_id": 4,
          "category": {
              "id": 5,
              "title": "Badminton",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 4,
              "name": "Tavares Reynolds",
              "email": "matilda.leannon@yahoo.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      },
      {
          "id": 50,
          "title": "Consectetur labore officia et temporibus distinctio in tempora molestiae.",
          "body": "Alias quasi optio dolorem in ab non molestias et. Fugit aut autem enim minus laudantium earum. Et blanditiis consequatur quos iure.",
          "created_at": "2021-01-07T15:19:29.000000Z",
          "updated_at": "2021-01-07T15:19:29.000000Z",
          "category_id": 2,
          "user_id": 10,
          "category": {
              "id": 2,
              "title": "Basketball",
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z"
          },
          "user": {
              "id": 10,
              "name": "Gardner Wehner PhD",
              "email": "gkonopelski@hotmail.com",
              "email_verified_at": null,
              "created_at": "2021-01-07T15:19:29.000000Z",
              "updated_at": "2021-01-07T15:19:29.000000Z",
              "api_token": null
          }
      }
  ]
    };
  }

  render(){
    return (
      <Container>
       <Navigation user={this.state.user} />
       <Filters categories={this.state.categories} />
       <ArticleList articles={this.state.articles}/>
       </Container>
    );
  }
}
  

export default App;
