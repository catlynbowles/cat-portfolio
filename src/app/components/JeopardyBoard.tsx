"use client";
import React, { useState } from "react";
import { aboutMeData } from "../data/aboutMeData";
import { jobExperienceData } from "../data/jobExperiencedata";
import Modal from "./Modal";
import { contactMeData } from "../data/contactMeData";

const JeopardyBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleTileClick = (detail: string) => {
    console.log(detail);
    setModalContent(detail);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 grid grid-rows-5 grid-cols-4 gap-4 text-center">
      {/* Column Headers */}
      <div className="bg-blue-800 text-white font-bold text-xl py-4 border border-white">
        About Me
      </div>
      <div className="bg-blue-800 text-white font-bold text-xl py-4 border border-white">
        Job Experience
      </div>
      <div className="bg-blue-800 text-white font-bold text-xl py-4 border border-white">
        Projects
      </div>
      <div className="bg-blue-800 text-white font-bold text-xl py-4 border border-white">
        Contact
      </div>

      {/* About Me Tiles */}
      {aboutMeData.map((tile, index) => (
        <div
          key={index}
          className="bg-blue-900 text-yellow-400 text-lg py-6 border border-white hover:scale-105 transition-transform cursor-pointer"
          onClick={() => handleTileClick(tile.detail)}
        >
          {tile.value}
        </div>
      ))}

      {/* Job Experience Tiles */}
      {jobExperienceData.map((tile, index) => (
        <div
          key={index}
          className="bg-blue-900 text-yellow-400 text-lg py-6 border border-white hover:scale-105 transition-transform cursor-pointer"
          onClick={() => handleTileClick(tile.detail)}
        >
          {tile.value}
        </div>
      ))}

      {contactMeData.map((tile, index) => (
        <div
          key={index}
          className="bg-blue-900 text-yellow-400 text-lg py-6 border border-white hover:scale-105 transition-transform cursor-pointer"
          onClick={() => handleTileClick(tile.detail)}
        >
          {tile.value}
        </div>
      ))}

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={modalContent}
      />
    </div>
  );
};

export default JeopardyBoard;
