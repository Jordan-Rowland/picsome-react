import React, { useContext } from "react";
import Image from "../components/Image";
import { getClass } from "../utils";
import { Context } from "../appContext.jsx";

function Photos() {
  const { allPhotos } = useContext(Context)

  const photos = allPhotos.map((photo, index) => (
    <Image
      key={photo.id}
      img={photo}
      className={getClass(index)}
    />
  ))

  return (
    <main className="photos">
      {photos}
    </main>
  )
}

export default Photos;