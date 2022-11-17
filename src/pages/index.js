import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [doctorList, setDoctorList] = useState([]);
  const [hospitalFilter, setHospitalFilter] = useState("");
  const [specializationFilter, setSpecializationFilter] = useState("");
  const [doctorNameFilter, setDoctorNameFilter] = useState("");

  const getAllDoctor = () => {
    axios
      .get(`https://run.mocky.io/v3/c9a2b598-9c93-4999-bd04-0194839ef2dc#`)
      .then((res) => {
        setDoctorList(res.data.data);
        console.log(res.data.data);
      });
  };

  useEffect(() => {
    getAllDoctor();
  }, []);

  return (
    <div className="">
      <SearchBar
        setHospitalFilter={(hospital) => {
          setHospitalFilter(hospital);
          console.log(hospitalFilter);
        }}
        setSpecializationFilter={(specialization) => {
          setSpecializationFilter(specialization);
          console.log(specializationFilter);
        }}
        setDoctorNameFilter={(doctorName) => {
          setDoctorNameFilter(doctorName);
          console.log(doctorNameFilter);
        }}
      />
      <div class="card-container flex flex-wrap items-center justify-center">
        {doctorList
          .filter((doctor) => {
            return (
              doctor.name
                .toLowerCase()
                .includes(doctorNameFilter.toLowerCase()) &&
              (hospitalFilter !== ""
                ? doctor.hospital[0].name === hospitalFilter
                : doctor.hospital[0].name === doctor.hospital[0].name) &&
              (specializationFilter !== ""
                ? doctor.specialization.name === specializationFilter
                : doctor.specialization.name === doctor.specialization.name)
            );
          })
          .map((doctor) => {
            return (
              <DoctorCard
                key={doctor.doctor_id}
                name={doctor.name}
                about={doctor.about_preview}
                photo={doctor.photo.url}
                price={doctor.price.formatted}
                specialization={doctor.specialization.name}
                hospital={doctor.hospital[0].name}
              />
            );
          })}
      </div>
    </div>
  );
}
