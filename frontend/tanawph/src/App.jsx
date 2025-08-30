import { useState } from 'react';

import HomePage from '../src/pages/HomePage'
import GovernmentPage from './pages/GovernmentPage';
import GovernmentHelpPage from './pages/GovernmentHelpPage';
import FakeNewsAlertsPage from './pages/FakeNewsAlertsPage';
import ElectionInfoPage from './pages/ElectionInfoPage';
import EServicesPage from './pages/EServicesPage'
import MilPage from './pages/MilPage';
import YouthPage from './pages/YouthPage';
import FactCheckPage from './pages/FactCheckPage';
import InfographicsPage from './pages/InfographicsPage';
import InfographicsPosterViewPage from './pages/InfographicsPosterViewPage';
import DownloadPage from './pages/DownloadPage';
import OfficialsPage from './pages/OfficialsPage';
import ProfilePage from './pages/ProfilePage';



import {BrowserRouter, Routes, Route} from 'react-router';
import AlertViewPage from './pages/AlertViewPage';
import MilGamesPage from './pages/MilGamesPage';
import MilGamesViewPage from './pages/MilGamesViewPage';



const App = () => {


  return (

    <div className="relative h-full w-full">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/government' element={<GovernmentPage />} />
            <Route path='government/officials' element={<OfficialsPage/>}/>
              <Route path='government/officials/:id' element={<ProfilePage/>}/>
              <Route path='/government/services/government-help' element={<GovernmentHelpPage/>}/>
              <Route path='/government/fake-news-alerts' element={<FakeNewsAlertsPage/>}/>
                <Route path='government/fake-news-alerts/:id' element={<AlertViewPage/>}/>
              <Route path='/government/services/eservices' element={<EServicesPage/>}/>
              <Route path='/government/services/election-info' element={<ElectionInfoPage/>}/>
          <Route path='/mil' element={<MilPage />} />
            <Route path='/mil/games' element={<MilGamesPage/>}/>
              <Route path='mil/games/:id' element={<MilGamesViewPage/>}/>
            <Route path='/mil/infographics' element={<InfographicsPage/>}/>
              <Route path='mil/infographics/view/:id' element={<InfographicsPosterViewPage/>} />
          <Route path='/fact-check' element={<FactCheckPage />} />
          <Route path='/youth' element={<YouthPage />} />
          <Route path='/download/:imageName' element={<DownloadPage/>}/>
        </Routes>  
    
    </div>

         
  )
}

export default App
