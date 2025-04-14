"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { aboutMeData } from "../data/aboutMeData";
import { projectsData } from "../data/projectsData";
import { contactMeData } from "../data/contactMeData";

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

  const renderTile = (
    tile: { value: string; detail: string },
    index: number,
    category: string
  ) => {
    const tileKey = `${category}-${index}`; // Unique key for each tile
    const isOpened = openedTiles.has(tileKey); // Check if tile has been opened

    return (
      <div
        key={tileKey}
        className={`bg-blue-900 text-yellow-400 text-lg py-6 border border-white hover:scale-105 transition-transform cursor-pointer ${
          isOpened ? "bg-gray-500 text-gray-300" : ""
        }`} // Change style if tile is opened
        onClick={() => handleTileClick(tile.detail, tileKey, tile.value)}
      >
        {tile.value}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 grid grid-cols-4 gap-4 text-center">
      <div className="text-center text-2xl font-bold mb-6">
        Total Money: <span className="text-green-500">${totalMoney}</span>
      </div>

      {/* About Me Column */}
      <div>
        <div className="bg-blue-800 text-white font-bold text-xl py-4 border border-white">
          About Me
        </div>
        {aboutMeData.map((tile, index) => renderTile(tile, index, "aboutMe"))}
      </div>

      {/* Projects Column */}
      <div>
        <div className="bg-blue-800 text-white font-bold text-xl py-4 border border-white">
          Projects
        </div>
        {projectsData.map((tile, index) => renderTile(tile, index, "projects"))}
      </div>

      {/* Contact Column */}
      <div>
        <div className="bg-blue-800 text-white font-bold text-xl py-4 border border-white">
          Contact
        </div>
        {contactMeData.map((tile, index) => renderTile(tile, index, "contact"))}
      </div>

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
  );
};

export default JeopardyBoard;
