import Image from "next/image";
import { useEffect } from "react";

function DoctorCard({ name, about, photo, price, specialization, hospital }) {
  useEffect(() => {
    var el = document.querySelector(".about");
    el.innerHTML = el.innerHTML.replace(/&nbsp;/g, "");
  }, []);

  return (
    <div className="card flex items-center border-black border-2 max-w-[30rem] h-56 w-full overflow-hidden mx-6 my-12">
      <div className="photo w-1/4 bg-slate-200 flex items-center justify-center h-full">
        <Image
          src={photo}
          objectFit="cover"
          width={150}
          height={150}
          className="m-2"
          alt="doctor"
        />
      </div>
      <div className="doctor-description-container bg-green-500 flex flex-col w-3/4 h-full">
        <div className="name text-lg font-bold">{name}</div>
        <div className="hospital-and-specialization text-sm">
          {hospital}-{specialization}
        </div>
        <div className="about text-xs  break-words py-4">{about}</div>
        <br />
        <div className="price text-right">{price}</div>
      </div>
    </div>
  );
}

export default DoctorCard;
