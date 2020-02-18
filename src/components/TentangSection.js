import React from "react";
import line from "./../assets/images/line.png";

const Tentang = () => {
  return (
    <div className="container">
      <h4>Tentang Kursus</h4>
      <img src={line} className="line" alt="line" width="11.5%" />
      <p>
        Program ini menjelaskan Manajemen Kinerja Individu berbasis Balanced
        Scorecard lewat sebuah studi kasus Rumah Lilin, sehingga mudah untuk
        dipahami dan diadaptasi dalam organisasi Anda.
      </p>
    </div>
  );
};
export default Tentang;
