/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ViewMode } from './types/learning';
import { materialsData } from './data/materialsData';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomeView } from './components/home/HomeView';
import { MateriView } from './components/materi/MateriView';
import { LatihanView } from './components/latihan/LatihanView';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [activeMaterialId, setActiveMaterialId] = useState<number>(1);
  const [activeSubtopicId, setActiveSubtopicId] = useState<string | undefined>(undefined);

  const handleNavigate = (view: ViewMode) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectMaterial = (materialId: number, subtopicId?: string) => {
    setActiveMaterialId(materialId);
    setActiveSubtopicId(subtopicId);
    setCurrentView('materi');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToQuiz = () => {
    setCurrentView('latihan');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#0b081e] text-slate-100 flex flex-col antialiased selection:bg-purple-600/40 selection:text-purple-200 overflow-x-hidden">
      {/* Dynamic Purple Ambient Glow Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -left-32 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 -right-32 w-96 sm:w-[550px] h-96 sm:h-[550px] bg-fuchsia-600/15 rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 left-1/4 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-indigo-600/15 rounded-full blur-[150px]" />
        {/* Subtle glass grid pattern */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(rgba(168,85,247,0.2)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* Main Navbar */}
      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <div className="relative z-10 flex-1">
        {currentView === 'home' && (
          <HomeView
            materials={materialsData}
            onSelectMaterial={handleSelectMaterial}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'materi' && (
          <MateriView
            materials={materialsData}
            initialMaterialId={activeMaterialId}
            initialSubtopicId={activeSubtopicId}
            onNavigateToQuiz={handleNavigateToQuiz}
          />
        )}

        {currentView === 'latihan' && (
          <LatihanView
            materials={materialsData}
            onNavigateToMaterial={handleSelectMaterial}
            onNavigateHome={handleNavigateHome}
          />
        )}
      </div>

      {/* Persistent Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
