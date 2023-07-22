import React from "react";
import HornedBeast from "../hornedBeast/hornedBeast";
import "./main.css";

export default function Main({ data, render }) {
  return (
    <main>
      {data.map((Beast,key) => {
        return (
          <HornedBeast
            title={Beast.title}
            imageUrl={Beast.image_url}
            description={Beast.description}
            key={Beast._id}
            click = {render}
            allBeasts = {Beast}
          />
        );
      })}

      {/* {data.map(function(Beast){
        return(<HornedBeast title = {Beast.title}
          imageUrl={Beast.image_url}
          description={Beast.description}
        />)
      })} */}

      {/* <HornedBeast title = {Data[0].title} imageUrl = {Data[0].image_url} description = {Data[0].description} />
        <HornedBeast title = {Data[1].title} imageUrl = {Data[1].image_url} description = {Data[1].description} />
        <HornedBeast title = {Data[2].title} imageUrl = {Data[2].image_url} description = {Data[2].description} />
        <HornedBeast title = {Data[3].title} imageUrl = {Data[3].image_url} description = {Data[3].description} />
        <HornedBeast title = {Data[4].title} imageUrl = {Data[4].image_url} description = {Data[4].description} />
        <HornedBeast title = {Data[5].title} imageUrl = {Data[5].image_url} description = {Data[5].description} />
        <HornedBeast title = {Data[6].title} imageUrl = {Data[6].image_url} description = {Data[6].description} />
        <HornedBeast title = {Data[7].title} imageUrl = {Data[7].image_url} description = {Data[7].description} />
        <HornedBeast title = {Data[8].title} imageUrl = {Data[8].image_url} description = {Data[8].description} />
        <HornedBeast title = {Data[9].title} imageUrl = {Data[9].image_url} description = {Data[9].description} />
        <HornedBeast title = {Data[10].title} imageUrl = {Data[10].image_url} description = {Data[10].description} />
        <HornedBeast title = {Data[11].title} imageUrl = {Data[11].image_url} description = {Data[11].description} />
        <HornedBeast title = {Data[12].title} imageUrl = {Data[12].image_url} description = {Data[12].description} />
        <HornedBeast title = {Data[13].title} imageUrl = {Data[13].image_url} description = {Data[13].description} />
        <HornedBeast title = {Data[14].title} imageUrl = {Data[14].image_url} description = {Data[14].description} />
        <HornedBeast title = {Data[15].title} imageUrl = {Data[15].image_url} description = {Data[15].description} />
        <HornedBeast title = {Data[16].title} imageUrl = {Data[16].image_url} description = {Data[16].description} />
        <HornedBeast title = {Data[17].title} imageUrl = {Data[17].image_url} description = {Data[17].description} />
        <HornedBeast title = {Data[18].title} imageUrl = {Data[18].image_url} description = {Data[18].description} />
  <HornedBeast title = {Data[19].title} imageUrl = {Data[19].image_url} description = {Data[19].description} /> */}
    </main>
  );
}
