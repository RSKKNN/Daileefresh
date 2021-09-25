
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import ContactUs from './components/pages/ContactUs'
import SignUp from './components/pages/SignUp'
import Marketing from './components/pages/Marketing'
import Consulting from './components/pages/Consulting'
import Home from './components/pages/Home'






const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 200;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 700)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out",
     
    }
  );
});






function App() {
  return (
    <Router>
      
      
    <Switch>
      <Route path='/'  exact component={Home}/>
      <Route path='/services'  exact component={Services}/>
      <Route path='/products'  exact component={Products}/>
      <Route path='/contact-us'  exact component={ContactUs}/>
      <Route path='/sign-up'  exact component={SignUp}/>
      <Route path='/marketing'  exact component={Marketing}/>
      <Route path='/consulting'  exact component={Consulting}/>
    </Switch>
    <Navbar/>
    <div style={{height:3000}}></div>
  
    
    </Router>
  
  );
}

export default App;
