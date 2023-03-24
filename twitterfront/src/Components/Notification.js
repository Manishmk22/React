import React from 'react'
import ProfileBar from './ProfileBar'
import i18next from 'i18next';
import { initReactI18next, useTranslation } from "react-i18next";

const transEnglish = {text:"No Notifications has been received!"};
const transFrench = {text:"Aucune notification n'a été reçue !"};
const transGerman = {text:"Es wurden keine Benachrichtigungen erhalten!"};

i18next.use(initReactI18next).init({
  resources : { 
    en : {translation : transEnglish},
    fr : {translation : transFrench},
    gr : {translation : transGerman},}, 
    lng : 'en',
     fallbacklng : 'en',
    interpolation : {escapeValue : false},
   });

const Notification = () => {

  const {t} = useTranslation();
   const changeLang = (event) => { 
    i18next.changeLanguage(event.target.value); };
  return (
    <>
    <div><ProfileBar></ProfileBar></div>
    <div className="notify">
    <h1>Notification</h1>
    <h2>{t("text")} </h2>
    Change Language
     <select onChange={changeLang}>
         <option value="en">English</option>
         <option value="fr">French</option>
         <option value="gr">German</option>
         </select>
    
    </div>
    </>
  )
}

export default Notification