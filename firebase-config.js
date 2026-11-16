/* Park Pilot – Firebase-Verbindung (kostenloser Spark-Tarif)
   Solange hier nichts eingetragen ist, läuft das Spiel offline als Gast.
   Anleitung: siehe FIREBASE-ANLEITUNG.txt
   Die Werte aus der Firebase-Konsole (Projekteinstellungen → Deine Apps → Web-App → Konfiguration)
   zwischen die Anführungszeichen kopieren. Diese Werte sind NICHT geheim, sie dürfen öffentlich sein. */
window.PP_FIREBASE = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  // Nur für Google-Login in der Android-App (Web-Client-ID, siehe FIREBASE-ANLEITUNG.txt)
  googleClientId: ""
};
