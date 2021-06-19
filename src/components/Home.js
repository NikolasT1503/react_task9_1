import React from "react";
import { Link } from "react-router-dom";

export default function Home(state) {
  return (
    <div>
      <img
        style={{ maxWidth: "100%" }}
        src="https://www.logodesign.net/logo/abstract-cuboid-building-4519ld.png"
        alt="d"
      />
      <h1>Домашняя страница</h1>
      <nav>    
          <Link to="/about/location">Location</Link><br/>
          <Link to="/about">About</Link><br/>
          <Link to="/about/1/Николай">About/1/Николай</Link><br/>
          <Link to="/about/2/Вадим">About/2/Вадим</Link><br/>
          <Link to="/about/3/Станислав">About/3/Станислав</Link><br/>
          <Link to="/about/4/Василий/толстый-120">About/4/Василий/толстый-120</Link><br/>
          <Link to={{
              pathname: "/about/5/Ярослав/худой-60", 
              search: "?sort=name", 
              hash: "#the-hash15", 
              state: { fieldstate: "something" },
            }} onClick={()=>console.log(state)}>about/5/Ярослав/худой-60</Link><br/>
                <Link to="/location">Location</Link> <br />
                <Link to="/posts">Posts</Link>
      </nav>

      <p>
        Это домашняя страница моего сайта. Тут можно найти основную информацию
      </p>
    </div>
  );
}