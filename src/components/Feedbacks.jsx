import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import "./modal.css";

// Reusable Modal Component
const Modal = ({ title, points, onClose }) => {
  useEffect(() => {
    // Prevent scrolling when the modal is open
    document.body.style.overflow = 'hidden';

    // Event listener to close modal on outside click
    const handleOutsideClick = (e) => {
      const isModalTrigger = e.target.classList.contains("modal-trigger");

      if (!isModalTrigger && !e.target.closest(".bg-custom-modal")) {
        onClose();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    // Remove event listener on component unmount
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-custom-modal p-8 rounded-2xl md:w-[50%] w-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">{title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &#10006;
          </button>
        </div>
        <ul>
          {points.map((point, index) => (
            <li key={index} className="mb-2" dangerouslySetInnerHTML={{ __html: point }} />
          ))}
        </ul>
      </div>
    </div>
  );
};


const Feedbacks = () => {
  const [modalInfo, setModalInfo] = useState(null);

  const openModal = (title, points) => {
    setModalInfo({ title, points });
  };

  const closeModal = () => {
    setModalInfo(null);
  };

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          {/* <p className={styles.sectionSubText}>Wait...There's more to me</p> */}
          <h3 className={styles.sectionHeadTextH3}>Wait...There's more to me</h3>
        </motion.div>
      </div>

      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>

        {/* Three Boxes */}
        <div
          className="bg-black-200 p-6 rounded-2xl xs:w-[320px] w-full cursor-pointer modal-trigger"
          onClick={() => openModal("Publications",[
            "All papers have been provided with hyperlink.",
            "🔹 <a href='https://link.springer.com/article/10.1007/s11042-023-14823-1'>Identification of traffic signs for advanced driving assistance systems in smart cities using deep learning</a>",
            "🔹 <a href='https://link.springer.com/chapter/10.1007/978-981-19-7874-6_3'>Estimating the Intervals Between Mount Etna Eruptions</a>",
            "🔹 <a href='https://ieeexplore.ieee.org/document/10403574'>A Novel Approach to Optimise Credit Risk Prediction with Enhanced SVM and Hinge Loss</a>",
            "🔹 <a href='https://elcvia.cvc.uab.cat/article/view/1660'>Image-based mangifera indica leaf disease detection using transfer learning for deep learning methods</a>",
          ])}
        >
          Publications
        </div>


        <div
          className="bg-black-200 p-6 rounded-2xl xs:w-[320px] w-full cursor-pointer modal-trigger"
          onClick={() => openModal("Academics & Achievements", [
            "🔹 Awarded the “Best Freshman Team” award at the DEVSPACE 2019 hackathon.", 
            "🔹 Honored with the prestigious C.V. Raman Research Award for my exceptional research achievements and paper out of the 350 nominated papers",
            "🔹 Honoured with the “Rotaractor of the Month Award” for my initiative of conducting teaching sessions for underprivileged students in government schools.",
            "🔹 Selected as an open-source contributor for GSSOC, 21 out of 3000 applicants.",
            "🔹 Ranked 12th out of 2000 candidates in the Techgig Gladiators coding contest.",
            "🔹 Awarded the “Move the Dot” award during my internship at Deloitte in recognition of my initiative and dedication."])}
        >
          Achievements
        </div>

        <div
          className="bg-black-200 p-6 rounded-2xl xs:w-[320px] w-full cursor-pointer modal-trigger"
          onClick={() => openModal("Extra-Curriculars", [
            "🔹 Keen interest in Image-processing and computer vision.", 
            "🔹 Inclination Towards OpenSource, Competitive Coding, DSA, and Research.", 
            "🔹 Learning new things is my dose of dopamine.",
            "🔹 Hobbies include Gym, Nature, Formula 1❤️ etc."])}
        >
          Extra-Curriculars
        </div>

        {/* Modals */}
        {modalInfo && (
          <Modal title={modalInfo.title} points={modalInfo.points} onClose={closeModal} />
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
