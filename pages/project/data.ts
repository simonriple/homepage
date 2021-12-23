export const projects = [
  {
    title: 'Plattform game',
    shortDescription:
      'I made a small plattform game in javascript to learn the language. I used p5.js as framework. p5.js made it super easy to set up the canvas and draw the game.',
    description: `Try to jump your way to heaven! The color fades from blue to white. Control the player left and right with the arrows. It's possible to jump through the walls. When the background turns white the game is finished and your score will be uploaded to the database if you submitted your name and made it to the highscore-list. The game is written in javascript with p5.js as framework. I used google firebase to store the highscores.`,
    tags: ['react', 'typescript'],
  },
  {
    title: 'Photo uploader',
    shortDescription:
      'I created my own photo uploader to upload images from my phone to my photo portfolio webpage. This was my second experience with react-native and the first time I created an API.',
    description: `I made this app because I wanted to simply my process with uploading new images to my webpage. Earlier I had to transfer the picture to my computer and then copy it to my server and update the database. With this app I can simply upload the image directly from my phone.
  
        The app is made with react-native. The biggest problem with this app was to gain android-permissions for the camera-roll. I also had to create an API at my server to recieve the photos.`,
    tags: ['php', 'nginx'],
  },
  {
    title: 'Pixelart - Interactive grafitti wall',
    shortDescription: `I replicated r/place from reddit in a miniature scale. This is an online pixelated canvas where users can change the color of one pixel at a time.`,
    description: `I replicated r/place from reddit in a miniature scale. This is an online pixelated canvas where users can change the color of one pixel at a time. The colored pixels will be live updated to other users that is currently online. This was a fun little side project, that was created as procastination instead of studying for finals. In the development of the project I learned React and further developed my knowledge with Firebase. I still have some issues with scaling to many users, but this on my todo-list.`,
    tags: ['fun', 'games'],
  },
  {
    title: 'Tøys',
    shortDescription: 'Dette er et testprosjekt',
    description:
      'lfikflfhh fjklhfkj kfj kf jfjf k kjfhkfjhfk     kfjkf fkjfhkff  fkjhfj fk fjhf kf  kfjhfk hkfjkfh   fkjfhkfh fkfjfhkf fk jd djk dl,d dkh kd,,dj d dkjdkdhojhdjhkdjg',
    tags: ['php'],
  },
]
