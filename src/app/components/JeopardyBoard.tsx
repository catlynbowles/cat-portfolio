"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { aboutMeData } from "../data/aboutMeData";
import { projectsData } from "../data/projectsData";
import { contactMeData } from "../data/contactMeData";
import Column from "./Column";

const JeopardyBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [openedTiles, setOpenedTiles] = useState<Set<string>>(new Set()); // Tracks opened tiles
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false); // Tracks if the "Thank You" modal is open
  const [totalMoney, setTotalMoney] = useState(0); // Tracks total money accrued

  const totalTiles =
    aboutMeData.length + projectsData.length + contactMeData.length;

  const handleTileClick = (detail: string, tileKey: string, value: string) => {
    setModalContent(detail);
    setIsModalOpen(true);

    // Add tile value to total money
    const numericValue = parseInt(value.replace("$", ""), 10); // Convert "$100" to 100
    setTotalMoney((prev) => prev + numericValue);

    setOpenedTiles((prev) => {
      const updatedSet = new Set(prev).add(tileKey); // Mark tile as opened
      if (updatedSet.size === totalTiles) {
        // If all tiles are opened, show the "Thank You" modal
        setIsThankYouModalOpen(true);
      }
      return updatedSet;
    });
  };

  return (
    <>
      <div className="text-center text-2xl font-bold mb-6">
        Total Money: <span className="text-green-500">${totalMoney}</span>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:gap-0 sm:grid-cols-3 text-center">
        {/* About Me Column */}
        <Column
          data={aboutMeData}
          header="About Me"
          handleTileClick={handleTileClick}
          openedTiles={openedTiles}
        />

        {/* Projects Column */}
        <Column
          data={projectsData}
          header="Projects"
          handleTileClick={handleTileClick}
          openedTiles={openedTiles}
        />

        {/* Contact Column */}
        <Column
          data={contactMeData}
          header="Contact"
          handleTileClick={handleTileClick}
          openedTiles={openedTiles}
        />

        {/* Thank You Modal */}
        <Modal
          isOpen={isThankYouModalOpen}
          onClose={() => setIsThankYouModalOpen(false)}
          content={"thank you for visiting !"}
        />

        {/* Modal for Tile Content */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          content={modalContent}
        />
      </div>
    </>
  );
};

export default JeopardyBoard;
