import React from 'react';
import vg from "../assets/2.webp";

const Home = () => {
   return (
      <>

         <div className='home' id='home'>
            <main>
               <h1>Techystar</h1>
               <p>Solution to all you problems</p>
            </main>
         </div>
         <div className="home2">
            <img src={vg} alt="Graphic" />
            <p>We are your one and only solution to the tech problems you face everyday. We are leading tech company whose aim is to increase the problem solving ability in children</p>

         </div>
         <div className="home3" id='about'>
            <div>
               <h1>Who are we ?</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorum architecto consequuntur sed sit, aut veritatis quibusdam vitae esse commodi nesciunt earum delectus. Quo perferendis maiores debitis, quod quam consequuntur. Repudiandae deserunt, eum atque dolorem ipsum aspernatur nam autem suscipit magni eos officiis cupiditate doloremque quae aut voluptatum facilis blanditiis? Aspernatur minus placeat eligendi nihil, voluptas culpa natus. Exercitationem quae porro ad dolores! Aliquam omnis accusamus, ratione aliquid maiores rem nihil nulla harum eius odit voluptatem non reprehenderit sit ullam quas exercitationem unde tenetur sunt voluptatum libero labore odio adipisci debitis doloribus. Perspiciatis maxime vitae possimus quo libero enim voluptate.</p>
            </div>
         </div>
         <div className="home4" id='brands'>
            <div>
               <h1>Brands</h1>
               <div>                  
                  <div className='icons'>
                     <i class="ri-google-fill"></i>
                     <h4>Google</h4>
                  </div>
                  <div className='icons'>
                     <i class="ri-amazon-fill"></i>
                     <h4>Amazon</h4>
                  </div>
                  <div className='icons'>
                     <i class="ri-youtube-fill"></i>
                     <h4>Youtube</h4>
                  </div>
                  <div className='icons'>
                     <i class="ri-instagram-fill"></i>
                     <h4>Instagram</h4>
                  </div>
               </div>
            </div>
         </div>
      </>

   );
};

export default Home;