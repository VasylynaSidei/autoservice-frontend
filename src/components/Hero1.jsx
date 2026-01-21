import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./hero.scss";
import Stepper from "./appointment/Stepper";
import Appointment from "./appointment/Appointment";
function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState("first");
  const { t } = useTranslation();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleNext = () => {
    if (currentStep === "first") setCurrentStep("second");
    else if (currentStep === "second") setCurrentStep("third");
    else if (currentStep === "third") setCurrentStep("fourth");
    else if (currentStep === "fourth") setCurrentStep("fifth");
  };

  const handleBack = () => {
    if (currentStep === "second") setCurrentStep("first");
    else if (currentStep === "third") setCurrentStep("second");
    else if (currentStep === "fourth") setCurrentStep("third");
    else if (currentStep === "fifth") setCurrentStep("fourth");
  };

  return (
    <>
      <div id="home" className="hero d-flex justify-content-around  ">
        <div className="d-flex justify-content-around flex-column ">
          <h1 className="hero-h1">
          {t("hero.title")}
          </h1>
          <div className=" ">
            <p>{t("hero.requestCallback")}</p>
            <button className="appointment" onClick={openModal}>
            {t("hero.makeAppointment")}
            </button>
            {isModalOpen && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={closeModal}>
                    &times;
                  </span>
                  <Stepper step={currentStep} />
                  {/* <h2>Бронирование</h2> */}
                  <Appointment step={currentStep} />
                  <div>
                    <button
                      className="back-btn"
                      onClick={handleBack}
                      disabled={currentStep === "first"}
                    >
                      {t("hero.modal.back")}
                    </button>
                    <button
                      className="next-btn"
                      onClick={handleNext}
                      disabled={currentStep === "fifth"}
                    >
                     {t("hero.modal.next")}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* <img src="https://pngimg.com/d/mercedes_PNG80125.png" alt="" /> */}

        {/* <div>
          <img
            src="https://s3.amazonaws.com/di-enrollment-api/mbusa/amg-gt-r/hero-car.png"
            alt=""
          />
        </div> */}
      </div>
    </>
  );
}

export default Hero;
