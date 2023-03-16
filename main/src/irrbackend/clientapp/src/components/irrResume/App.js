import './index.css';
import {useEffect} from 'react';
import ExperienceInfo from './components/ExperienceInfo';
import * as UserInfo from './components/UserInfo';
import SkillInfo from './components/SkillsInfo';
import OtherInfo from './components/OtherInfo';

function IrrResume() {
  useEffect(() => {window.scrollTo(0, 0);},[]);
  return (
    <div className='initial'><div className="transition-in">
       <div id="pagefill-small"></div>
       <div id="greybox" className="w-50 mx-auto">
        <p>This resume is an imported project located here ____</p>
        <p>It is a JSON schema wrapped in a react component that can be directly integrated into a webpage or printed</p>

       </div>
       <div className="resume">
        <header>
          <UserInfo.default />
        </header>
        <div class="flex-container">
          <div id="leftBox">
            <UserInfo.ProfileWrapper />
            <SkillInfo />
            <OtherInfo />
          </div>
          <div id="mainBox">
            <ExperienceInfo />
          </div>
        </div> 
      </div>
    </div></div>
   
  );
}

export default IrrResume;
