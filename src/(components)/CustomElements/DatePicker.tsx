import { useState, useEffect, useRef } from "react";
import { Calendar } from "react-date-range";
import format from "date-fns/format";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import CustomDropdown from "./CustomDropdown";

const CustomDatePicker = () => {
  const ref = useRef(null);

  const [calendar, setCalendar] = useState("Pilih Tanggal Pesan");
  const handleSelect = (date: any) => {
    setCalendar(format(date, "dd MMM yyyy"));
  };

  // BANG INI GITHUB COPILOT YANG BUATIN KODENYA (KOMENNYA JUGA AUTO KOMPLIT JIRRRRR)
  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (
        ref.current &&
        !(ref.current as HTMLElement).contains(e.target as Node)
      ) {
        setIsCalendarActive(false);
      }
    });
  }, []);
  // EOL

  const [isCalendarActive, setIsCalendarActive] = useState(false);

  return (
    <div className="calendarWrap" ref={ref}>
      <div
        onClick={() => setIsCalendarActive(!isCalendarActive)}
        className="w-fit"
      >
        <CustomDropdown
          type="calendar"
          placeholder={calendar}
          containerStyle="bg-[#F6F5F3] w-[341px] h-[71px] text-[#BCB0A9] flex rounded-[8px] items-center justify-between px-[20px] mb-3"
          width={341}
          height={71}
          iconLink="/Calendar.svg"
        />
      </div>
      <div className="absolute z-20 w-fit">
        {isCalendarActive && (
          <Calendar
            date={new Date()}
            onChange={handleSelect}
            showDateDisplay={false}
          />
        )}
      </div>
    </div>
  );
};

export default CustomDatePicker;
