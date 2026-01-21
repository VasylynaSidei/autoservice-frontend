import React from "react";
import './datenschutz.scss'

const Datenschutz = () => {
  return (
    <div className="datenschutz-container">
       <div className="datenschutz-content">
      <h1>Datenschutzerklärung</h1>

      <h2>1. Verantwortlicher</h2>
      <p>
        Muster Autowerkstatt GmbH <br />
        Musterstraße 12 <br />
        12345 Musterstadt <br />
        Deutschland <br />
        Telefon: +49 123 456789  <br />
       E-Mail: info@muster-autowerkstatt.de
      </p>

      <h2>2. Allgemeine Hinweise</h2>
      <p>
        Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen.
        Personenbezogene Daten werden auf dieser Website nur im notwendigen
        Umfang und gemäß den gesetzlichen Vorschriften der Datenschutz-
        Grundverordnung (DSGVO) verarbeitet.
      </p>

      <h2>3. Zugriffsdaten / Server-Logfiles</h2>
      <p>
        Beim Besuch unserer Website erhebt und speichert der Hosting-Provider
        automatisch Informationen in sogenannten Server-Logfiles. Diese Daten
        sind technisch erforderlich, um die Website korrekt darzustellen.
      </p>
      <ul>
        <li>IP-Adresse</li>
        <li>Datum und Uhrzeit der Anfrage</li>
        <li>Browsertyp und Version</li>
        <li>verwendetes Betriebssystem</li>
        <li>Referrer URL</li>
      </ul>
      <p>
        Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
        (berechtigtes Interesse an der sicheren Bereitstellung der Website).
      </p>

      <h2>4. Kontaktformular / Terminvereinbarung</h2>
      <p>
        Wenn Sie uns über das Kontaktformular Anfragen senden, werden Ihre
        Angaben (z. B. Name, E-Mail-Adresse, Fahrzeugdaten und Beschreibung des
        Anliegens) zur Bearbeitung Ihrer Anfrage verarbeitet.
      </p>
      <p>
        Der Versand der Formulardaten erfolgt über den externen Dienst
        <strong> EmailJS</strong>. Die Daten werden ausschließlich zum Zweck der
        Bearbeitung Ihrer Anfrage an uns übermittelt und nicht zu Werbezwecken
        verwendet.
      </p>
      <p>
        Rechtsgrundlage der Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO
        (vorvertragliche Maßnahmen).
      </p>
      <p>
        Weitere Informationen zur Datenverarbeitung durch EmailJS finden Sie in
        der Datenschutzerklärung des Anbieters.
      </p>

      <h2>5. Google Maps</h2>
      <p>
        Auf unserer Website ist Google Maps eingebunden, um unseren Standort
        darzustellen. Anbieter ist Google Ireland Limited, Gordon House, Barrow
        Street, Dublin 4, Irland.
      </p>
      <p>
        Durch die Nutzung von Google Maps können Informationen über die Nutzung
        dieser Website, einschließlich Ihrer IP-Adresse, an Server von Google
        übertragen werden. Die Nutzung von Google Maps erfolgt im Interesse
        einer ansprechenden Darstellung unseres Standorts.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
      </p>
      <p>
        Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der
        Datenschutzerklärung von Google.
      </p>

      <h2>6. Soziale Netzwerke</h2>
      <p>
        Unsere Website enthält Links zu unseren Profilen in sozialen Netzwerken
        (z. B. Instagram, Facebook). Es handelt sich hierbei um reine Links.
        Erst wenn Sie auf einen solchen Link klicken, werden Daten an den
        jeweiligen Anbieter übertragen.
      </p>

      <h2>7. Cookies</h2>
      <p>
        Unsere Website verwendet ausschließlich technisch notwendige Cookies.
        Diese Cookies sind erforderlich, um grundlegende Funktionen der Website
        bereitzustellen und können nicht deaktiviert werden.
      </p>
      <p>
        Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
      </p>

      <h2>8. Ihre Rechte</h2>
      <p>Sie haben jederzeit das Recht auf:</p>
      <ul>
        <li>Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
        <li>Berichtigung unrichtiger Daten</li>
        <li>Löschung Ihrer Daten</li>
        <li>Einschränkung der Verarbeitung</li>
        <li>Datenübertragbarkeit</li>
        <li>Widerruf einer erteilten Einwilligung</li>
      </ul>

      <h2>9. Beschwerderecht bei der Aufsichtsbehörde</h2>
      <p>
        Ihnen steht das Recht zu, sich bei einer Datenschutzaufsichtsbehörde über
        die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
      </p>

      <h2>10. SSL- bzw. TLS-Verschlüsselung</h2>
      <p>
        Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw.
        TLS-Verschlüsselung, um die Übertragung vertraulicher Inhalte zu schützen.
      </p>
    </div></div> 
  );
};

export default Datenschutz;
