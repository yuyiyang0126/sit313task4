import {faker} from "@faker-js/faker";

const stafflist = [
    {"key":0,
      "title" : faker.music.songName(),
      "name" : faker.name.firstName(),
      "avatar" : faker.image.avatar()
      
    },
    {"key":1,
        "avatar" : faker.image.avatar(),
        "name" : faker.name.firstName(),
        "title" : faker.music.songName()
    },
    {"key":2,
        "avatar" : faker.image.avatar(),
        "name" : faker.name.firstName(),
        "title" : faker.music.songName()
    }
      
]
export default stafflist