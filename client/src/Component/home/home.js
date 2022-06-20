import React from "react";
import './home.css';
function Home(){
    return(
        <>
            <h1> WELCOME TO SHEMACH PRODUCTS</h1>
            <h2>AVAILABLE PRODUCTS</h2>
            <div class="container">
                <div class="row">
                     <img src="/images/oil.jpg" width="300" height="300"/>
                     <div class="column">
                         <p>oil</p>
                         <p>500L</p>
                     </div>
                </div>
                <div class="row">
                     <img src="/images/ssssssug.jpeg" width="300" height="300"/>
                     <div class="column">
                         <p>sugar</p>
                         <p>1000kg</p>
                     </div>
                </div>
            </div>
            <h2> Cotas</h2>
            <div class="container">
                <div class="row">
                    <img src="/images/wow3.jpg" width="300" height="300"/>
                    <div class="column">
                        <p> 3 family</p>
                        <p> 2L oil</p>
                        <p> 2kg sugar</p>
                    </div>
                </div>
                <div class="row">
                    <img src="/images/44.jpg" width="300" height="300"/>
                    <div class="column">
                        <p> five or more family</p>
                        <p> 3L oil</p>
                        <p> 4kg sugar</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;