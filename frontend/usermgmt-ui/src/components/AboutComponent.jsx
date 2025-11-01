/******************************************************************************************
 * @file        AboutComponent.jsx
 * @description 'About' main page of the portal with basic HaaS info 
 * @team        SheCodes-Hub (MSITM'26 @ McCombs School of Business, UT Austin)
 * @created     2025-10-01
 * @version     v2.0.0
 **********************************************************************************************************/
import React from "react";

const AboutComponent = () => {
  return (
    <div style={{ width: "80vw", maxWidth: "700px", margin: "2.5rem auto" }}>
      <div className="card">
        <h2 className="card-title">Welcome to Hardware Resource Management Portal</h2>
        <p style={{ whiteSpace: "pre-line", lineHeight: 1.6 }}>
          {`This project is a proof of concept (PoC) Microservice for User Management within the Hardware-as-a-Service (HaaS) system.  
It provides secure account registration, authentication, and user profile management—ensuring that only authorized users can access and manage hardware resources or associated projects.

The service offers APIs for user creation, login, and validation, built with Flask and MongoDB to ensure data security and scalability.  
It integrates seamlessly with other microservices like Project Management and Inventory Control to provide unified access control across the HaaS ecosystem.

Use this microservice to register new users, authenticate existing ones, and maintain a consistent and secure user experience across all system modules.`}
        </p>
      </div>
    </div>
  );
};

export default AboutComponent;
