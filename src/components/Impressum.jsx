// components/Impressum.jsx
import React from 'react';
import './impressum.scss'

function Impressum({
  companyName = 'G & P Meisterwerkstatt GbR',
  address = 'Gew. Eichholzstraße 19, 17192 Waren /Müritz',
  phone = '03991-6734060',
  fax = '03991-6734060',
  email = 'gundpmeisterwerkstatt@t-online.de',
  ceo1 = 'Rocco Grabeck',
  ceo2 = 'Sergej Pritcin',
  legalForm = 'GmbH',
  commercialRegister = 'Handelsregister Amtsgericht Musterstadt HRB 12345',
  vatId = 'DE280675295',
  supervisoryAuthority = '',
  additional = null // any additional JSX or string
}) {
  return (
    <article className="impressum-container">
        <div className='impressum'>
      <h1 id="impressum-title">Impressum</h1>

      <section>
        <h2>Angaben gemäß § 5 DDG</h2>
        <address>
          <strong>{companyName}</strong><br />
          {address.split('\n').map((line, i) => <div key={i}>{line}</div>)}
        </address>
      </section>

      <section>
        <h3>Kontakt</h3>
        <p>
          Telefon: <a href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</a><br />
          Telefax: {fax} <br />
          E-Mail: <a href={`mailto:${email}`}>{email}</a>
        </p>
      </section>

      <section>
        <h3>Vertreten durch</h3>
        <p>Gesellschafter:</p>
        <p>{ceo1}</p>
        <p>{ceo2}</p>

      </section>

      <section>
        <h3>Registereintrag</h3>
        <p>{commercialRegister}</p>
      </section>

      <section>
        <h3>Umsatzsteuer</h3>
        <p>Umsatzsteuer-Identifikationsnummer §27 a Umsatzsteuergesetz:: {vatId}</p>
      </section>

      {supervisoryAuthority && (
        <section>
          <h3>Aufsichtsbehörde</h3>
          <p>{supervisoryAuthority}</p>
        </section>
      )}

      {additional && (
        <section>
          <h3>Weitere Angaben</h3>
          <div>{additional}</div>
        </section>
      )}

      <section>
        <h3>Haftung für Inhalte</h3>
        <p>
          Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
        </p>
      </section>

      <section>
        <h3>Links</h3>
        <p>
          Für Links auf externe Webseiten Dritter, die außerhalb unseres Verantwortungsbereichs liegen, übernehmen wir keine Haftung.
        </p>
      </section>

     </div>
    </article>
  );
}

export default Impressum;
