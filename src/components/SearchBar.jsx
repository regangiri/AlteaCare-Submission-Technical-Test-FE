import React from "react";

function SearchBar(props) {
  return (
    <div className="w-full bg-teal-200 flex items-start justify-center flex-col my-8  p-6 rounded-xl">
      <div className="search-bar-title py-3 text-xl">Doctor Finder</div>
      <div className="search-options-container">
        <input
          type="text"
          placeholder="input doctor name"
          className="mr-2"
          onChange={(e) => {
            props.setDoctorNameFilter(e.target.value);
          }}
        />

        <label htmlFor="hospital"></label>

        <select
          name="hospital"
          id="hospital"
          className="mx-2"
          onChange={(e) => {
            props.setHospitalFilter(e.target.value);
          }}
        >
          <option value="">Semua Rumah Sakit</option>
          <option value="Mitra Keluarga Bintaro">Mitra Keluarga Bintaro</option>
          <option value="Mitra Keluarga Gading Serpong">
            Mitra Keluarga Gading Serpong
          </option>
        </select>

        <label htmlFor="specialization"></label>

        <select
          name="specialization"
          id="specialization"
          className="mx-2"
          onChange={(e) => {
            props.setSpecializationFilter(e.target.value);
          }}
        >
          <option value="">Semua Spesialisasi</option>
          <option value="Dokter Umum">Dokter Umum</option>
          <option value="Anak">Dokter Anak</option>
          <option value="Penyakit Dalam">Dokter Penyakit Dalam</option>
          <option value="Kebidanan & Kandungan">
            Dokter Kebidanan & Kandungan
          </option>
          <option value="Bedah">Dokter Bedah</option>
          <option value="Jantung & Pem.Darah">
            Dokter Jantung & Pem. Darah
          </option>
          <option value="Kulit & Kelamin">Dokter Kulit & Kelamin</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBar;
