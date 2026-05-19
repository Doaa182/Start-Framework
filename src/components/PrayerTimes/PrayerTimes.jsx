import React, { useEffect, useState } from "react";
import Sharedstar from "../Sharedstar/Sharedstar";
import { fetchPrayerTimes } from "../../api/prayerApi";

export default function PrayerTimes() {
  const [prayers, setPrayers] = useState(null);

  const getTodayDate = () => {
    const today = new Date();

    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();

    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    const load = async () => {
      const data = await fetchPrayerTimes("Cairo", "EG", getTodayDate());

      setPrayers(data);
    };

    load();
  }, []);

  //   return (
  //     <div>
  //       {prayers && (
  //         <>
  //           <p>Fajr: {prayers.Fajr}</p>
  //           <p>Dhuhr: {prayers.Dhuhr}</p>
  //           <p>Sunrise: {prayers.Sunrise}</p>
  //           <p>Asr: {prayers.Asr}</p>
  //           <p>Maghrib: {prayers.Maghrib}</p>
  //           <p>Isha: {prayers.Isha}</p>
  //         </>
  //       )}
  //     </div>
  //   );

  return (
    <div className="container pb-5">
      {prayers && (
        <>
          <h2 className="text-center fw-bold">مواقيت الصلاة</h2>
          <Sharedstar bgColor={"#2c3e50"} />
          <div className="row g-4 mt-5">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card p-4 text-center shadow-sm">
                <h4>Fajr</h4>
                <p className="fs-3 fw-bold">{prayers.Fajr}</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card p-4 text-center shadow-sm">
                <h4>Sunrise</h4>
                <p className="fs-3 fw-bold">{prayers.Sunrise}</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card p-4 text-center shadow-sm">
                <h4>Dhuhr</h4>
                <p className="fs-3 fw-bold">{prayers.Dhuhr}</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card p-4 text-center shadow-sm">
                <h4>Asr</h4>
                <p className="fs-3 fw-bold">{prayers.Asr}</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card p-4 text-center shadow-sm">
                <h4>Maghrib</h4>
                <p className="fs-3 fw-bold">{prayers.Maghrib}</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card p-4 text-center shadow-sm">
                <h4>Isha</h4>
                <p className="fs-3 fw-bold">{prayers.Isha}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
