import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="hero-bg d-flex flex-column justify-content-center align-items-center text-white text-center">
        <h1 className="display-4 fw-bold"style={{ color: 'yellow' }}>Fresh. Hot. Delicious.</h1>
      <p className="lead" >
        <strong>Experience the taste that brings families together.</strong></p>
        <Link to="/menu" className="btn btn-danger btn-lg mt-3">
          Order Now
        </Link>
      </div>

      <div className="container my-5">
        <h2 className="text-center text-danger mb-4">Special Offers</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <img
                src="https://images.unsplash.com/photo-1594007654729-407eedc4be65"
                className="card-img-top"
                alt="Offer"
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5>Buy 1 Get 1 Free</h5>
                <p>Every Tuesday on all medium pizzas.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <img
                src="https://imgs.search.brave.com/cLpnzYyUm9wAYbSxyVVzHDPaqHxnfXkMGdHecNV1SSg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQzLzk0/LzIzLzQzOTQyMzVm/ZDQ0YzIyMWQzYzg1/NDdkYmE4ODkxODEw/LmpwZw"
                className="card-img-top"
                alt="Offer"
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5>55% OFF!*</h5>
                <p>Finish pizza alone in 5 minutes.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <img
                src="https://imgs.search.brave.com/_3vA_FzYUdLBAltR15x8jGkKNe7keS8QegV7hGfxJzQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/LmRlc2lkaW1lLmNv/bS90b3BpY3MvcGhv/dG9zLzEzNDM2MTIv/bWVkaXVtL1dvbmRl/cmxhX05ld19CYW5u/ZXJzXzIwMjBfQ29s/bGVnZV9JRF8wMl93/cnk3enlfYmk0bm1q/Lj8xNjMwNzg3NTg3"
                className="card-img-top"
                alt="Offer"
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5>Student Discount</h5>
                <p>Flat 20% off with valid student ID.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center text-danger mb-4">A Message From Us</h2>
        <p className="text-muted fs-5" style={{ lineHeight: "1.8" }}>
          𝐀𝐭 𝐏𝐢𝐳𝐳𝐞𝐫𝐢𝐚, 𝐰𝐞 𝐛𝐞𝐥𝐢𝐞𝐯𝐞 𝐩𝐢𝐳𝐳𝐚 𝐢𝐬 𝐦𝐨𝐫𝐞 𝐭𝐡𝐚𝐧 𝐣𝐮𝐬𝐭 𝐟𝐨𝐨𝐝 — 𝐢𝐭’𝐬 𝐚 𝐟𝐞𝐞𝐥𝐢𝐧𝐠.
          𝐈𝐭’𝐬 𝐭𝐡𝐞 𝐥𝐚𝐮𝐠𝐡𝐭𝐞𝐫 𝐬𝐡𝐚𝐫𝐞𝐝 𝐚𝐫𝐨𝐮𝐧𝐝 𝐚 𝐭𝐚𝐛𝐥𝐞, 𝐭𝐡𝐞 𝐥𝐚𝐭𝐞-𝐧𝐢𝐠𝐡𝐭 𝐜𝐫𝐚𝐯𝐢𝐧𝐠𝐬
          𝐬𝐚𝐭𝐢𝐬𝐟𝐢𝐞𝐝 𝐚𝐟𝐭𝐞𝐫 𝐚 𝐥𝐨𝐧𝐠 𝐝𝐚𝐲, 𝐭𝐡𝐞 𝐜𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐨𝐧𝐬 𝐭𝐡𝐚𝐭 𝐛𝐫𝐢𝐧𝐠 𝐟𝐚𝐦𝐢𝐥𝐢𝐞𝐬 𝐚𝐧𝐝 
          𝐟𝐫𝐢𝐞𝐧𝐝𝐬 𝐜𝐥𝐨𝐬𝐞𝐫 𝐭𝐨𝐠𝐞𝐭𝐡𝐞𝐫. 𝐄𝐯𝐞𝐫𝐲 𝐩𝐢𝐳𝐳𝐚 𝐰𝐞 𝐛𝐚𝐤𝐞 𝐜𝐚𝐫𝐫𝐢𝐞𝐬 𝐰𝐢𝐭𝐡 𝐢𝐭 𝐚
          𝐩𝐫𝐨𝐦𝐢𝐬𝐞 — 𝐚 𝐩𝐫𝐨𝐦𝐢𝐬𝐞 𝐨𝐟 𝐟𝐫𝐞𝐬𝐡𝐧𝐞𝐬𝐬, 𝐪𝐮𝐚𝐥𝐢𝐭𝐲, 𝐚𝐧𝐝 𝐰𝐚𝐫𝐦𝐭𝐡. 𝐅𝐫𝐨𝐦 𝐭𝐡𝐞
          𝐦𝐨𝐦𝐞𝐧𝐭 𝐰𝐞 𝐤𝐧𝐞𝐚𝐝 𝐭𝐡𝐞 𝐝𝐨𝐮𝐠𝐡 𝐭𝐨 𝐭𝐡𝐞 𝐟𝐢𝐧𝐚𝐥 𝐬𝐩𝐫𝐢𝐧𝐤𝐥𝐞 𝐨𝐟 𝐜𝐡𝐞𝐞𝐬𝐞, 𝐨𝐮𝐫 
          𝐭𝐞𝐚𝐦 𝐩𝐨𝐮𝐫𝐬 𝐩𝐚𝐬𝐬𝐢𝐨𝐧 𝐢𝐧𝐭𝐨 𝐞𝐯𝐞𝐫𝐲 𝐬𝐥𝐢𝐜𝐞.
          <br /><br />
          𝐖𝐞 𝐬𝐭𝐚𝐫𝐭𝐞𝐝 𝐰𝐢𝐭𝐡 𝐚 𝐬𝐢𝐦𝐩𝐥𝐞 𝐝𝐫𝐞𝐚𝐦: 𝐭𝐨 𝐜𝐫𝐞𝐚𝐭𝐞 𝐚 𝐩𝐥𝐚𝐜𝐞 𝐰𝐡𝐞𝐫𝐞 𝐩𝐞𝐨𝐩𝐥𝐞 𝐜𝐨𝐮𝐥𝐝 
          𝐞𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞 𝐜𝐨𝐦𝐟𝐨𝐫𝐭 𝐢𝐧 𝐞𝐯𝐞𝐫𝐲 𝐛𝐢𝐭𝐞. 𝐎𝐯𝐞𝐫 𝐭𝐢𝐦𝐞, 𝐭𝐡𝐚𝐭 𝐝𝐫𝐞𝐚𝐦 𝐡𝐚𝐬 𝐠𝐫𝐨𝐰𝐧, 𝐛𝐮𝐭 
          𝐨𝐮𝐫 𝐡𝐞𝐚𝐫𝐭 𝐫𝐞𝐦𝐚𝐢𝐧𝐬 𝐭𝐡𝐞 𝐬𝐚𝐦𝐞. 𝐖𝐞 𝐬𝐨𝐮𝐫𝐜𝐞 𝐭𝐡𝐞 𝐟𝐢𝐧𝐞𝐬𝐭 𝐢𝐧𝐠𝐫𝐞𝐝𝐢𝐞𝐧𝐭𝐬, 𝐩𝐫𝐞𝐩𝐚𝐫𝐞 
          𝐞𝐯𝐞𝐫𝐲𝐭𝐡𝐢𝐧𝐠 𝐰𝐢𝐭𝐡 𝐜𝐚𝐫𝐞, 𝐚𝐧𝐝 𝐞𝐧𝐬𝐮𝐫𝐞 𝐭𝐡𝐚𝐭 𝐞𝐯𝐞𝐫𝐲 𝐨𝐫𝐝𝐞𝐫 𝐫𝐞𝐚𝐜𝐡𝐞𝐬 𝐲𝐨𝐮 𝐡𝐨𝐭 𝐚𝐧𝐝 𝐩𝐞𝐫𝐟𝐞𝐜𝐭.
          <br /><br />
          𝐖𝐡𝐞𝐭𝐡𝐞𝐫 𝐲𝐨𝐮'𝐫𝐞 𝐜𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐧𝐠 𝐬𝐮𝐜𝐜𝐞𝐬𝐬, 𝐬𝐩𝐞𝐧𝐝𝐢𝐧𝐠 𝐭𝐢𝐦𝐞 𝐰𝐢𝐭𝐡 𝐥𝐨𝐯𝐞𝐝 𝐨𝐧𝐞𝐬, 𝐨𝐫 𝐬𝐢𝐦𝐩𝐥𝐲 
          𝐭𝐫𝐞𝐚𝐭𝐢𝐧𝐠 𝐲𝐨𝐮𝐫𝐬𝐞𝐥𝐟, 𝐰𝐞 𝐚𝐫𝐞 𝐡𝐨𝐧𝐨𝐫𝐞𝐝 𝐭𝐨 𝐛𝐞 𝐩𝐚𝐫𝐭 𝐨𝐟 𝐲𝐨𝐮𝐫 𝐦𝐨𝐦𝐞𝐧𝐭𝐬. 𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 
          𝐭𝐫𝐮𝐬𝐭𝐢𝐧𝐠 𝐮𝐬. 𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐦𝐚𝐤𝐢𝐧𝐠 𝐮𝐬 𝐚 𝐩𝐚𝐫𝐭 𝐨𝐟 𝐲𝐨𝐮𝐫 𝐬𝐭𝐨𝐫𝐲. 𝐀𝐧𝐝 𝐦𝐨𝐬𝐭 𝐢𝐦𝐩𝐨𝐫𝐭𝐚𝐧𝐭𝐥𝐲, 
          𝐭𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐜𝐡𝐨𝐨𝐬𝐢𝐧𝐠 𝐏𝐢𝐳𝐳𝐚 𝐒𝐭𝐨𝐫𝐞 — 𝐰𝐡𝐞𝐫𝐞 𝐞𝐯𝐞𝐫𝐲 𝐬𝐥𝐢𝐜𝐞 𝐟𝐞𝐞𝐥𝐬 𝐥𝐢𝐤𝐞 𝐡𝐨𝐦𝐞.
        </p>
      </div>
    </>
  );
};

export default Home;
