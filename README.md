# NetflixGPT
- Create React App
- Configure TailwindCSS
- Header
- Login Form
- Sign Up Form
- Form Validation
- useRef Hooks
- Firebase setup
- Deploying our App to production
- Create Sign Up User Account
- Implement Sign In user API
- Created Redux Store with userSlice
- Implement Sign Out
- Update Profile
- BugFix: SignUp user displayName and profile picture Updated
- BugFix: If the user is not logged in then Redirect/browse to Login page and vice-versa 
- Unsubscribed to the OnAuthStateChanged Call
- Add hardcoded values to the constants files.
- Register TMDB API & Create an app & get access token.
- Get Data from TMDB now playing movies list API
- Create custom hooks for Now Playing Movies
- Create movieSlice
- Update Store with movie data
- Plain for Main container & Secondary Container
- Fetch data for trailer Video
- Update store with Trailer video Data
- Embedded the Youtube video and make it autoplay and mute
- Tailwind classes to make Main Container look awesome
- Build Secondary Component
- Build Movie List
- Build Movie Card
- TMDB Image CDN URL
- Made the browser page amazing with Tailwind CSS
- usePopularMovies Custom hooks

# Features
- Login/Sign Up
   - Sign In/Sign Up Form
   - redirect to browser Page
   - Header

- Browser(After authentication)
   - Header
   - Main Movie
       - Trailer in background
       - Title & Description
       - Movie Suggestion
             - Movie Lists * N

- NetflixGPT
  - Search Bar
  - Movie Suggestions


  # Steps for Deployment
  - Install firebase CLI -'npm install -g firebase-tools'
  - Firebase login- 'firebase login'
  - Initialize Firebase - 'firebase init' then select Hosting
  - Deploy command- 'firebase deploy'