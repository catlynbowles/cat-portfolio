"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { aboutMeData } from "../data/aboutMeData";
import { projectsData } from "../data/projectsData";
import { contactMeData } from "../data/contactMeData";
import Column, { Detail } from "./Column";
import { refsData } from "../data/refsData";
import PanelistBooth from "./PanelistBooth";

const JeopardyBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<Detail>("");
  const [openedTiles, setOpenedTiles] = useState<Set<string>>(new Set()); // Tracks opened tiles
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false); // Tracks if the "Thank You" modal is open
  const [totalMoney, setTotalMoney] = useState(0); // Tracks total money accrued

  const totalTiles =
    aboutMeData.length + projectsData.length + contactMeData.length;

  const handleTileClick = (detail: Detail, tileKey: string, value: string) => {
    console.log(detail);
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
    <div className="flex flex-col md:flex-row items-center gap-10">
      <PanelistBooth amount={totalMoney} />
      <div className="grid grid-cols-1 gap-6 sm:gap-0 md:grid-cols-2 lg:grid-cols-4 text-center">
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

        {/* Refs Column */}
        <Column
          data={refsData}
          header="Refs"
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
    </div>
  );
};

export default JeopardyBoard;
