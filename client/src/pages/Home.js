import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_REVIEWS } from '../utils/queries';
import ReviewsList from '../components/ReviewsList';

const Home = () => {
  const { loading, data } = useQuery(QUERY_REVIEWS);
  const reviews = data?.reviews || [];
  //console.log(hello);
  
  return (
    <main>
      <div class="container">
    <div class="section">

      <div class="row">
        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">flash_on</i></h2>
            <h5 class="center">Consultation</h5>

            <p class="center light">
              <button class=" btn waves-effect waves-light orange" type="submit" name="action">Check payment status
                <i class="material-icons right">send</i>
              </button></p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">group</i></h2>
            <h5 class="center">Project Status</h5>

            <p class="center light"> <button class="btn waves-effect waves-light orange" type="submit" name="action">How much longer?
              <i class="material-icons right">send</i>
            </button></p>

 
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>
            <h5 class="center">Tell us how we are doing</h5>

            <p class="center light">
              <button class="btn waves-effect waves-light orange" type="submit" name="action">We love callbacks
                <i class="material-icons right">send</i>
              </button></p>
            

          </div>
        </div>
      </div>

    </div>
    <br></br>
  </div>
  </main>
);
};

export default Home;