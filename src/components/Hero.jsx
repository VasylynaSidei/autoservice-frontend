import { useState } from "react";
import "./hero.scss";
import emailjs from "@emailjs/browser";

function Hero() {
  const [formData, setFormData] = useState({
    contact: "Telefon",
    clientPhone: "",
    clientName: "",
    email: "",
    vinCode: "", // ✅ ADD
    schlüsselCode1: "", // ✅ ADD
    schlüsselCode2: "", // ✅ ADD
    kennzeichen: "", // ✅ ADD
    comment: "", // optional but useful if needed
    appointmentDate: "",
    agreement: false,
    service: "Leistungen",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false); // Блокировка двойных отправок
  const openModal = () => setIsModalOpen(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethod = ["Telefon", "WhatsApp", "E-Mail"];
  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
    setFormData({
      contact: "Telefon",
      clientPhone: "",
      clientName: "",
      email: "",
      vinCode: "",
      schlüsselCode1: "",
      schlüsselCode2: "",
      kennzeichen: "",
      agreement: false,
      service: "Leistungen",
    });
  };

  // Обработка изменения полей
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const formatGermanMobile = (value) => {
    // Remove non-digits except leading +
    let digits = value.replace(/[^\d]/g, "");

    // Remove leading zeros if user tries to type '0176...' etc.
    if (digits.startsWith("0")) digits = digits.slice(1);
    if (digits.startsWith("49")) digits = digits.slice(2);
    if (digits.startsWith("+49")) digits = digits.slice(3);

    // Format: +49 1XX XXX XXXX
    let formatted = "+49";

    if (digits.length > 0) {
      formatted += " " + digits.substring(0, 3);
    }
    if (digits.length >= 4) {
      formatted += " " + digits.substring(3, 6);
    }
    if (digits.length >= 7) {
      formatted += " " + digits.substring(6, 10);
    }

    return formatted;
  };
  const handlePhoneChange = (e) => {
    const input = e.target.value;

    const formatted = formatGermanMobile(input);
    setFormData({ ...formData, clientPhone: formatted });
  };

  // Отправка формы и письма
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreement) {
      alert("Sie müssen der Datenschutzrichtlinie zustimmen.");
      return;
    }

    // Отправка письма
    handleSendEmail();
  };

  // Функция отправки Email через EmailJS
  const handleSendEmail = () => {
    if (isSending) return; // Блокируем повторные отправки

    // Проверка на заполненность всех обязательных полей
    if (
      !formData.clientName.trim() ||
      !formData.clientPhone.trim() ||
      !formData.email.trim() ||
      !formData.vinCode ||
      !formData.kennzeichen.trim()
    ) {
      alert("Füllen Sie die Pflichtfelder aus");
      return;
    }

    setIsSending(true); // Блокируем повторные отправки

    const templateParams = {
      contact: formData.contact,
      clientPhone: formData.clientPhone,
      clientName: formData.clientName,
      email: formData.email,
      vinCode: formData.vinCode,
      schlüsselCode1: formData.schlüsselCode1,
      schlüsselCode2: formData.schlüsselCode2,
      kennzeichen: formData.kennzeichen,
      service: formData.service,
    };

    emailjs
      .send(
        "service_hkh04mh", // ID сервиса
        "template_mx7y0ue", // ID шаблона письма
        templateParams,
        "yzbGO8TN5YLzcTO58" // Публичный API ключ
      )
      .then(
        (response) => {
          console.log("✅ Email sent:", response);
          alert("Ihre Anfrage wurde erfolgreich versendet!");
          // Показываем сообщение об успехе

          // Очистка формы
          setFormData({
            contact: "Telefon",
            clientPhone: "",
            clientName: "",
            email: "",
            vinCode: "",
            schluesselCode1: "",
            schluesselCode2: "",
            kennzeichen: "",
            agreement: false,
            service: "Leistungen",
          });

          setIsSubmitted(true); // Закрываем модальное окно
        },
        (error) => {
          console.error("❌ EmailJS Error:", error);
          alert(
            `Fehler beim Senden der Anfrage: ${
              error?.text || "Unbekannter Fehler"
            }`
          );
        }
      )
      .finally(() => {
        setIsSending(false); // Разблокируем повторные отправки
      });
  };

  return (
    <div id="home" className="hero d-flex justify-content-around">
      <div className="container-hero-title">
        <h1 className="hero-h1">Autowartung und Reparaturservice</h1>
        <div className="cont-appoit-btn">
          <p className="subheading-request">Rückruf anfordern</p>
          <button className="appointment" onClick={openModal}>
            Termin vereinbaren
          </button>
          {isModalOpen && (
            <div
              className="modal-overlay-hero"
              onClick={closeModal} // ✅ this now resets the form too
            >
              <div
                className="modal form-container"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <div className="modal-scrollable">
                  {isSubmitted ? (
                    <div className="thank-you-container">
                      <h2 className="thank-you-title">
                        Vielen Dank für Ihre Anfrage!
                      </h2>
                      <p className="thank-you-text">
                        Wir werden uns so schnell wie möglich mit Ihnen in
                        Verbindung setzen.
                      </p>
                      <button
                        className="thank-you-close-btn"
                        onClick={closeModal}
                      >
                        Schließen
                      </button>
                    </div>
                  ) : (
                    <form
                      className="form modal-content"
                      onSubmit={handleSubmit}
                    >
                      <div className="form-group">
                        <input
                          name="clientName"
                          value={formData.clientName}
                          onChange={handleChange}
                          required
                          type="text"
                          placeholder="Name*"
                        />
                        <label htmlFor=""></label>
                      </div>
                      <div className="form-group">
                        <input
                          type="tel"
                          name="clientPhone"
                          value={formData.clientPhone}
                          onChange={handlePhoneChange}
                          required
                          placeholder="+49 1XX XXX XXXX"
                          maxLength={17}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="E-Mail*"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="vinCode"
                          value={formData.vinCode}
                          onChange={handleChange}
                          required
                          placeholder="VIN Code*"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="schlüsselCode1"
                          value={formData.schlüsselCode1}
                          onChange={handleChange}
                          placeholder="Schlüssel Code zu (2.1)"
                        />
                      </div>{" "}
                      <div className="form-group">
                        <input
                          type="text"
                          name="schlüsselCode2"
                          value={formData.schlüsselCode2}
                          onChange={handleChange}
                          placeholder="Schlüssel Code zu (2.2)"
                        />
                      </div>{" "}

                      <div className="form-group">
                        <input
                          type="text"
                          name="kennzeichen"
                          value={formData.kennzeichen}
                          onChange={handleChange}
                          required
                          placeholder="Kennzeichen*"
                        />
                      </div>
                      <div className="form-group">
                        <label>
                          Welche Leistung möchten Sie in Anspruch nehmen?
                        </label>
                        <select
                          className="select-option"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>
                            Bitte wählen Sie eine Leistung
                          </option>
                          <option value="Leistungen" default>
                            Leistungen
                          </option>
                          <option value="Reparaturen">Reparaturen</option>
                          <option value="HU/AU-Täglich">HU/AU-Täglich!</option>
                          <option value="Inspektion">
                            Inspektion nach Herstellervorgaben
                          </option>

                          <option value="Motordiagnose">Motordiagnose</option>
                          <option value="Getriebeölwechsel">
                            Getriebeölwechsel
                          </option>
                          <option value="Bremsenreparatur">
                            Bremsenreparatur
                          </option>
                          <option value="Fahrwerksreparatur">
                            Fahrwerksreparatur
                          </option>
                          <option value="Klimaanlagenservice">
                            Klimaanlagenservice
                          </option>
                          <option value="Frontscheibenreparatur">
                            Frontscheibenreparatur
                          </option>
                          <option value="Reifendienst">Reifendienst</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>
                          Wie können wir mit Ihnen in Kontakt treten?
                        </label>
                        <select
                          className="select-option"
                          name="contact"
                          value={formData.contact}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>
                            Wählen Sie eine Kommunikationsmethode
                          </option>
                          {contactMethod.map((method) => (
                            <option key={method} value={method}>
                              {method}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="checkbox-group">
                        <input
                          className="daten-checkbox"
                          type="checkbox"
                          name="agreement"
                          checked={formData.agreement}
                          onChange={handleChange}
                          required
                        />
                        <label className="daten-label">
                          Ich akzeptiere die <a href="/datenschutz" title="Datenschutzbestimmungen">Datenschutzbestimmungen</a> 
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="form-submit-btn"
                        disabled={isSending}
                      >
                        {isSending ? "Versenden..." : "Anfrage senden"}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
